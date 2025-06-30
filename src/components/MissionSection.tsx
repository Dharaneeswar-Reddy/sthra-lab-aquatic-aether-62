
import React from 'react';

export const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-ocean-300 bg-clip-text text-transparent">
            Our Mission
          </h2>
          
          <div className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
            <p className="text-2xl md:text-3xl text-white leading-relaxed font-light">
              "Advancing frontier research in unmanned systems across air, water, and underwater domains."
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-navy-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Innovation</h3>
              <p className="text-gray-300">
                Pioneering cutting-edge technologies for autonomous navigation and control systems.
              </p>
            </div>
            
            <div className="bg-navy-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Excellence</h3>
              <p className="text-gray-300">
                Maintaining the highest standards in research quality and scientific rigor.
              </p>
            </div>
            
            <div className="bg-navy-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Impact</h3>
              <p className="text-gray-300">
                Creating solutions that address real-world challenges in unmanned systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
