
import React from 'react';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-size background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }} 
      />
      
      {/* Blue overlay for better text readability */}
      <div className="hero-overlay absolute inset-0" />
      
      {/* Top logos */}
      <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-8 z-10">
        <div className="flex items-center space-x-4">
          <div className="hero-text">
            <h3 className="text-lg font-bold">AstraM Lab</h3>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hero-text text-right">
            <h3 className="text-lg font-bold">IIT Hyderabad</h3>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo with floating animation */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="animate-float">
            <img 
              src="/lovable-uploads/987fcbde-e190-4da7-b505-f08d24cdb828.png" 
              alt="AstraM Logo" 
              className="w-32 h-32 object-contain drop-shadow-2xl" 
            />
          </div>
        </div>
        
        {/* Main heading with slide-up animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text animate-slide-up">
          AstraM Lab
        </h1>
        
        {/* Subtitle with delayed slide-up animation */}
        <p className="text-xl md:text-2xl hero-text mb-4 animate-slide-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          Advanced Systems for Technology Research & Autonomy
        </p>
        
        {/* Description with delayed fade-in animation */}
        <p className="text-lg hero-text max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards] drop-shadow-lg">
          IIT Hyderabad research lab advancing frontier research in unmanned systems across air, water, and underwater domains.
        </p>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
