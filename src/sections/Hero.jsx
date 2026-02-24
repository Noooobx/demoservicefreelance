import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, ShieldCheck } from 'lucide-react';
import { cn } from '../utils/cn';

const Hero = () => {
  const [activeWord, setActiveWord] = React.useState(0);
  const words = ["Innovation", "Excellence", "Scalability", "Transformation"];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-white">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
                opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-gradient-to-br from-accent/10 to-transparent blur-[120px] rounded-full" 
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -60, 0],
                opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-gradient-to-tl from-teal-400/10 to-transparent blur-[120px] rounded-full" 
        />
        
        {/* Animated Network Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] md:text-sm font-black tracking-widest text-accent uppercase bg-accent/5 border border-accent/10 rounded-full"
          >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Engineering Future-Ready Systems
          </motion.div>
          
          <h1 className="mb-6 md:mb-8 text-primary leading-[1.1] tracking-tight">
            Innovative IT for <br />
            <div className="h-[1.2em] relative overflow-hidden inline-block align-bottom min-w-[200px]">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={activeWord}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="text-accent absolute left-0"
                    >
                        {words[activeWord]}
                    </motion.span>
                </AnimatePresence>
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
        </motion.div>

        {/* Right Content - Enhanced Mobile Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
            {/* Focal Point Animation */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-dashed border-accent/20 rounded-full"
            />
            
            {/* The "Tech Core" Visual */}
            <motion.div
                animate={{ 
                    y: [0, -20, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-accent to-blue-600 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)] flex items-center justify-center relative z-20 group cursor-pointer overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-white text-6xl md:text-8xl font-black italic tracking-tighter opacity-20 select-none">TF</span>
            </motion.div>
            
            {/* Floating Badges */}
            <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[10%] hidden lg:flex bg-white p-4 rounded-2xl shadow-premium border border-gray-100 items-center gap-3 z-30"
            >
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Security</div>
                    <div className="text-sm font-bold text-primary">Enterprise Grade</div>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { AnimatePresence } from 'framer-motion';

export default Hero;
