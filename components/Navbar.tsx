import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const currentIsDark = document.documentElement.classList.toggle('dark');
    setIsDark(currentIsDark);
    localStorage.setItem('theme', currentIsDark ? 'dark' : 'light');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs group-hover:scale-110 transition-transform">
                IV
              </div>
              <span className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white">
                Ian Valenzuela
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-black tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-zinc-100 dark:border-zinc-800 pl-8">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-blue-600 dark:hover:bg-blue-400 transition-all transform hover:scale-105 active:scale-95"
              >
                <span>Get Started</span>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-zinc-500 dark:text-zinc-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-500 dark:text-zinc-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-zinc-950 transition-all duration-500 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-8 pt-24 space-y-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black tracking-tighter text-zinc-900 dark:text-white hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-8">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center w-full px-8 py-5 rounded-2xl bg-blue-600 text-white font-black text-lg uppercase tracking-widest"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;