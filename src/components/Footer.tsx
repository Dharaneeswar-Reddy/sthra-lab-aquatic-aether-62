import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container-width py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 md:grid-cols-8 gap-8 mb-12">
          {/* Lab Info Section */}
          <div className="lg:col-span-5 md:col-span-4">
            <div className="flex items-start space-x-4 mb-6">
              <img src="/lovable-uploads/5b8449b8-6fc4-4091-b934-a8acbcf86385.png" alt="AstraM Lab Logo" className="w-20 h-20 object-contain flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">AstraM Lab</h3>
                <p className="text-gray-300 font-medium text-lg mb-2">Autonomous Systems Technology Research and Application Methodologies</p>
                <p className="text-gray-400 text-sm leading-relaxed">Indian Institute of Technology Hyderabad</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-md">
                  Advancing the frontiers of unmanned systems through innovative research in robotics, control systems, and autonomous navigation technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Research Areas */}
          <div className="lg:col-span-3 md:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-gray-700 pb-2">Research Areas</h4>
            <ul className="space-y-3">
              <li><Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                Unmanned Aerial Vehicles
              </Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                Autonomous Underwater Vehicles
              </Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                GNSS Navigation
              </Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                Control Systems
              </Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 md:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                About Us
              </Link></li>
              <li><Link to="/publications" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                Publications
              </Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                Team
              </Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                Courses
              </Link></li>
              <li><Link to="/join-us" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                Join Us
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-gray-700 pb-2">Connect</h4>
            <div className="space-y-3">
              <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                Contact Us
              </Link>
              <Link to="/research" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                Research
              </Link>
              <a href="https://www.iith.ac.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-300"></span>
                IIT Hyderabad
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div className="text-sm text-gray-400 max-w-2xl">
              <p className="mb-3 font-medium">© 2024 ASTRAM Lab, Indian Institute of Technology Hyderabad. All rights reserved.</p>
              <p className="text-xs leading-relaxed">
                This website and its contents are licensed under academic use. Research images and content are property of AstraM Lab. 
                External images courtesy of respective contributors under appropriate licenses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                Terms of Use
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                Academic Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};