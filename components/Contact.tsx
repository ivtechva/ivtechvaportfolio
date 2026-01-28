import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col justify-center text-left">
            <h2 className="text-[11px] font-black text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase mb-6">CONNECT</h2>
            <p className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8 tracking-tighter leading-tight">
              Ready to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Scale Up?</span>
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-12 leading-relaxed font-medium">
              Eliminate manual tasks and future-proof your business operations. 
              Let's build something efficient together.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-blue-600 dark:text-blue-400 group-hover:border-blue-500/50 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-1">Direct Email</p>
                  <p className="text-zinc-900 dark:text-white text-xl font-bold">ivtechva@gmail.com</p>
                </div>
              </div>
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

          <div className="relative">
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-zinc-50 dark:bg-[#0c0e14] border border-zinc-100 dark:border-zinc-800 shadow-xl dark:shadow-none">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-950 text-emerald-500 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-zinc-900 dark:text-white mb-4">Success!</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium">Transmission received. I will reach out soon.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-10 px-8 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 font-bold text-xs uppercase tracking-widest">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 text-left">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.4em]">Identity</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.4em]">Email</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="email@example.com" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.4em]">Message</label>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="How can I help you automate?" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium resize-none"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center px-10 py-5 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-black hover:bg-blue-600 dark:hover:bg-blue-400 transition-all shadow-xl active:scale-[0.98]">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;