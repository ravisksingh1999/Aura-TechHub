import React from 'react';
import { X, Star, Film, FileText, GraduationCap, Book, Wrench } from 'lucide-react';

const FilterPanel = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed lg:static lg:block inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 w-72 bg-white shadow-lg lg:shadow-none transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="h-full overflow-y-auto p-6">
        <div className="flex items-center justify-between lg:hidden mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search Within Results */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search within results..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Difficulty Level */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Difficulty Level</h3>
          <div className="space-y-2">
            {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
              <label key={level} className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
                <span className="ml-2 text-sm text-gray-700">{level}</span>
                <span className={`ml-auto px-2 py-0.5 rounded text-xs ${
                  index === 0 ? 'bg-blue-100 text-blue-700' :
                  index === 1 ? 'bg-blue-300 text-blue-800' :
                  'bg-blue-500 text-white'
                }`}>
                  {level[0]}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Resource Type */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Resource Type</h3>
          <div className="space-y-2">
            {[
              { label: 'Videos', icon: Film },
              { label: 'Articles', icon: FileText },
              { label: 'Courses', icon: GraduationCap },
              { label: 'Books', icon: Book },
              { label: 'Tools', icon: Wrench },
            ].map(({ label, icon: Icon }) => (
              <label key={label} className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
                <Icon className="w-4 h-4 ml-2 text-gray-500" />
                <span className="ml-2 text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Rating</h3>
          <div className="space-y-2">
            {[
              { label: '4.5 & up', stars: 5 },
              { label: '4.0 & up', stars: 4 },
              { label: '3.0 & up', stars: 3 },
            ].map(({ label, stars }) => (
              <label key={label} className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Last Updated */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Last Updated</h3>
          <div className="space-y-2">
            {[
              'This month',
              'Last 3 months',
              'This year',
            ].map((period) => (
              <label key={period} className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600 rounded" />
                <span className="ml-2 text-sm text-gray-700">{period}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
