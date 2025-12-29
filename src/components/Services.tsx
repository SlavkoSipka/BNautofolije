import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { WindowTintingSection } from './services/WindowTintingSection';
import { VehicleWrappingSection } from './services/VehicleWrappingSection';

export const Services: React.FC = () => {
  const titleBadgeRef = React.useRef<HTMLSpanElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const descriptionRef = React.useRef<HTMLParagraphElement>(null);

  useScrollReveal(titleBadgeRef);
  useScrollReveal(titleRef);
  useScrollReveal(descriptionRef);

  return (
    <div className="relative py-32 w-full bg-gradient-to-b from-black to-gray-900" style={{ position: 'relative', zIndex: 1 }}>
      <div className="w-full">
        <div className="text-center mb-20">
          <span ref={titleBadgeRef} className="inline-block px-6 py-2 bg-orange-100 rounded-full text-orange-500 font-medium mb-4 reveal-element">
            Usluge
          </span>
          <h2 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white reveal-element">
            Naše <span className="text-orange-500">Usluge</span>
          </h2>
          <p ref={descriptionRef} className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 reveal-element">
            Pružamo profesionalne usluge <span className="text-orange-500 font-semibold">zatamnjivanja stakala</span> i 
            <span className="text-orange-500 font-semibold"> presvlačenja vozila</span>, koristeći najkvalitetnije 
            materijale i najnovije tehnike ugradnje.
          </p>
        </div>

        <WindowTintingSection />
        <VehicleWrappingSection />
      </div>
    </div>
  );
};