
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
  isAuthenticated: boolean;
  loading: boolean;
  userRole: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);

  const extractUserRole = async (user: User | null) => {
    if (!user) {
      console.log('No user found');
      return null;
    }

    console.log('User metadata:', user.user_metadata);
    console.log('App metadata:', user.app_metadata);
    
    let role = null;
    
    // Check user_metadata first, then app_metadata
    if (user.user_metadata?.role) {
      role = user.user_metadata.role;
      console.log('Role from user_metadata:', role);
    } else if (user.app_metadata?.role) {
      role = user.app_metadata.role;
      console.log('Role from app_metadata:', role);
    }
    
    // Special case for the super admin email - set role immediately
    if (user.email === 'llm@isbmcoe.org') {
      role = 'super-admin';
      console.log('Role set as super-admin for llm@isbmcoe.org');
      
      // Also try to create/update profile in database
      try {
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name || 'Super Admin',
            role: 'super-admin'
          }, {
            onConflict: 'id'
          });
        
        if (profileError) {
          console.log('Profile upsert error (non-critical):', profileError);
        } else {
          console.log('Profile created/updated successfully');
        }
      } catch (error) {
        console.log('Error creating profile (non-critical):', error);
      }
      
      return role;
    }
    
    // Try to get role from profiles table
    if (!role) {
      try {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        
        if (!error && profile) {
          role = profile.role;
          console.log('Role from database:', role);
        } else {
          console.log('No profile found or error:', error);
        }
      } catch (error) {
        console.log('Error fetching profile:', error);
      }
    }
    
    // Default role
    if (!role) {
      role = 'student';
      console.log('Default role set to student');
    }
    
    return role;
  };

  useEffect(() => {
    console.log('AuthProvider: Setting up auth state listener');
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session?.user?.email);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          const role = await extractUserRole(session.user);
          setUserRole(role);
          console.log('Setting user role to:', role);
        } else {
          setUserRole(null);
        }
        
        setLoading(false);
      }
    );

    // Get initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      console.log('Initial session check:', session?.user?.email);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        const role = await extractUserRole(session.user);
        setUserRole(role);
        console.log('Initial user role set to:', role);
      } else {
        setUserRole(null);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    console.log('Attempting to sign in:', email);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) {
      console.error('Sign in error:', error);
    } else {
      console.log('Sign in successful:', data.user?.email);
    }
    
    return { error };
  };

  const signOut = async () => {
    console.log('Signing out...');
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(null);
      setUserRole(null);
      console.log('Sign out successful');
    } else {
      console.error('Sign out error:', error);
    }
    setLoading(false);
    return { error };
  };

  const value = {
    user,
    signIn,
    signOut,
    isAuthenticated: !!user,
    loading,
    userRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
