import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FileText, Download } from 'lucide-react';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('research');

  const researchPapers = [
    {
      title: "Mitigation of vertical motion in planing crafts for enhanced operationability in seaways using passive energy absorbers–A test of concept",
      authors: "H. Allaka, M. Farid and M. Groper",
      venue: "Ocean Engineering",
      year: "2022",
      abstract: "This paper presents a comprehensive study on mitigating vertical motion in planing crafts to enhance operationability in seaways using passive energy absorbers as a test of concept...",
      doi: "Ocean Engineering 264, 112434",
      pdfLink: "#"
    },
    {
      title: "Speed–wave height operational envelope for high-speed planing craft in seaways: theoretical vs. empirical methods",
      authors: "H. Allaka and M. Groper",
      venue: "Ship Technology Research",
      year: "2021",
      abstract: "We investigate the operational envelope for high-speed planing craft in seaways, comparing theoretical and empirical methods for determining speed-wave height relationships...",
      doi: "Ship Technology Research, 2021",
      pdfLink: "#"
    },
    {
      title: "Validation and verification of a planing craft motion prediction model based on experiments conducted on full size crafts operating in real sea",
      authors: "H. Allaka and M. Groper",
      venue: "Journal of Marine Science and Technology",
      year: "2020",
      abstract: "This work presents validation and verification of a planing craft motion prediction model through experiments on full-size crafts in real sea conditions...",
      doi: "Journal of Marine Science and Technology, Vol. 25 (4), pp. 1199-1216",
      pdfLink: "#"
    },
    {
      title: "A Real Time Speed Modulation system to Improve Operational ability of Autonomous Planing Craft in A Seaway",
      authors: "H. Allaka, A.Levy, D. Levy, T. Treibitz and M. Groper",
      venue: "International Journal of Maritime Engineering",
      year: "2020",
      abstract: "This paper presents a real-time speed modulation system designed to improve the operational ability of autonomous planing craft in seaway conditions...",
      doi: "Royal Institute of Naval Architecture ,162 (Part A4), 2020",
      pdfLink: "#"
    }
  ];

  const conferencePapers = [
    {
      title: "An Autonomous Speed Setting System to Enhance Operation of Unmanned Planing Crafts in a Seaway",
      authors: "H. Allaka, A. Levy, D. Levy, T. Treibitz and M. Groper",
      venue: "6th International Conference on Ship & Offshore Technology",
      year: "2019",
      abstract: "This paper presents an autonomous speed setting system to enhance the operation of unmanned planing crafts in seaway conditions...",
      doi: "Proceedings of 6th International Conference on Ship & Offshore Technology, pp. 189-196",
      pdfLink: "#"
    },
    {
      title: "Vision-aided Speed Modulation System to Enhance Seaworthiness of Autonomous Planing Crafts",
      authors: "H. Allaka, D. Levy, T. Treibitz and M. Groper",
      venue: "15th Workshop on Positioning, Navigation and Communications (WPNC)",
      year: "2018",
      abstract: "We present a vision-aided speed modulation system that enhances the seaworthiness of autonomous planing crafts through advanced computer vision techniques...",
      doi: "Proceedings of 15th Workshop on Positioning, Navigation and Communications (WPNC), pp. 1-6",
      pdfLink: "#"
    },
    {
      title: "Estimating sea state using low cost buoy",
      authors: "S. Farber, H. Allaka, I. Klein and M. Groper",
      venue: "International Conference on the Science of Electrical Engineering (ICSEE)",
      year: "2018",
      abstract: "This work explores the use of low-cost buoy systems for estimating sea state conditions in marine environments...",
      doi: "Proceedings of International Conference on the Science of Electrical Engineering (ICSEE), 2018",
      pdfLink: "#"
    }
  ];

  const PublicationCard = ({ publication }) => (
    <div className="bg-white border border-blue-200 rounded-lg p-6 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-800 mb-2 hover:text-blue-900 transition-colors duration-300 cursor-pointer">
            {publication.title}
          </h3>
          <p className="text-blue-700 font-medium mb-2">{publication.authors}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-black mb-3">
            <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full border border-blue-200">
              {publication.venue}
            </span>
            <span className="text-blue-800 font-medium">{publication.year}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <FileText className="w-5 h-5 text-blue-800" />
        </div>
      </div>
      
      <p className="text-black mb-4 leading-relaxed">
        {publication.abstract}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">DOI: {publication.doi}</span>
        <button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-900 transition-all duration-300">
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
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
                Publications
              </h1>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Explore our latest research contributions to the field of unmanned systems and autonomous technology.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-white border border-blue-200 rounded-xl p-2">
                <button
                  onClick={() => setActiveTab('research')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'research'
                      ? 'bg-blue-800 text-white'
                      : 'text-blue-800 hover:bg-blue-50'
                  }`}
                >
                  Research Papers
                </button>
                <button
                  onClick={() => setActiveTab('conference')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'conference'
                      ? 'bg-blue-800 text-white'
                      : 'text-blue-800 hover:bg-blue-50'
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
                  <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Research Papers</h2>
                  {researchPapers.map((paper, index) => (
                    <PublicationCard key={index} publication={paper} />
                  ))}
                </div>
              )}

              {activeTab === 'conference' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Conference Papers</h2>
                  {conferencePapers.map((paper, index) => (
                    <PublicationCard key={index} publication={paper} />
                  ))}
                </div>
              )}
            </div>

            <div className="text-center mt-12">
              <p className="text-black mb-6">
                For a complete list of publications, visit our profiles on academic databases.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300">
                  Google Scholar
                </button>
                <button className="border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-300">
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
