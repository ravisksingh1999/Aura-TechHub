import React from 'react';
import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <a href="#" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
        <Zap className="h-5 w-5 text-white" />
      </div>
      <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Aura TechHub
      </span>
    </a>
  );
};

export default Logo;
