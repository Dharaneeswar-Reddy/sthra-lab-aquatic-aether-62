
import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ProjectCategoryContent } from '../components/ProjectCategoryContent';
import { Plane, Ship, Zap, Satellite, Car } from 'lucide-react';
import { ProjectCategory } from '../types/projects';
import { projectData } from '../data/projectData';
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('UAVs');
  const categories: ProjectCategory[] = [{
    id: 'UAVs',
    name: 'UAVs',
    icon: Plane,
    color: 'primary'
  }, {
    id: 'AUVs',
    name: 'AUVs',
    icon: Zap,
    color: 'primary'
  }, {
    id: 'ROVs',
    name: 'ROVs',
    icon: Zap,
    color: 'primary'
  }, {
    id: 'USVs',
    name: 'USVs',
    icon: Ship,
    color: 'primary'
  }, {
    id: 'GNSS',
    name: 'GNSS',
    icon: Satellite,
    color: 'primary'
  }, {
    id: 'Mars Rovers',
    name: 'Mars Rovers',
    icon: Car,
    color: 'primary'
  }];
  const currentData = projectData[activeCategory];
  return <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-width">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                Research Projects
              </h1>
              <p className="academic-body text-lg max-w-3xl mx-auto text-black">
                Explore our comprehensive research portfolio across multiple domains of unmanned systems technology.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(category => {
              const IconComponent = category.icon;
              return <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-blue-800 text-white shadow-md' : 'bg-white border border-blue-200 text-blue-800 hover:bg-blue-50 hover:border-blue-300'}`}>
                    <IconComponent className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>;
            })}
            </div>

            <ProjectCategoryContent activeCategory={activeCategory} currentData={currentData} />
          </div>
        </section>
      </div>
      <Footer />
    </div>;
};
export default Projects;
