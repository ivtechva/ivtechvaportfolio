import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ExpertiseFolder: React.FC<{ expertise: Project }> = ({ expertise }) => {
  const [imgSrc, setImgSrc] = useState(expertise.logo);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = () => {
    if (retryCount === 0) {
      // Try Clearbit as first fallback
      const domainMap: Record<string, string> = {
        'Zapier': 'zapier.com',
        'Make (Integromat)': 'make.com',
        'n8n': 'n8n.io',
        'GoHighLevel (GHL)': 'gohighlevel.com'
      };
      const domain = domainMap[expertise.title] || 'google.com';
      setImgSrc(`https://logo.clearbit.com/${domain}`);
      setRetryCount(1);
    } else if (retryCount === 1) {
      // Try Google Favicon as second fallback
      const domainMap: Record<string, string> = {
        'Zapier': 'zapier.com',
        'Make (Integromat)': 'make.com',
        'n8n': 'n8n.io',
        'GoHighLevel (GHL)': 'gohighlevel.com'
      };
      const domain = domainMap[expertise.title] || 'google.com';
      setImgSrc(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`);
      setRetryCount(2);
    }
  };

  return (
    <a 
      href={expertise.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white dark:bg-[#0c0e14] rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-none border border-zinc-100 dark:border-zinc-800 border-t-[6px] border-t-blue-600 overflow-hidden flex flex-col items-center py-8 px-4 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] relative"
    >
      {/* Folder Icon Graphic */}
      <div className="relative w-28 h-24 mb-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/5 rounded-2xl border border-blue-100/30 dark:border-blue-800/20"></div>
        <div className="absolute -top-2 left-4 w-12 h-6 bg-blue-50/50 dark:bg-blue-900/5 rounded-t-lg border-t border-l border-r border-blue-100/30 dark:border-blue-800/20"></div>
        
        <div className="relative z-10 w-16 h-16 bg-white dark:bg-zinc-900 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-zinc-100 dark:border-zinc-800 flex items-center justify-center p-3.5 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
          <img 
            src={imgSrc} 
            alt={expertise.title} 
            className="w-full h-full object-contain"
            loading="lazy"
            onError={handleError}
          />
        </div>
      </div>

      <h3 className="text-lg font-black text-zinc-900 dark:text-white mb-4 text-center tracking-tighter">
        {expertise.title}
      </h3>

      <div className="flex items-center space-x-1.5 opacity-40 group-hover:opacity-100 transition-all duration-300">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Open Project</span>
        <ArrowUpRight className="w-3 h-3 text-blue-600 dark:text-blue-400" />
      </div>

      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    </a>
  );
};

const Work: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden text-center">
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter mb-4 leading-none">
            Portfolio Projects
          </h2>
          
          <p className="text-base md:text-lg font-bold text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed tracking-tight">
            Real-world automation solutions built with the industry's leading tools.
          </p>
          
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-8 opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((expertise) => (
            <ExpertiseFolder key={expertise.id} expertise={expertise} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;