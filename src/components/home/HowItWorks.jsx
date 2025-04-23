import React from 'react';
import { Search, GraduationCap, Upload } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Find Resources',
      description: 'Search our curated collection of high-quality learning materials.',
      icon: <Search className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Learn & Rate',
      description: 'Study at your own pace and rate resources to help others.',
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 3,
      title: 'Contribute Back',
      description: 'Share your own discoveries with the community.',
      icon: <Upload className="h-8 w-8" />,
      color: 'from-blue-700 to-blue-800'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy to find and share tech learning resources in three simple steps.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-blue-300 to-blue-500 my-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
