import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Settings, Truck, ShieldCheck, Cpu } from 'lucide-react';
import Card from '../components/Card';

const services = [
  {
    icon: <Code className="text-accent" size={32} />,
    title: "Software Development",
    desc: "We engineer robust, scalable software architectures using modern tech stacks. Our bespoke solutions focus on automating complex business logic to drive operational efficiency and long-term growth. From microservices to monolithic migrations, we cover it all."
  },
  {
    icon: <Smartphone className="text-accent" size={32} />,
    title: "Mobile App Development",
    desc: "Crafting high-fidelity, native-performance mobile experiences for iOS and Android. We focus on intuitive UX/UI design, offline-first capabilities, and seamless API integrations that keep your users engaged in a mobile-first world."
  },
  {
    icon: <Settings className="text-accent" size={32} />,
    title: "Integration & Customization",
    desc: "Unlocking silos by connecting disparate enterprise systems through secure middleware and custom API layers. We ensure data flows seamlessly across ERPs, CRMs, and legacy infrastructures to provide a unified business perspective."
  },
  {
    icon: <Truck className="text-accent" size={32} />,
    title: "Supply of IT Goods",
    desc: "Strategic procurement of enterprise-grade hardware, from high-availability servers to complex networking fabric. We partner with top-tier vendors to ensure your physical infrastructure is as resilient as your digital strategy."
  },
  {
    icon: <ShieldCheck className="text-accent" size={32} />,
    title: "CCTV & Access Control",
    desc: "Deploying intelligent physical security ecosystems featuring AI-driven surveillance and biometric access control. We integrate digital security protocols with physical site protection to provide comprehensive enterprise safety."
  },
  {
    icon: <Cpu className="text-accent" size={32} />,
    title: "Industry Solutions",
    desc: "Sector-specific digital transformation strategies. Whether it's HIPAA-compliant healthcare portals or Industry 4.0 manufacturing automation, we deliver the technical depth required to lead your specific market vertical."
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-primary mb-4">Enterprise <span className="text-accent">Services</span></h2>
          <div className="w-16 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={service.title} delay={index * 0.05}>
              <div className="flex flex-col h-full text-left">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/5 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
                  {service.desc}
                </p>
                <div className="mt-auto">
                    <button className="text-accent font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Discover More <Code size={14} className="rotate-90" />
                    </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
