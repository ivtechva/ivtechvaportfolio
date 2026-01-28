import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase">
            WORK EXPERIENCE
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto text-left">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-2 bottom-0 w-[1.5px] bg-blue-100 dark:bg-blue-900/30"></div>

          <div className="space-y-24">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative pl-10 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute top-2 left-[-6px] w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)] z-10 border-2 border-white dark:border-zinc-950"></div>
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                    {exp.role}
                  </h3>
                  <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 pt-2 whitespace-nowrap uppercase tracking-widest shrink-0">
                    {exp.period}
                  </span>
                </div>

                <div className="mb-8">
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-lg md:text-xl tracking-tight">
                    {exp.company}
                  </p>
                </div>

                <ul className="space-y-6">
                  {exp.results.map((result, idx) => (
                    <li key={idx} className="flex items-start text-zinc-600 dark:text-zinc-400 group">
                      <div className="mt-2.5 mr-5 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-600 transition-colors duration-300"></div>
                      </div>
                      <span className="text-base md:text-[17px] leading-relaxed font-medium">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;