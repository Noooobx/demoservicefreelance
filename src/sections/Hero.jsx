import React, { useState, useEffect, memo } from 'react';
import { ArrowRight, ShoppingCart, ShieldCheck } from 'lucide-react';
import { cn } from '../utils/cn';
import { useIntersection } from '../hooks/useIntersection';

const Hero = memo(() => {
  const [activeWord, setActiveWord] = useState(0);
  const words = ["Innovation", "Excellence", "Scalability", "Transformation"];
  const [ref, isIntersecting] = useIntersection({ once: true, threshold: 0.1 });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section ref={ref} className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-white">
      {/* Dynamic Animated Background (Pure CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-gradient-to-br from-accent/10 to-transparent blur-[120px] rounded-full animate-float-slow opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-tl from-teal-400/10 to-transparent blur-[120px] rounded-full animate-float-slower opacity-20" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className={cn("text-center lg:text-left reveal", isIntersecting && "reveal-active")}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] md:text-sm font-black tracking-widest text-accent uppercase bg-accent/5 border border-accent/10 rounded-full">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Engineering Future-Ready Systems
          </div>
          
          <h1 className="mb-6 md:mb-8 text-primary leading-[1.1] tracking-tight">
            Innovative IT for <br />
            <div className="h-[1.2em] relative overflow-hidden inline-block align-bottom min-w-[200px]">
                {words.map((word, i) => (
                    <span
                        key={word}
                        className={cn(
                            "text-accent absolute left-0 transition-all duration-500 ease-out",
                            i === activeWord ? "translate-y-0 opacity-100" : i < activeWord ? "-translate-y-full opacity-0" : "translate-y-full opacity-0"
                        )}
                    >
                        {word}
                    </span>
                ))}
            </div>
          </h1>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
            We deliver high-fidelity software development and infrastructure management solutions that empower modern enterprises to scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 shadow-2xl shadow-accent/40 active:scale-95 transition-all text-lg group">
              Start Your Project
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-2 border-accent/10 text-primary px-10 py-5 rounded-[2rem] font-black flex items-center justify-center gap-3 hover:bg-white active:scale-95 transition-all text-lg">
               Portfolio
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className={cn("relative reveal delay-200", isIntersecting && "reveal-active")}>
          <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
            {/* Focal Point Animation (Pure CSS rotate) */}
            <div className="absolute inset-0 border-[1px] border-dashed border-accent/20 rounded-full animate-spin-slow" />
            
            {/* The "Tech Core" Visual */}
            <div className="w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-accent to-blue-600 rounded-[3rem] shadow-premium flex items-center justify-center relative z-20 group cursor-pointer overflow-hidden animate-bounce-slow">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-white text-6xl md:text-8xl font-black italic tracking-tighter opacity-20 select-none">TF</span>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-[10%] left-[10%] hidden lg:flex bg-white p-4 rounded-2xl shadow-premium border border-gray-100 items-center gap-3 z-30 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Security</div>
                    <div className="text-sm font-bold text-primary">Enterprise Grade</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
