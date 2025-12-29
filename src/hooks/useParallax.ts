import { useEffect } from 'react';

export const useParallax = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const contents = document.querySelectorAll('.hero-content') as NodeListOf<HTMLElement>;
      if (!contents.length) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 40;
      const yPos = (clientY / innerHeight - 0.5) * 40;

      contents.forEach(content => {
        content.style.transform = `perspective(800px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
};