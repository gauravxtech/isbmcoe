
-- Create user profiles table
CREATE TABLE public.profiles (
  id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  role text NOT NULL DEFAULT 'student',
  department text,
  phone text,
  avatar_url text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (id)
);

-- Create content management tables
CREATE TABLE public.banners (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  subtitle text,
  image_url text,
  cta_text text,
  cta_link text,
  highlight_text text,
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  display_order integer DEFAULT 1,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.news_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  type text NOT NULL CHECK (type IN ('news', 'event', 'achievement', 'announcement')),
  title text NOT NULL,
  excerpt text,
  content text,
  image_url text,
  category text NOT NULL,
  status text DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  featured boolean DEFAULT false,
  event_date timestamp with time zone,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.marquee_texts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  text text NOT NULL,
  link text,
  type text DEFAULT 'announcement' CHECK (type IN ('achievement', 'admission', 'placement', 'event', 'announcement', 'alert')),
  priority integer DEFAULT 1,
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.departments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  code text NOT NULL UNIQUE,
  description text,
  hod_name text,
  student_count integer DEFAULT 0,
  image_url text,
  programs text[],
  facilities text[],
  achievements text[],
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marquee_texts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.departments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can manage all profiles" ON public.profiles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

-- RLS Policies for content (banners, news_events, marquee_texts, departments)
CREATE POLICY "Anyone can view published content" ON public.banners
  FOR SELECT USING (status = 'active');

CREATE POLICY "Admins can manage banners" ON public.banners
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

CREATE POLICY "Anyone can view published news/events" ON public.news_events
  FOR SELECT USING (status = 'published');

CREATE POLICY "Admins can manage news/events" ON public.news_events
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

CREATE POLICY "Anyone can view active marquee" ON public.marquee_texts
  FOR SELECT USING (status = 'active');

CREATE POLICY "Admins can manage marquee" ON public.marquee_texts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

CREATE POLICY "Anyone can view active departments" ON public.departments
  FOR SELECT USING (status = 'active');

CREATE POLICY "Admins can manage departments" ON public.departments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND role IN ('super-admin', 'admin')
    )
  );

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.email),
    COALESCE(new.raw_user_meta_data->>'role', 'student')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile on user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample data
INSERT INTO public.banners (title, subtitle, image_url, cta_text, highlight_text, display_order) VALUES
('Excellence in Engineering Education', 'Shaping Future Engineers with Innovation and Technology', '/lovable-uploads/a07dab32-a06d-4aa9-ab59-2d061f93201f.png', 'Explore Programs', 'NAAC B++ Accredited', 1),
('World-Class Infrastructure', 'State-of-the-art Labs and Modern Campus Facilities', '/lovable-uploads/b592b170-56b4-4e52-b3ff-c4f500363b94.png', 'Campus Tour', '17 Acre Campus', 2);

INSERT INTO public.marquee_texts (text, type, priority) VALUES
('🎉 ISBM College receives NAAC B++ Accreditation - A milestone achievement!', 'achievement', 1),
('📢 Admissions Open for First Year & Direct Second Year Engineering Programs 2024-25', 'admission', 2),
('🏆 Record Placement: ₹16 Lakhs Highest Package achieved by our students', 'placement', 3);

INSERT INTO public.departments (name, code, description, hod_name, student_count, programs, facilities, achievements) VALUES
('Computer Engineering', 'COMP', 'Leading department in software development and computer systems', 'Dr. Rajesh Kumar', 890, ARRAY['B.Tech Computer Engineering', 'M.Tech Computer Engineering'], ARRAY['Advanced Computing Lab', 'Software Development Center', 'Research Lab'], ARRAY['Best Department Award 2023', '100% Placement Record']),
('Mechanical Engineering', 'MECH', 'Excellence in mechanical design and manufacturing technologies', 'Dr. Priya Sharma', 650, ARRAY['B.Tech Mechanical Engineering', 'M.Tech Mechanical Engineering'], ARRAY['CAD/CAM Lab', 'Manufacturing Lab', 'Thermal Engineering Lab'], ARRAY['Industry Partnership Award', 'Research Excellence 2023']),
('AI/ML Department', 'AIML', 'Cutting-edge artificial intelligence and machine learning programs', 'Dr. Arjun Patel', 420, ARRAY['B.Tech AI/ML', 'M.Tech AI/ML'], ARRAY['AI Research Lab', 'Machine Learning Center', 'Data Science Lab'], ARRAY['Innovation Award 2023', 'Best Research Papers']);
