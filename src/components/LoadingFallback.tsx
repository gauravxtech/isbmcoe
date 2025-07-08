
import React from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';

const LoadingFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo and Icon */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full" />
          </div>
          <div className="relative w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
            <GraduationCap className="w-10 h-10 text-primary animate-pulse" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-bounce" />
        </div>

        {/* Enhanced Loading Animation */}
        <div className="space-y-4">
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="w-16 h-16 mx-auto border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            
            {/* Inner counter-rotating ring */}
            <div className="absolute inset-2 w-12 h-12 mx-auto border-2 border-secondary/30 border-b-secondary rounded-full animate-spin" 
                 style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
            
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>

          {/* Text with typing effect */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              ISBM College of Engineering
            </h2>
            <p className="text-muted-foreground animate-pulse">
              Preparing your academic experience...
            </p>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-primary/60 to-primary animate-pulse rounded-full w-3/4 transition-all duration-1000" />
          </div>

          {/* Loading steps */}
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="animate-pulse">🔐 Authenticating secure connection...</div>
            <div className="animate-pulse delay-500">📚 Loading academic resources...</div>
            <div className="animate-pulse delay-1000">🎓 Preparing dashboard...</div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/5 rounded-full blur-xl animate-pulse delay-1000" />
        </div>
      </div>
    </div>
  );
};

export default LoadingFallback;
