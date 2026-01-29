import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Box } from 'lucide-react';
import { TOOLS } from '../constants';

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = `rgba(37, 99, 235, ${Math.random() * 0.4 + 0.1})`;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 150;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 20;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 20;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 10000;
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

const ToolCard: React.FC<{ tool: typeof TOOLS[0] }> = ({ tool }) => {
  const [imgSrc, setImgSrc] = useState(tool.logo);
  const [fallbackTried, setFallbackTried] = useState(false);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!fallbackTried) {
      // Try a secondary source like Google's Favicon service if the primary fails
      const domainMap: Record<string, string> = {
        'GoHighLevel': 'gohighlevel.com',
        'Gemini': 'google.com',
        'Canva': 'canva.com',
        'ChatGPT': 'openai.com',
        'Claude': 'anthropic.com',
        'Zapier': 'zapier.com',
        'Make.com': 'make.com',
        'n8n': 'n8n.io'
      };
      const domain = domainMap[tool.name] || 'google.com';
      setImgSrc(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`);
      setFallbackTried(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex-shrink-0 flex flex-col items-center mx-6 group">
      <div className="w-32 h-32 md:w-36 md:h-36 bg-white dark:bg-white rounded-[2rem] border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center p-8 mb-4 group-hover:scale-105 group-hover:shadow-xl transition-all duration-500 overflow-hidden relative">
        {error ? (
          <Box className="w-10 h-10 text-zinc-300" />
        ) : (
          <img 
            src={imgSrc} 
            alt={tool.name}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={handleError}
          />
        )}
      </div>
      <span className="text-[11px] font-black text-zinc-900 dark:text-zinc-900 uppercase tracking-widest">
        {tool.name}
      </span>
    </div>
  );
};

const Hero: React.FC = () => {
  const scrollTools = [...TOOLS, ...TOOLS, ...TOOLS];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Interactive Particle Background */}
      <ParticleCanvas />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-24 w-[30rem] h-[30rem] bg-indigo-50/40 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-[10px] font-black tracking-[0.3em] text-blue-600 mb-10 uppercase backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span>Open for new projects</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.8rem] font-black tracking-tighter text-[#18181b] mb-8 leading-[1.05]">
          Technical Virtual Assistant &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400">
            GHL / AI Automation
          </span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400">
            Specialist
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-base md:text-xl text-zinc-500 mb-14 leading-relaxed font-medium px-4">
          Transforming how businesses operate through intelligent automation<br className="hidden md:block" />
          and optimized systems. Stop manual repetitive tasks and start scaling efficiently.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-32">
          <a
            href="#portfolio"
            className="group w-full sm:w-auto flex items-center justify-center px-10 py-5 rounded-2xl bg-[#18181b] text-white font-black text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all transform active:scale-95 shadow-2xl shadow-zinc-300"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 rounded-2xl border-2 border-zinc-100 bg-white/50 backdrop-blur-md text-zinc-900 font-black text-sm uppercase tracking-widest hover:bg-white transition-all transform active:scale-95"
          >
            Contact Me
          </a>
        </div>

        <div className="pt-24 pb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#18181b] mb-4 tracking-tighter">
            Tools & <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 text-sm md:text-lg font-medium">
            The platforms and technologies I use to build powerful automation solutions.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="marquee-container flex overflow-hidden">
          <div className="animate-scroll flex whitespace-nowrap will-change-transform">
            {scrollTools.map((tool, idx) => (
              <ToolCard key={`${tool.name}-${idx}`} tool={tool} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-container:hover .animate-scroll {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(calc(-100% / 3), 0, 0); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
