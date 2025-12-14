import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
      className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-soft-pink/50 transition-colors duration-300"
    >
      {/* 1. Project Image with Zoom Effect */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
        />
      </div>

      {/* 2. Content Area */}
      <div className="p-6 relative z-20">
        
        {/* Title & Links Row */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-soft-pink transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              title="View Code"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-3 py-1 rounded-full bg-secondary-purple/30 text-light-purple border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Glow Effect at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-purple/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;