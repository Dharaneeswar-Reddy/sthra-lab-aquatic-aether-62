
import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-size background image - High-tech underwater robotics/submarine image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo with floating animation */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="animate-float">
            <img 
              src="/lovable-uploads/987fcbde-e190-4da7-b505-f08d24cdb828.png" 
              alt="ASTRA Logo" 
              className="w-32 h-32 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        
        {/* Main heading with slide-up animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-ocean-300 bg-clip-text text-transparent animate-slide-up">
          ASTRA Lab
        </h1>
        
        {/* Subtitle with delayed slide-up animation */}
        <p className="text-xl md:text-2xl text-cyan-200 mb-4 animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          Advanced Systems for Technology Research & Autonomy
        </p>
        
        {/* Description with delayed fade-in animation */}
        <p className="text-lg text-gray-200 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards] drop-shadow-lg">
          Research lab focused on underwater and aerial vehicle autonomy, AI-based navigation, and hydrodynamic control systems.
        </p>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
