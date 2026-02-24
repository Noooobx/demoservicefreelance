import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../utils/cn';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group active:bg-gray-50/50 transition-colors rounded-xl px-2 -mx-2"
      >
        <span className={cn(
          "text-lg md:text-xl font-bold transition-colors duration-300 pr-4",
          isOpen ? "text-accent" : "text-primary group-hover:text-accent"
        )}>
          {question}
        </span>
        <div className={cn(
          "shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-accent border-accent text-white rotate-180" : "border-gray-200 text-gray-400 group-hover:border-accent group-hover:text-accent"
        )}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 md:pb-8 text-gray-500 leading-relaxed md:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We have deep expertise in Education, Healthcare, Retail, Manufacturing, and Corporate Enterprise sectors. Our teams are cross-trained in industry-specific compliance standards such as HIPAA for healthcare and SOC2 for enterprise data security."
    },
    {
      question: "How do you handle project management?",
      answer: "We follow an agile-scrum methodology with two-week sprints. Clients receive dedicated access to our project management tools (Jira/Asana) and participate in bi-weekly demo sessions to ensure the product aligns perfectly with expectations."
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer: "Yes, we offer Tier 1, 2, and 3 support packages. Our Managed Services team provides 24/7 monitoring, regular security patches, and periodic feature updates to ensure your transition from launch to scale is effortless."
    },
    {
      question: "What is your typical technology stack?",
      answer: "We are experts in modern, scalable technologies. For web, we typically use the MERN stack or Next.js with Tailwind. For mobile, we specialize in React Native and Flutter. Our backend systems are often built on AWS or Azure using Node.js, Go, or Python."
    },
    {
      question: "Can you help with legacy system migration?",
      answer: "Absolutely. We specialize in 'Modernization as a Service.' We help businesses migrate legacy monolithic applications to modern, cloud-native microservices architectures without interrupting existing business operations."
    },
    {
      question: "How do you ensure data security during development?",
      answer: "Security is baked into our SDL (Software Development Lifecycle). We implement end-to-end encryption, regular penetration testing, and multi-factor authentication for all project environments."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-primary mb-4">FAQ<span className="text-accent">s</span></h2>
          <p className="text-gray-500 font-medium">Clear answers to common questions.</p>
        </div>
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] px-6 md:px-10 border border-gray-100 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
