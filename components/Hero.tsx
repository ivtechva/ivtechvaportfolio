import React, { useState } from 'react';
import { ArrowRight, Box } from 'lucide-react';
import { TOOLS } from '../constants';

const ToolCard: React.FC<{ tool: typeof TOOLS[0] }> = ({ tool }) => {
  const [error, setError] = useState(false);

  return (
    <div className="flex-shrink-0 flex flex-col items-center mx-6 group">
      {/* Icon Container matching screenshot (White rounded square) */}
      <div className="w-32 h-32 md:w-36 md:h-36 bg-white dark:bg-white rounded-[2rem] border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center p-8 mb-4 group-hover:scale-105 group-hover:shadow-xl transition-all duration-500 overflow-hidden relative">
        {error ? (
          <Box className="w-10 h-10 text-zinc-300" />
        ) : (
          <img 
            src={tool.logo} 
            alt={tool.name}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={() => setError(true)}
          />
        )}
      </div>
      {/* Name Label */}
      <span className="text-[11px] font-black text-zinc-900 dark:text-zinc-900 uppercase tracking-widest">
        {tool.name}
      </span>
    </div>
  );
};

const Hero: React.FC = () => {
  const scrollTools = [...TOOLS, ...TOOLS, ...TOOLS];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-[10px] font-black tracking-[0.3em] text-blue-600 mb-10 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span>Open for new projects</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.8rem] font-black tracking-tighter text-[#18181b] mb-8 leading-[1.05]">
          Technical Virtual Assistant &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
            GHL / AI Automation
          </span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-400">
            Specialist
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-base md:text-xl text-zinc-500 mb-14 leading-relaxed font-medium px-4">
          Transforming how businesses operate through intelligent automation<br className="hidden md:block" />
          and optimized systems. Stop manual repetitive tasks and start scaling efficiently.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-32">
          <a
            href="#portfolio"
            className="group w-full sm:w-auto flex items-center justify-center px-10 py-5 rounded-2xl bg-[#18181b] text-white font-black text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all transform active:scale-95 shadow-2xl shadow-zinc-300"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 rounded-2xl border-2 border-zinc-100 bg-white text-zinc-900 font-black text-sm uppercase tracking-widest hover:bg-zinc-50 transition-all transform active:scale-95"
          >
            Contact Me
          </a>
        </div>

        <div className="pt-24 pb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#18181b] mb-4 tracking-tighter">
            Tools & <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 text-sm md:text-lg font-medium">
            The platforms and technologies I use to build powerful automation solutions.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="marquee-container flex overflow-hidden">
          <div className="animate-scroll flex whitespace-nowrap will-change-transform">
            {scrollTools.map((tool, idx) => (
              <ToolCard key={`${tool.name}-${idx}`} tool={tool} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-container:hover .animate-scroll {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(calc(-100% / 3), 0, 0); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;