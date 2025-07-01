
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = 'https://mgvnlwcuvwwijoynuohi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ndm5sd2N1dnd3aWpveW51b2hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NjcwODksImV4cCI6MjA2NTE0MzA4OX0.Pb6WwM4Yd6kpTfyHDEAc9eE3QHW1PqcjREJukvpmyPk'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: {
      getItem: (key: string) => {
        try {
          return localStorage.getItem(key);
        } catch (error) {
          console.warn('Storage access blocked, using memory storage');
          return null;
        }
      },
      setItem: (key: string, value: string) => {
        try {
          localStorage.setItem(key, value);
        } catch (error) {
          console.warn('Storage access blocked, session will not persist');
        }
      },
      removeItem: (key: string) => {
        try {
          localStorage.removeItem(key);
        } catch (error) {
          console.warn('Storage access blocked');
        }
      }
    }
  },
  global: {
    headers: {
      'X-Client-Info': 'isbm-college-website'
    }
  }
})
