
import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import { StatsSection } from '../components/StatsSection';
import { ProjectsSection } from '../components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
