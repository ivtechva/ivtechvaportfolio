import React from 'react';
import { ArrowUpRight, Box } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ExpertiseFolder: React.FC<{ expertise: Project }> = ({ expertise }) => {
  return (
    <a 
      href={expertise.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.08)] border-t-[10px] border-blue-600 overflow-hidden flex flex-col items-center py-16 px-10 transition-all duration-700 hover:-translate-y-10 hover:shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative"
    >
      {/* Folder Icon Graphic */}
      <div className="relative w-44 h-36 mb-12 flex items-center justify-center">
        {/* The Folder Background Shape */}
        <div className="absolute inset-0 bg-blue-50/70 rounded-[2rem] border border-blue-100/40 shadow-inner"></div>
        {/* The Folder Tab */}
        <div className="absolute -top-4 left-8 w-20 h-10 bg-blue-50/70 rounded-t-2xl border-t border-l border-r border-blue-100/40 shadow-inner"></div>
        
        {/* Centered Logo in Folder - Forced visibility container */}
        <div className="relative z-10 w-32 h-32 bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-zinc-100/80 flex items-center justify-center p-7 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
          <img 
            src={expertise.logo} 
            alt={expertise.title} 
            className="w-full h-full object-contain relative z-20"
            loading="eager"
            onError={(e) => {
              // Fallback to a box icon if CDN fails
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<div class="text-blue-200"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></div>';
              }
            }}
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-3xl font-black text-zinc-900 mb-8 text-center tracking-tighter">
        {expertise.title}
      </h3>

      {/* View Link Overlay */}
      <div className="flex items-center space-x-2 opacity-60 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">View Project</span>
        <ArrowUpRight className="w-5 h-5 text-blue-600" />
      </div>

      {/* Hover Decor - Floating Dot */}
      <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]"></div>
    </a>
  );
};

const Work: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-48 bg-white overflow-hidden text-center">
      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] [background-size:48px_48px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-40">
          {/* Main Heading - Forced to Black and Bold */}
          <h2 className="text-6xl md:text-9xl font-black text-black tracking-tighter mb-10 leading-none">
            Portfolio Projects
          </h2>
          
          {/* Subheading - Forced to Black */}
          <p className="text-xl md:text-3xl font-bold text-zinc-900 max-w-4xl mx-auto leading-relaxed tracking-tight opacity-70">
            Real-world automation solutions built with Zapier, Make, n8n, and GoHighLevel.
          </p>
          
          <div className="w-40 h-2.5 bg-blue-600 rounded-full mx-auto mt-16 shadow-[0_8px_30px_rgba(37,99,235,0.4)]"></div>
        </div>

        {/* Floating Folders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 max-w-[90rem] mx-auto pb-12">
          {PROJECTS.map((expertise) => (
            <ExpertiseFolder key={expertise.id} expertise={expertise} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;