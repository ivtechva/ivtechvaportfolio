
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
