
import React, { useEffect } from 'react';
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-32 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col justify-center text-left">
            <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase mb-6">CONNECT</h2>
            <p className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter leading-tight">
              Ready to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Scale Up?</span>
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-12 leading-relaxed font-medium">
              Eliminate manual tasks and future-proof your business operations. 
              Find a time on my calendar below to discuss your automation needs.
            </p>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-blue-600 dark:text-blue-400 group-hover:border-blue-500/50 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-1">Direct Email</p>
                  <p className="text-zinc-900 dark:text-white text-xl font-bold">ivtechva@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-blue-600 dark:text-blue-400 group-hover:border-blue-500/50 transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-1">WhatsApp</p>
                  <a href="https://wa.me/639209832122" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-white text-xl font-bold hover:text-blue-600 transition-colors">
                    +63 920 983 2122
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-blue-600 dark:text-blue-400 group-hover:border-blue-500/50 transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-1">Availability</p>
                  <p className="text-zinc-900 dark:text-white text-xl font-bold">Remote Worldwide</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-zinc-100 dark:border-zinc-900">
              <a 
                href="https://www.linkedin.com/in/ivtechva/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-zinc-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold tracking-widest text-[10px] uppercase"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column - Calendly Widget */}
          <div className="relative flex flex-col justify-center">
            <div className="w-full rounded-[2.5rem] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-2xl h-[700px]">
              <div 
                className="calendly-inline-widget w-full h-full" 
                data-url="https://calendly.com/ivtechva/30min?hide_landing_page_details=1&hide_gdpr_banner=1" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
