
import React from 'react';

interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-ocean-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-tech-yellow rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-drift opacity-40"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-ocean-400 rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-tech-yellow rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950/50"></div>
      </div>

      {/* Parallax AUV/Drone silhouettes */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* AUV Silhouette */}
        <div className="absolute left-20 top-1/4 opacity-20">
          <svg width="120" height="40" viewBox="0 0 120 40" className="text-cyan-400 animate-drift">
            <path
              d="M10 20 L25 15 L85 15 L110 20 L85 25 L25 25 Z M85 20 L100 10 M85 20 L100 30 M20 20 L5 15 M20 20 L5 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Drone Silhouette */}
        <div className="absolute right-20 bottom-1/4 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-ocean-400 animate-float">
            <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="80" cy="20" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="20" cy="80" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="80" cy="80" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="40" y="40" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="35" y1="50" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="65" y1="50" x2="80" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="35" x2="20" y2="80" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="65" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-ocean-300 to-tech-yellow bg-clip-text text-transparent leading-tight">
            STHRA Lab
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-200 mb-4 font-light">
            Sustainable Technologies for Hybrid Robotics & Autonomy
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of autonomous systems through cutting-edge research in underwater and aerial vehicle autonomy, AI-driven navigation, and advanced hydrodynamic control.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-ocean px-8 py-4 rounded-lg text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Explore Research
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-navy-950 transition-all duration-300">
              View Publications
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Tech grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};
