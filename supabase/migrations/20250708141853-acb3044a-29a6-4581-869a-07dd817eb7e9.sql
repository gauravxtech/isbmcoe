
-- Create a dedicated students table with comprehensive fields
CREATE TABLE public.students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  enrollment_number text UNIQUE NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  date_of_birth date,
  gender text CHECK (gender IN ('male', 'female', 'other')),
  address text,
  department text NOT NULL,
  year_of_study integer CHECK (year_of_study BETWEEN 1 AND 4),
  semester integer CHECK (semester BETWEEN 1 AND 8),
  admission_date date DEFAULT CURRENT_DATE,
  guardian_name text,
  guardian_phone text,
  guardian_email text,
  blood_group text,
  photo_url text,
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'graduated', 'dropped')),
  created_at timestamptz DEFAULT timezone('utc', now()),
  updated_at timestamptz DEFAULT timezone('utc', now())
);

-- Enable RLS
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Students can view their own data" 
ON public.students 
FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all students" 
ON public.students 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() 
    AND role IN ('super-admin', 'admin', 'principal', 'hod')
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() 
    AND role IN ('super-admin', 'admin', 'principal', 'hod')
  )
);

-- Create trigger for updated_at
CREATE TRIGGER update_students_updated_at
BEFORE UPDATE ON public.students
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_students_department ON public.students(department);
CREATE INDEX idx_students_year_semester ON public.students(year_of_study, semester);
CREATE INDEX idx_students_status ON public.students(status);
CREATE INDEX idx_students_enrollment ON public.students(enrollment_number);
