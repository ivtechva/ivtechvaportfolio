
import React from 'react';
import { CheckCircle2, Zap, ShieldCheck, Workflow } from 'lucide-react';

const About: React.FC = () => {
  const pillars = [
    { icon: <Zap className="w-5 h-5" />, text: "GHL & AI Native" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Service Level Expert" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Enterprise Reliability" },
    { icon: <Workflow className="w-5 h-5" />, text: "Scalable Workflows" }
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Section Header */}
          <div className="w-full mb-8">
            <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase mb-6">ABOUT ME</h2>
            
            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.95]">
                Systems That <span className="text-blue-600 dark:text-blue-400">Run Your Business</span> <br className="hidden md:block" />
                Not the Other Way Around
              </h3>
              
              <div className="space-y-4 text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto pt-2">
                <p>
                  As a <span className="text-zinc-900 dark:text-white font-bold">Workflow Automation & GHL Specialist</span>, I help founders reclaim time by replacing manual processes with smart, automated systems. With an enterprise IT background, I design workflows that are reliable, scalable, and built to support real-world business operations.
                </p>
                
                <p>
                  My focus is simple: <span className="text-zinc-900 dark:text-white font-bold">remove friction</span>. By turning repetitive tasks into automated workflows, I help businesses operate more efficiently, reduce daily stress, and create systems that support long-term growth.
                </p>
              </div>

              {/* High-Impact Quote */}
              <div className="relative py-8 flex justify-center">
                 <div className="max-w-2xl px-8 py-6 bg-zinc-50 dark:bg-zinc-900/40 rounded-[2rem] border border-zinc-100 dark:border-zinc-800/50 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-[9px] font-black text-white uppercase tracking-widest">Core Mission</div>
                    <p className="text-lg md:text-xl text-zinc-900 dark:text-white font-bold italic leading-tight">
                      "To build automation that handles day-to-day operations so founders can stay focused on high-level decision-making."
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* Strategic Value Bar */}
          <div className="w-full max-w-5xl mt-4">
            <div className="p-2 md:p-3 rounded-[2.5rem] bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-100 dark:border-zinc-800/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {pillars.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center space-x-4 p-4 md:p-5 rounded-[2rem] bg-white dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-black text-zinc-900 dark:text-zinc-200 tracking-wider uppercase">
                          {item.text}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                      </div>
                      <span className="text-[8px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-tight">Core Pillar</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
