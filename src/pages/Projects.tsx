
import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProjectCategoryNavigation } from '../components/ProjectCategoryNavigation';
import { ProjectCategoryContent } from '../components/ProjectCategoryContent';
import { Plane, Ship, Zap, Satellite, Car } from 'lucide-react';
import { ProjectCategory } from '../types/projects';
import { projectData } from '../data/projectData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('UAVs');

  const categories: ProjectCategory[] = [
    { id: 'UAVs', name: 'UAVs', icon: Plane, color: 'primary' },
    { id: 'AUVs', name: 'AUVs', icon: Zap, color: 'primary' },
    { id: 'ROVs', name: 'ROVs', icon: Zap, color: 'primary' },
    { id: 'USVs', name: 'USVs', icon: Ship, color: 'primary' },
    { id: 'GNSS', name: 'GNSS', icon: Satellite, color: 'primary' },
    { id: 'Mars Rovers', name: 'Mars Rovers', icon: Car, color: 'primary' }
  ];

  const currentData = projectData[activeCategory];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h1 className="academic-heading">
                Research Projects
              </h1>
              <p className="academic-body text-lg max-w-3xl mx-auto">
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
      <Footer />
    </div>
  );
};

export default Projects;
