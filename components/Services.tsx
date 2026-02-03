
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6 border border-blue-100 dark:border-blue-900/20">
            <span>Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-6">
            Professional <span className="text-blue-600">Services</span>
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Leveraging cutting-edge technology to streamline your business operations and maximize output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-[#0c0e14] border border-zinc-100 dark:border-zinc-800 hover:border-blue-100 dark:hover:border-blue-900/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                </div>
                
                <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium text-[15px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
