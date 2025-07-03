
import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
const Team = () => {
  const principalInvestigator = {
    name: "Dr. Himabindu Allaka",
    role: "Principal Investigator",
    specialization: "Unmanned Systems & Autonomous Navigation",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=400&q=80",
    education: "PhD in Aerospace Engineering",
    research: "Autonomous navigation systems, multi-domain unmanned vehicles, GNSS technologies"
  };
  const mastersStudents = [{
    name: "Arjun Sharma",
    specialization: "UAV Control Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    research: "Adaptive flight control algorithms for multi-rotor systems"
  }, {
    name: "Priya Patel",
    specialization: "Underwater Robotics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    research: "AI-based navigation for autonomous underwater vehicles"
  }, {
    name: "Raj Kumar",
    specialization: "GNSS Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    research: "High-precision positioning for marine applications"
  }];
  const interns = [{
    name: "Sneha Reddy",
    specialization: "Computer Vision",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    research: "Object detection for autonomous systems"
  }, {
    name: "Vikram Singh",
    specialization: "Control Systems",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=crop&w=400&q=80",
    research: "Robust control for underwater vehicles"
  }];
  const btechStudents = [{
    name: "Aditya Gupta",
    specialization: "Embedded Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    research: "Hardware development for ROV systems"
  }, {
    name: "Kavya Nair",
    specialization: "Machine Learning",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    research: "AI algorithms for autonomous navigation"
  }, {
    name: "Rohit Verma",
    specialization: "Mechanical Design",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    research: "Propulsion systems for unmanned vehicles"
  }];
  const TeamMemberCard = ({
    member,
    showEducation = false
  }) => <div className="academic-card p-6 hover:scale-105 transition-transform duration-200">
      <div className="mb-4">
        <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-lg" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {member.name}
        </h3>
        {member.role && <p className="text-primary font-semibold mb-2">{member.role}</p>}
        <p className="text-gray-600 font-medium mb-3">{member.specialization}</p>
        <div className="border-t border-gray-200 pt-3">
          {showEducation && member.education && <p className="text-gray-500 text-sm mb-2">
              <span className="font-medium text-gray-700">Education:</span> {member.education}
            </p>}
          <p className="text-gray-500 text-sm">
            <span className="font-medium text-gray-700">Research:</span> {member.research}
          </p>
        </div>
      </div>
    </div>;
  return <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                Our Team
              </h1>
              <p className="academic-body text-lg max-w-3xl mx-auto">
                Meet the brilliant minds driving innovation in unmanned systems research at AstraM Lab.
              </p>
            </div>

            {/* Principal Investigator */}
            <div className="mb-16">
              <h2 className="academic-subheading text-center mb-8">Principal Investigator</h2>
              <div className="max-w-md mx-auto">
                <TeamMemberCard member={principalInvestigator} showEducation={true} />
              </div>
            </div>

            {/* Master's Students */}
            <div className="mb-16">
              <h2 className="academic-subheading text-center mb-8">Master's Students</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mastersStudents.map((student, index) => <TeamMemberCard key={index} member={student} />)}
              </div>
            </div>

            {/* Interns */}
            <div className="mb-16">
              <h2 className="academic-subheading text-center mb-8">Interns</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {interns.map((intern, index) => <TeamMemberCard key={index} member={intern} />)}
              </div>
            </div>

            {/* B.Tech Students */}
            <div>
              <h2 className="academic-subheading text-center mb-8">B.Tech Students</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {btechStudents.map((student, index) => <TeamMemberCard key={index} member={student} />)}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>;
};
export default Team;
