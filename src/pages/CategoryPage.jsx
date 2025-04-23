import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronRight, Star, ExternalLink } from 'lucide-react';
import { featuredResources } from '../data/mockData';
import SubmitResourceButton from '../components/resources/SubmitResourceButton';
import SubmitResourceModal from '../components/resources/SubmitResourceModal';

const CategoryPage = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('rating');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  
  // Filter resources by category (case-insensitive)
  const categoryResources = featuredResources.filter(
    resource => resource.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm mb-4">
            <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <a href="/browse" className="hover:text-blue-200 transition-colors">Browse</a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-blue-200">{category}</span>
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold mb-2">{category} Resources</h1>
              <p className="text-blue-100">
                {categoryResources.length} curated resources available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Sorting Controls */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-medium">{categoryResources.length}</span> resources
          </p>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-full object-cover"
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
              
              <div className="p-4">
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
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{resource.views.toLocaleString()} views</span>
                  <span>{resource.saves.toLocaleString()} saves</span>
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <a
                  href={resource.url}
                  className="flex items-center justify-center w-full px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {categoryResources.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No resources found for {category}
            </h3>
            <p className="text-gray-600">
              Be the first to submit a resource for this category!
            </p>
          </div>
        )}
      </div>

      <SubmitResourceButton onClick={() => setIsSubmitModalOpen(true)} />
      <SubmitResourceModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        category={category}
      />
    </div>
  );
};

export default CategoryPage;
