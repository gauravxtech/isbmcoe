-- Create table for chatbot conversations
CREATE TABLE public.chatbot_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  context_data JSONB,
  user_feedback INTEGER CHECK (user_feedback >= 1 AND user_feedback <= 5),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for chatbot knowledge base (learning)
CREATE TABLE public.chatbot_knowledge (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  topic TEXT NOT NULL,
  content TEXT NOT NULL,
  source_url TEXT,
  confidence_score FLOAT DEFAULT 0.5,
  usage_count INTEGER DEFAULT 0,
  last_used_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for web scraping cache
CREATE TABLE public.web_scraping_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  title TEXT,
  scraped_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '24 hours'),
  hit_count INTEGER DEFAULT 0
);

-- Enable RLS on all tables
ALTER TABLE public.chatbot_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chatbot_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.web_scraping_cache ENABLE ROW LEVEL SECURITY;

-- Create policies for chatbot_conversations
CREATE POLICY "Anyone can insert conversations" 
ON public.chatbot_conversations 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view conversations" 
ON public.chatbot_conversations 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can update conversations" 
ON public.chatbot_conversations 
FOR UPDATE 
USING (true);

-- Create policies for chatbot_knowledge
CREATE POLICY "Anyone can read knowledge" 
ON public.chatbot_knowledge 
FOR SELECT 
USING (true);

CREATE POLICY "System can manage knowledge" 
ON public.chatbot_knowledge 
FOR ALL 
USING (true);

-- Create policies for web_scraping_cache
CREATE POLICY "Anyone can read cache" 
ON public.web_scraping_cache 
FOR SELECT 
USING (true);

CREATE POLICY "System can manage cache" 
ON public.web_scraping_cache 
FOR ALL 
USING (true);

-- Create indexes for better performance
CREATE INDEX idx_conversations_session_id ON public.chatbot_conversations(session_id);
CREATE INDEX idx_conversations_created_at ON public.chatbot_conversations(created_at);
CREATE INDEX idx_knowledge_topic ON public.chatbot_knowledge(topic);
CREATE INDEX idx_knowledge_usage_count ON public.chatbot_knowledge(usage_count DESC);
CREATE INDEX idx_cache_url ON public.web_scraping_cache(url);
CREATE INDEX idx_cache_expires_at ON public.web_scraping_cache(expires_at);

-- Create function to update timestamps
CREATE TRIGGER update_chatbot_conversations_updated_at
  BEFORE UPDATE ON public.chatbot_conversations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_chatbot_knowledge_updated_at
  BEFORE UPDATE ON public.chatbot_knowledge
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();