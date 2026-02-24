import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { cn } from '../utils/cn';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-white px-4 md:px-0">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-accent/5 via-transparent to-teal-400/5 blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-bold tracking-wider text-accent uppercase bg-accent/10 rounded-full"
          >
            Innovative enterprise IT
          </motion.span>
          <h1 className="mb-6 md:mb-8 text-primary leading-[1.2]">
            Modern IT Solutions for <span className="text-accent">Scale</span>
          </h1>
          <p className="text-gray-600 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
            Strategic software development, systems integration, and infrastructure management for the modern enterprise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
            <button className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-accent/20 active:scale-95 transition-all">
              Explore Services
              <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto border-2 border-accent/20 text-accent px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-accent/5 active:scale-95 transition-all">
              <ShoppingCart size={20} />
              Equipment
            </button>
          </div>
        </motion.div>

        {/* Right Content - Hidden/Simplified on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto bg-gradient-to-br from-accent/10 to-transparent rounded-[3rem] p-8">
            <div className="w-full h-full border border-accent/20 rounded-[2.5rem] bg-white/40 backdrop-blur-xl shadow-premium flex items-center justify-center">
               <div className="text-6xl font-black text-accent/20 tracking-tighter uppercase rotate-[-15deg]">Premium</div>
            </div>
            
            {/* Soft decorative elements */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-accent/20 blur-2xl rounded-full" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-400/20 blur-3xl rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
