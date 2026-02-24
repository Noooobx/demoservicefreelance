import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StatCounter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return;
    
    const duration = 2000;
    const increment = end / (duration / 16); // 60fps approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center p-6 md:p-8 bg-white rounded-3xl shadow-sm border border-gray-50 active:scale-95 transition-all">
      <span className="text-3xl md:text-4xl font-black text-accent mb-2">{count}{suffix}</span>
      <span className="text-gray-400 font-bold text-[10px] md:text-sm text-center uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-blue-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Our Story</span>
          <h2 className="text-primary mb-8 md:mb-10 leading-tight">
            Transcend Digital <br className="hidden md:block" /> <span className="text-accent underline decoration-accent/20 underline-offset-8">Boundaries</span>
          </h2>
          <div className="space-y-6 text-gray-500 leading-relaxed text-base md:text-lg max-w-xl mx-auto lg:mx-0">
            <p>
              We engineer bespoke digital ecosystems for global industry leaders. Our approach combines rigorous technical excellence with strategic business foresight.
            </p>
            <p className="hidden md:block">
              From edge computing to complex system integrations, we provide the architectural foundation for the next generation of enterprise growth.
            </p>
          </div>
          
          <div className="mt-10 md:mt-12 p-8 md:p-10 bg-primary rounded-[2.5rem] text-white relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
            <p className="relative z-10 text-lg md:text-xl font-medium leading-relaxed italic">
              "We don't just solve IT problems; we create competitive advantages through technological mastery."
            </p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="w-10 h-1 bg-accent rounded-full" />
              <span className="font-bold text-[10px] tracking-[0.2em] uppercase opacity-60">TechFlow Vision</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Column */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {[
            { v: "50", l: "Successes", s: "+" },
            { v: "10", l: "Sectors", s: "+" },
            { v: "24", l: "Uptime", s: "/7" },
            { v: "100", l: "SLA", s: "%" }
          ].map((stat, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(i % 2 !== 0 ? "md:pt-12" : "")}
            >
                <StatCounter value={stat.v} label={stat.l} suffix={stat.s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { cn } from '../utils/cn';

export default About;
