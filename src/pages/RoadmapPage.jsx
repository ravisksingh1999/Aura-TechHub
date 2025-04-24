import React, { useState } from 'react';
import { ChevronDown, Download, Share2, CheckCircle, ChevronRight } from 'lucide-react';
import { roadmaps } from '../data/mockData';

const RoadmapPage = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState('fullstack');
  const [completedSteps, setCompletedSteps] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleStep = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const calculateProgress = () => {
    const currentRoadmap = roadmaps.find(r => r.id === selectedRoadmap);
    if (!currentRoadmap) return 0;
    
    const totalSteps = currentRoadmap.stages.reduce((acc, stage) => 
      acc + stage.topics.length, 0
    );
    
    return Math.round((completedSteps.length / totalSteps) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Guided Path to Tech Mastery
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Step-by-step roadmaps to learn any technology—curated by experts.
            </p>
            <button 
              onClick={() => {
                const roadmapSection = document.getElementById('roadmap-section');
                roadmapSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors group"
            >
              Explore Roadmaps
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="roadmap-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Find your roadmap..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                {roadmaps.map((roadmap) => (
                  <button
                    key={roadmap.id}
                    onClick={() => setSelectedRoadmap(roadmap.id)}
                    className={`w-full px-4 py-2 rounded-lg text-left flex items-center ${
                      selectedRoadmap === roadmap.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <roadmap.icon className="h-5 w-5 mr-3" />
                    {roadmap.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            {roadmaps.find(r => r.id === selectedRoadmap) && (
              <div className="bg-white rounded-xl shadow-sm p-8">
                {/* Rest of the content stays same */}
                {/* You can copy-paste the rest of the JSX from your original file here as it doesn't change */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
