
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/987fcbde-e190-4da7-b505-f08d24cdb828.png" 
              alt="ASTRA Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-bold text-white">ASTRA Lab</h1>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/"
              className={`transition-colors duration-200 hover:text-cyan-400 ${
                isActive('/') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`transition-colors duration-200 hover:text-cyan-400 ${
                isActive('/about') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-gray-300'
              }`}
            >
              About
            </Link>
            <Link 
              to="/team"
              className={`transition-colors duration-200 hover:text-cyan-400 ${
                isActive('/team') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-gray-300'
              }`}
            >
              Team
            </Link>
            <Link 
              to="/research"
              className={`transition-colors duration-200 hover:text-cyan-400 ${
                isActive('/research') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-gray-300'
              }`}
            >
              Research
            </Link>
            <Link 
              to="/publications"
              className={`transition-colors duration-200 hover:text-cyan-400 ${
                isActive('/publications') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-gray-300'
              }`}
            >
              Publications
            </Link>
            <Link 
              to="/press"
              className={`transition-colors duration-200 hover:text-cyan-400 ${
                isActive('/press') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-gray-300'
              }`}
            >
              Press
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors duration-200 hover:text-cyan-400 ${
                isActive('/contact') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-gray-300'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
