import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { supabase } from '@/integrations/supabase/client';

const SessionTimeoutContext = createContext({});

const INACTIVITY_LIMIT = 15 * 60 * 1000; // 15 minutes

export const SessionTimeoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset timer on user activity
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!user) return;
    timerRef.current = setTimeout(handleLogout, INACTIVITY_LIMIT);
  };

  // Logout function
  const handleLogout = async () => {
    await signOut();
    await supabase.auth.signOut();
    navigate('/login');
  };

  useEffect(() => {
    if (!user) return;
    // List of events that indicate user activity
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    events.forEach(event => window.addEventListener(event, resetTimer));
    resetTimer(); // Start timer on mount
    return () => {
      events.forEach(event => window.removeEventListener(event, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line
  }, [user]);

  return (
    <SessionTimeoutContext.Provider value={{}}>
      {children}
    </SessionTimeoutContext.Provider>
  );
};

export const useSessionTimeout = () => useContext(SessionTimeoutContext); 