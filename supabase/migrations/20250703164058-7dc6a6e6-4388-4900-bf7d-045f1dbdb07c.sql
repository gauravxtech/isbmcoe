-- Set proper super admin role in auth metadata for the current user
UPDATE auth.users 
SET raw_app_meta_data = jsonb_set(
  COALESCE(raw_app_meta_data, '{}'::jsonb), 
  '{role}', 
  '"super-admin"'
)
WHERE email = 'gauravkvgk@gmail.com';

-- Also ensure profile is created with super-admin role
INSERT INTO public.profiles (id, email, full_name, role, status)
SELECT id, email, 
       COALESCE(raw_user_meta_data->>'full_name', 'Super Admin'),
       'super-admin',
       'active'
FROM auth.users 
WHERE email = 'gauravkvgk@gmail.com'
ON CONFLICT (id) DO UPDATE SET 
  role = 'super-admin',
  status = 'active';