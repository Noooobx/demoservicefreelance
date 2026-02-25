import React, { memo } from 'react';
import { cn } from '../utils/cn';
import { useIntersection } from '../hooks/useIntersection';

const Card = memo(({ children, className, delay = 0 }) => {
  const [ref, isIntersecting] = useIntersection({ once: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 transition-all duration-300 reveal",
        isIntersecting && "reveal-active",
        `delay-${Math.min(300, delay * 1000)}`,
        "hover:shadow-premium hover:-translate-y-2 active:scale-95",
        className
      )}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
