
import React, { useEffect, useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import { StatsSection } from '../components/StatsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection scrollY={scrollY} />
      <MissionSection />
      <StatsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
