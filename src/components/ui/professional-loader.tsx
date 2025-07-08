import React from 'react';
import { Loader2, GraduationCap } from 'lucide-react';

interface ProfessionalLoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  variant?: 'default' | 'minimal' | 'pulse' | 'academic';
  className?: string;
}

export const ProfessionalLoader: React.FC<ProfessionalLoaderProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  variant = 'default',
  className = '' 
}) => {
  const sizeClasses = {
    sm: { 
      icon: 'h-6 w-6', 
      container: 'min-h-[120px]', 
      text: 'text-sm',
      dots: 'w-1.5 h-1.5'
    },
    md: { 
      icon: 'h-8 w-8', 
      container: 'min-h-[200px]', 
      text: 'text-base',
      dots: 'w-2 h-2'
    },
    lg: { 
      icon: 'h-12 w-12', 
      container: 'min-h-[300px]', 
      text: 'text-lg',
      dots: 'w-2.5 h-2.5'
    },
    xl: { 
      icon: 'h-16 w-16', 
      container: 'min-h-[400px]', 
      text: 'text-xl',
      dots: 'w-3 h-3'
    }
  };

  const sizes = sizeClasses[size];

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center justify-center space-x-3 py-8 ${className}`}>
        <Loader2 className={`${sizes.icon} animate-spin text-primary`} />
        <span className={`${sizes.text} text-muted-foreground font-medium`}>{text}</span>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={`flex flex-col items-center justify-center ${sizes.container} space-y-6 ${className}`}>
        <div className="relative">
          <div className={`${sizes.icon} rounded-full bg-primary/20 animate-pulse`} />
          <div className={`absolute inset-0 ${sizes.icon} rounded-full bg-primary/40 animate-ping`} />
          <div className={`absolute inset-2 rounded-full bg-primary animate-pulse`} />
        </div>
        <div className="text-center space-y-2">
          <p className={`${sizes.text} font-semibold text-foreground`}>{text}</p>
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizes.dots} bg-primary rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'academic') {
    return (
      <div className={`flex flex-col items-center justify-center ${sizes.container} space-y-6 ${className}`}>
        <div className="relative">
          <div className="absolute inset-0 animate-spin">
            <div className={`${sizes.icon} border-4 border-primary/20 border-t-primary rounded-full`} />
          </div>
          <GraduationCap className={`${sizes.icon} text-primary relative z-10 transform -translate-x-1 -translate-y-1`} />
        </div>
        <div className="text-center space-y-3">
          <h3 className={`${sizes.text} font-bold text-foreground tracking-wide`}>{text}</h3>
          <div className="flex justify-center space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`${sizes.dots} bg-gradient-to-r from-primary to-primary/60 rounded-full animate-pulse`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground max-w-xs">
            Please wait while we prepare your academic data...
          </p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-col items-center justify-center ${sizes.container} space-y-6 ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Outer ring */}
        <div className={`absolute ${sizes.icon} border-4 border-border rounded-full animate-spin`} 
             style={{ borderTopColor: 'hsl(var(--primary))' }} />
        
        {/* Inner ring */}
        <div className={`absolute inset-2 border-2 border-muted-foreground/20 rounded-full animate-spin`} 
             style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        
        {/* Center dot */}
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        
        {/* Glow effect */}
        <div className={`absolute ${sizes.icon} bg-primary/10 rounded-full animate-ping`} />
      </div>
      
      <div className="text-center space-y-3">
        <h3 className={`${sizes.text} font-semibold text-foreground`}>{text}</h3>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`${sizes.dots} bg-primary rounded-full animate-bounce`}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary/20 rounded-full relative">
            <div className="absolute inset-0 bg-primary rounded-full animate-pulse transform scale-x-75 origin-left" />
          </div>
        </div>
      </div>
    </div>
  );
};