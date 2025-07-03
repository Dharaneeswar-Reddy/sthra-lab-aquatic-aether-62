
import React from 'react';

export const OngoingProjectsSection = () => {
  const projects = [
    {
      title: "Autonomous Underwater Vehicle Navigation",
      description: "Advanced AI-powered navigation systems for deep-sea exploration and marine research applications.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      category: "AUV Research"
    },
    {
      title: "Multi-Domain Unmanned Systems",
      description: "Integration of aerial and underwater platforms for comprehensive environmental monitoring.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      category: "System Integration"
    },
    {
      title: "High-Precision GNSS Applications",
      description: "Development of enhanced positioning systems for marine robotics and autonomous navigation.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=800&q=80",
      category: "Navigation Systems"
    }
  ];

  return (
    <section className="section-padding bg-blue-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="academic-heading">
            Ongoing Projects
          </h2>
          <p className="academic-body text-lg max-w-3xl mx-auto">
            Explore our current research initiatives pushing the boundaries of autonomous systems technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="academic-card overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
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
      </div>
    </section>
  );
};
