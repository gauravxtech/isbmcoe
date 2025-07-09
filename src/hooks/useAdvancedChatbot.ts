import { useState, useCallback, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
  hasLearned?: boolean;
}

interface ChatbotOptions {
  enableLearning?: boolean;
  enableWebData?: boolean;
  maxMessages?: number;
}

export const useAdvancedChatbot = (options: ChatbotOptions = {}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const { toast } = useToast();

  const {
    enableLearning = true,
    enableWebData = true,
    maxMessages = 50
  } = options;

  // Load conversation history
  useEffect(() => {
    loadConversationHistory();
  }, [sessionId]);

  const loadConversationHistory = async () => {
    try {
      const { data, error } = await supabase
        .from('chatbot_conversations')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true })
        .limit(10);

      if (error) throw error;

      if (data && data.length > 0) {
        const historicalMessages: Message[] = [];
        data.forEach(conv => {
          historicalMessages.push({
            id: `user_${conv.id}`,
            text: conv.user_message,
            sender: 'user',
            timestamp: new Date(conv.created_at)
          });
          historicalMessages.push({
            id: `bot_${conv.id}`,
            text: conv.bot_response,
            sender: 'bot',
            timestamp: new Date(conv.created_at)
          });
        });
        setMessages(historicalMessages);
      }
    } catch (error) {
      console.error('Error loading conversation history:', error);
    }
  };

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: 'typing',
      text: 'AI is thinking...',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    };

    setMessages(prev => [...prev, typingMessage]);

    try {
      // Determine if web data is needed based on message content
      const needsWebData = enableWebData && (
        text.toLowerCase().includes('latest') ||
        text.toLowerCase().includes('recent') ||
        text.toLowerCase().includes('current') ||
        text.toLowerCase().includes('update') ||
        text.toLowerCase().includes('news')
      );

      const response = await supabase.functions.invoke('ai-chatbot', {
        body: {
          message: text,
          sessionId,
          needsWebData
        }
      });

      if (response.error) throw response.error;

      const { response: botResponse, hasLearned } = response.data;

      // Remove typing indicator and add bot response
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => msg.id !== 'typing');
        const botMessage: Message = {
          id: `bot_${Date.now()}`,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date(),
          hasLearned: hasLearned && enableLearning
        };
        return [...withoutTyping, botMessage];
      });

      // Show learning notification
      if (hasLearned && enableLearning) {
        toast({
          title: "🧠 Learning Complete",
          description: "I've learned something new from our conversation!",
          duration: 3000,
        });
      }

    } catch (error) {
      console.error('Error sending message:', error);
      
      // Remove typing indicator and show error
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => msg.id !== 'typing');
        const errorMessage: Message = {
          id: `error_${Date.now()}`,
          text: 'I apologize, but I encountered an error. Please try asking your question again.',
          sender: 'bot',
          timestamp: new Date()
        };
        return [...withoutTyping, errorMessage];
      });

      toast({
        title: "Connection Error",
        description: "Unable to process your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }

    // Trim messages if too many
    setMessages(prev => {
      if (prev.length > maxMessages) {
        return prev.slice(-maxMessages);
      }
      return prev;
    });
  }, [sessionId, isLoading, enableWebData, enableLearning, maxMessages, toast]);

  const giveFeedback = async (messageId: string, rating: number) => {
    try {
      // Find the conversation ID from the message
      const messageIndex = messages.findIndex(msg => msg.id === messageId);
      if (messageIndex === -1) return;

      // Update feedback in database
      await supabase
        .from('chatbot_conversations')
        .update({ user_feedback: rating })
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true })
        .limit(1)
        .single();

      toast({
        title: "Feedback Recorded",
        description: "Thank you for helping me improve!",
        duration: 2000,
      });

    } catch (error) {
      console.error('Error giving feedback:', error);
    }
  };

  const clearConversation = useCallback(() => {
    setMessages([]);
  }, []);

  const exportConversation = useCallback(() => {
    const conversationText = messages
      .map(msg => `[${msg.timestamp.toLocaleTimeString()}] ${msg.sender.toUpperCase()}: ${msg.text}`)
      .join('\n');
    
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chatbot-conversation-${sessionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [messages, sessionId]);

  return {
    messages,
    isLoading,
    sendMessage,
    giveFeedback,
    clearConversation,
    exportConversation,
    sessionId
  };
};