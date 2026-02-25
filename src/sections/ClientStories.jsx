import React, { useState, useEffect, memo } from 'react';
import { Quote, Star } from 'lucide-react';
import Card from '../components/Card';
import { cn } from '../utils/cn';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, EduTech Pro",
    text: "TechFlow transformed our legacy systems into a modern cloud powerhouse. Their attention to detail is unmatched.",
    stars: 5
  },
  {
    name: "Dr. Micheal Chen",
    role: "Global Health Systems",
    text: "The integration process was seamless. We've seen a 40% increase in operational efficiency since partnering with them.",
    stars: 5
  },
  {
    name: "Robert Miller",
    role: "CEO, RetailHub",
    text: "Professional, innovative, and reliable. TechFlow is more than an IT vendor; they are a strategic growth partner.",
    stars: 5
  }
];

const ClientStories = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
        <h2 className="mb-4">Success <span className="text-accent">Stories</span></h2>
        <p className="text-gray-500 mb-12 md:mb-20 max-w-xl mx-auto">
          Hear from the leaders who've transformed their business with our technology.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} delay={idx * 0.1}>
              <div className="flex flex-col h-full text-left">
                <Quote className="text-accent/10 mb-6" size={48} />
                <p className="text-gray-600 italic mb-8 flex-grow">"{testimonial.text}"</p>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Slide Logic (Pure CSS) */}
        <div className="md:hidden relative h-[380px]">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={cn(
                "absolute inset-0 px-2 transition-all duration-500 ease-in-out",
                idx === activeIndex ? "opacity-100 translate-x-0" : idx < activeIndex ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
              )}
            >
              <Card className="text-left border-2 border-accent/5 h-full">
                <Quote className="text-accent/20 mb-4" size={32} />
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <div className="font-bold text-primary">{testimonial.name}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{testimonial.role}</div>
              </Card>
            </div>
          ))}

          {/* Dots Indicator */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "h-2 transition-all duration-300 rounded-full",
                  i === activeIndex ? "w-8 bg-accent" : "w-2 bg-accent/20"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ClientStories.displayName = 'ClientStories';

export default ClientStories;
