
import React, { useState } from 'react';
import { Maximize2, Code2, CheckCircle, Workflow, Cpu, Layers, Loader2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const ImageWithFallback: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/40">
      {/* Blueprint Grid Background - Subtle technical aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      )}

      {!error ? (
        <img 
          src={src} 
          alt={alt}
          className={`w-full h-full object-contain p-4 md:p-8 transition-all duration-1000 ease-out group-hover:scale-[1.03] ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-700">
          <div className="relative mb-6">
            <Workflow className="w-20 h-20 text-blue-600/10 dark:text-blue-400/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className="w-8 h-8 text-blue-600/40 dark:text-blue-400/40 animate-pulse" />
            </div>
          </div>
          <h4 className="text-[10px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em] mb-3">System Architecture</h4>
          <p className="text-[9px] font-bold text-zinc-300 dark:text-zinc-700 uppercase tracking-widest leading-relaxed max-w-[240px]">
            Visual preview optimized for client portal. <br/> 
            <span className="text-blue-500/50">File: {src}</span>
          </p>
          <div className="mt-6 flex space-x-1">
            <div className="w-1 h-1 rounded-full bg-blue-500/30 animate-bounce"></div>
            <div className="w-1 h-1 rounded-full bg-blue-500/30 animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1 h-1 rounded-full bg-blue-500/30 animate-bounce [animation-delay:-0.3s]"></div>
          </div>
        </div>
      )}

      {/* Hover Zoom Icon */}
      <div className="absolute bottom-6 right-6 p-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-xl border border-zinc-100 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 shadow-xl">
        <Maximize2 className="w-5 h-5 text-blue-600" />
      </div>
    </div>
  );
};

const GalleryItem: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  return (
    <div className="group relative bg-white dark:bg-[#0c0e14] border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] flex flex-col h-full">
      {/* Header Info */}
      <div className="px-8 py-4 border-b border-zinc-50 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-950/50 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
            <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-[10px] font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">{project.category}</span>
        </div>
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Active</span>
        </div>
      </div>

      {/* Image Gallery Area */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-50 dark:border-zinc-800/50">
        <ImageWithFallback src={project.images[0]} alt={project.title} />
      </div>

      {/* Content Area */}
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 leading-tight group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-50 dark:border-zinc-800/50">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-[9px] font-black text-zinc-400 uppercase tracking-widest">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkflowShowcase: React.FC = () => {
  return (
    <section id="workflows" className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-[10px] font-black tracking-[0.5em] text-zinc-400 uppercase mb-8">
             <span>GALLERY EXHIBITION</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter mb-8 leading-none">
            My Featured <span className="text-blue-600">Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
            High-performance automation architectures and GHL ecosystems built for maximum efficiency and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {PROJECTS.map((project) => (
            <GalleryItem key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 p-16 rounded-[4rem] bg-zinc-900 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
             <h4 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">Ready to automate your operations?</h4>
             <a 
               href="#contact"
               className="inline-flex items-center px-12 py-6 rounded-2xl bg-white text-zinc-950 font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
             >
               Start Your Project
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowShowcase;
