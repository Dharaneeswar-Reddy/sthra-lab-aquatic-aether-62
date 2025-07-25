
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-3">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/iit-hyderabad-logo.png" 
                  alt="IIT Hyderabad Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              AstraM Lab | IIT Hyderabad
            </h1>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/team"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/team') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
              }`}
            >
              Team
            </Link>
            <Link 
              to="/projects"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/projects') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/publications"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/publications') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
              }`}
            >
              Publications
            </Link>
            <Link 
              to="/awards"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/awards') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
              }`}
            >
              Awards
            </Link>
            <Link 
              to="/courses"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/courses') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
              }`}
            >
              Courses
            </Link>
            <Link 
              to="/careers"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/careers') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
              }`}
            >
              Careers
            </Link>
            <Link 
              to="/blog"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/blog') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact"
              className={`transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                isActive('/contact') ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
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
