
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  role: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
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
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email: string, password: string, role: string): boolean => {
    // Simple authentication - in production, this would call your backend API
    if (email && password) {
      const userData = {
        email,
        role,
        name: getRoleDisplayName(role)
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const getRoleDisplayName = (role: string): string => {
    const roleNames: Record<string, string> = {
      'super-admin': 'Super Administrator',
      'admin': 'College Administrator',
      'principal': 'Principal',
      'dean': 'Academic Dean',
      'hod': 'Head of Department',
      'teacher': 'Faculty Member',
      'student': 'Student',
      'parent': 'Parent',
      'accountant': 'Finance Officer',
      'reception': 'Reception Staff',
      'security': 'Security Officer',
      'hostel': 'Hostel Manager'
    };
    return roleNames[role] || 'User';
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
