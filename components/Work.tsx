import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { X, Maximize2 } from 'lucide-react';

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6 md:p-10 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/95 backdrop-blur-md transition-opacity cursor-pointer" 
        onClick={onClose} 
      />
      
      {/* Modal Container - Matches Dark Screen Capture Style */}
      <div className="relative w-full max-w-4xl h-full max-h-[92vh] overflow-y-auto bg-[#0a0c16] border border-zinc-800 rounded-[2.5rem] shadow-[0_20px_100px_rgba(0,0,0,0.9)] animate-in fade-in zoom-in-95 duration-300 scrollbar-hide">
        
        {/* Header - Aligned with screenshot */}
        <div className="px-8 md:px-12 pt-10 pb-4 flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl font-black text-[#5865f2] tracking-tight leading-tight mb-4">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-1.5 bg-[#1b1e30] border border-[#2d314d] text-[10px] font-black text-[#8e99ee] uppercase tracking-widest rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-500 hover:text-white transition-colors bg-white/5 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-8 md:px-12 pb-16 space-y-8">
          
          {/* Main Workflow Image Card - Forcing display for technical visibility */}
          <div className="relative w-full bg-[#111420] rounded-[2rem] border border-[#1e2235] overflow-hidden p-3 flex items-center justify-center min-h-[300px] shadow-2xl">
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className="w-full h-auto object-contain rounded-xl"
              style={{ display: 'block', minHeight: '100px' }}
              loading="eager"
            />
            {/* Branding Tag */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-[#1b1e30]/80 backdrop-blur-md border border-zinc-700/50 rounded-lg text-zinc-400 text-[10px] font-black tracking-widest uppercase">
              Kier / Scalgent
            </div>
          </div>

          {/* Card-Based Detailed Sections */}
          <div className="grid grid-cols-1 gap-4">
            
            {/* Overview Card */}
            <div className="p-8 rounded-[1.5rem] bg-[#111420] border border-[#1e2235] hover:border-[#303652] transition-colors">
              <h4 className="text-sm font-black text-white mb-4 uppercase tracking-widest text-zinc-300">
                Overview
              </h4>
              <p className="text-zinc-400 text-base leading-relaxed font-medium">
                {project.overview}
              </p>
            </div>

            {/* Problem Card */}
            <div className="p-8 rounded-[1.5rem] bg-[#111420] border border-[#1e2235] hover:border-[#303652] transition-colors">
              <h4 className="text-sm font-black text-white mb-4 uppercase tracking-widest text-zinc-300">
                Problem
              </h4>
              <p className="text-zinc-400 text-base leading-relaxed font-medium">
                {project.problem}
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-8 rounded-[1.5rem] bg-[#111420] border border-[#1e2235] hover:border-[#303652] transition-colors">
              <h4 className="text-sm font-black text-white mb-4 uppercase tracking-widest text-zinc-300">
                Solution
              </h4>
              <p className="text-zinc-400 text-base leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>

            {/* Results Card */}
            <div className="p-8 rounded-[1.5rem] bg-[#111420] border border-[#1e2235] hover:border-[#303652] transition-colors">
              <h4 className="text-sm font-black text-white mb-4 uppercase tracking-widest text-zinc-300">
                Results
              </h4>
              <p className="text-zinc-400 text-base leading-relaxed font-medium">
                {project.result}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer text-left h-full overflow-hidden"
    >
      {/* Visual Thumbnail */}
      <div className="relative h-64 overflow-hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-center p-4">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-transparent to-transparent opacity-10" />
        <div className="absolute top-6 right-6 p-2 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-md rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          <Maximize2 className="w-5 h-5" />
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3.5 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-[9px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-widest group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  const categories = ['N8N', 'ZAPIER', 'MAKE', 'HIGH LEVEL'];
  const [activeTab, setActiveTab] = useState('HIGH LEVEL'); 
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => p.category.toUpperCase() === activeTab.toUpperCase());
  }, [activeTab]);

  return (
    <section id="portfolio" className="relative py-32 bg-white dark:bg-zinc-950 overflow-hidden text-center min-h-[1000px] transition-colors duration-500">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_0.6px,transparent_0.6px)] dark:bg-[radial-gradient(#3b82f6_0.4px,transparent_0.4px)] [background-size:40px_40px] opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter mb-8 leading-none">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-400 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300">Projects</span>
          </h2>
          
          <div className="flex justify-center mt-12 mb-20">
            <div className="inline-flex p-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl backdrop-blur-md shadow-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 md:px-10 py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative ${
                    activeTab === cat 
                      ? 'text-white' 
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {activeTab === cat && (
                    <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/20 z-0" />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-in fade-in slide-in-from-bottom-12 duration-700">
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-32 flex flex-col items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping mb-4" />
            <p className="text-xs font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.5em]">Initializing Architecture...</p>
          </div>
        )}
      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Work;