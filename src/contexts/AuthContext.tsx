
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
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
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);

  const extractUserRole = async (session: Session | null) => {
    if (!session?.user) {
      console.log('No session or user found');
      return null;
    }

    console.log('User metadata:', session.user.user_metadata);
    console.log('App metadata:', session.user.app_metadata);
    
    // Check user_metadata first, then app_metadata, then database
    let role = null;
    
    if (session.user.user_metadata?.role) {
      role = session.user.user_metadata.role;
      console.log('Role from user_metadata:', role);
    } else if (session.user.app_metadata?.role) {
      role = session.user.app_metadata.role;
      console.log('Role from app_metadata:', role);
    } else {
      // Try to get role from profiles table
      try {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
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
    
    // Special case for the super admin email
    if (session.user.email === 'llm@isbmcoe.org' && !role) {
      role = 'super-admin';
      console.log('Role set as super-admin for llm@isbmcoe.org');
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
        setSession(session);
        setUser(session?.user ?? null);
        
        const role = await extractUserRole(session);
        setUserRole(role);
        console.log('Setting user role to:', role);
        
        setLoading(false);
      }
    );

    // Get initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      console.log('Initial session check:', session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      
      const role = await extractUserRole(session);
      setUserRole(role);
      console.log('Initial user role set to:', role);
      
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
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUserRole(null);
      console.log('Sign out successful');
    } else {
      console.error('Sign out error:', error);
    }
    return { error };
  };

  const value = {
    user,
    session,
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
