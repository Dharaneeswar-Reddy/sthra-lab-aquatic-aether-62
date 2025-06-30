import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Plane, Ship, Zap, Satellite, Car, Waves } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('UAVs');

  const categories = [
    { id: 'UAVs', name: 'UAVs', icon: Plane, color: 'cyan' },
    { id: 'AUVs', name: 'AUVs', icon: Zap, color: 'ocean' },
    { id: 'ROVs', name: 'ROVs', icon: Zap, color: 'tech-yellow' },
    { id: 'USVs', name: 'USVs', icon: Ship, color: 'cyan' },
    { id: 'GNSS', name: 'GNSS', icon: Satellite, color: 'ocean' },
    { id: 'Mars Rovers', name: 'Mars Rovers', icon: Car, color: 'tech-yellow' }
  ];

  const projectData = {
    'UAVs': {
      description: "Our UAV research focuses on developing advanced autonomous aerial systems with intelligent flight control, adaptive navigation, and multi-mission capabilities for various applications including surveillance, mapping, and environmental monitoring.",
      projects: [
        {
          title: "Adaptive Multi-Rotor Control System",
          image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
          description: "Advanced control algorithms for stable flight in turbulent conditions",
          progress: 85,
          publications: ["ICUAS 2024", "IEEE Control Systems"]
        },
        {
          title: "Swarm Intelligence for UAV Coordination",
          image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
          description: "Distributed algorithms for coordinated multi-UAV operations",
          progress: 70,
          publications: ["ICRA 2024"]
        }
      ]
    },
    'AUVs': {
      description: "Our AUV research encompasses autonomous underwater navigation, deep-sea exploration systems, and AI-powered obstacle avoidance for complex underwater environments and marine research applications.",
      projects: [
        {
          title: "Deep-Sea Navigation System",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
          description: "AI-powered navigation for autonomous underwater exploration",
          progress: 90,
          publications: ["IEEE Transactions on Robotics", "ICRA 2024"]
        },
        {
          title: "Underwater Object Detection",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
          description: "Computer vision systems for underwater object recognition",
          progress: 75,
          publications: ["Computer Vision and Image Understanding"]
        }
      ]
    },
    'ROVs': {
      description: "ROV research at AstraM Lab focuses on haptic feedback systems, precision control mechanisms, and human-robot interaction for complex underwater manipulation tasks and deep-sea operations.",
      projects: [
        {
          title: "Haptic Feedback Control System",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
          description: "Advanced haptic feedback for deep-sea ROV operations",
          progress: 80,
          publications: ["OCEANS 2023"]
        },
        {
          title: "Precision Manipulation Interface",
          image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
          description: "High-precision control systems for underwater manipulation",
          progress: 65,
          publications: ["IEEE Robotics & Automation Magazine"]
        }
      ]
    },
    'USVs': {
      description: "USV research involves autonomous surface vehicle navigation, marine environmental monitoring, and integration with underwater systems for comprehensive ocean exploration missions.",
      projects: [
        {
          title: "Autonomous Surface Monitoring",
          image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
          description: "Environmental monitoring using autonomous surface vehicles",
          progress: 70,
          publications: ["Marine Technology Society Journal"]
        },
        {
          title: "Multi-Platform Coordination",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
          description: "Coordinated operations between USVs and AUVs",
          progress: 60,
          publications: ["Ocean Engineering"]
        }
      ]
    },
    'GNSS': {
      description: "GNSS research focuses on high-precision positioning systems for marine applications, real-time kinematic solutions, and integration with autonomous vehicle navigation systems.",
      projects: [
        {
          title: "Marine GNSS Precision System",
          image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
          description: "High-precision GNSS for marine robotics applications",
          progress: 85,
          publications: ["GPS Solutions Journal"]
        },
        {
          title: "RTK Navigation Integration",
          image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
          description: "Real-time kinematic positioning for autonomous vehicles",
          progress: 75,
          publications: ["Navigation Journal"]
        }
      ]
    },
    'Mars Rovers': {
      description: "Mars rover research involves autonomous navigation in extreme planetary conditions, terrain analysis systems, and robust control mechanisms for extraterrestrial exploration missions.",
      projects: [
        {
          title: "Autonomous Mars Navigation",
          image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
          description: "AI-powered navigation for Mars rover exploration",
          progress: 60,
          publications: ["IEEE Aerospace Conference"]
        },
        {
          title: "Terrain Analysis System",
          image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
          description: "Advanced terrain analysis for planetary exploration",
          progress: 55,
          publications: ["Planetary and Space Science"]
        }
      ]
    }
  };

  const currentData = projectData[activeCategory];

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-tech-yellow bg-clip-text text-transparent">
                Research Projects
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive research portfolio across multiple domains of unmanned systems technology.
              </p>
            </div>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-cyan-400 text-navy-950'
                        : 'bg-navy-800/50 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/40'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Category Content */}
            <div className="max-w-6xl mx-auto">
              {/* Category Description */}
              <div className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-12">
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">{activeCategory}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentData.description}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {currentData.projects.map((project, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-cyan-400">Progress</span>
                          <span className="text-sm text-cyan-400">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-navy-800 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-400 to-ocean-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Related Publications */}
                      <div>
                        <h4 className="text-sm font-medium text-cyan-400 mb-2">Related Publications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.publications.map((pub, pubIndex) => (
                            <span 
                              key={pubIndex}
                              className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-md border border-cyan-500/30"
                            >
                              {pub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
