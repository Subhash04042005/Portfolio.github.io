import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter, Star, Calendar, Zap } from 'lucide-react';

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = filter === 'all' 
    ? data 
    : filter === 'featured' 
      ? data.filter(project => project.featured)
      : data;

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`group relative bg-white border border-[#232323]/10 overflow-hidden transition-all duration-500 ease-out hover:border-[#38FF62]/30 hover:shadow-2xl hover:shadow-[#38FF62]/10 transform hover:-translate-y-2 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Project Image with Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-sm p-3 hover:bg-[#38FF62] hover:text-white transition-all duration-300 transform hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-sm p-3 hover:bg-[#38FF62] hover:text-white transition-all duration-300 transform hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
          </a>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-[#38FF62] text-[#232323] px-3 py-1 text-xs font-mono uppercase tracking-wider flex items-center gap-1">
            <Star size={12} fill="currentColor" />
            Featured
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-8">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-regular font-sans text-[clamp(16px,2.5vw,30px)] font-normal text-[#232323] leading-tight group-hover:text-[#38FF62] transition-colors duration-300">
            {project.title}
          </h3>
          <Zap className="text-[#38FF62] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" size={20} />
        </div>
        
        {/* Project Description */}
        <p className="text-body font-sans text-[clamp(14px,1.8vw,18px)] font-normal text-[#232323]/70 leading-relaxed mb-6 group-hover:text-[#232323]/90 transition-colors duration-300">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="label-small font-mono text-[clamp(8px,1.2vw,12px)] font-normal text-[#232323] uppercase tracking-wider bg-[#232323]/5 px-3 py-2 hover:bg-[#38FF62]/10 hover:text-[#38FF62] transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Stats */}
        <div className="flex items-center gap-4 mb-6 text-xs font-mono uppercase tracking-wider text-[#232323]/50">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>2024</span>
          </div>
          <div className="w-px h-3 bg-[#232323]/20"></div>
          <div className="flex items-center gap-1">
            <Star size={12} />
            <span>{project.featured ? 'Featured' : 'Project'}</span>
          </div>
        </div>
        
        {/* Project Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost bg-transparent border-none px-4 py-2 font-mono text-xs font-normal text-[#232323] uppercase tracking-wider cursor-pointer transition-all duration-300 flex items-center gap-2 hover:text-[#38FF62] hover:bg-[#38FF62]/5 group/link"
          >
            <Github size={16} className="group-hover/link:animate-pulse" />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-transparent border border-[#232323] px-4 py-2 font-mono text-xs font-normal text-[#232323] uppercase tracking-wider cursor-pointer transition-all duration-300 flex items-center gap-2 hover:bg-[#38FF62] hover:border-[#38FF62] hover:text-[#232323] hover:shadow-lg group/link"
          >
            <ExternalLink size={16} className="group-hover/link:animate-pulse" />
            Live Demo
          </a>
        </div>

        {/* Animated Bottom Border */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );

  return (
    <section id="projects" ref={projectsRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-2 h-32 bg-[#38FF62]/20 transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-2 h-24 bg-[#38FF62]/20 transform -rotate-12 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className={`mb-20 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#38FF62]"></div>
              <p className="label font-mono text-[clamp(10px,1.5vw,18px)] font-normal text-[#232323] uppercase tracking-wider bg-white px-4 py-2 border border-[#232323]/10">
                Selected Work
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#38FF62]"></div>
            </div>
            
            <h2 
              className="title-big font-display text-[clamp(44px,8vw,200px)] font-normal leading-none uppercase mb-6"
              style={{ 
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                background: 'linear-gradient(135deg, #232323 0%, #38FF62 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Projects
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#38FF62] to-[#2AE052] mx-auto"></div>
          </div>

          {/* Enhanced Filter Controls */}
          <div className={`flex items-center justify-center gap-8 mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 border border-[#232323]/10">
              <Filter size={16} className="text-[#38FF62]" />
              <span className="label-small font-mono text-[clamp(8px,1.2vw,12px)] font-normal text-[#232323] uppercase tracking-wider">
                Filter:
              </span>
              <div className="flex gap-4 ml-4">
                {['all', 'featured'].map((filterOption) => (
                  <button
                    key={filterOption}
                    onClick={() => setFilter(filterOption)}
                    className={`btn-ghost bg-transparent border-none px-4 py-2 font-mono text-xs font-normal uppercase tracking-wider cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      filter === filterOption 
                        ? 'text-[#38FF62] bg-[#38FF62]/10' 
                        : 'text-[#232323] hover:text-[#38FF62] hover:bg-[#38FF62]/5'
                    }`}
                  >
                    {filterOption}
                    {filter === filterOption && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#38FF62] rotate-45"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Enhanced Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className={`text-center transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}>
              <button
                onClick={loadMore}
                className="group bg-[#38FF62] border-none px-12 py-4 font-mono text-sm font-normal text-[#232323] uppercase tracking-wider cursor-pointer transition-all duration-300 min-h-[52px] flex items-center justify-center mx-auto gap-3 hover:shadow-lg hover:shadow-[#38FF62]/25 transform hover:scale-105 active:scale-95 overflow-hidden relative"
              >
                <span className="relative z-10">Load More Projects</span>
                <Zap size={18} className="relative z-10 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#38FF62] to-[#2AE052] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;