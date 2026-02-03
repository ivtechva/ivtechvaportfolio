
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Bot, Zap, Layout, Workflow, Box, Database, Search, ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react';

const CategoryIcon: React.FC<{ category: string }> = ({ category }) => {
  switch (category) {
    case 'n8n': return <Bot className="w-5 h-5" />;
    case 'Zapier': return <Zap className="w-5 h-5" />;
    case 'GoHighLevel': return <Layout className="w-5 h-5" />;
    case 'Make.com': return <Database className="w-5 h-5" />;
    default: return <Workflow className="w-5 h-5" />;
  }
};

const SimpleImage: React.FC<{ filename: string; alt: string }> = ({ filename, alt }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
        </div>
      )}

      {!error ? (
        <img 
          src={filename} 
          alt={alt} 
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onError={() => setError(true)}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 z-10 p-4 text-center">
          <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3">
             <Workflow className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />
          </div>
          <p className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            {alt}
          </p>
        </div>
      )}
       {/* Visual Accent */}
       <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

const FeaturedProjects: React.FC = () => {
  // GHL first in the array to show first in the tabs
  const categories = ['GoHighLevel', 'n8n', 'Make.com', 'All'];
  const [activeCategory, setActiveCategory] = useState('GoHighLevel');

  const filteredProjects = PROJECTS.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="h-px w-8 bg-blue-600"></div>
              <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase">PORTFOLIO</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none">
              Featured <span className="text-blue-600 dark:text-blue-500">Workflows</span>
            </h3>
            <p className="mt-6 text-zinc-500 dark:text-zinc-400 max-w-xl text-lg font-medium leading-relaxed">
              Real-world automation architectures designed for efficiency, scalability, and impact.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-sm border border-zinc-200 dark:border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative flex flex-col bg-white dark:bg-[#0c0e14] rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden text-left h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center border-b border-zinc-100 dark:border-zinc-800">
                <SimpleImage filename={project.images[0]} alt={project.title} />
                
                {/* Platform Tag */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center space-x-2 shadow-lg z-20">
                  <CategoryIcon category={project.category} />
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-900 dark:text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium mb-8 flex-grow line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-zinc-50 dark:border-zinc-800/50">
                   <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                      <p className="text-[12px] font-bold text-zinc-700 dark:text-zinc-300">
                        <span className="text-blue-600 dark:text-blue-400 mr-1 uppercase text-[10px] font-black tracking-widest">Outcome:</span> {project.result}
                      </p>
                   </div>
                   
                   <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 text-[9px] font-black uppercase tracking-tighter rounded-lg border border-zinc-100 dark:border-zinc-800">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-300 dark:text-zinc-700 group-hover:text-blue-600 transition-colors" />
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

export default FeaturedProjects;
