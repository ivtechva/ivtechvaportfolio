
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <span className="text-xl font-black tracking-tight text-zinc-900 dark:text-white">
              Ian Valenzuela
            </span>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-2 font-medium tracking-wide">Technical VA & AI Automation Specialist</p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-zinc-50 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
          <p>© 2025 Ian Valenzuela. Built for Performance.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
