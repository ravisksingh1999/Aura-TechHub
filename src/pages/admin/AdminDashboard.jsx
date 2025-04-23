import React from 'react';
import { BarChart3, Users, BookOpen, Tag, Flag, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { label: 'Resources', value: '567', icon: BookOpen, color: 'bg-green-500' },
    { label: 'Categories', value: '12', icon: Tag, color: 'bg-purple-500' },
    { label: 'Reports', value: '23', icon: Flag, color: 'bg-red-500' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-lg shadow p-6 flex items-center space-x-4"
            >
              <div className={`${stat.color} p-3 rounded-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <BarChart3 className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">No recent activity to display</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
