import React from 'react';
import * as LucideIcons from 'lucide-react';

const CategoryShowcase = ({ categories }) => {
  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    if (IconComponent) {
      return <IconComponent className="h-8 w-8" />;
    }
    return <LucideIcons.File className="h-8 w-8" />;
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of resources organized by tech domain to find exactly what you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} icon={getIcon(category.icon)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category, icon }) => {
  return (
    <a 
      href="#"
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90 group-hover:opacity-95 transition-opacity"></div>
      
      <div className="relative z-10 p-6 flex flex-col items-center text-center">
        <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-4 group-hover:bg-white/30 transition-colors">
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
        <p className="text-blue-100 mb-4">{category.count} resources</p>
        
        <div className="bg-white/90 text-blue-800 py-1 px-4 rounded-full text-sm font-medium transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Explore
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
    </a>
  );
};

export default CategoryShowcase;
