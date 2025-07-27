import React from 'react';
import { Link } from 'react-router-dom';
export const OngoingProjectsSection = () => {
  const projects = [{
    title: "Autonomous Underwater Navigation",
    description: "Developing AI-powered navigation systems for deep-sea exploration vehicles with advanced obstacle avoidance capabilities.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    category: "AUV",
    status: "Active"
  }, {
    title: "Multi-Domain Aerial Systems",
    description: "Creating hybrid UAV platforms capable of seamless air-to-water transitions for environmental monitoring applications.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
    category: "UAV",
    status: "Development"
  }, {
    title: "Precision GNSS for Marine Operations",
    description: "Implementing high-accuracy positioning systems for unmanned surface vehicles in challenging maritime environments.",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
    category: "GNSS",
    status: "Research"
  }];
  return <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="academic-heading text-blue-800">
            Ongoing Projects
          </h2>
          <p className="academic-body text-lg max-w-3xl mx-auto text-gray-900">
            Explore our current research initiatives that are shaping the future of unmanned systems technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="academic-card p-6 hover:scale-105 transition-transform duration-200">
              <div className="relative overflow-hidden mb-4 rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-blue-800 text-xs rounded-full border border-blue-200 font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Active' ? 'bg-green-100 text-green-800' : project.status === 'Development' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {project.title}
              </h3>
              <p className="academic-body mb-6 text-gray-950">
                {project.description}
              </p>
              
              <Link to="/projects" className="academic-button-primary w-full block text-center">
                Learn More
              </Link>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="academic-button-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>;
};