
import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, FileCode, Cpu, ZoomIn, ExternalLink, CircuitBoard, Loader2, AlertCircle } from 'lucide-react';

const SchematicFallback: React.FC<{ title: string; refId: string; platform: string; src?: string }> = ({ title, refId, platform, src }) => (
  <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-8 overflow-hidden animate-in fade-in duration-300">
    <div 
      className="absolute inset-0 opacity-[0.05] pointer-events-none" 
      style={{ 
        backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', 
        backgroundSize: '20px 20px' 
      }} 
    />
    <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
      <div className="absolute inset-0 border-2 border-dashed border-red-200 dark:border-red-900/30 rounded-full" />
      <AlertCircle className="w-8 h-8 text-red-400 dark:text-red-500/50" />
    </div>
    <div className="relative z-10 text-center space-y-2 max-w-full">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-red-50 dark:bg-red-900/20 text-[9px] font-black text-red-500 uppercase tracking-widest border border-red-100 dark:border-red-900/30">
        <span>Image Not Found</span>
      </div>
      <p className="text-[9px] text-zinc-400 font-mono break-all px-2 select-all">
        {src ? decodeURIComponent(src.split('/').pop()?.split('?')[0] || '') : 'Unknown'}
      </p>
    </div>
  </div>
);

const BlueprintImage: React.FC<{ src: string; alt: string; title: string; refId: string; platform: string; className?: string }> = ({ 
  src, alt, title, refId, platform, className 
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setError(false);
    setLoaded(false);
  }, [src]);

  // If error, show fallback with debug info
  if (error) {
    return <SchematicFallback title={title} refId={refId} platform={platform} src={src} />;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-50 dark:bg-zinc-950/50">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
        </div>
      )}
      
      <img 
        src={src} 
        alt={alt}
        className={`${className} relative z-10 block w-full h-full object-cover md:object-contain p-0 md:p-6 transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};

const BlueprintCard: React.FC<{ image: typeof GALLERY_IMAGES[0]; onOpen: () => void }> = ({ image, onOpen }) => {
  return (
    <div 
      onClick={onOpen}
      className="group relative flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
    >
      <div className="absolute top-6 left-6 z-30 pointer-events-none">
        <div className="px-4 py-1.5 bg-zinc-900/90 dark:bg-white/90 backdrop-blur-md border border-white/10 dark:border-black/10 rounded-xl text-[9px] font-black text-white dark:text-zinc-900 uppercase tracking-widest flex items-center space-x-2 shadow-xl">
          <Cpu className="w-3.5 h-3.5 text-blue-500" />
          <span>{image.platform} Logic</span>
        </div>
      </div>

      <div className="aspect-[16/10] bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">
        <BlueprintImage 
          src={image.src} 
          alt={image.title} 
          title={image.title}
          refId={image.ref}
          platform={image.platform}
          className="group-hover:scale-105 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-20">
           <div className="p-4 bg-white dark:bg-zinc-800 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
             <ZoomIn className="w-5 h-5 text-blue-600" />
           </div>
        </div>
      </div>

      <div className="p-8 text-left border-t border-zinc-50 dark:border-zinc-800/50 flex flex-col justify-center flex-grow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2 text-[9px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em]">
            <FileCode className="w-3 h-3" />
            <span>Ref: {image.ref}</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          </div>
        </div>
        <h4 className="text-xl font-black text-zinc-900 dark:text-white tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
          {image.title}
        </h4>
      </div>
    </div>
  );
};

const SystemsGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="systems-gallery" className="relative py-32 bg-white dark:bg-zinc-950 overflow-hidden text-center transition-colors duration-500 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24">
          <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-[10px] font-black tracking-[0.5em] text-blue-600 uppercase mb-8">
             <span>System Blueprints</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter mb-8 leading-none">
            Automation <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Technical workflow architectures and GHL snapshots. Click to expand full-resolution blueprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {GALLERY_IMAGES.map((image, idx) => (
            <BlueprintCard 
              key={`${image.ref}-${idx}`} 
              image={image} 
              onOpen={() => setSelectedImage(image)} 
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
          <div 
            className="absolute inset-0 bg-zinc-950/98 backdrop-blur-3xl cursor-zoom-out" 
            onClick={() => setSelectedImage(null)}
          />
          <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center pointer-events-none">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:-top-4 md:-right-4 p-4 text-white/50 hover:text-white transition-all transform hover:rotate-90 z-[210] pointer-events-auto"
            >
              <X className="w-10 h-10" />
            </button>
            
            <div className="w-full h-full bg-white dark:bg-zinc-900/20 rounded-[3rem] border border-white/10 overflow-hidden flex items-center justify-center p-4 md:p-12 relative shadow-2xl pointer-events-auto">
               <BlueprintImage 
                src={selectedImage.src} 
                alt={selectedImage.title}
                title={selectedImage.title}
                refId={selectedImage.ref}
                platform={selectedImage.platform}
                className="max-w-full max-h-full object-contain drop-shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
              />
              
              <div className="absolute bottom-8 left-8 right-8 text-left hidden md:flex items-end justify-between pointer-events-none">
                 <div className="animate-in slide-in-from-left-4 duration-700">
                   <p className="text-[12px] font-black text-blue-500 uppercase tracking-[0.5em] mb-2">{selectedImage.platform} Implementation</p>
                   <h3 className="text-4xl font-black text-white tracking-tighter">{selectedImage.title}</h3>
                 </div>
                 <div className="flex space-x-4 pointer-events-auto">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-white text-zinc-950 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                       <ExternalLink className="w-4 h-4" />
                       <span>Case Study</span>
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SystemsGallery;
