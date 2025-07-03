import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create a Supabase client with the Auth context of the logged in user.
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    // Get the session or user object
    const authHeader = req.headers.get('Authorization')!
    const token = authHeader.replace('Bearer ', '')
    const { data } = await supabaseClient.auth.getUser(token)
    const user = data.user

    if (!user) {
      throw new Error('No user found')
    }

    // Check if user has admin privileges
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (!profile || !['super-admin', 'admin', 'principal', 'hod'].includes(profile.role)) {
      throw new Error('Insufficient permissions')
    }

    const { email, password, full_name, role, department, phone } = await req.json()

    // Create the user using admin privileges
    const { data: newUser, error: signUpError } = await supabaseClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name,
        role,
        department,
        phone
      },
      app_metadata: {
        role
      }
    })

    if (signUpError) {
      throw signUpError
    }

    // Insert into profiles table
    const { error: profileError } = await supabaseClient
      .from('profiles')
      .insert({
        id: newUser.user.id,
        email,
        full_name,
        department,
        role,
        phone,
        status: 'active'
      })

    if (profileError) {
      // If profile creation fails, we might want to delete the user
      console.error('Profile creation failed:', profileError)
    }

    // Insert into students table if role is student
    if (role === 'student') {
      const { error: studentError } = await supabaseClient
        .from('students')
        .insert({
          id: newUser.user.id,
          full_name,
          email,
          department,
          status: 'active'
        })

      if (studentError) {
        console.error('Student table insert failed:', studentError)
      }
    }

    return new Response(
      JSON.stringify({ user: newUser.user }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})