import React from 'react';
import { Plane, Anchor, Zap, Satellite, Car, Cog } from 'lucide-react';
export const ResearchInterestsSection = () => {
  const interests = [{
    icon: Plane,
    title: "Unmanned Aerial Vehicles (UAVs)",
    description: "Advanced control systems, autonomous navigation, and multi-rotor platforms for diverse applications."
  }, {
    icon: Anchor,
    title: "Autonomous Underwater Vehicles (AUVs)",
    description: "Deep-sea exploration, underwater navigation systems, and marine robotics technology."
  }, {
    icon: Zap,
    title: "Remotely Operated Vehicles (ROVs)",
    description: "Teleoperation systems, haptic feedback, and precision underwater manipulation."
  }, {
    icon: Anchor,
    title: "Unmanned Surface Vehicles (USVs)",
    description: "Maritime surveillance, oceanographic research, and surface navigation systems."
  }, {
    icon: Satellite,
    title: "GNSS & Positioning Systems",
    description: "High-precision positioning, navigation algorithms, and GPS/GNSS applications."
  }, {
    icon: Car,
    title: "Mars Rover Technology",
    description: "Planetary exploration, extreme environment navigation, and autonomous rover systems."
  }];
  return <section className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="academic-heading text-blue-800">
            Research Interests
          </h2>
          <p className="academic-body text-lg max-w-3xl mx-auto text-black">
            Our multidisciplinary research spans across various domains of unmanned systems technology, 
            focusing on autonomous navigation, control systems, and advanced robotics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
          const IconComponent = interest.icon;
          return <div key={index} className="academic-card p-8 text-center hover:scale-105 transition-transform duration-200">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
                    <IconComponent className="w-8 h-8 text-blue-800" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {interest.title}
                </h3>
                <p className="academic-body text-black leading-relaxed">
                  {interest.description}
                </p>
              </div>;
        })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Join Our Research Team
            </h3>
            <p className="text-lg text-black mb-6 max-w-2xl mx-auto">
              We welcome passionate researchers, graduate students, and research interns 
              to contribute to cutting-edge unmanned systems research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="academic-button-primary">
                Research Positions
              </button>
              <button className="academic-button-secondary">
                Student Internships
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};