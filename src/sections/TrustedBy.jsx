import React, { memo } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { cn } from '../utils/cn';

const TrustedBy = memo(() => {
  const [ref, isIntersecting] = useIntersection({ once: true, threshold: 0.1 });
  
  const logos = [
    { name: 'Nexus', color: 'text-blue-500' },
    { name: 'Vortex', color: 'text-purple-500' },
    { name: 'Aether', color: 'text-emerald-500' },
    { name: 'Lumina', color: 'text-orange-500' },
    { name: 'Solara', color: 'text-cyan-500' },
    { name: 'Zenith', color: 'text-rose-500' },
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 font-medium mb-12 uppercase tracking-widest text-sm">
          Trusted by Industry Leaders Worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={cn(
                "grayscale hover:grayscale-0 transition-all cursor-pointer hover:scale-110 reveal",
                isIntersecting && "reveal-active",
                `delay-${index * 100}`
              )}
            >
              <div className={`text-3xl md:text-4xl font-black ${logo.color} tracking-tighter`}>
                {logo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TrustedBy.displayName = 'TrustedBy';

export default TrustedBy;
