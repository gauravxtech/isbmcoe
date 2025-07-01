
import React from 'react';
import { Loader2 } from 'lucide-react';

interface ModernLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export const ModernLoader: React.FC<ModernLoaderProps> = ({ 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
      <div className="relative">
        <div className={`${sizeClasses[size]} animate-spin text-blue-600`}>
          <Loader2 />
        </div>
        <div className="absolute inset-0 animate-ping">
          <div className={`${sizeClasses[size]} rounded-full bg-blue-400 opacity-20`}></div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-600 font-medium">{text}</p>
        <div className="flex space-x-1 mt-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};
