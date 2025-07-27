import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white border-t border-gray-200">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/lovable-uploads/987fcbde-e190-4da7-b505-f08d24cdb828.png" alt="AstraM Lab Logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-2xl font-bold">AstraM Lab</h3>
                <p className="text-gray-300">Advanced Systems for Technology Research & Autonomy</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <img src="/lovable-uploads/b5f36266-cc78-4553-a6b0-30c566abeb1c.png" alt="IIT Hyderabad Logo" className="w-10 h-10 object-contain" />
              <div>
                <p className="text-sm font-medium">Indian Institute of Technology Hyderabad</p>
                <p className="text-xs text-gray-400">Kandi, Sangareddy, Telangana 502285</p>
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
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p className="mb-2">
                © 2024 AstraM Lab, Indian Institute of Technology Hyderabad. All rights reserved.
              </p>
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
          
          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500">
            <p>
              <strong>Image Attribution:</strong> Research and background images sourced from Unsplash 
              (unsplash.com) under Unsplash License. Team member photos are placeholder images for 
              demonstration purposes only.
            </p>
            <p className="mt-2">
              <strong>Technical:</strong> Built with React, TypeScript, and Tailwind CSS. 
              Hosted with professional academic standards for research laboratory presentation.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};