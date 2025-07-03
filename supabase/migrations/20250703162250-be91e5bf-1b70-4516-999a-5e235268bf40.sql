-- Fix RLS policy for announcements table to use correct role check function
DROP POLICY IF EXISTS "Admins can manage announcements" ON public.announcements;

CREATE POLICY "Admins can manage announcements" 
ON public.announcements 
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