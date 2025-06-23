
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
            <div className="w-8 h-8 bg-gradient-ocean rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <h1 className="text-xl font-bold text-white">STHRA Lab</h1>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/"
              className={`transition-colors duration-200 ${
                isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`transition-colors duration-200 ${
                isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/research"
              className={`transition-colors duration-200 ${
                isActive('/research') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Research
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors duration-200 ${
                isActive('/contact') ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
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
