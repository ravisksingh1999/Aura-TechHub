import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, User } from 'lucide-react';
import Logo from '../ui/Logo';
import AuthModal from '../auth/AuthModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo />
              <div className="hidden md:ml-6 md:flex md:space-x-6">
                <NavLink to="/" label="Home" active={location.pathname === '/'} />
                <NavLink to="/browse" label="Browse" active={location.pathname.startsWith('/browse')} />
                <NavLink to="/roadmaps" label="Roadmaps" active={location.pathname === '/roadmaps'} />
                <NavLink to="/submit" label="Submit" active={location.pathname === '/submit'} />
                <NavLink to="/community" label="Community" active={location.pathname === '/community'} />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Join Aura TechHub
              </button>
            </div>

            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
              <MobileNavLink to="/" label="Home" active={location.pathname === '/'} />
              <MobileNavLink to="/browse" label="Browse" active={location.pathname.startsWith('/browse')} />
              <MobileNavLink to="/roadmaps" label="Roadmaps" active={location.pathname === '/roadmaps'} />
              <MobileNavLink to="/submit" label="Submit" active={location.pathname === '/submit'} />
              <MobileNavLink to="/community" label="Community" active={location.pathname === '/community'} />
              
              <div className="relative mt-3 px-3">
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <Search className="absolute left-6 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsAuthModalOpen(true);
                }}
                className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900"
              >
                Join Aura TechHub
              </button>
            </div>
          </div>
        )}
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

const NavLink = ({ to, label, active }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${active ? 'text-blue-600 border-blue-600' : 'text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-300'} transition-colors duration-200`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label, active }) => {
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${active ? 'text-white bg-gradient-to-r from-blue-600 to-blue-800' : 'text-gray-700 hover:bg-gray-50'}`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
