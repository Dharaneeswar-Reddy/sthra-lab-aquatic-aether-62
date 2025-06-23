
import React from 'react';
import { Navigation } from '../components/Navigation';

const Research = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 bg-navy-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-cyan-400">Research Areas</h1>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-navy-800 to-navy-900 p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">AI Navigation Systems</h3>
                  <p className="text-gray-300">
                    Developing machine learning algorithms for autonomous path planning and real-time decision making in dynamic environments.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-navy-800 to-navy-900 p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Hydrodynamic Control</h3>
                  <p className="text-gray-300">
                    Advanced control systems optimizing energy efficiency and maneuverability for underwater vehicles in complex aquatic conditions.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-navy-800 to-navy-900 p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Hybrid Systems Integration</h3>
                  <p className="text-gray-300">
                    Creating versatile platforms that seamlessly operate across multiple domains - air, surface, and underwater.
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

export default Research;
