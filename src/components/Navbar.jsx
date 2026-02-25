import React, { useState, useEffect, useRef, memo } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 20) {
        navRef.current.classList.add('bg-white/80', 'backdrop-blur-xl', 'border-b', 'border-gray-100', 'py-3', 'shadow-sm');
        navRef.current.classList.remove('bg-transparent');
      } else {
        navRef.current.classList.remove('bg-white/80', 'backdrop-blur-xl', 'border-b', 'border-gray-100', 'py-3', 'shadow-sm');
        navRef.current.classList.add('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services', dropdown: true },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-10 py-4 bg-transparent"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl">
              T
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-primary">
              Tech<span className="text-accent">Flow</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-primary/70 hover:text-accent font-medium transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </a>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 overflow-hidden">
                    <div className="py-2">
                      {['Software Dev', 'Mobile Apps', 'IT Strategy'].map((item) => (
                        <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-accent/5 hover:text-accent">
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className="bg-accent text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-accent/90 transition-all active:scale-95 shadow-lg shadow-accent/20">
              Let's Connect
            </button>
          </div>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-primary"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu (CSS Backdrop & Content) */}
      <div 
        className={cn(
          "fixed inset-0 bg-primary/20 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div 
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] lg:hidden shadow-2xl flex flex-col transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-50">
          <span className="text-xl font-bold">Tech<span className="text-accent">Flow</span></span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-primary"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-primary flex items-center justify-between group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              <ArrowRight size={18} className="text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </a>
          ))}
        </div>

        <div className="p-6">
          <button className="w-full bg-accent text-white py-4 rounded-2xl font-bold shadow-xl shadow-accent/30 active:scale-[0.98] transition-all">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
