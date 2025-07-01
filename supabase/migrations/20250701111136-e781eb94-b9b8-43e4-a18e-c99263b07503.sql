
-- Create courses table that was missing
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,  
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  department TEXT NOT NULL,
  credits INTEGER NOT NULL DEFAULT 3,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add RLS policies for courses
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage courses"
ON public.courses
FOR ALL
USING (is_admin_user())
WITH CHECK (is_admin_user());

CREATE POLICY "Anyone can view active courses"
ON public.courses
FOR SELECT
USING (status = 'active' OR is_admin_user());

-- Add status column to profiles table if it doesn't exist
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active';

-- Create SMTP settings in website_settings (using 'text' type for password)
INSERT INTO public.website_settings (setting_key, setting_value, setting_type, description, category) VALUES
('smtp_host', '', 'text', 'SMTP server hostname', 'email'),
('smtp_port', '587', 'number', 'SMTP server port', 'email'),
('smtp_username', '', 'text', 'SMTP username', 'email'),
('smtp_password', '', 'text', 'SMTP password', 'email'),
('smtp_from_email', 'admin@isbmcoe.org', 'text', 'From email address', 'email'),
('smtp_from_name', 'ISBM College of Engineering', 'text', 'From name', 'email')
ON CONFLICT (setting_key) DO NOTHING;

-- Update trigger for courses
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON public.courses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
