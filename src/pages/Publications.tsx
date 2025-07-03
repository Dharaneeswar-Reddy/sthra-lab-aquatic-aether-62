import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FileText, Download } from 'lucide-react';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('research');

  const researchPapers = [
    {
      title: "Autonomous Navigation Systems for Deep-Sea Exploration: A Comprehensive Study",
      authors: "H. Allaka, A. Sharma, P. Patel",
      venue: "IEEE Transactions on Robotics and Automation",
      year: "2024",
      abstract: "This paper presents a comprehensive study on autonomous navigation systems for deep-sea exploration...",
      doi: "10.1109/TRA.2024.001234",
      pdfLink: "#"
    },
    {
      title: "Multi-Domain Unmanned Systems: Integration of Aerial and Underwater Platforms",
      authors: "H. Allaka, R. Kumar, S. Reddy",
      venue: "Journal of Unmanned Systems Technology",
      year: "2024",
      abstract: "We investigate the integration challenges and solutions for multi-domain unmanned systems...",
      doi: "10.1016/j.just.2024.001234",
      pdfLink: "#"
    },
    {
      title: "High-Precision GNSS Applications in Marine Robotics: Challenges and Solutions",
      authors: "R. Kumar, H. Allaka, V. Singh",
      venue: "GPS Solutions Journal",
      year: "2023",
      abstract: "This work addresses the unique challenges of implementing high-precision GNSS in marine environments...",
      doi: "10.1007/s10291-023-001234",
      pdfLink: "#"
    }
  ];

  const conferencePapers = [
    {
      title: "AI-Powered Obstacle Avoidance for Autonomous Underwater Vehicles",
      authors: "P. Patel, H. Allaka, A. Gupta",
      venue: "Proceedings of IEEE ICRA 2024",
      year: "2024",
      abstract: "This paper presents a novel AI-powered obstacle avoidance system for AUVs operating in complex underwater environments...",
      doi: "10.1109/ICRA.2024.001234",
      pdfLink: "#"
    },
    {
      title: "Adaptive Control Systems for Multi-Rotor UAVs in Turbulent Conditions",
      authors: "A. Sharma, H. Allaka, K. Nair",
      venue: "International Conference on Unmanned Aircraft Systems (ICUAS 2024)",
      year: "2024",
      abstract: "We propose adaptive control algorithms that enable stable flight of multi-rotor UAVs in challenging atmospheric conditions...",
      doi: "10.1109/ICUAS.2024.001234",
      pdfLink: "#"
    },
    {
      title: "Machine Learning Approaches for Autonomous Mars Rover Navigation",
      authors: "K. Nair, H. Allaka, R. Verma",
      venue: "IEEE Aerospace Conference 2023",
      year: "2023",
      abstract: "This work explores machine learning techniques for autonomous navigation of Mars rovers in extreme planetary conditions...",
      doi: "10.1109/AERO.2023.001234",
      pdfLink: "#"
    },
    {
      title: "Haptic Feedback Systems for ROV Teleoperation in Deep-Sea Environments",
      authors: "V. Singh, H. Allaka, S. Reddy",
      venue: "Proceedings of MTS/IEEE OCEANS 2023",
      year: "2023",
      abstract: "We present advanced haptic feedback systems that enhance human-robot interaction in deep-sea ROV operations...",
      doi: "10.23919/OCEANS.2023.001234",
      pdfLink: "#"
    }
  ];

  const PublicationCard = ({ publication }) => (
    <div className="academic-card p-6 hover:scale-105 transition-transform duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-800 mb-2 hover:text-blue-900 transition-colors duration-300 cursor-pointer">
            {publication.title}
          </h3>
          <p className="text-blue-800 font-medium mb-2">{publication.authors}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-700 mb-3">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200">
              {publication.venue}
            </span>
            <span className="text-blue-800 font-medium">{publication.year}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <FileText className="w-5 h-5 text-blue-800" />
        </div>
      </div>
      
      <p className="academic-body mb-4 leading-relaxed">
        {publication.abstract}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-blue-600">DOI: {publication.doi}</span>
        <button className="academic-button-primary flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <span>PDF</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h1 className="academic-heading">
                Publications
              </h1>
              <p className="academic-body text-lg max-w-3xl mx-auto">
                Explore our latest research contributions to the field of unmanned systems and autonomous technology.
              </p>
            </div>

            {/* Interactive Tab Navigation */}
            <div className="tab-container">
              <div className="tab-list">
                <button
                  onClick={() => setActiveTab('research')}
                  className={`tab-button ${
                    activeTab === 'research' ? 'tab-button-active' : ''
                  }`}
                >
                  Research Papers
                </button>
                <button
                  onClick={() => setActiveTab('conference')}
                  className={`tab-button ${
                    activeTab === 'conference' ? 'tab-button-active' : ''
                  }`}
                >
                  Conference Papers
                </button>
              </div>
            </div>

            {/* Publications List */}
            <div className="max-w-6xl mx-auto space-y-6">
              {activeTab === 'research' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Research Papers</h2>
                  {researchPapers.map((paper, index) => (
                    <PublicationCard key={index} publication={paper} />
                  ))}
                </div>
              )}

              {activeTab === 'conference' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Conference Papers</h2>
                  {conferencePapers.map((paper, index) => (
                    <PublicationCard key={index} publication={paper} />
                  ))}
                </div>
              )}
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
      <Footer />
    </div>
  );
};

export default Publications;
