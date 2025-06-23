
import React from 'react';

export const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-navy-950 to-navy-900 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-ocean-300 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We advance the frontiers of autonomous systems by developing innovative technologies that enable intelligent, 
            sustainable, and robust operations in challenging aquatic and aerial environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-navy-800 to-navy-900 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Navigation</h3>
            <p className="text-gray-300 leading-relaxed">
              Developing intelligent algorithms for autonomous path planning, obstacle avoidance, and adaptive decision-making in dynamic environments.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-navy-800 to-navy-900 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Hydrodynamic Control</h3>
            <p className="text-gray-300 leading-relaxed">
              Advanced control systems for underwater vehicles, optimizing energy efficiency and maneuverability in complex aquatic conditions.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-navy-800 to-navy-900 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Hybrid Systems</h3>
            <p className="text-gray-300 leading-relaxed">
              Integrating aerial and underwater capabilities for versatile autonomous platforms that operate seamlessly across multiple domains.
            </p>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-500/5 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-ocean-500/5 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
