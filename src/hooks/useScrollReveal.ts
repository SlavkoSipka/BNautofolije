import { useEffect, RefObject } from 'react';

export const useScrollReveal = (ref: RefObject<HTMLElement>, options: { animation?: string } = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {          
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible', 'is-visible');
            if (options.animation) {
              entry.target.classList.add(options.animation);
            }
          } else {
            entry.target.classList.remove('reveal-visible', 'is-visible');
            if (options.animation) {
              entry.target.classList.remove(options.animation);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
};