import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdminAuthContext = createContext(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if admin is logged in
    const token = localStorage.getItem('adminToken');
    const storedUser = localStorage.getItem('adminUser');
    
    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    } else if (!location.pathname.includes('/admin')) {
      navigate('/admin');
    }
  }, [location]);

  const login = async (email, password) => {
    try {
      // Mock login - replace with actual API call in production
      if (email === 'admin@demo.com' && password === 'admin123') {
        const mockUser = {
          id: '1',
          email: 'admin@demo.com',
          name: 'Admin User',
          role: 'admin'
        };
        const mockToken = 'mock-jwt-token';
        
        localStorage.setItem('adminToken', mockToken);
        localStorage.setItem('adminUser', JSON.stringify(mockUser));
        
        setIsAuthenticated(true);
        setUser(mockUser);
        
        toast.success('Welcome back, Admin!');
        navigate('/admin');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login failed');
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/admin');
    toast.success('Logged out successfully');
  };

  const updateProfile = async (data) => {
    try {
      // Mock profile update - replace with actual API call in production
      if (user) {
        const updatedUser = { ...user, ...data };
        localStorage.setItem('adminUser', JSON.stringify(updatedUser));
        setUser(updatedUser);
        toast.success('Profile updated successfully');
      }
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      // Mock password change - replace with actual API call in production
      if (currentPassword === 'admin123') {
        toast.success('Password changed successfully');
      } else {
        throw new Error('Current password is incorrect');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to change password');
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        updateProfile,
        changePassword
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthContext;
