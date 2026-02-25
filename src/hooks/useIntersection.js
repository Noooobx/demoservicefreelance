import { useEffect, useRef, useState } from 'react';

export const useIntersection = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.once) observer.unobserve(entry.target);
      } else if (!options.once) {
        setIsIntersecting(false);
      }
    }, options);

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.root, options.rootMargin, options.threshold, options.once]);

  return [elementRef, isIntersecting];
};
