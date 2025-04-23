import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminResources = () => {
  const [filterStatus, setFilterStatus] = useState('pending');
  const [searchQuery, setSearchQuery] = useState('');
  const [resources, setResources] = useState([]);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    // Load pending resources from localStorage
    const storedResources = JSON.parse(localStorage.getItem('pendingResources') || '[]');
    setResources(storedResources);
  }, []);

  const handleApprove = (resource) => {
    const updatedResources = resources.map(r =>
      r.id === resource.id ? { ...r, status: 'approved' } : r
    );
    localStorage.setItem('pendingResources', JSON.stringify(updatedResources));
    setResources(updatedResources);
    toast.success('Resource approved successfully');
  };

  const handleReject = (resource) => {
    setSelectedResource(resource);
    setShowRejectionModal(true);
  };

  const confirmReject = () => {
    if (!selectedResource) return;

    const updatedResources = resources.map(r =>
      r.id === selectedResource.id ? { ...r, status: 'rejected' } : r
    );
    localStorage.setItem('pendingResources', JSON.stringify(updatedResources));
    setResources(updatedResources);
    setShowRejectionModal(false);
    setRejectionReason('');
    toast.success('Resource rejected');
  };

  const filteredResources = resources.filter(resource => {
    const matchesStatus = filterStatus === 'all' || resource.status === filterStatus;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Resource Management</h1>
          <p className="text-gray-600">Manage and moderate learning resources</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* Filters and Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Resources</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Resource Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resource
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredResources.map((resource) => (
                <tr key={resource.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {resource.thumbnail && (
                        <img
                          src={resource.thumbnail}
                          alt={resource.title}
                          className="h-10 w-10 rounded object-cover"
                        />
                      )}
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{resource.title}</div>
                        <div className="text-sm text-gray-500">
                          Submitted {new Date(resource.submittedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {resource.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="capitalize">{resource.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${resource.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : resource.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'}`}
                    >
                      {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 hover:text-blue-600"
                        title="View"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      {resource.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(resource)}
                            className="p-1 hover:text-green-600"
                            title="Approve"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleReject(resource)}
                            className="p-1 hover:text-red-600"
                            title="Reject"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No resources found</p>
          </div>
        )}
      </div>

      {/* Rejection Modal */}
      {showRejectionModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Reject Resource</h3>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Enter reason for rejection..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
              rows={4}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowRejectionModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={confirmReject}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminResources;
