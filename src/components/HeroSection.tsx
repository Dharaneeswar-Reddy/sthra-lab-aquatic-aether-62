
import React from 'react';

export const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-navy-950 to-navy-900">
      <div className="text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-ocean-300 bg-clip-text text-transparent">
          STHRA Lab
        </h1>
        <p className="text-xl md:text-2xl text-cyan-200 mb-4">
          Sustainable Technologies for Hybrid Robotics & Autonomy
        </p>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Research lab focused on underwater and aerial vehicle autonomy, AI-based navigation, and hydrodynamic control systems.
        </p>
      </div>
    </section>
  );
};
