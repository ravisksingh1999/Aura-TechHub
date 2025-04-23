import React, { useState } from 'react';
import { Save, Lock, Mail, Bell, Globe, Shield, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const AdminSettings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Aura TechHub',
    siteDescription: 'Your destination for curated tech learning resources',
    contactEmail: 'admin@auratechhub.com',
    resourcesPerPage: '10',
  });

  const [emailSettings, setEmailSettings] = useState({
    notifyNewResources: true,
    notifyNewUsers: true,
    notifyReports: true,
    digestFrequency: 'daily',
  });

  const [securitySettings, setSecuritySettings] = useState({
    requireEmailVerification: true,
    allowSocialLogin: false,
    twoFactorAuth: true,
    sessionTimeout: '24',
  });

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    toast.success('General settings updated successfully');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    toast.success('Email notification settings updated successfully');
  };

  const handleSecuritySubmit = (e) => {
    e.preventDefault();
    toast.success('Security settings updated successfully');
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Platform Settings</h1>
        <p className="text-gray-600">Manage your platform configuration and preferences</p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">General Settings</h2>
            </div>
            <form onSubmit={handleGeneralSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Site Name</label>
                  <input
                    type="text"
                    value={generalSettings.siteName}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Site Description</label>
                  <textarea
                    value={generalSettings.siteDescription}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                  <input
                    type="email"
                    value={generalSettings.contactEmail}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Resources Per Page</label>
                  <select
                    value={generalSettings.resourcesPerPage}
                    onChange={(e) => setGeneralSettings({ ...generalSettings, resourcesPerPage: e.target.value })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Save className="h-5 w-5 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Email Settings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Email Notifications</h2>
            </div>
            <form onSubmit={handleEmailSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={emailSettings.notifyNewResources}
                      onChange={(e) => setEmailSettings({ ...emailSettings, notifyNewResources: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Notify on new resource submissions</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={emailSettings.notifyNewUsers}
                      onChange={(e) => setEmailSettings({ ...emailSettings, notifyNewUsers: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Notify on new user registrations</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={emailSettings.notifyReports}
                      onChange={(e) => setEmailSettings({ ...emailSettings, notifyReports: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Notify on user reports</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Digest Frequency</label>
                  <select
                    value={emailSettings.digestFrequency}
                    onChange={(e) => setEmailSettings({ ...emailSettings, digestFrequency: e.target.value })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Save className="h-5 w-5 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-5 w-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
            </div>
            <form onSubmit={handleSecuritySubmit}>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={securitySettings.requireEmailVerification}
                      onChange={(e) => setSecuritySettings({ ...securitySettings, requireEmailVerification: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Require email verification</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={securitySettings.allowSocialLogin}
                      onChange={(e) => setSecuritySettings({ ...securitySettings, allowSocialLogin: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Allow social login</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={securitySettings.twoFactorAuth}
                      onChange={(e) => setSecuritySettings({ ...securitySettings, twoFactorAuth: e.target.checked })}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Enable two-factor authentication</span>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Session Timeout (hours)</label>
                  <select
                    value={securitySettings.sessionTimeout}
                    onChange={(e) => setSecuritySettings({ ...securitySettings, sessionTimeout: e.target.value })}
                    className="mt-1 block w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1">1 hour</option>
                    <option value="12">12 hours</option>
                    <option value="24">24 hours</option>
                    <option value="72">72 hours</option>
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Save className="h-5 w-5 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-lg shadow border-2 border-red-100">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Trash2 className="h-5 w-5 text-red-500 mr-2" />
              <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => toast.error('This action requires additional confirmation')}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                <Trash2 className="h-5 w-5 mr-2" />
                Reset Platform Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
