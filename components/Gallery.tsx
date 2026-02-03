
import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, Maximize2, Loader2, Search, AlertCircle, FileCode } from 'lucide-react';

const GalleryImage: React.FC<{ filename: string; alt: string }> = ({ filename, alt }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-zinc-100 dark:bg-zinc-900/30 flex items-center justify-center">
      {!loaded && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 z-10">
          <Loader2 className="w-6 h-6 text-blue-600 animate-spin mb-2" />
          <span className="text-[9px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">Architecting Preview...</span>
        </div>
      )}
      
      {!error ? (
        <img 
          src={filename} 
          alt={alt}
          className={`w-full h-full object-cover md:object-contain p-4 transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 z-10 p-6 text-center">
          <AlertCircle className="w-8 h-8 text-red-400 dark:text-red-900 mb-2 opacity-80" />
          <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
            Missing Asset: <br/> 
            <span className="text-red-500 font-mono select-all lowercase">{filename.split('/').pop()}</span>
          </p>
        </div>
      )}
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section id="gallery" className="relative py-32 bg-zinc-50/50 dark:bg-zinc-950 overflow-hidden text-center transition-colors duration-500 border-y border-zinc-100 dark:border-zinc-900/50">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', 
          backgroundSize: '48px 48px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24">
          <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-[10px] font-black tracking-[0.5em] text-blue-600 uppercase mb-8">
             <span>System Blueprints</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter mb-8 leading-none">
            Architecture <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            A specialized gallery of the automated logic and system architectures I deploy for high-scale clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {GALLERY_IMAGES.map((image, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImage(image)}
              className="group relative rounded-[3rem] bg-white dark:bg-[#0c0e14] border border-zinc-200 dark:border-zinc-800/80 overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden flex items-center justify-center relative border-b border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/20">
                <GalleryImage filename={image.src} alt={image.title} />
                
                <div className="absolute inset-0 z-20 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[4px]">
                   <div className="p-5 bg-white/95 dark:bg-zinc-800/95 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                     <Search className="w-6 h-6 text-blue-600" />
                   </div>
                </div>

                <div className="absolute top-6 left-6 z-30">
                  <div className="px-4 py-1.5 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl text-[9px] font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest flex items-center space-x-2 shadow-lg">
                    <FileCode className="w-3.5 h-3.5 text-blue-600" />
                    <span>{image.ref}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-10 text-left bg-white dark:bg-[#0c0e14] flex-grow flex flex-col justify-center">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-2">{image.platform} Ecosystem</p>
                    <h4 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none">{image.title}</h4>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-600 transition-all duration-500">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12 overflow-hidden animate-in fade-in duration-500">
          <div 
            className="absolute inset-0 bg-zinc-950/98 backdrop-blur-3xl" 
            onClick={() => setSelectedImage(null)}
          />
          <div className="relative w-full max-w-7xl max-h-full aspect-video flex flex-col items-center justify-center animate-in zoom-in-95 duration-500">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 md:top-0 md:-right-16 p-4 text-white/50 hover:text-white transition-all transform hover:rotate-90"
            >
              <X className="w-12 h-12" />
            </button>
            <div className="w-full h-full bg-white dark:bg-[#080a12]/90 rounded-[4rem] border border-white/10 overflow-hidden flex items-center justify-center p-8 md:p-16 relative shadow-2xl">
              <div className="absolute top-12 left-12 z-10">
                <p className="text-[12px] font-black text-blue-500 uppercase tracking-[0.5em] mb-3">{selectedImage.platform} Implementation • {selectedImage.ref}</p>
                <h3 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter">{selectedImage.title}</h3>
              </div>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
              />
            </div>
            <div className="mt-10 flex items-center space-x-6">
               <div className="flex items-center space-x-3 text-white/40 text-[11px] font-black uppercase tracking-[0.3em]">
                 <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                 <span>High Resolution Engineering View</span>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
