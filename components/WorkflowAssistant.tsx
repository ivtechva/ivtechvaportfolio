import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, X, Loader2, Sparkles } from 'lucide-react';

const WorkflowAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response, isLoading]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an automation expert AI for Ian Valenzuela's portfolio. 
        A client asks: "${prompt}". Suggest a workflow using Zapier, Make, n8n, or GHL. 
        Be technical and professional.`,
      });
      setResponse(result.text || 'Engineering logic at capacity. Please try again.');
    } catch (error) {
      setResponse('Connection failed. Please retry.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[360px] h-[500px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-zinc-100 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">
          <div className="p-6 bg-zinc-900 flex justify-between items-center">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center p-1.5">
                <Sparkles className="w-full h-full text-white" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest uppercase">Automation AI</p>
                <p className="text-[10px] text-zinc-400 font-medium">Workflow Engine</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-white/60 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
            <div className="bg-zinc-50 p-4 rounded-2xl text-[13px] text-zinc-600 leading-relaxed border border-zinc-100 font-medium">
              Tell me about a manual task in your business, and I'll architect an automated fix.
            </div>
            {response && (
              <div className="bg-blue-50/50 p-4 rounded-2xl text-[13px] text-zinc-700 leading-relaxed border border-blue-100 font-medium animate-in fade-in duration-500">
                {response}
              </div>
            )}
            {isLoading && (
              <div className="flex items-center space-x-2 text-zinc-400">
                <Loader2 className="w-3 h-3 animate-spin" />
                <span className="text-[10px] font-black uppercase tracking-widest">Architecting...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-4 border-t border-zinc-100 bg-white">
            <div className="relative">
              <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ex: Manual lead follow-up..." className="w-full pl-5 pr-12 py-4 rounded-xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 text-[13px] font-medium" />
              <button type="submit" disabled={isLoading || !prompt.trim()} className="absolute right-2 top-2 p-2 rounded-lg bg-zinc-900 text-white disabled:opacity-30 active:scale-90 transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="group w-16 h-16 rounded-2xl bg-zinc-900 text-white shadow-2xl hover:bg-blue-600 transition-all duration-300 active:scale-90 flex items-center justify-center relative overflow-hidden">
          <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <div className="absolute right-full mr-4 px-4 py-2 bg-white rounded-xl shadow-xl border border-zinc-100 text-zinc-900 text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            Consult AI Architect
          </div>
        </button>
      )}
    </div>
  );
};

export default WorkflowAssistant;