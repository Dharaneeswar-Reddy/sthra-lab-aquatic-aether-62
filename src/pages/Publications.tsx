
import React from 'react';
import { Navigation } from '../components/Navigation';

const Publications = () => {
  const publications = [
    {
      title: "AI-Driven Navigation Systems for Autonomous Underwater Vehicles in Complex Marine Environments",
      authors: "S. Chen, M. Rodriguez, E. Zhang",
      journal: "IEEE Transactions on Robotics",
      year: "2024",
      type: "Journal Article",
      abstract: "This paper presents a novel approach to autonomous underwater vehicle navigation using deep reinforcement learning...",
      doi: "10.1109/TRO.2024.001234"
    },
    {
      title: "Hydrodynamic Optimization of Energy-Efficient Propulsion Systems for Marine Robotics",
      authors: "M. Rodriguez, S. Chen, A. Thompson",
      journal: "Journal of Marine Engineering & Technology",
      year: "2024",
      type: "Journal Article",
      abstract: "We investigate advanced hydrodynamic design principles for next-generation underwater vehicle propulsion...",
      doi: "10.1080/20464177.2024.001234"
    },
    {
      title: "Multi-Domain Autonomous Systems: Bridging Aerial and Aquatic Operations",
      authors: "E. Zhang, S. Chen, J. Wilson",
      journal: "Proceedings of IEEE ICRA 2024",
      year: "2024",
      type: "Conference Paper",
      abstract: "This work introduces a hybrid platform capable of seamless transitions between aerial and underwater operations...",
      doi: "10.1109/ICRA.2024.001234"
    },
    {
      title: "Computer Vision Techniques for Underwater Object Detection and Classification",
      authors: "A. Thompson, M. Gonzalez, S. Chen",
      journal: "Computer Vision and Image Understanding",
      year: "2023",
      type: "Journal Article",
      abstract: "We present state-of-the-art computer vision algorithms specifically designed for challenging underwater environments...",
      doi: "10.1016/j.cviu.2023.001234"
    },
    {
      title: "Reinforcement Learning for Adaptive Control in Dynamic Aquatic Environments",
      authors: "M. Gonzalez, E. Zhang, S. Chen",
      journal: "Proceedings of NeurIPS 2023",
      year: "2023",
      type: "Conference Paper",
      abstract: "This paper explores the application of deep reinforcement learning to adaptive control systems...",
      doi: "10.5555/neurips.2023.001234"
    },
    {
      title: "Sensor Fusion and Embedded Systems for Autonomous Marine Vehicles",
      authors: "J. Wilson, A. Thompson, M. Rodriguez",
      journal: "IEEE Sensors Journal",
      year: "2023",
      type: "Journal Article",
      abstract: "We present an integrated sensor fusion approach combining multiple sensing modalities for robust navigation...",
      doi: "10.1109/JSEN.2023.001234"
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
                Publications
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our latest research contributions to the field of autonomous systems and marine robotics.
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
              {publications.map((pub, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                        {pub.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-2">{pub.authors}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                        <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                          {pub.type}
                        </span>
                        <span>{pub.journal}</span>
                        <span className="text-tech-yellow font-medium">{pub.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">DOI: {pub.doi}</span>
                    <button className="bg-gradient-ocean text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                      View Paper
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                For a complete list of publications, visit our profiles on academic databases.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-navy-950 transition-all duration-300">
                  Google Scholar
                </button>
                <button className="border-2 border-ocean-400 text-ocean-400 px-6 py-3 rounded-lg font-semibold hover:bg-ocean-400 hover:text-navy-950 transition-all duration-300">
                  ResearchGate
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
