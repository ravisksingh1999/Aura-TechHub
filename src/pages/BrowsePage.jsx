import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Mic, SlidersHorizontal, Grid, List } from 'lucide-react';
import { categories } from '../data/mockData';
import FilterPanel from '../components/browse/FilterPanel';

const BrowsePage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="sticky top-16 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Find tutorials, courses, and tools..."
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <Mic className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filter Panel */}
          <FilterPanel isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

          {/* Main Content */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => navigate(`/browse/${category.name.toLowerCase()}`)}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-blue-100 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <category.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.count} resources
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
