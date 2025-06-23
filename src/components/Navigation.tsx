
import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy-950/95 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">STHRA Lab</h1>
              <p className="text-cyan-400 text-xs">Autonomous Systems Research</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
              Mission
            </a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
              Projects
            </a>
            <a href="#research" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
              Research
            </a>
            <button className="bg-gradient-ocean px-6 py-2 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
