
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Link as LinkIcon, Bot, Zap, Workflow, Loader2 } from 'lucide-react';

const SimpleImage: React.FC<{ filename: string; alt: string }> = ({ filename, alt }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
      {!loaded && !error && (
         <div className="absolute inset-0 flex items-center justify-center z-10">
           <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
         </div>
      )}

      {!error ? (
        <img 
          src={filename} 
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onError={() => setError(true)}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 p-4 text-center">
          <Workflow className="w-8 h-8 text-red-300 dark:text-red-900 mb-2" />
          <span className="text-[9px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">Image Error</span>
          <p className="text-[8px] text-red-400 mt-1 select-all">{filename.split('/').pop()}</p>
        </div>
      )}
      {/* Diagram Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none" />
    </div>
  );
};

const ProjectShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase mb-4">SHOWCASE</h2>
          <p className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">Recent Deployments</p>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg font-medium">
            Battle-tested automation architectures designed for high-growth businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col bg-white dark:bg-[#0c0e14] rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Visual Container (Workflow Image) */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50">
                <div className="relative h-64 w-full rounded-[1.8rem] overflow-hidden flex items-center justify-center">
                   <SimpleImage filename={project.images[0]} alt={project.title} />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 pt-4 flex flex-col flex-grow text-left">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-[9px] font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-6 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-500 dark:text-zinc-400 text-[15px] leading-relaxed font-medium mb-10 flex-grow line-clamp-6 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-50 dark:border-zinc-800/50">
                  <a 
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-all transform active:scale-95"
                  >
                    View Project
                  </a>
                  
                  <div className="flex items-center -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-white dark:border-[#0c0e14] flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:z-10 hover:border-blue-500 transition-all">
                      <Zap className="w-4 h-4 fill-current" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-white dark:border-[#0c0e14] flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:z-10 hover:border-blue-500 transition-all">
                      <LinkIcon className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-white dark:border-[#0c0e14] flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:z-10 hover:border-blue-500 transition-all">
                      <Bot className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
