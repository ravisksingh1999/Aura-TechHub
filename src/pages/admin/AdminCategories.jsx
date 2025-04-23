import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, GripVertical, Layers, Layout, Database, GitMerge, BarChart, Cloud } from 'lucide-react';

const AdminCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mockCategories = [
    {
      id: '1',
      name: 'Full Stack',
      icon: Layers,
      count: 248,
      description: 'Complete web development from frontend to backend',
      color: 'blue'
    },
    {
      id: '2',
      name: 'Frontend',
      icon: Layout,
      count: 372,
      description: 'UI/UX, JavaScript frameworks, and web design',
      color: 'green'
    },
    {
      id: '3',
      name: 'Backend',
      icon: Database,
      count: 295,
      description: 'Server-side development and databases',
      color: 'purple'
    },
    {
      id: '4',
      name: 'DevOps',
      icon: GitMerge,
      count: 183,
      description: 'CI/CD, containerization, and deployment',
      color: 'orange'
    },
    {
      id: '5',
      name: 'Data Science',
      icon: BarChart,
      count: 215,
      description: 'Machine learning, analytics, and visualization',
      color: 'red'
    },
    {
      id: '6',
      name: 'Cloud',
      icon: Cloud,
      count: 164,
      description: 'Cloud platforms and infrastructure',
      color: 'teal'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800',
    red: 'bg-red-100 text-red-800',
    teal: 'bg-teal-100 text-teal-800'
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Category Management</h1>
          <p className="text-gray-600">Organize and manage resource categories</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Category
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Categories List */}
        <div className="divide-y divide-gray-200">
          {mockCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="p-4 flex items-center hover:bg-gray-50">
                <button className="cursor-move p-2 hover:bg-gray-100 rounded" title="Drag to reorder">
                  <GripVertical className="h-5 w-5 text-gray-400" />
                </button>
                
                <div className={`p-2 rounded-lg ${colorClasses[category.color]}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <div className="ml-4 flex-grow">
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      {category.count} resources
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                    title="Edit Category"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                    title="Delete Category"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Text */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-sm text-gray-500">
          Drag and drop categories to reorder them. Changes are saved automatically.
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
