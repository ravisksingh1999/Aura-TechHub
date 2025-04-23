import React, { useState } from 'react';
import { BarChart, LineChart, PieChart, Download, Calendar, Filter } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminReports = () => {
  const [dateRange, setDateRange] = useState('last7days');
  
  // Mock data for charts
  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [65, 78, 90, 115, 138, 162],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const resourceCategoryData = {
    labels: ['Frontend', 'Backend', 'DevOps', 'Mobile', 'Data Science', 'Cloud'],
    datasets: [
      {
        label: 'Resources by Category',
        data: [300, 250, 180, 220, 190, 280],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(14, 165, 233, 0.8)',
        ],
      },
    ],
  };

  const engagementData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Views',
        data: [420, 380, 450, 520, 490, 380, 410],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'Saves',
        data: [120, 100, 140, 160, 145, 95, 110],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-600">Monitor platform performance and user engagement</p>
        </div>
        <div className="flex space-x-4">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="last3months">Last 3 Months</option>
            <option value="lastyear">Last Year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">User Growth</h2>
            <LineChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-80">
            <Line data={userGrowthData} options={chartOptions} />
          </div>
        </div>

        {/* Resources by Category */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Resources by Category</h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-80">
            <Pie data={resourceCategoryData} options={chartOptions} />
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Daily Engagement</h2>
            <BarChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-80">
            <Bar data={engagementData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[{
          label: 'Total Users', value: '12,543', change: '+12%' },
          { label: 'Active Resources', value: '1,423', change: '+8%' },
          { label: 'Avg. Daily Views', value: '4,721', change: '+15%' },
          { label: 'Resource Saves', value: '892', change: '+5%' },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReports;
