import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, HeartPulse, ShoppingBag, Factory, Building2, ChevronRight } from 'lucide-react';

const industries = [
  { name: 'Education', icon: <GraduationCap />, color: 'from-blue-500/10 to-blue-600/10' },
  { name: 'Healthcare', icon: <HeartPulse />, color: 'from-emerald-500/10 to-teal-600/10' },
  { name: 'Retail', icon: <ShoppingBag />, color: 'from-orange-500/10 to-amber-600/10' },
  { name: 'Manufacturing', icon: <Factory />, color: 'from-gray-500/10 to-slate-600/10' },
  { name: 'Corporate', icon: <Building2 />, color: 'from-indigo-500/10 to-violet-600/10' },
];

const IndustryPortfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block"
            >
              Enterprise Expertise
            </motion.span>
            <h2 className="text-primary leading-tight">Industries We <span className="text-accent">Empower</span></h2>
            <div className="w-20 h-1 bg-accent mt-4 rounded-full" />
          </div>
          <div className="hidden md:flex gap-2">
            <span className="text-xs font-bold text-accent px-5 py-2.5 bg-accent/5 border border-accent/10 rounded-full flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
              Swipe to explore sectors
            </span>
          </div>
        </div>
        
        {/* Mobile: Horizontal Scroll | Desktop: Wrap */}
        <div className="flex md:grid md:grid-cols-5 overflow-x-auto md:overflow-x-visible gap-5 md:gap-6 pb-12 md:pb-0 no-scrollbar snap-x snap-mandatory px-4 -mx-4 md:px-0 md:mx-0">
          {industries.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`p-10 rounded-[3rem] bg-gradient-to-br ${item.color} border border-white/50 backdrop-blur-sm min-w-[300px] md:min-w-0 flex flex-col items-center gap-8 transition-all hover:shadow-premium snap-center group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-gray-50 flex items-center justify-center text-accent relative z-10 group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(item.icon, { size: 40 })}
              </div>
              <div className="text-center relative z-10">
                <span className="text-xl md:text-2xl font-black text-primary block mb-3">{item.name}</span>
                <button className="text-accent font-bold text-sm flex items-center gap-1 mx-auto group-hover:gap-3 transition-all">
                  Case Study <ChevronRight size={14} className="group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryPortfolio;
