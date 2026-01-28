import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase mb-4">CAPABILITIES</h2>
          <p className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">Professional Services</p>
          <p className="mt-6 text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Leveraging cutting-edge technology to streamline your business operations and maximize output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-10 rounded-[2rem] bg-white dark:bg-[#0c0e14] border border-zinc-100 dark:border-zinc-800/50 hover:border-blue-500/20 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;