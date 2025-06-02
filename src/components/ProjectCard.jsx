// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="bg-gray-800 p-6 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative pb-60 h-60"> {/* Fixed aspect ratio container */}
        <img
          src={project.image_url || 'https://via.placeholder.com/600x400?text=No+Image'}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-blue-400">{project.name}</h2>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
          {project.description || 'No description available.'}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {project.sig || 'Uncategorized'}
          </span>
          <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
            {project.year || 'Unknown Year'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;