import React from 'react';
import { Project } from '../types/projects';
interface ProjectCardProps {
  project: Project;
  index: number;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index
}) => {
  return <div key={index} className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="relative overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 transition-colors duration-300 text-blue-900">
          {project.title}
        </h3>
        <p className="mb-4 leading-relaxed text-gray-900">
          {project.description}
        </p>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-blue-800">Progress</span>
            <span className="text-sm text-cyan-400">{project.progress}%</span>
          </div>
          <div className="w-full bg-navy-800 rounded-full h-2">
            <div style={{
            width: `${project.progress}%`
          }} className="bg-gradient-to-r from-cyan-400 to-ocean-400 h-2 rounded-full transition-all duration-300 bg-blue-200"></div>
          </div>
        </div>

        {/* Related Publications */}
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-950">Related Publications:</h4>
          <div className="flex flex-wrap gap-2">
            {project.publications.map((pub, pubIndex) => <span key={pubIndex} className="px-2 py-1 bg-cyan-500/20 text-xs rounded-md border border-cyan-500/30 text-gray-950">
                {pub}
              </span>)}
          </div>
        </div>
      </div>
    </div>;
};
