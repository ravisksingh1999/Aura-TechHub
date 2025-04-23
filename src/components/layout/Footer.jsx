import React from 'react';
import { Mail, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Your destination for curated tech learning resources and community-driven knowledge.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
              <SocialIcon icon={<Github className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#" label="Browse Resources" />
              <FooterLink href="#" label="Learning Roadmaps" />
              <FooterLink href="#" label="Submit Resource" />
              <FooterLink href="#" label="Community Forum" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Frontend Development" />
              <FooterLink href="#" label="Backend Development" />
              <FooterLink href="#" label="DevOps & Cloud" />
              <FooterLink href="#" label="Data Science" />
              <FooterLink href="#" label="Mobile Development" />
              <FooterLink href="#" label="Cybersecurity" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-blue-100 text-sm mb-4">
              Subscribe to our newsletter for weekly resource updates.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-green-500 hover:bg-green-600 transition rounded-lg font-medium flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} Aura TechHub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }) => {
  return (
    <li>
      <a
        href={href}
        className="text-blue-100 hover:text-white transition-colors duration-200"
      >
        {label}
      </a>
    </li>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <a
      href="#"
      className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default Footer;
