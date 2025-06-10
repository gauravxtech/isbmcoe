
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image_url: string;
  cta_text: string;
  cta_link?: string;
  highlight_text: string;
  status: string;
  display_order: number;
}

export interface NewsEvent {
  id: string;
  type: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  status: string;
  featured: boolean;
  event_date: string;
  created_at: string;
}

export interface MarqueeText {
  id: string;
  text: string;
  link?: string;
  type: string;
  priority: number;
  status: string;
}

export const useContent = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [marqueeTexts, setMarqueeTexts] = useState<MarqueeText[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setLoading(true);
      
      // Fetch banners
      const { data: bannersData, error: bannersError } = await supabase
        .from('banners')
        .select('*')
        .eq('status', 'active')
        .order('display_order', { ascending: true });

      if (bannersError) {
        console.error('Error fetching banners:', bannersError);
      }

      // Fetch news/events
      const { data: newsData, error: newsError } = await supabase
        .from('news_events')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(6);

      if (newsError) {
        console.error('Error fetching news/events:', newsError);
      }

      // Fetch marquee texts
      const { data: marqueeData, error: marqueeError } = await supabase
        .from('marquee_texts')
        .select('*')
        .eq('status', 'active')
        .order('priority', { ascending: true });

      if (marqueeError) {
        console.error('Error fetching marquee texts:', marqueeError);
      }

      setBanners(bannersData || []);
      setNewsEvents(newsData || []);
      setMarqueeTexts(marqueeData || []);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    banners,
    newsEvents,
    marqueeTexts,
    loading,
    refetch: fetchContent
  };
};
