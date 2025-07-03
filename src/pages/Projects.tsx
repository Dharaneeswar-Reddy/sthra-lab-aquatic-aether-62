
import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Plane, Ship, Zap, Satellite, Car } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('UAVs');

  const categories = [
    { id: 'UAVs', name: 'UAVs', icon: Plane },
    { id: 'AUVs', name: 'AUVs', icon: Zap },
    { id: 'ROVs', name: 'ROVs', icon: Zap },
    { id: 'USVs', name: 'USVs', icon: Ship },
    { id: 'GNSS', name: 'GNSS', icon: Satellite },
    { id: 'Mars Rovers', name: 'Mars Rovers', icon: Car }
  ];

  const projectData = {
    'UAVs': [
      {
        title: "Multi-Rotor Control Systems",
        description: "Advanced flight control algorithms for stable multi-rotor operations in challenging weather conditions.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        status: "Active"
      },
      {
        title: "Autonomous Navigation for UAVs",
        description: "AI-powered navigation systems enabling autonomous flight path planning and obstacle avoidance.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
        status: "In Progress"
      }
    ],
    'AUVs': [
      {
        title: "Deep-Sea Navigation Systems",
        description: "Autonomous underwater vehicle navigation for deep-sea exploration and marine research.",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
        status: "Active"
      }
    ],
    'ROVs': [
      {
        title: "ROV Teleoperation Systems",
        description: "Advanced remote operation systems for deep-sea robotics with haptic feedback.",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=800&q=80",
        status: "Active"
      }
    ],
    'USVs': [
      {
        title: "Surface Vehicle Navigation",
        description: "Autonomous surface vehicles for marine monitoring and data collection.",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
        status: "Planning"
      }
    ],
    'GNSS': [
      {
        title: "High-Precision Positioning",
        description: "Enhanced GNSS systems for centimeter-level accuracy in marine applications.",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80",
        status: "Active"
      }
    ],
    'Mars Rovers': [
      {
        title: "Planetary Navigation Systems",
        description: "Autonomous navigation algorithms adapted for Mars rover exploration missions.",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=800&q=80",
        status: "Research"
      }
    ]
  };

  const currentProjects = projectData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h1 className="academic-heading">
                Research Projects
              </h1>
              <p className="academic-body text-lg max-w-3xl mx-auto">
                Explore our comprehensive research portfolio across multiple domains of unmanned systems technology.
              </p>
            </div>

            {/* Interactive Tab Navigation */}
            <div className="tab-container">
              <div className="tab-list">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`tab-button flex items-center space-x-2 ${
                        activeCategory === category.id ? 'tab-button-active' : ''
                      }`}
                    >
                      <IconComponent size={18} />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Projects Content */}
            <div className="max-w-6xl mx-auto">
              <div className="academic-card p-8 mb-8 border-l-4 border-blue-800">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">{activeCategory} Research</h2>
                <p className="academic-body">
                  Advanced research and development in {activeCategory.toLowerCase()} technology, 
                  focusing on autonomous systems, navigation, and control mechanisms.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProjects.map((project, index) => (
                  <div key={index} className="academic-card overflow-hidden hover:scale-105 transition-transform duration-200">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Active' ? 'bg-green-100 text-green-800' :
                          project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">
                        {project.title}
                      </h3>
                      <p className="academic-body mb-4">
                        {project.description}
                      </p>
                      <button className="academic-button-primary w-full">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {currentProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="academic-body text-lg">Projects in this category are coming soon.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
