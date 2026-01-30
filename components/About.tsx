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
    <section id="about" className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Section Header */}
          <div className="w-full mb-16">
            <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase mb-8">ABOUT ME</h2>
            
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.95]">
                I help founders and agencies <br className="hidden md:block" />
                <span className="text-blue-600 dark:text-blue-400 italic">buy back their time</span> using AI.
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto pt-4">
                <p>
                  With <span className="text-zinc-900 dark:text-white font-bold">5+ years</span> in enterprise IT support and service delivery, I bring big-corp reliability with startup-speed execution. I build systems that eliminate repetitive work, reduce errors, and streamline operations.
                </p>
                
                <p>
                  My focus is on <span className="text-zinc-900 dark:text-white font-bold">practical, scalable automations</span> that support growing teams—without adding complexity or breaking existing workflows.
                </p>
              </div>

              {/* High-Impact Quote */}
              <div className="relative py-12 flex justify-center">
                 <div className="max-w-2xl px-8 py-8 bg-zinc-50 dark:bg-zinc-900/40 rounded-[2rem] border border-zinc-100 dark:border-zinc-800/50 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-[9px] font-black text-white uppercase tracking-widest">Mission</div>
                    <p className="text-xl md:text-2xl text-zinc-900 dark:text-white font-bold italic leading-tight">
                      "If manual processes are slowing your business down, my goal is to give you back hours every week through smart automation."
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* NEW Strategic Value Bar - Alternative to the old cards */}
          <div className="w-full max-w-5xl mt-8">
            <div className="p-2 md:p-3 rounded-[2.5rem] bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-100 dark:border-zinc-800/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {pillars.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center space-x-4 p-5 md:p-6 rounded-[2rem] bg-white dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] font-black text-zinc-900 dark:text-zinc-200 tracking-wider uppercase">
                          {item.text}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                      </div>
                      <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-tight">Core Pillar</span>
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