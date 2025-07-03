-- Fix RLS policies for profiles table to prevent circular dependency
-- Drop problematic policies that cause recursion
DO $$
DECLARE
    policy_name TEXT;
BEGIN
    FOR policy_name IN (
        SELECT policyname FROM pg_policies 
        WHERE tablename = 'profiles' 
        AND schemaname = 'public' 
        AND policyname IN (
            'Super Admins and Admins can modify profiles',
            'Super Admins and Admins can read all profiles'
        )
    )
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS "' || policy_name || '" ON public.profiles;';
    END LOOP;
END;
$$;

-- Create new non-recursive policies using the existing is_super_admin() function
-- This function uses auth metadata instead of profiles table, avoiding recursion

-- Allow super admins and admin users to insert profiles for others
CREATE POLICY "Admin users can insert profiles" 
ON public.profiles 
FOR INSERT 
USING (is_super_admin() OR is_admin_user())
WITH CHECK (is_super_admin() OR is_admin_user());

-- Allow super admins and admin users to read all profiles
CREATE POLICY "Admin users can read all profiles" 
ON public.profiles 
FOR SELECT 
USING (is_super_admin() OR is_admin_user() OR auth.uid() = id);

-- Allow super admins and admin users to update all profiles
CREATE POLICY "Admin users can update all profiles" 
ON public.profiles 
FOR UPDATE 
USING (is_super_admin() OR is_admin_user() OR auth.uid() = id)
WITH CHECK (is_super_admin() OR is_admin_user() OR auth.uid() = id);

-- Allow super admins and admin users to delete profiles
CREATE POLICY "Admin users can delete profiles" 
ON public.profiles 
FOR DELETE 
USING (is_super_admin() OR is_admin_user());