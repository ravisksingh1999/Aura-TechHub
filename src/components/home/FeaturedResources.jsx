import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, ExternalLink } from 'lucide-react';

const FeaturedResources = ({ resources }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleResources = resources.slice(startIndex, startIndex + 3);
  
  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };
  
  const handleNext = () => {
    setStartIndex(Math.min(resources.length - 3, startIndex + 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Top Rated Resources</h2>
          <div className="flex space-x-2">
            <button 
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className={`p-2 rounded-full ${
                startIndex === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              } transition-colors`}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              disabled={startIndex >= resources.length - 3}
              className={`p-2 rounded-full ${
                startIndex >= resources.length - 3
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              } transition-colors`}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg border-t-4 border-blue-600 transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
          <span className="px-2 py-1 bg-blue-600 text-xs font-medium text-white rounded">
            {resource.category}
          </span>
          <div className="flex items-center bg-white/90 px-2 py-1 rounded">
            <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" fill="#EAB308" />
            <span className="text-xs font-semibold">{resource.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{resource.title}</h3>
        <p className="text-gray-600 text-sm mb-3">By {resource.author}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-4 pb-4 mt-auto">
        <a
          href={resource.url}
          className="flex items-center justify-center w-full px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
        >
          View Details
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default FeaturedResources;
