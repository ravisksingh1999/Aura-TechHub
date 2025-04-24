import React from 'react';
import { Zap } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-4 animate-pulse">
            <Zap className="h-8 w-8 text-blue-600" />
          </div>
          <div className="absolute -inset-4 bg-white/20 rounded-xl blur-xl animate-pulse"></div>
        </div>
        <div className="relative">
          <h2 className="text-xl font-bold text-white mb-2">Loading Aura TechHub</h2>
          <p className="text-blue-200">Preparing your learning journey...</p>
          <div className="mt-4 w-32 h-1 bg-blue-300/30 rounded-full mx-auto overflow-hidden">
            <div className="w-16 h-full bg-white rounded-full animate-[loading_1s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
