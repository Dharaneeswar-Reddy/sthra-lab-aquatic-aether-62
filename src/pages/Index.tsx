
import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import { ResearchInterestsSection } from '../components/ResearchInterestsSection';
import { OngoingProjectsSection } from '../components/OngoingProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ResearchInterestsSection />
      <OngoingProjectsSection />
    </div>
  );
};

export default Index;
