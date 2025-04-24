import React from 'react';
import { Mail, Facebook, Twitter, Linkedin, Github, Zap } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: `moveGrid 15s linear infinite`,
              animationDelay: `${i * 1}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg">
                <Zap className="h-6 w-6 text-blue-300" />
              </div>
              <Logo />
            </div>
            <p className="text-blue-100/80 text-sm">
              Your destination for curated tech learning resources and community-driven knowledge.
            </p>
            <div className="flex space-x-3">
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
              <SocialIcon icon={<Github className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-blue-50 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#" label="Browse Resources" />
              <FooterLink href="#" label="Learning Roadmaps" />
              <FooterLink href="#" label="Submit Resource" />
              <FooterLink href="#" label="Community Forum" />
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-blue-50 flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Popular Categories
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Frontend Development" />
              <FooterLink href="#" label="Backend Development" />
              <FooterLink href="#" label="DevOps & Cloud" />
              <FooterLink href="#" label="Data Science" />
              <FooterLink href="#" label="Mobile Development" />
              <FooterLink href="#" label="Cybersecurity" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-blue-50 flex items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
              Stay Updated
            </h3>
            <p className="text-blue-100/80 text-sm mb-5">
              Subscribe to our newsletter for weekly resource updates.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 transition-all rounded-lg font-medium flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200/80 text-sm">
            &copy; {new Date().getFullYear()} Aura TechHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-200/80 hover:text-white transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200/80 hover:text-white transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-blue-200/80 hover:text-white transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes moveGrid {
          from { transform: translateY(0) translateX(0); }
          to { transform: translateY(-40px) translateX(-40px); }
        }
      `}</style>
    </footer>
  );
};

const FooterLink = ({ href, label }) => {
  return (
    <li>
      <a
        href={href}
        className="text-blue-100/80 hover:text-white transition-colors duration-200 text-sm flex items-start group"
      >
        <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
        {label}
      </a>
    </li>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <a
      href="#"
      className="bg-white/10 backdrop-blur-md hover:bg-white/20 p-2.5 rounded-lg transition-all duration-300 text-blue-100 hover:text-white"
    >
      {icon}
    </a>
  );
};

export default Footer;