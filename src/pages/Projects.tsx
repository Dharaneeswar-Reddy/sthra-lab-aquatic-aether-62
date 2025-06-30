
import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { ProjectCategoryNavigation } from '../components/ProjectCategoryNavigation';
import { ProjectCategoryContent } from '../components/ProjectCategoryContent';
import { Plane, Ship, Zap, Satellite, Car } from 'lucide-react';
import { ProjectCategory } from '../types/projects';
import { projectData } from '../data/projectData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('UAVs');

  const categories: ProjectCategory[] = [
    { id: 'UAVs', name: 'UAVs', icon: Plane, color: 'cyan' },
    { id: 'AUVs', name: 'AUVs', icon: Zap, color: 'ocean' },
    { id: 'ROVs', name: 'ROVs', icon: Zap, color: 'tech-yellow' },
    { id: 'USVs', name: 'USVs', icon: Ship, color: 'cyan' },
    { id: 'GNSS', name: 'GNSS', icon: Satellite, color: 'ocean' },
    { id: 'Mars Rovers', name: 'Mars Rovers', icon: Car, color: 'tech-yellow' }
  ];

  const currentData = projectData[activeCategory];

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navigation />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-tech-yellow bg-clip-text text-transparent">
                Research Projects
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive research portfolio across multiple domains of unmanned systems technology.
              </p>
            </div>

            <ProjectCategoryNavigation
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <ProjectCategoryContent
              activeCategory={activeCategory}
              currentData={currentData}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
