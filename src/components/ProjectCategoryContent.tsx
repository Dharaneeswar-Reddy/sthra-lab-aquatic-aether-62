
import React from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectData } from '../types/projects';

interface ProjectCategoryContentProps {
  activeCategory: string;
  currentData: ProjectData;
}

export const ProjectCategoryContent: React.FC<ProjectCategoryContentProps> = ({
  activeCategory,
  currentData
}) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Category Description */}
      <div className="bg-gradient-to-r from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">{activeCategory}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          {currentData.description}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {currentData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};
