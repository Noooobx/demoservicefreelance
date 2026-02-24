import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const Card = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-premium active:shadow-md transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
