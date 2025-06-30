
import React from 'react';
import { Navigation } from '../components/Navigation';

const Team = () => {
  const principalInvestigator = {
    name: "Dr. Himabindu Allaka",
    role: "Principal Investigator",
    specialization: "Unmanned Systems & Autonomous Navigation",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=400&q=80",
    education: "PhD in Aerospace Engineering",
    research: "Autonomous navigation systems, multi-domain unmanned vehicles, GNSS technologies"
  };

  const mastersStudents = [
    {
      name: "Arjun Sharma",
      specialization: "UAV Control Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      research: "Adaptive flight control algorithms for multi-rotor systems"
    },
    {
      name: "Priya Patel",
      specialization: "Underwater Robotics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      research: "AI-based navigation for autonomous underwater vehicles"
    },
    {
      name: "Raj Kumar",
      specialization: "GNSS Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      research: "High-precision positioning for marine applications"
    }
  ];

  const interns = [
    {
      name: "Sneha Reddy",
      specialization: "Computer Vision",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      research: "Object detection for autonomous systems"
    },
    {
      name: "Vikram Singh",
      specialization: "Control Systems",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=crop&w=400&q=80",
      research: "Robust control for underwater vehicles"
    }
  ];

  const btechStudents = [
    {
      name: "Aditya Gupta",
      specialization: "Embedded Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      research: "Hardware development for ROV systems"
    },
    {
      name: "Kavya Nair",
      specialization: "Machine Learning",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      research: "AI algorithms for autonomous navigation"
    },
    {
      name: "Rohit Verma",
      specialization: "Mechanical Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      research: "Propulsion systems for unmanned vehicles"
    }
  ];

  const TeamMemberCard = ({ member, showEducation = false }) => (
    <div className="group bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105">
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
        {member.role && <p className="text-cyan-400 font-medium mb-2">{member.role}</p>}
        <p className="text-gray-300 text-sm mb-3">{member.specialization}</p>
        <div className="border-t border-cyan-500/20 pt-3">
          {showEducation && member.education && (
            <p className="text-gray-400 text-sm mb-2">
              <span className="text-cyan-400">Education:</span> {member.education}
            </p>
          )}
          <p className="text-gray-400 text-sm">
            <span className="text-cyan-400">Research:</span> {member.research}
          </p>
        </div>
      </div>
    </div>
  );

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
                Meet the brilliant minds driving innovation in unmanned systems research at AstraM Lab.
              </p>
            </div>

            {/* Principal Investigator */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Principal Investigator</h2>
              <div className="max-w-md mx-auto">
                <TeamMemberCard member={principalInvestigator} showEducation={true} />
              </div>
            </div>

            {/* Master's Students */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Master's Students</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mastersStudents.map((student, index) => (
                  <TeamMemberCard key={index} member={student} />
                ))}
              </div>
            </div>

            {/* Interns */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Interns</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {interns.map((intern, index) => (
                  <TeamMemberCard key={index} member={intern} />
                ))}
              </div>
            </div>

            {/* B.Tech Students */}
            <div>
              <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">B.Tech Students</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {btechStudents.map((student, index) => (
                  <TeamMemberCard key={index} member={student} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
