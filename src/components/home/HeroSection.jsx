import React from 'react';
import { ArrowRight, BookOpen, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      {/* Animated tech icons background - simplified for performance */}
      <div className="absolute inset-0 opacity-10">
        <div className="tech-icons"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Master Tech Skills with Curated Resources
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              Find, share, and rate the best learning materials for developers. Start your tech journey with trusted resources.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Browse Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold rounded-lg transition-all duration-300 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Join Community
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-300 opacity-20 blur-xl rounded-2xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="h-2.5 bg-white/20 rounded-full w-3/4"></div>
                    <div className="h-2.5 bg-white/20 rounded-full"></div>
                    <div className="h-2.5 bg-white/20 rounded-full w-5/6"></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-400/30"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-2.5 bg-white/20 rounded-full w-1/2"></div>
                      <div className="h-2.5 bg-white/20 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 bg-white/20 rounded-full"></div>
                    <div className="h-2.5 bg-white/20 rounded-full w-5/6"></div>
                    <div className="h-2.5 bg-white/20 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-blue-400/30 rounded-md w-1/3 flex items-center justify-center">
                      <div className="h-2 bg-white/40 rounded-full w-2/3"></div>
                    </div>
                    <div className="h-8 bg-green-400/30 rounded-md w-1/3 flex items-center justify-center">
                      <div className="h-2 bg-white/40 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave pattern bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#F8FAFC"
            fillOpacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,149.3C672,171,768,181,864,170.7C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
