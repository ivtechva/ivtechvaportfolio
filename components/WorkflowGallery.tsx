import React from 'react';
import { imgHVAC1, imgLandscaping1, imgMedical1, imgBarber1 } from '../constants';

const WorkflowGallery: React.FC = () => {
  // Using imported images to ensure path correctness
  const images = [
    imgHVAC1, // HVAC
    imgLandscaping1, // Landscaping
    imgMedical1, // Psych
    imgBarber1  // Appointment
  ];

  return (
    <section id="workflows" className="bg-white dark:bg-zinc-950 py-12 md:py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-24">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-2xl bg-white dark:bg-[#0c0e14] animate-in fade-in slide-in-from-bottom-10 duration-700"
          >
            <img 
              src={src} 
              alt={`Workflow Architecture ${index + 1}`} 
              className="w-full h-auto object-contain block" 
              loading="lazy"
              onError={(e) => {
                // If the local file is missing, we hide the broken image container
                (e.target as HTMLImageElement).parentElement?.classList.add('hidden');
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowGallery;