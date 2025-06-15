
-- Fix the infinite recursion in RLS policies - Phase 1: Clean up existing policies
-- Drop ALL existing policies on all tables to start fresh

-- Drop profiles policies
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Drop banners policies
DROP POLICY IF EXISTS "Public read access for banners" ON public.banners;
DROP POLICY IF EXISTS "Admin write access for banners" ON public.banners;
DROP POLICY IF EXISTS "Anyone can view active banners" ON public.banners;
DROP POLICY IF EXISTS "Admins can insert banners" ON public.banners;
DROP POLICY IF EXISTS "Admins can update banners" ON public.banners;
DROP POLICY IF EXISTS "Admins can delete banners" ON public.banners;

-- Drop marquee_texts policies
DROP POLICY IF EXISTS "Public read access for marquee_texts" ON public.marquee_texts;
DROP POLICY IF EXISTS "Admin write access for marquee_texts" ON public.marquee_texts;
DROP POLICY IF EXISTS "Anyone can view active marquee texts" ON public.marquee_texts;
DROP POLICY IF EXISTS "Admins can insert marquee texts" ON public.marquee_texts;
DROP POLICY IF EXISTS "Admins can update marquee texts" ON public.marquee_texts;
DROP POLICY IF EXISTS "Admins can delete marquee texts" ON public.marquee_texts;

-- Drop media_library policies
DROP POLICY IF EXISTS "Public read access for media_library" ON public.media_library;
DROP POLICY IF EXISTS "Admin write access for media_library" ON public.media_library;
DROP POLICY IF EXISTS "Anyone can view media files" ON public.media_library;
DROP POLICY IF EXISTS "Authenticated users can insert media files" ON public.media_library;
DROP POLICY IF EXISTS "Admins can update media files" ON public.media_library;
DROP POLICY IF EXISTS "Admins can delete media files" ON public.media_library;

-- Drop news_events policies
DROP POLICY IF EXISTS "Anyone can view published news_events" ON public.news_events;
DROP POLICY IF EXISTS "Admins can manage news_events" ON public.news_events;

-- Drop announcements policies
DROP POLICY IF EXISTS "Anyone can view active announcements" ON public.announcements;
DROP POLICY IF EXISTS "Admins can manage announcements" ON public.announcements;

-- Drop website_pages policies
DROP POLICY IF EXISTS "Anyone can view published website_pages" ON public.website_pages;
DROP POLICY IF EXISTS "Admins can manage website_pages" ON public.website_pages;

-- Drop website_settings policies
DROP POLICY IF EXISTS "Anyone can view public website_settings" ON public.website_settings;
DROP POLICY IF EXISTS "Admins can manage website_settings" ON public.website_settings;

-- Drop storage policies
DROP POLICY IF EXISTS "Anyone can view files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload files" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own files" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete files" ON storage.objects;

-- Create or replace security definer functions
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT COALESCE(role, 'student') FROM public.profiles WHERE id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() 
    AND role IN ('admin', 'super-admin', 'principal', 'hod')
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Create storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-files', 
  'website-files', 
  true, 
  10485760,
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
) ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;
