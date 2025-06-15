
-- This script fixes user management for Super Admins by creating non-recursive
-- functions to check user roles and updating the security policies on the profiles table.
-- This is a corrected version to avoid dependency errors.

-- Step 1: Create/Update a non-recursive function to get user role from auth metadata.
-- This is safer than querying the profiles table from within its own RLS policy.
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS TEXT AS $$
DECLARE
  role TEXT;
BEGIN
  -- It is safer to check app_metadata as it can only be updated from a trusted backend environment
  SELECT raw_app_meta_data->>'role'
  INTO role
  FROM auth.users
  WHERE id = auth.uid();
  RETURN role;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = '';

-- Step 2: Update is_super_admin to use the new non-recursive function.
-- Using CREATE OR REPLACE avoids needing to drop dependent objects.
CREATE OR REPLACE FUNCTION public.is_super_admin()
RETURNS BOOLEAN AS $$
BEGIN
  -- Check if the user has the 'super-admin' role from auth metadata
  RETURN public.get_user_role() = 'super-admin';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = '';

-- Step 3: Update is_admin_user to be non-recursive.
-- Using CREATE OR REPLACE avoids needing to drop dependent objects.
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
BEGIN
  -- Check for a set of administrative roles
  RETURN public.get_user_role() IN ('admin', 'super-admin', 'principal', 'hod');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = '';

-- Step 4: Drop all existing policies on profiles table to avoid conflicts.
-- This is still necessary to clean up old, potentially recursive policies.
DO $$
DECLARE
    policy_name TEXT;
BEGIN
    FOR policy_name IN (SELECT policyname FROM pg_policies WHERE tablename = 'profiles' AND schemaname = 'public')
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS "' || policy_name || '" ON public.profiles;';
    END LOOP;
END;
$$;

-- Step 5: Create new, safe RLS policies for profiles.

-- Policy for super admins to manage all profiles.
CREATE POLICY "Super admins have full access to profiles"
ON public.profiles
FOR ALL
USING (public.is_super_admin())
WITH CHECK (public.is_super_admin());

-- Policy for users to view and manage their own profile.
CREATE POLICY "Users can manage their own profile"
ON public.profiles
FOR ALL
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Grant permissions again for good measure.
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.profiles TO authenticated;

