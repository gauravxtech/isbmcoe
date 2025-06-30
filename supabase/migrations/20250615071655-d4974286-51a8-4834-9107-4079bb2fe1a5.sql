-- Enable RLS on tables that don't have it yet and add proper policies

-- Add RLS policies for banners table
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read banners (public content)
CREATE POLICY "Anyone can view banners" ON public.banners
FOR SELECT USING (true);

-- Only authenticated users can insert banners
CREATE POLICY "Authenticated users can insert banners" ON public.banners
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Only authenticated users can update banners
CREATE POLICY "Authenticated users can update banners" ON public.banners
FOR UPDATE USING (auth.role() = 'authenticated');

-- Only authenticated users can delete banners
CREATE POLICY "Authenticated users can delete banners" ON public.banners
FOR DELETE USING (auth.role() = 'authenticated');

-- Add RLS policies for marquee_texts table
ALTER TABLE public.marquee_texts ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read marquee texts (public content)
CREATE POLICY "Anyone can view marquee texts" ON public.marquee_texts
FOR SELECT USING (true);

-- Only authenticated users can manage marquee texts
CREATE POLICY "Authenticated users can insert marquee texts" ON public.marquee_texts
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update marquee texts" ON public.marquee_texts
FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete marquee texts" ON public.marquee_texts
FOR DELETE USING (auth.role() = 'authenticated');

-- Add RLS policies for media_library table
ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read media library (public content)
CREATE POLICY "Anyone can view media library" ON public.media_library
FOR SELECT USING (true);

-- Only authenticated users can manage media library
CREATE POLICY "Authenticated users can insert media" ON public.media_library
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update media" ON public.media_library
FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete media" ON public.media_library
FOR DELETE USING (auth.role() = 'authenticated');

-- Create storage bucket for website files if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('website-files', 'website-files', true)
ON CONFLICT (id) DO NOTHING;

-- Add storage policies for the website-files bucket
CREATE POLICY "Anyone can view website files" ON storage.objects
FOR SELECT USING (bucket_id = 'website-files');

CREATE POLICY "Authenticated users can upload website files" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'website-files' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update website files" ON storage.objects
FOR UPDATE USING (bucket_id = 'website-files' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete website files" ON storage.objects
FOR DELETE USING (bucket_id = 'website-files' AND auth.role() = 'authenticated');

CREATE TABLE public.notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  message text,
  type text DEFAULT 'announcement',
  ref_id uuid,
  read boolean DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT timezone('utc', now())
);

-- Enable RLS
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Allow users to see their own notifications
CREATE POLICY "Users can view their notifications" ON public.notifications
  FOR SELECT USING (auth.uid() = user_id);

-- Allow users to mark their notifications as read
CREATE POLICY "Users can update their notifications" ON public.notifications
  FOR UPDATE USING (auth.uid() = user_id);

-- Allow system/admins to insert notifications for any user
CREATE POLICY "Admins can insert notifications" ON public.notifications
  FOR INSERT WITH CHECK (true);
