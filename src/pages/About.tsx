
import React from 'react';
import { Navigation } from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 bg-navy-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">About STHRA Lab</h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                STHRA Lab is dedicated to advancing autonomous systems through innovative research in underwater 
                and aerial vehicle technologies. We develop cutting-edge solutions for intelligent navigation, 
                sustainable operations, and robust control systems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-navy-800 p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Underwater Systems</h3>
                  <p className="text-gray-300">
                    Advanced autonomous underwater vehicles with AI-driven navigation and energy-efficient propulsion systems.
                  </p>
                </div>
                
                <div className="bg-navy-800 p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Aerial Robotics</h3>
                  <p className="text-gray-300">
                    Intelligent aerial platforms with adaptive control systems for complex environmental operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
