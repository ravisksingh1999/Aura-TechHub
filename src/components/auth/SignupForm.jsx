import React, { useState } from 'react';
import { Rocket, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!formData.fullName || !formData.email) {
        toast.error('Please fill all required fields');
        return;
      }
      setStep(2);
      toast.success('OTP sent to your email!');
    } else if (step === 2) {
      if (otp === '123456') {
        setOtpError(false);
        setStep(3);
        toast.success('Email verified successfully!');
      } else {
        setOtpError(true);
        toast.error('Invalid OTP. Please try again.', {
          icon: <XCircle className="text-red-500" />,
        });
      }
    } else if (step === 3) {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      if (formData.password.length < 8) {
        toast.error('Password must be at least 8 characters');
        return;
      }
      
      // Show success message and redirect
      toast.success(
        <div className="flex items-center space-x-2">
          <CheckCircle className="text-green-500" />
          <span>Account created successfully!</span>
        </div>,
        {
          duration: 3000,
        }
      );
      
      // Simulate account creation process
      setTimeout(() => {
        setIsSuccess(true);
        // Redirect to homepage after 2 seconds
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }, 1000);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setOtpError(false);
    } else if (step === 3) {
      setStep(2);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Aura TechHub!</h2>
        <p className="text-gray-600 mb-6">Your account has been created successfully</p>
        <div className="animate-pulse text-sm text-gray-500">
          Redirecting to homepage...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white mb-4">
          <Rocket className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {step === 1 && 'Create your account'}
          {step === 2 && 'Verify your email'}
          {step === 3 && 'Set your password'}
        </h2>
        <p className="text-gray-600">
          {step === 1 && 'Start mastering tech skills today'}
          {step === 2 && `We sent a code to ${formData.email}`}
          {step === 3 && 'Secure your account with a password'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Alex Johnson"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </>
        )}

        {step === 2 && (
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              We've sent a 6-digit verification code to <br />
              <span className="font-medium">{formData.email}</span>
            </p>
            
            <div className="flex justify-center mb-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setOtp(value.slice(0, 6));
                  setOtpError(false);
                }}
                placeholder="• • • • • •"
                className={`w-full max-w-xs px-4 py-3 border ${otpError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest font-medium`}
                maxLength={6}
                required
                autoFocus
              />
            </div>
            
            {otpError && (
              <div className="flex items-center justify-center text-red-500 text-sm mb-4">
                <XCircle className="h-4 w-4 mr-1" />
                <span>The OTP you entered is not correct. Please try again.</span>
              </div>
            )}
            
            <div className="text-sm text-gray-500">
              Didn't receive code? <button type="button" className="text-blue-600 hover:text-blue-800 font-medium">Resend</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
                minLength={8}
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </>
        )}

        <div className="flex flex-col space-y-3">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            {step === 1 && 'Continue'}
            {step === 2 && 'Verify OTP'}
            {step === 3 && 'Create Account'}
          </button>

          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center justify-center text-sm text-gray-600 hover:text-gray-800 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </button>
          )}
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        Already have an account? <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Sign in</a>
      </div>
    </div>
  );
};

export default SignupForm;