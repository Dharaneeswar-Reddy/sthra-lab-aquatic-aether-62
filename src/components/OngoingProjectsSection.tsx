
import React from 'react';
import { Link } from 'react-router-dom';

export const OngoingProjectsSection = () => {
  const projects = [
    {
      title: "Autonomous Underwater Navigation",
      description: "Developing AI-powered navigation systems for deep-sea exploration vehicles with advanced obstacle avoidance capabilities.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      category: "AUV",
      status: "Active"
    },
    {
      title: "Multi-Domain Aerial Systems",
      description: "Creating hybrid UAV platforms capable of seamless air-to-water transitions for environmental monitoring applications.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
      category: "UAV",
      status: "Development"
    },
    {
      title: "Precision GNSS for Marine Operations",
      description: "Implementing high-accuracy positioning systems for unmanned surface vehicles in challenging maritime environments.",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      category: "GNSS",
      status: "Research"
    },
    {
      title: "ROV Control Intelligence",
      description: "Advanced haptic feedback and AI-assisted control systems for precision underwater manipulation tasks.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      category: "ROV",
      status: "Active"
    },
    {
      title: "Mars Terrain Navigation",
      description: "Developing autonomous navigation algorithms for planetary rovers operating in extreme Martian conditions.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
      category: "Mars Rover",
      status: "Research"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-tech-yellow bg-clip-text text-transparent">
            Ongoing Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our current research initiatives that are shaping the future of unmanned systems technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active' ? 'bg-cyan-400 text-navy-950' :
                    project.status === 'Development' ? 'bg-tech-yellow text-navy-950' :
                    'bg-ocean-400 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <Link 
                  to="/projects"
                  className="w-full block text-center bg-gradient-to-r from-cyan-500 to-ocean-500 text-white py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-navy-950 transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-ocean-500/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};
