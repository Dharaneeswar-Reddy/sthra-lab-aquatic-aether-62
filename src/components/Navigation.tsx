
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="transition-transform duration-300 group-hover:scale-110">
              <img 
                src="/lovable-uploads/987fcbde-e190-4da7-b505-f08d24cdb828.png" 
                alt="ASTHRA Logo" 
                className="w-10 h-10 object-contain drop-shadow-lg"
              />
            </div>
            <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              ASTHRA Lab
            </h1>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/"
              className={`transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                isActive('/') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-white/90'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                isActive('/about') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-white/90'
              }`}
            >
              About
            </Link>
            <Link 
              to="/team"
              className={`transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                isActive('/team') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-white/90'
              }`}
            >
              Team
            </Link>
            <Link 
              to="/research"
              className={`transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                isActive('/research') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-white/90'
              }`}
            >
              Research
            </Link>
            <Link 
              to="/publications"
              className={`transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                isActive('/publications') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-white/90'
              }`}
            >
              Publications
            </Link>
            <Link 
              to="/press"
              className={`transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                isActive('/press') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-white/90'
              }`}
            >
              Press
            </Link>
            <Link 
              to="/contact"
              className={`transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                isActive('/contact') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-white/90'
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
