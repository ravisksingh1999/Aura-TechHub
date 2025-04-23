import React from 'react';
import { Plus } from 'lucide-react';

const SubmitResourceButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 z-50"
    >
      <Plus className="h-5 w-5" />
      <span>Submit Resource</span>
    </button>
  );
};

export default SubmitResourceButton;
