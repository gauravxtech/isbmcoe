
-- Create website_pages table for managing static pages
CREATE TABLE public.website_pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
  featured_image_url TEXT,
  page_type TEXT DEFAULT 'static' CHECK (page_type IN ('static', 'landing', 'department')),
  display_order INTEGER DEFAULT 0,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Create announcements table for urgent notifications
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT DEFAULT 'general' CHECK (type IN ('general', 'urgent', 'academic', 'admission', 'placement')),
  priority INTEGER DEFAULT 1 CHECK (priority BETWEEN 1 AND 5),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'expired')),
  target_audience TEXT DEFAULT 'all' CHECK (target_audience IN ('all', 'students', 'faculty', 'staff', 'parents')),
  start_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  end_date TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Create media_library table for file management
CREATE TABLE public.media_library (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  alt_text TEXT,
  caption TEXT,
  folder TEXT DEFAULT 'general',
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Create website_settings table for global settings
CREATE TABLE public.website_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value TEXT,
  setting_type TEXT DEFAULT 'text' CHECK (setting_type IN ('text', 'number', 'boolean', 'json', 'url', 'email')),
  description TEXT,
  category TEXT DEFAULT 'general',
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Enable RLS on all tables
ALTER TABLE public.website_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for website_pages
CREATE POLICY "Public can view published pages" ON public.website_pages
  FOR SELECT USING (status = 'published');

CREATE POLICY "Admins can manage pages" ON public.website_pages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

-- Create RLS policies for announcements  
CREATE POLICY "Public can view active announcements" ON public.announcements
  FOR SELECT USING (status = 'active' AND (end_date IS NULL OR end_date > now()));

CREATE POLICY "Admins can manage announcements" ON public.announcements
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

-- Create RLS policies for media_library
CREATE POLICY "Public can view media" ON public.media_library
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage media" ON public.media_library
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

-- Create RLS policies for website_settings
CREATE POLICY "Public can view public settings" ON public.website_settings
  FOR SELECT USING (is_public = true);

CREATE POLICY "Admins can manage settings" ON public.website_settings
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

-- Create storage bucket for website files
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-files',
  'website-files', 
  true,
  52428800, -- 50MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml', 'application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
);

-- Create storage policies
CREATE POLICY "Public can view website files" ON storage.objects
  FOR SELECT USING (bucket_id = 'website-files');

CREATE POLICY "Admins can manage website files" ON storage.objects
  FOR ALL USING (
    bucket_id = 'website-files' AND
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

-- Insert default website settings
INSERT INTO public.website_settings (setting_key, setting_value, setting_type, description, category, is_public) VALUES
('site_title', 'ISBM College of Engineering', 'text', 'Main website title', 'general', true),
('site_description', 'Premier Engineering Institution in Pune', 'text', 'Website meta description', 'general', true),
('contact_email', 'info@isbmcoe.edu.in', 'email', 'Primary contact email', 'contact', true),
('contact_phone', '+91-20-1234567', 'text', 'Primary contact phone', 'contact', true),
('address', 'ISBM College Campus, Pune, Maharashtra', 'text', 'College address', 'contact', true),
('social_facebook', 'https://facebook.com/isbmcoe', 'url', 'Facebook page URL', 'social', true),
('social_twitter', 'https://twitter.com/isbmcoe', 'url', 'Twitter profile URL', 'social', true),
('social_linkedin', 'https://linkedin.com/school/isbmcoe', 'url', 'LinkedIn page URL', 'social', true),
('social_youtube', 'https://youtube.com/@isbmcoe', 'url', 'YouTube channel URL', 'social', true),
('admission_status', 'open', 'text', 'Current admission status', 'admission', true),
('academic_year', '2024-25', 'text', 'Current academic year', 'academic', true);

-- Create indexes for better performance
CREATE INDEX idx_website_pages_slug ON public.website_pages(slug);
CREATE INDEX idx_website_pages_status ON public.website_pages(status);
CREATE INDEX idx_announcements_status ON public.announcements(status);
CREATE INDEX idx_announcements_dates ON public.announcements(start_date, end_date);
CREATE INDEX idx_media_library_folder ON public.media_library(folder);
CREATE INDEX idx_website_settings_key ON public.website_settings(setting_key);
