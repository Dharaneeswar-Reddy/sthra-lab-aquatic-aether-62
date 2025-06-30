
import React from 'react';
import { Plane, Ship, Submarine, Satellite, Rover, Waves } from 'lucide-react';

export const ResearchInterestsSection = () => {
  const researchAreas = [
    {
      title: "UAVs",
      fullName: "Unmanned Aerial Vehicles",
      description: "Advanced autonomous flight systems and intelligent aerial platforms",
      icon: Plane,
      color: "cyan"
    },
    {
      title: "AUVs",
      fullName: "Autonomous Underwater Vehicles",
      description: "Self-navigating underwater systems for deep-sea exploration",
      icon: Submarine,
      color: "ocean"
    },
    {
      title: "ROVs",
      fullName: "Remotely Operated Vehicles",
      description: "Precision-controlled underwater vehicles for complex operations",
      icon: Submarine,
      color: "tech-yellow"
    },
    {
      title: "USVs",
      fullName: "Unmanned Surface Vehicles",
      description: "Autonomous surface platforms for marine research and operations",
      icon: Ship,
      color: "cyan"
    },
    {
      title: "GNSS Systems",
      fullName: "Global Navigation Satellite Systems",
      description: "High-precision positioning and navigation technologies",
      icon: Satellite,
      color: "ocean"
    },
    {
      title: "Mars Rovers",
      fullName: "Planetary Exploration Vehicles",
      description: "Autonomous systems for extraterrestrial exploration missions",
      icon: Rover,
      color: "tech-yellow"
    }
  ];

  return (
    <section className="py-20 bg-navy-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-tech-yellow bg-clip-text text-transparent">
            Research Interests
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our multidisciplinary research spans across various domains of unmanned systems, 
            pushing the boundaries of autonomous technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400/20 to-ocean-400/20 rounded-full border border-cyan-500/30">
                  <IconComponent className="w-8 h-8 text-cyan-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:text-cyan-400 transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-cyan-300 font-medium text-center mb-3 text-sm">
                  {area.fullName}
                </p>
                
                <p className="text-gray-300 text-center leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-tech-yellow/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};
