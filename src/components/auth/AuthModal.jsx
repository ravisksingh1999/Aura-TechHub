import React, { useState } from 'react';
import { X, Shield, Rocket, Github } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`pb-3 px-4 text-sm font-medium border-b-2 -mb-px ${
                activeTab === 'login'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`pb-3 px-4 text-sm font-medium border-b-2 -mb-px ${
                activeTab === 'signup'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Content */}
          {activeTab === 'login' && (
            <LoginForm onForgotPassword={() => setActiveTab('forgot-password')} />
          )}
          {activeTab === 'signup' && <SignupForm />}
          {activeTab === 'forgot-password' && (
            <ForgotPasswordForm onBack={() => setActiveTab('login')} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
