import React from 'react';
import { BookOpen, Upload } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Learning?</h2>
            <p className="text-lg text-blue-100 max-w-2xl">
              Join our growing community of tech enthusiasts and access thousands of curated learning resources. 
              Whether you're a beginner or an expert, we have content for every skill level.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-lg transition-colors flex items-center justify-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Start Learning
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors flex items-center justify-center">
              <Upload className="h-5 w-5 mr-2" />
              Share Resource
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
