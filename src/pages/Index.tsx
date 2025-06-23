
import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection';
import { ContactSection } from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <HeroSection />
      <InfoSection />
      <ContactSection />
    </div>
  );
};

export default Index;
