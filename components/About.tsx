import React from 'react';
import { CheckCircle2, Zap, ShieldCheck, Workflow } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Text Side - Direct and Conversion Focused */}
          <div className="w-full">
            <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase mb-8">ABOUT ME</h2>
            
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                I help founders and agencies <span className="text-blue-600 dark:text-blue-400 italic">buy back their time</span> using AI automation.
              </h3>
              
              <div className="space-y-6 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto">
                <p>
                  With <span className="text-zinc-900 dark:text-white font-bold">5+ years</span> in enterprise IT support and service delivery, I bring big-corp reliability with startup-speed execution. I now work as an AI Automation Specialist, building systems that eliminate repetitive work, reduce errors, and streamline operations.
                </p>
                
                <p>
                  My focus is on <span className="text-zinc-900 dark:text-white font-bold">practical, scalable automations</span> that support growing teams—without adding complexity or breaking existing workflows.
                </p>
                
                <div className="relative py-10">
                   <p className="text-xl md:text-2xl text-zinc-900 dark:text-white font-bold italic border-l-4 md:border-l-0 md:border-y border-blue-600 py-6 px-8 md:px-0 bg-zinc-50 dark:bg-zinc-900/30 rounded-r-xl md:rounded-none">
                    "If manual processes are slowing your business down, my goal is simple: give you back hours every week through smart automation."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
                {[
                  { icon: <Zap className="w-5 h-5" />, text: "GHL & AI Native" },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Service Level Expert" },
                  { icon: <ShieldCheck className="w-5 h-5" />, text: "Enterprise Reliability" },
                  { icon: <Workflow className="w-5 h-5" />, text: "Scalable Workflows" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-3 group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/50">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-sm font-black text-zinc-800 dark:text-zinc-200 tracking-tight uppercase">
                      {item.text}
                    </span>
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