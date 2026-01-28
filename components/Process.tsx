import React from 'react';
import { Phone, Map as MapIcon, Settings, Bug, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Discovery Call',
    description: 'We start with a conversation to understand your business, pain points, and goals. This helps me identify the best automation opportunities tailored to your needs.',
    icon: <Phone className="w-5 h-5" />,
    badge: 'Step 1'
  },
  {
    id: 2,
    title: 'Process Mapping',
    description: 'I analyze your current workflows and create a detailed map of how your processes work. This reveals inefficiencies and highlights where automation can make the biggest impact.',
    icon: <MapIcon className="w-5 h-5" />,
    badge: 'Step 2'
  },
  {
    id: 3,
    title: 'Building the Automation',
    description: 'Using tools like Make.com, Zapier, or n8n, I design and build custom automation workflows that connect your apps and streamline your operations.',
    icon: <Settings className="w-5 h-5" />,
    badge: 'Step 3'
  },
  {
    id: 4,
    title: 'Testing & Troubleshooting',
    description: 'Every automation is rigorously tested to ensure reliability. I identify edge cases, fix bugs, and optimize performance before going live.',
    icon: <Bug className="w-5 h-5" />,
    badge: 'Step 4'
  },
  {
    id: 5,
    title: 'Deployment & Support',
    description: 'Once everything is running smoothly, I deploy the automation and provide ongoing support to ensure it continues to perform and adapt as your business grows.',
    icon: <Rocket className="w-5 h-5" />,
    badge: 'Step 5'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-32 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100/20 dark:bg-indigo-900/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-6">
            My <span className="text-blue-600 dark:text-blue-500">Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400 text-lg font-medium leading-relaxed">
            A structured approach to delivering automation solutions that truly work for your business.
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-blue-100 dark:bg-blue-900/30 hidden md:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-100 dark:bg-blue-900/30 md:hidden"></div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={step.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 dark:bg-blue-800 flex items-center justify-center text-white shadow-xl ring-4 ring-white dark:ring-zinc-950 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 lg:pr-20' : 'md:pl-12 lg:pl-20'} flex flex-col items-center`}>
                  <div className={`w-full p-8 md:p-10 rounded-3xl bg-white dark:bg-[#0c0e14] border border-zinc-100 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-none hover:shadow-xl transition-all duration-500 group relative ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                    
                    {/* Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-6`}>
                      {step.badge}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed font-medium">
                      {step.description}
                    </p>

                    {/* Subtle animation line for hover */}
                    <div className={`absolute bottom-0 h-1 bg-blue-500/30 transition-all duration-500 w-0 group-hover:w-full left-0 rounded-b-3xl`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;