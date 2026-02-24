import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Card from '../components/Card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="mb-4">Let’s <span className="text-accent">Connect</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ready to scale? Our experts are here to help you transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 md:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                    <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 h-14 md:h-16 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:bg-white transition-all shadow-sm"
                      placeholder="Your name"
                    />
                </div>
                <div className="space-y-4">
                    <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 h-14 md:h-16 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:bg-white transition-all shadow-sm"
                      placeholder="your@email.com"
                    />
                </div>
                <div className="space-y-4">
                    <label className="text-xs font-black text-primary uppercase tracking-widest ml-1">Message</label>
                    <textarea
                        rows="4"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-5 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:bg-white transition-all shadow-sm resize-none"
                        placeholder="Tell us about your requirements..."
                    ></textarea>
                </div>
                <button className="w-full bg-accent text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-accent/20 active:scale-95 transition-all text-lg">
                  Submit Request <Send size={20} />
                </button>
              </form>
            </Card>
          </motion.div>

          {/* Info Column */}
          <div className="flex flex-col justify-between py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center text-accent shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Call Representative</h4>
                  <p className="text-gray-500 font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center text-accent shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Send Email</h4>
                  <p className="text-gray-500 font-medium">connect@techflow.io</p>
                </div>
              </div>
              <div className="flex gap-5 items-start sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Corporate Office</h4>
                  <p className="text-gray-500 font-medium">123 Innovation St, Bangalore 560001</p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="mt-12 h-48 md:h-64 rounded-[2.5rem] bg-gray-100 border border-gray-50 overflow-hidden relative group shadow-lg">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-5 py-2 bg-white/90 backdrop-blur rounded-full shadow-premium text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                        <MapPin size={14} className="text-accent" />
                        View Map
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
