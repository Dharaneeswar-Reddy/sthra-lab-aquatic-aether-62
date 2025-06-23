
import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default Index;
