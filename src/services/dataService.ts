
import { supabase } from '@/integrations/supabase/client';

export interface NewsEvent {
  id: number;
  type: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  image_url: string;
  link_url?: string;
  is_active: boolean;
  order_index: number;
}

export interface MarqueeText {
  id: string;
  text: string;
  is_active: boolean;
  order_index: number;
}

export const dataService = {
  // News & Events
  async getNewsEvents(): Promise<NewsEvent[]> {
    try {
      const { data, error } = await supabase
        .from('news_events')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) {
        console.error('Error fetching news events:', error);
        return this.getFallbackNewsEvents();
      }

      return data?.map(item => ({
        id: parseInt(item.id),
        type: item.type || 'News',
        title: item.title,
        excerpt: item.excerpt || item.content?.substring(0, 150) + '...',
        date: item.event_date || item.created_at,
        image: item.image_url || this.getDefaultImage(item.type),
        category: item.category || 'General'
      })) || this.getFallbackNewsEvents();
    } catch (error) {
      console.error('Error loading news and events:', error);
      return this.getFallbackNewsEvents();
    }
  },

  // Banners
  async getBanners(): Promise<Banner[]> {
    try {
      const { data, error } = await supabase
        .from('banners')
        .select('*')
        .eq('status', 'active')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching banners:', error);
        return [];
      }

      return data?.map(item => ({
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        image_url: item.image_url,
        link_url: item.cta_link,
        is_active: item.status === 'active',
        order_index: item.display_order
      })) || [];
    } catch (error) {
      console.error('Error loading banners:', error);
      return [];
    }
  },

  // Marquee Texts
  async getMarqueeTexts(): Promise<MarqueeText[]> {
    try {
      const { data, error } = await supabase
        .from('marquee_texts')
        .select('*')
        .eq('status', 'active')
        .order('priority', { ascending: true });

      if (error) {
        console.error('Error fetching marquee texts:', error);
        return [];
      }

      return data?.map(item => ({
        id: item.id,
        text: item.text,
        is_active: item.status === 'active',
        order_index: item.priority
      })) || [];
    } catch (error) {
      console.error('Error loading marquee texts:', error);
      return [];
    }
  },

  // Fallback data
  getFallbackNewsEvents(): NewsEvent[] {
    return [
      {
        id: 1,
        type: "Achievement",
        title: "ISBM College Of Engineering Pune Received B++ Accreditation By NAAC",
        excerpt: "Our institution has achieved NAAC B++ grade, recognizing our commitment to quality education and infrastructure...",
        date: "2024-03-15",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
        category: "Accreditation"
      },
      {
        id: 2,
        type: "Event",
        title: "International Conference on Multidisciplinary Emerging Trends in Engineering and Technology (ICMETET 2024)",
        excerpt: "Join researchers and industry experts for cutting-edge discussions on emerging technologies and innovations...",
        date: "2024-06-20",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
        category: "Conference"
      },
      {
        id: 3,
        type: "Recruitment",
        title: "Faculty Appointments - Professor, Associate Professor, Assistant Professor",
        excerpt: "ISBM COE invites applications for various faculty positions. Interested candidates should send resume to Careercoe@isbm.ac.in...",
        date: "2024-05-10",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
        category: "Recruitment"
      },
      {
        id: 4,
        type: "Admission",
        title: "Admissions Open for First Year & Direct Second Year Engineering",
        excerpt: "Apply now for various engineering programs. Direct second year admissions also available for diploma holders...",
        date: "2024-06-01",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
        category: "Admission"
      },
      {
        id: 5,
        type: "Achievement",
        title: "Outstanding Placement Results - 16 Lakhs Highest Package",
        excerpt: "Record placement achievements with highest package of ₹16 lakhs and 75% overall placement rate...",
        date: "2024-04-25",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop",
        category: "Placement"
      },
      {
        id: 6,
        type: "Infrastructure",
        title: "Extended Library and Laboratory Access - Pioneer in Pune",
        excerpt: "ISBM COE continues to be the pioneer in providing extended library hours and laboratory access in Pune...",
        date: "2024-07-15",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
        category: "Infrastructure"
      }
    ];
  },

  getDefaultImage(type?: string): string {
    const defaultImages: { [key: string]: string } = {
      'Achievement': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop',
      'Event': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
      'Recruitment': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      'Admission': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
      'Placement': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=250&fit=crop',
      'Infrastructure': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop'
    };
    return defaultImages[type || 'Achievement'] || defaultImages['Achievement'];
  }
};
