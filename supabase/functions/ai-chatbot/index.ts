import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, sessionId, needsWebData } = await req.json();
    console.log('Received chatbot request:', { message, sessionId, needsWebData });

    // Get conversation history for context
    const { data: conversationHistory } = await supabase
      .from('chatbot_conversations')
      .select('user_message, bot_response')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .limit(10);

    // Get relevant knowledge from database
    const { data: relevantKnowledge } = await supabase
      .from('chatbot_knowledge')
      .select('*')
      .textSearch('content', message.split(' ').join(' | '))
      .order('confidence_score', { ascending: false })
      .limit(5);

    // Fetch web data if needed
    let webContext = '';
    if (needsWebData) {
      try {
        const webResponse = await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/web-scraper`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: message }),
        });
        
        if (webResponse.ok) {
          const webData = await webResponse.json();
          webContext = webData.content || '';
        }
      } catch (error) {
        console.error('Error fetching web data:', error);
      }
    }

    // Build context for AI
    let contextPrompt = `You are an advanced AI assistant for ISBM College of Engineering. You are helpful, knowledgeable, and conversational.

COLLEGE INFORMATION:
- ISBM College of Engineering is a premier engineering institution
- Offers courses in Computer Engineering, AI/ML, AIDS, Mechanical Engineering, ETC, etc.
- Has various departments and facilities
- Active in placements, cultural events, sports, and academic excellence

CONVERSATION HISTORY:
${conversationHistory?.map(conv => `User: ${conv.user_message}\nBot: ${conv.bot_response}`).join('\n') || 'No previous conversation'}

KNOWLEDGE BASE:
${relevantKnowledge?.map(kb => `${kb.topic}: ${kb.content}`).join('\n') || 'No relevant knowledge found'}

${webContext ? `RECENT WEB INFORMATION:\n${webContext}` : ''}

USER QUESTION: ${message}

Please provide a helpful, conversational, and informative response. Be friendly and personable while maintaining professionalism.`;

    // Call Gemini API
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': Deno.env.get('GEMINI_API_KEY'),
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${contextPrompt}\n\nUser: ${message}`
              }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 150,
          temperature: 0.7
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const botResponse = data.candidates[0].content.parts[0].text;

    // Store conversation in database
    const { error: insertError } = await supabase
      .from('chatbot_conversations')
      .insert({
        session_id: sessionId,
        user_message: message,
        bot_response: botResponse,
        context_data: {
          used_knowledge: relevantKnowledge?.length || 0,
          used_web_data: !!webContext,
          timestamp: new Date().toISOString()
        }
      });

    if (insertError) {
      console.error('Error storing conversation:', insertError);
    }

    // Update knowledge base usage
    if (relevantKnowledge?.length) {
      for (const kb of relevantKnowledge) {
        await supabase
          .from('chatbot_knowledge')
          .update({
            usage_count: (kb.usage_count || 0) + 1,
            last_used_at: new Date().toISOString()
          })
          .eq('id', kb.id);
      }
    }

    // Learn from conversation - extract key topics and store them
    const topics = extractTopics(message);
    for (const topic of topics) {
      await supabase
        .from('chatbot_knowledge')
        .upsert({
          topic: topic,
          content: `User asked about: ${message}. Response: ${botResponse}`,
          confidence_score: 0.6,
          usage_count: 1,
          last_used_at: new Date().toISOString()
        }, {
          onConflict: 'topic',
          ignoreDuplicates: false
        });
    }

    return new Response(JSON.stringify({
      response: botResponse,
      sessionId: sessionId,
      hasLearned: topics.length > 0
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-chatbot function:', error);
    return new Response(JSON.stringify({
      error: 'I apologize, but I encountered an error processing your request. Please try again.',
      details: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function extractTopics(message: string): string[] {
  const lowerMessage = message.toLowerCase();
  const topics: string[] = [];
  
  // College-related topics
  const collegeTopics = {
    'admission': ['admission', 'apply', 'application', 'join', 'enroll'],
    'courses': ['course', 'program', 'degree', 'study', 'curriculum'],
    'departments': ['department', 'engineering', 'computer', 'mechanical', 'electrical'],
    'fees': ['fee', 'cost', 'payment', 'scholarship', 'financial'],
    'placements': ['placement', 'job', 'career', 'company', 'internship'],
    'facilities': ['facility', 'lab', 'library', 'hostel', 'campus'],
    'faculty': ['teacher', 'professor', 'faculty', 'staff', 'hod'],
    'events': ['event', 'cultural', 'fest', 'competition', 'sports'],
    'location': ['location', 'address', 'where', 'contact', 'phone']
  };

  for (const [topic, keywords] of Object.entries(collegeTopics)) {
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      topics.push(topic);
    }
  }

  return topics;
}