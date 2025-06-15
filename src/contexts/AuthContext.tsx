
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
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
      return null;
    }
    
    let role = null;
    
    // Check user_metadata first, then app_metadata
    if (user.user_metadata?.role) {
      role = user.user_metadata.role;
    } else if (user.app_metadata?.role) {
      role = user.app_metadata.role;
    }
    
    // Special case for the super admin email - set role immediately
    if (user.email === 'llm@isbmcoe.org') {
      role = 'super-admin';
      
      // Also try to create/update profile in database
      try {
        await supabase
          .from('profiles')
          .upsert({
            id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name || 'Super Admin',
            role: 'super-admin'
          }, {
            onConflict: 'id'
          });
      } catch (error) {
        // Errors can be sent to a logging service in production
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
        }
      } catch (error) {
        // Errors can be sent to a logging service in production
      }
    }
    
    // Default role
    if (!role) {
      role = 'student';
    }
    
    return role;
  };

  useEffect(() => {
    setLoading(true);
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Defer async operations to avoid deadlocks
          setTimeout(() => {
            extractUserRole(session.user).then(role => {
              setUserRole(role);
              setLoading(false);
            });
          }, 0);
        } else {
          setUserRole(null);
          setLoading(false);
        }
      }
    );

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      
      if (session?.user) {
        extractUserRole(session.user).then(role => {
          setUserRole(role);
          setLoading(false);
        });
      } else {
        setUserRole(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      setLoading(false);
    }
    return { error };
  };

  const signOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    // onAuthStateChange will handle resetting user, userRole, and loading state.
    // We only need to handle the error case here.
    if (error) {
      setLoading(false);
    }
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
