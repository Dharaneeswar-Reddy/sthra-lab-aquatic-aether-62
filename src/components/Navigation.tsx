
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-blue-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-3">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/lovable-uploads/b5f36266-cc78-4553-a6b0-30c566abeb1c.png" 
                  alt="IIT Hyderabad Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <h1 className="text-xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
              AstraM Lab | IIT Hyderabad
            </h1>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/"
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/team"
              className={`nav-link ${isActive('/team') ? 'nav-link-active' : ''}`}
            >
              Team
            </Link>
            <Link 
              to="/projects"
              className={`nav-link ${isActive('/projects') ? 'nav-link-active' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/publications"
              className={`nav-link ${isActive('/publications') ? 'nav-link-active' : ''}`}
            >
              Publications
            </Link>
            <Link 
              to="/awards"
              className={`nav-link ${isActive('/awards') ? 'nav-link-active' : ''}`}
            >
              Awards
            </Link>
            <Link 
              to="/courses"
              className={`nav-link ${isActive('/courses') ? 'nav-link-active' : ''}`}
            >
              Courses
            </Link>
            <Link 
              to="/careers"
              className={`nav-link ${isActive('/careers') ? 'nav-link-active' : ''}`}
            >
              Careers
            </Link>
            <Link 
              to="/blog"
              className={`nav-link ${isActive('/blog') ? 'nav-link-active' : ''}`}
            >
              Blog
            </Link>
            <Link 
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
