
import React from 'react';

const LoadingFallback = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-college-light">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-college-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Loading ISBM College of Engineering...</p>
      </div>
    </div>
  );
};

export default LoadingFallback;
