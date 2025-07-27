import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white border-t border-gray-200">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img src="/lovable-uploads/5b8449b8-6fc4-4091-b934-a8acbcf86385.png" alt="AstraM Lab Logo" className="w-16 h-16 object-contain flex-shrink-0" />
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold tracking-tight">AstraM Lab</h3>
                <p className="text-gray-300 font-medium">AstraM Lab</p>
                <p className="text-gray-400 text-sm mt-1">Indian Institute of Technology Hyderabad</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Research Areas</h4>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">Unmanned Aerial Vehicles</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">Autonomous Underwater Vehicles</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">GNSS Navigation</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">Control Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/publications" className="text-gray-300 hover:text-white transition-colors duration-200">Publications</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors duration-200">Team</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors duration-200">Courses</Link></li>
              <li><Link to="/join-us" className="text-gray-300 hover:text-white transition-colors duration-200">Join Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p className="mb-2">© 2024 ASTRAM Lab, Indian Institute of Technology Hyderabad. All rights reserved.</p>
              <p className="text-xs">
                This website and its contents are licensed under academic use. 
                Images courtesy of Unsplash contributors under Unsplash License.
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Use
              </Link>
              <a href="https://www.iith.ac.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                IIT Hyderabad
              </a>
            </div>
          </div>
          
          
        </div>
      </div>
    </footer>;
};