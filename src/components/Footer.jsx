import React, { useState } from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

const FooterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 lg:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 lg:py-0 lg:cursor-default"
      >
        <h4 className="text-sm md:text-lg font-bold text-white uppercase tracking-widest">{title}</h4>
        <ChevronDown size={16} className={cn("text-accent lg:hidden transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {(isOpen || window.innerWidth > 1024) && (
          <motion.div
            initial={window.innerWidth < 1024 ? { height: 0, opacity: 0 } : false}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:mt-6"
          >
            <div className="pb-5 lg:pb-0">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 md:pt-24 pb-32 md:pb-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-20">
        
        {/* Brand Block */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-black text-xl">
              T
            </div>
            <span className="text-2xl font-black tracking-tighter">
              Tech<span className="text-accent">Flow</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-8">
            Engineering the future of enterprise technology. Scalable, secure, and innovative solutions for the global market.
          </p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all group">
                <Icon size={18} className="text-gray-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Accordions */}
        <FooterAccordion title="Quick Navigation">
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Enterprise Services</a></li>
            <li><a href="#portfolio" className="hover:text-accent transition-colors">Industry Portfolio</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">Our Story</a></li>
          </ul>
        </FooterAccordion>

        <FooterAccordion title="Solutions">
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><a href="#" className="hover:text-accent transition-colors">Edge Computing</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Cloud Migration</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Cybersecurity</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Managed Services</a></li>
          </ul>
        </FooterAccordion>

        <FooterAccordion title="GET IN TOUCH">
          <ul className="space-y-6 text-gray-400">
            <li className="flex gap-4 items-start">
              <MapPin className="text-accent shrink-0" size={18} />
              <span className="text-sm">123 Innovation Drive, Tech City, Karnataka 560001</span>
            </li>
            <li className="flex gap-4 items-center">
              <Phone className="text-accent shrink-0" size={18} />
              <span className="text-sm">+91 (80) 4567 8901</span>
            </li>
            <li className="flex gap-4 items-center">
              <Mail className="text-accent shrink-0" size={18} />
              <span className="text-sm">connect@techflow.io</span>
            </li>
          </ul>
        </FooterAccordion>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
        <p>© 2026 TechFlow IT Solutions Private Limited.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
