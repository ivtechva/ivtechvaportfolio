
import React, { useState, useMemo, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Search, Lightbulb, Wrench, BarChart3, X, ZoomIn, Loader2, Layout, Bot, Zap, Database, Workflow, AlertCircle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const CategoryIcon: React.FC<{ category: string; className?: string }> = ({ category, className }) => {
  const c = category.toLowerCase();
  if (c.includes('ghl') || c.includes('gohighlevel')) return <Layout className={className} />;
  if (c.includes('n8n')) return <Bot className={className} />;
  if (c.includes('zapier')) return <Zap className={className} />;
  if (c.includes('make')) return <Database className={className} />;
  return <Workflow className={className} />;
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      {/* Image Area - Changed aspect ratio to square for bigger presentation */}
      <div className="relative aspect-square bg-zinc-50 dark:bg-zinc-950/50 p-2 flex items-center justify-center overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
        {/* Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
            {project.category}
          </span>
        </div>

        {/* Loading State */}
        {!loaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
          </div>
        )}

        <img 
          src={project.images[0]} 
          alt={project.title}
          className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => {
            console.error('Failed to load image:', project.images[0]);
            setError(true);
          }}
        />
        
        {error && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-zinc-400 cursor-help hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.images[0], '_blank');
            }}
            title="Click to open image URL to debug"
          >
             <AlertCircle className="w-8 h-8 mb-2 opacity-50 text-red-400" />
             <span className="text-[10px] uppercase tracking-widest font-bold">Image Failed</span>
             <span className="text-[8px] mt-1 text-zinc-400">(Click to debug)</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const DetailSection: React.FC<{ icon: React.ReactNode; title: string; content: string; colorClass: string }> = ({ icon, title, content, colorClass }) => (
  <div className="flex gap-4">
    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${colorClass}`}>
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 uppercase tracking-wide flex items-center h-10">
        {title}
      </h4>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  </div>
);

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Reset index when modal opens with new project
  useEffect(() => {
    setCurrentIdx(0);
    setImgError(false);
  }, [project.id]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    if (!showLightbox) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') setShowLightbox(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLightbox, currentIdx]);

  const hasMultipleImages = project.images.length > 1;

  const nextImage = (e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % project.images.length);
    setImgError(false);
  };

  const prevImage = (e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
    setImgError(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop - Handles close on click */}
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
        
        {/* Modal Content - Prevent click propagation to backdrop */}
        <div 
          className="relative w-full max-w-6xl max-h-[95vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-300 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors z-50"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-8 md:mb-12 pr-12">
              <span className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                {project.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column: Image Slider - Increased size */}
              <div className="space-y-4">
                <div 
                  className={`relative group w-full aspect-[4/5] md:aspect-[3/4] bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden flex items-center justify-center transition-colors ${!imgError ? 'cursor-pointer hover:border-blue-500/30' : ''}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center" onClick={() => !imgError && setShowLightbox(true)}>
                    <img 
                      key={currentIdx} // Force re-render on change
                      src={project.images[currentIdx]} 
                      alt={`${project.title} - View ${currentIdx + 1}`}
                      className={`w-full h-full object-contain p-2 transition-all duration-500 animate-in fade-in zoom-in-95`}
                      onError={() => setImgError(true)}
                    />
                  </div>
                  
                  {imgError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 z-20">
                       <AlertCircle className="w-8 h-8 text-red-400 mb-2 opacity-80" />
                       <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Preview Unavailable</span>
                       <a 
                         href={project.images[currentIdx]} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="mt-4 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-2"
                         onClick={(e) => e.stopPropagation()}
                       >
                         <ExternalLink className="w-3 h-3" />
                         <span>Check Link</span>
                       </a>
                    </div>
                  )}

                  {!imgError && (
                    <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="bg-blue-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">View Full Size</span>
                      </div>
                    </div>
                  )}

                  {/* Navigation Arrows */}
                  {hasMultipleImages && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all opacity-0 group-hover:opacity-100 z-30"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all opacity-0 group-hover:opacity-100 z-30"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  
                  {/* Dot Indicators */}
                  {hasMultipleImages && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentIdx(idx); setImgError(false); }}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            idx === currentIdx 
                              ? 'bg-blue-600 w-4' 
                              : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-blue-400'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                {!imgError && (
                  <p className="text-center text-xs text-zinc-400 italic font-medium">
                    {hasMultipleImages ? 'Swipe or click arrows to view more • Click image to zoom' : 'Click image to view full size'}
                  </p>
                )}
              </div>

              {/* Right Column: Details */}
              <div className="space-y-10">
                <DetailSection 
                  icon={<Search className="w-5 h-5 text-blue-600" />} 
                  title="Overview" 
                  content={project.overview}
                  colorClass="bg-blue-50 dark:bg-blue-900/20"
                />
                
                <DetailSection 
                  icon={<Lightbulb className="w-5 h-5 text-red-500" />} 
                  title="Problem" 
                  content={project.problem}
                  colorClass="bg-red-50 dark:bg-red-900/20"
                />
                
                <DetailSection 
                  icon={<Wrench className="w-5 h-5 text-blue-600" />} 
                  title="Solution" 
                  content={project.solution}
                  colorClass="bg-blue-50 dark:bg-blue-900/20"
                />
                
                <DetailSection 
                  icon={<BarChart3 className="w-5 h-5 text-blue-600" />} 
                  title="Results" 
                  content={project.result}
                  colorClass="bg-blue-50 dark:bg-blue-900/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Lightbox */}
      {showLightbox && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300 select-none"
          onClick={() => setShowLightbox(false)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-4 text-white/50 hover:text-white transition-all hover:rotate-90 z-[210]"
            onClick={(e) => { e.stopPropagation(); setShowLightbox(false); }}
          >
            <X className="w-10 h-10" />
          </button>

          {/* Large Navigation Arrows */}
          {hasMultipleImages && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white bg-black/20 hover:bg-white/10 rounded-full transition-all z-[210] backdrop-blur-sm"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white bg-black/20 hover:bg-white/10 rounded-full transition-all z-[210] backdrop-blur-sm"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </>
          )}

          {/* Main Image */}
          <div className="relative w-full h-[90vh] flex items-center justify-center">
             <img 
               key={currentIdx}
               src={project.images[currentIdx]} 
               alt={project.title}
               className={`max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300 ${hasMultipleImages ? 'cursor-pointer' : ''}`}
               onClick={(e) => { 
                 e.stopPropagation();
                 if (hasMultipleImages) nextImage(e);
               }} 
             />
          </div>
          
          {/* Bottom Controls */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center space-y-4 pointer-events-none z-[210]">
            
            {/* Counter */}
            <div className="text-white/70 text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md pointer-events-auto">
              {currentIdx + 1} / {project.images.length}
            </div>

            {/* Thumbnail Navigation */}
            {hasMultipleImages && (
              <div className="flex space-x-3 overflow-x-auto p-2 max-w-[90vw] pointer-events-auto no-scrollbar">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentIdx(idx); }}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                      idx === currentIdx 
                        ? 'border-blue-500 scale-110 shadow-lg opacity-100' 
                        : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/50'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
            
            {hasMultipleImages && (
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Use Arrow Keys to Navigate</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Work: React.FC = () => {
  const tabs = ['All', 'GHL', 'Make', 'N8N', 'Zapier']; 
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return PROJECTS;
    return PROJECTS.filter(p => {
      const cat = p.category.toLowerCase();
      const tab = activeTab.toLowerCase();
      return cat.includes(tab);
    });
  }, [activeTab]);

  return (
    <section id="featured-projects" className="py-24 md:py-32 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase mb-4">
            MY WORK
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">
            Automation platforms and workflow solutions I've built
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg scale-105'
                  : 'bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Work;
