
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-bg border-t border-blue-700">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/987fcbde-e190-4da7-b505-f08d24cdb828.png" 
                alt="AstraM Lab Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">AstraM Lab</h3>
                <p className="text-blue-100">Advanced Systems for Technology Research & Autonomy</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Advancing the frontiers of autonomous systems through innovative research in unmanned vehicles, 
              AI-driven navigation, and sustainable technologies at IIT Hyderabad.
            </p>
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/b5f36266-cc78-4553-a6b0-30c566abeb1c.png" 
                alt="IIT Hyderabad Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="text-sm font-medium text-white">Indian Institute of Technology Hyderabad</p>
                <p className="text-xs text-blue-200">Kandi, Sangareddy, Telangana 502285</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Research Areas</h4>
            <ul className="space-y-2">
              <li><Link to="/projects" className="footer-link">Unmanned Aerial Vehicles</Link></li>
              <li><Link to="/projects" className="footer-link">Autonomous Underwater Vehicles</Link></li>
              <li><Link to="/projects" className="footer-link">GNSS Navigation</Link></li>
              <li><Link to="/projects" className="footer-link">Control Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/publications" className="footer-link">Publications</Link></li>
              <li><Link to="/team" className="footer-link">Team</Link></li>
              <li><Link to="/courses" className="footer-link">Courses</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-200">
              <p className="mb-2 text-white font-medium">
                © 2024 AstraM Lab, Indian Institute of Technology Hyderabad. All rights reserved.
              </p>
              <p className="text-xs">
                This website and its contents are licensed under academic use. 
                Images courtesy of Unsplash contributors under Unsplash License.
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <Link to="/contact" className="footer-link">
                Privacy Policy
              </Link>
              <Link to="/contact" className="footer-link">
                Terms of Use
              </Link>
              <a 
                href="https://www.iith.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                IIT Hyderabad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
