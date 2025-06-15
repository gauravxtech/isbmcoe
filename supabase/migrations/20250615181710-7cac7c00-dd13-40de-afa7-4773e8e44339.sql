
-- This script fixes the login redirection issue by resetting the security policies
-- on the user profiles table, which are causing an "infinite recursion" error.
-- This is a corrected version of the previous script.

-- Step 1: Remove all existing Row Level Security (RLS) policies from the profiles table.
-- This is necessary to remove the faulty policies causing the recursion.
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


-- Step 2: Enable Row Level Security and create a new, non-recursive policy.
-- This policy allows users to see and modify only their own profile data.
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view and update their own profile"
ON public.profiles
FOR ALL
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Step 3: Grant permissions. This is good practice for security.
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.profiles TO authenticated;

