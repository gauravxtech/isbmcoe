
import { supabase } from '@/integrations/supabase/client';

// Banner management
export const bannerService = {
  async getAll() {
    const { data, error } = await supabase
      .from('banners')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return data || [];
  },

  async create(banner: any) {
    const { data, error } = await supabase
      .from('banners')
      .insert([banner])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: any) {
    const { data, error } = await supabase
      .from('banners')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('banners')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// News and Events management
export const newsService = {
  async getAll() {
    const { data, error } = await supabase
      .from('news_events')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async getPublished() {
    const { data, error } = await supabase
      .from('news_events')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async create(item: any) {
    const { data, error } = await supabase
      .from('news_events')
      .insert([item])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: any) {
    const { data, error } = await supabase
      .from('news_events')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('news_events')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Announcements management
export const announcementService = {
  async getAll() {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async getActive() {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .eq('status', 'active')
      .order('priority', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async create(announcement: any) {
    const { data, error } = await supabase
      .from('announcements')
      .insert([announcement])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: any) {
    const { data, error } = await supabase
      .from('announcements')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('announcements')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Marquee text management
export const marqueeService = {
  async getAll() {
    const { data, error } = await supabase
      .from('marquee_texts')
      .select('*')
      .order('priority', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async getActive() {
    const { data, error } = await supabase
      .from('marquee_texts')
      .select('*')
      .eq('status', 'active')
      .order('priority', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async create(marqueeText: any) {
    const { data, error } = await supabase
      .from('marquee_texts')
      .insert([marqueeText])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, updates: any) {
    const { data, error } = await supabase
      .from('marquee_texts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('marquee_texts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// Media library management
export const mediaService = {
  async getAll() {
    const { data, error } = await supabase
      .from('media_library')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async uploadFile(file: File, folder = 'general') {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    // Upload to storage
    const { error: uploadError } = await supabase.storage
      .from('website-files')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('website-files')
      .getPublicUrl(filePath);

    // Save to media library
    const { data, error } = await supabase
      .from('media_library')
      .insert([{
        filename: fileName,
        original_filename: file.name,
        file_url: urlData.publicUrl,
        file_type: file.type.startsWith('image/') ? 'image' : 'document',
        mime_type: file.type,
        file_size: file.size,
        folder
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id: string) {
    // Get file info first
    const { data: mediaFile, error: fetchError } = await supabase
      .from('media_library')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // Delete from storage
    const filePath = mediaFile.file_url.split('/').slice(-2).join('/');
    const { error: storageError } = await supabase.storage
      .from('website-files')
      .remove([filePath]);

    if (storageError) console.error('Storage deletion error:', storageError);

    // Delete from database
    const { error } = await supabase
      .from('media_library')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};

// Website settings management
export const settingsService = {
  async getAll() {
    const { data, error } = await supabase
      .from('website_settings')
      .select('*')
      .order('category', { ascending: true });
    
    if (error) throw error;
    return data || [];
  },

  async getPublic() {
    const { data, error } = await supabase
      .from('website_settings')
      .select('*')
      .eq('is_public', true);
    
    if (error) throw error;
    return data || [];
  },

  async updateSetting(key: string, value: string) {
    const { data, error } = await supabase
      .from('website_settings')
      .upsert([{
        setting_key: key,
        setting_value: value,
        updated_at: new Date().toISOString()
      }], {
        onConflict: 'setting_key'
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};

// User profile management
export const profileService = {
  async getCurrentProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) throw error;
    return data;
  },

  async updateProfile(updates: any) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getAllProfiles() {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  }
};
