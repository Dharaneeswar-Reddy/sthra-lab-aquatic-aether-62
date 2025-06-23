
import React from 'react';
import { Navigation } from '../components/Navigation';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Principal Investigator",
      specialization: "Underwater Robotics & AI Navigation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=400&q=80",
      education: "PhD in Robotics, MIT",
      research: "Autonomous underwater vehicle navigation, machine learning for marine environments"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Senior Research Scientist",
      specialization: "Hydrodynamic Control Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      education: "PhD in Mechanical Engineering, Stanford",
      research: "Advanced propulsion systems, energy-efficient underwater vehicle design"
    },
    {
      name: "Dr. Emily Zhang",
      role: "Research Scientist",
      specialization: "Aerial-Aquatic Hybrid Systems",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      education: "PhD in Aerospace Engineering, Caltech",
      research: "Multi-domain vehicle design, adaptive control systems"
    },
    {
      name: "Alex Thompson",
      role: "PhD Candidate",
      specialization: "Computer Vision & Sensing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      education: "MS in Computer Science, UC Berkeley",
      research: "Underwater computer vision, sensor fusion for autonomous navigation"
    },
    {
      name: "Maria Gonzalez",
      role: "PhD Candidate",
      specialization: "Machine Learning Applications",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      education: "MS in Artificial Intelligence, Carnegie Mellon",
      research: "Deep learning for underwater object detection, reinforcement learning"
    },
    {
      name: "James Wilson",
      role: "Research Engineer",
      specialization: "Hardware Development",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=crop&w=400&q=80",
      education: "MS in Electrical Engineering, Georgia Tech",
      research: "Sensor integration, embedded systems for autonomous vehicles"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-ocean-300 bg-clip-text text-transparent">
                Our Team
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the brilliant minds driving innovation in autonomous systems and marine robotics at STHRA Lab.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-3">{member.specialization}</p>
                    <div className="border-t border-cyan-500/20 pt-3">
                      <p className="text-gray-400 text-sm mb-2">
                        <span className="text-cyan-400">Education:</span> {member.education}
                      </p>
                      <p className="text-gray-400 text-sm">
                        <span className="text-cyan-400">Research:</span> {member.research}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
