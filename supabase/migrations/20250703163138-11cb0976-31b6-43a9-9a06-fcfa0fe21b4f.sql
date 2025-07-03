-- Insert existing student profiles into students table
INSERT INTO public.students (id, full_name, email, department, status)
SELECT id, full_name, email, department, status
FROM public.profiles 
WHERE role = 'student' 
AND id NOT IN (SELECT id FROM public.students WHERE id IS NOT NULL);