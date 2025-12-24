'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Tana transport system',
    description: 'Getting tickets online to travel across different monasteries and end points on lakes.',
    tech: ['HTML', 'Node.js', 'MongoDB', 'JavaScript'],
    github: 'https://daniel-andu.github.io/Lake_transportation/',
    live: 'https://lake-transportation.vercel.app/',
    image: '/images/Tana.png'
  },
  {
    title: 'Expense Tracker',
    description: 'A modern app that helps to record, categorize, and analyze personal or business spending.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    github: 'https://daniel-andu.github.io/Expense-tracker/',
    live: 'https://expense-tracker-dani.vercel.app/',
    image: '/images/expense.png'
  },
  {
    title: 'Vehicle Management System',
    description: 'System for managing university fleet with maintenance scheduling and reporting.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
    // image: '/images/vehicle-management.jpg' 
  },
  {
    title: 'To-Do List Application',
    description: 'Task management app with add, complete, and delete functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://daniel-andu.github.io/To-do-list/',
    live: 'https://to-do-list-one-umber-99.vercel.app/',
    image: '/images/Todolist.png'
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="section-padding bg-gray-950">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">
            <span className="title-number">2</span> Featured Projects
          </h2>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-accent hover:text-accent/80 transition-colors px-4 py-2 border border-accent/30 rounded-lg hover:bg-accent/10"
          >
            {showAll ? 'Show Less' : `View All (${projects.length})`}
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-secondary rounded-xl overflow-hidden border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Project Image with Screenshot - WITH CONDITIONAL RENDERING */}
              <div className="h-48 relative overflow-hidden bg-gray-900">
                {project.image ? (
                  <>
                    {/* Next.js Image Component - ONLY RENDERED IF image EXISTS */}
                    
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title} project`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  </>
                ) : (
                  /* Fallback when no image exists */
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                    <div className="text-center">
                      <div className="text-4xl mb-2 text-gray-600">📱</div>
                      <p className="text-sm text-gray-500">No preview available</p>
                    </div>
                  </div>
                )}
                
                {/* Project number badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-mono text-accent bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                    Project {index + 1}
                  </span>
                </div>
                
                {/* Overlay Links - Only show if project has live/github links */}
                {(project.live !== '#' || project.github !== '#') && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        className="p-3 bg-accent text-primary rounded-full hover:bg-accent/90 transition-colors transform hover:scale-110"
                        aria-label="View live demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        className="p-3 bg-gray-800 text-text-primary rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
                        aria-label="View source code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1 bg-primary text-accent rounded-full border border-gray-700 hover:border-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}