
-- Fix the storage policies with correct UUID type casting

-- Drop the existing storage policies first
DROP POLICY IF EXISTS "Anyone can view files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload files" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own files" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete files" ON storage.objects;

-- Create storage policies with correct UUID casting
CREATE POLICY "Anyone can view files" ON storage.objects
  FOR SELECT USING (bucket_id = 'website-files');

CREATE POLICY "Authenticated users can upload files" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'website-files' 
    AND auth.uid() IS NOT NULL
  );

CREATE POLICY "Users can update their own files" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'website-files' 
    AND (owner = auth.uid() OR public.is_admin_user())
  );

CREATE POLICY "Admins can delete files" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'website-files'
    AND (owner = auth.uid() OR public.is_admin_user())
  );

-- Create the table-level policies
-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marquee_texts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_settings ENABLE ROW LEVEL SECURITY;

-- Create new safe policies for profiles table
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create policies for banners (public read, admin write)
CREATE POLICY "Anyone can view active banners" ON public.banners
  FOR SELECT USING (status = 'active' OR public.is_admin_user());

CREATE POLICY "Admins can insert banners" ON public.banners
  FOR INSERT WITH CHECK (public.is_admin_user());

CREATE POLICY "Admins can update banners" ON public.banners
  FOR UPDATE USING (public.is_admin_user());

CREATE POLICY "Admins can delete banners" ON public.banners
  FOR DELETE USING (public.is_admin_user());

-- Create policies for marquee_texts
CREATE POLICY "Anyone can view active marquee texts" ON public.marquee_texts
  FOR SELECT USING (status = 'active' OR public.is_admin_user());

CREATE POLICY "Admins can insert marquee texts" ON public.marquee_texts
  FOR INSERT WITH CHECK (public.is_admin_user());

CREATE POLICY "Admins can update marquee texts" ON public.marquee_texts
  FOR UPDATE USING (public.is_admin_user());

CREATE POLICY "Admins can delete marquee texts" ON public.marquee_texts
  FOR DELETE USING (public.is_admin_user());

-- Create policies for media_library
CREATE POLICY "Anyone can view media files" ON public.media_library
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert media files" ON public.media_library
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can update media files" ON public.media_library
  FOR UPDATE USING (public.is_admin_user());

CREATE POLICY "Admins can delete media files" ON public.media_library
  FOR DELETE USING (public.is_admin_user());

-- Create policies for news_events
CREATE POLICY "Anyone can view published news_events" ON public.news_events
  FOR SELECT USING (status = 'published' OR public.is_admin_user());

CREATE POLICY "Admins can manage news_events" ON public.news_events
  FOR ALL USING (public.is_admin_user());

-- Create policies for announcements
CREATE POLICY "Anyone can view active announcements" ON public.announcements
  FOR SELECT USING (status = 'active' OR public.is_admin_user());

CREATE POLICY "Admins can manage announcements" ON public.announcements
  FOR ALL USING (public.is_admin_user());

-- Create policies for website_pages
CREATE POLICY "Anyone can view published website_pages" ON public.website_pages
  FOR SELECT USING (status = 'published' OR public.is_admin_user());

CREATE POLICY "Admins can manage website_pages" ON public.website_pages
  FOR ALL USING (public.is_admin_user());

-- Create policies for website_settings
CREATE POLICY "Anyone can view public website_settings" ON public.website_settings
  FOR SELECT USING (is_public = true OR public.is_admin_user());

CREATE POLICY "Admins can manage website_settings" ON public.website_settings
  FOR ALL USING (public.is_admin_user());
