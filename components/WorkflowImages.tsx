import React from 'react';
import { imgHVAC1, imgLandscaping1, imgMedical1, imgBarber1 } from '../constants';

const WorkflowImages: React.FC = () => {
  // Using imported images to ensure path correctness
  const images = [
    imgHVAC1, // HVAC
    imgLandscaping1, // Landscaping
    imgMedical1, // Psych
    imgBarber1  // Appointment
  ];

  return (
    <section id="workflows" className="bg-white dark:bg-zinc-950 transition-colors duration-500 py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-24">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-2xl bg-white dark:bg-[#0c0e14]"
          >
            <img 
              src={src} 
              alt={`GHL Workflow Architecture ${index + 1}`} 
              className="w-full h-auto object-contain block" 
              loading="lazy"
              onError={(e) => {
                // If the specific local file path is not found, show a clear placeholder
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/1200x800/f4f4f5/71717a?text=Workflow+${index + 1}`;
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowImages;