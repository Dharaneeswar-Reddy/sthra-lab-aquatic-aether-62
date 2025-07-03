
import React from 'react';
import { Navigation } from '../components/Navigation';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      year: "2024",
      award: "Excellence in Autonomous Systems Research",
      recipient: "Dr. Himabindu Allaka",
      organization: "IEEE Robotics and Automation Society",
      description: "Recognized for outstanding contributions to autonomous underwater vehicle navigation systems.",
      icon: Trophy,
      color: "tech-yellow"
    },
    {
      year: "2024",
      award: "Best Paper Award - ICRA 2024",
      recipient: "Priya Patel, Dr. Himabindu Allaka",
      organization: "IEEE International Conference on Robotics and Automation",
      description: "AI-Powered Obstacle Avoidance for Autonomous Underwater Vehicles",
      icon: Award,
      color: "cyan"
    },
    {
      year: "2023",
      award: "Young Investigator Award",
      recipient: "Dr. Himabindu Allaka",
      organization: "Indian National Academy of Engineering",
      description: "For exceptional research contributions in unmanned systems technology.",
      icon: Medal,
      color: "ocean"
    },
    {
      year: "2023",
      award: "Outstanding Graduate Student Award",
      recipient: "Arjun Sharma",
      organization: "IIT Hyderabad",
      description: "For excellence in UAV control systems research and academic performance.",
      icon: Star,
      color: "tech-yellow"
    },
    {
      year: "2023",
      award: "Best Poster Award - OCEANS 2023",
      recipient: "Vikram Singh, Dr. Himabindu Allaka",
      organization: "MTS/IEEE OCEANS Conference",
      description: "Haptic Feedback Systems for ROV Teleoperation in Deep-Sea Environments",
      icon: Award,
      color: "cyan"
    },
    {
      year: "2022",
      award: "Innovation in Marine Technology",
      recipient: "AstraM Lab Team",
      organization: "Marine Technology Society",
      description: "For groundbreaking research in autonomous underwater systems.",
      icon: Trophy,
      color: "ocean"
    },
    {
      year: "2022",
      award: "Early Career Researcher Grant",
      recipient: "Dr. Himabindu Allaka",
      organization: "Department of Science and Technology, India",
      description: "₹50 Lakhs funding for multi-domain unmanned systems research.",
      icon: Medal,
      color: "tech-yellow"
    },
    {
      year: "2021",
      award: "Best M.Tech Thesis Award",
      recipient: "Raj Kumar",
      organization: "IIT Hyderabad",
      description: "For thesis on High-Precision GNSS Applications in Marine Robotics.",
      icon: Award,
      color: "cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-tech-yellow bg-clip-text text-transparent">
                Awards & Recognition
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Celebrating our achievements and recognition in the field of unmanned systems research.
              </p>
            </div>

            {/* Timeline Layout */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-tech-yellow"></div>
                
                {/* Awards */}
                <div className="space-y-8">
                  {awards.map((award, index) => {
                    const IconComponent = award.icon;
                    return (
                      <div key={index} className="relative flex items-start">
                        {/* Timeline dot */}
                        <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-navy-950 z-10"></div>
                        
                        {/* Year badge */}
                        <div className="bg-gradient-to-r from-cyan-400 to-tech-yellow text-navy-950 font-bold px-4 py-2 rounded-lg mr-6 min-w-[80px] text-center">
                          {award.year}
                        </div>
                        
                        {/* Award card */}
                        <div className="flex-1 bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                          <div className="flex items-start">
                            <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-${award.color}-400/20 to-${award.color}-500/20 border border-${award.color}-500/30 mr-4 flex-shrink-0`}>
                              <IconComponent className={`w-6 h-6 text-${award.color}-400`} />
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-300">
                                {award.award}
                              </h3>
                              <p className="text-cyan-400 font-medium mb-2">{award.recipient}</p>
                              <p className="text-gray-300 text-sm mb-3">{award.organization}</p>
                              <p className="text-gray-400 leading-relaxed">{award.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Summary stats */}
            <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">8</div>
                <div className="text-gray-300">Total Awards</div>
              </div>
              <div className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-tech-yellow mb-2">3</div>
                <div className="text-gray-300">Best Paper Awards</div>
              </div>
              <div className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-ocean-400 mb-2">2</div>
                <div className="text-gray-300">Excellence Awards</div>
              </div>
              <div className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">4</div>
                <div className="text-gray-300">Years Active</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awards;
