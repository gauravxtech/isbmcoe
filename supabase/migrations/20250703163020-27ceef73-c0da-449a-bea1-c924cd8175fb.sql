-- Add RLS policies for students table
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to view all students
CREATE POLICY "Authenticated users can view students" 
ON public.students 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Allow admin users to manage students
CREATE POLICY "Admins can manage students" 
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