
import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import { ResearchInterestsSection } from '../components/ResearchInterestsSection';
import { OngoingProjectsSection } from '../components/OngoingProjectsSection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ResearchInterestsSection />
      <OngoingProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
