import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Process from './components/Process';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkflowAssistant from './components/WorkflowAssistant';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check system preference on mount
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Process />
        <Work />
        <Contact />
      </main>
      <Footer />
      <WorkflowAssistant />
    </div>
  );
};

export default App;