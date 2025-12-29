import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  buttonText: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  onButtonClick?: () => void;
  infoBox?: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  buttonText,
  image,
  imageAlt,
  reversed = false,
  onButtonClick,
  infoBox
}) => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const descriptionRef = React.useRef<HTMLParagraphElement>(null);
  const featuresRef = React.useRef<HTMLUListElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);

  useScrollReveal(titleRef);
  useScrollReveal(descriptionRef);
  useScrollReveal(featuresRef);
  useScrollReveal(buttonRef);
  useScrollReveal(imageRef);

  const ContentSection = () => (
    <div className={`w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 py-12 lg:py-20 flex flex-col justify-center text-white ${
      reversed ? 'lg:text-right' : ''
    }`}>
      <div className={`services-content-animation ${reversed ? 'right-content' : ''}`}>
        <h3 ref={titleRef} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight reveal-element">
          {title}
          <span className="block mt-2 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            {subtitle}
          </span>
        </h3>
        <p ref={descriptionRef} className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 lg:mb-12 reveal-element">
          {description}
        </p>
        <ul ref={featuresRef} className={`space-y-4 lg:space-y-6 mb-8 lg:mb-12 ${
          reversed ? 'lg:flex lg:flex-col lg:items-end' : ''
        } reveal-element`}>
          {features.map((feature, index) => (
            <li key={index} className={`flex items-center gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl group ${
              reversed ? 'lg:justify-end' : ''
            }`}>
              {!reversed && (
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                  <Shield className="text-orange-500" size={24} />
                </div>
              )}
              <span>{feature}</span>
              {reversed && (
                <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                  <Shield className="text-orange-500" size={24} />
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className={reversed ? 'lg:flex lg:justify-end' : ''}>
          <button 
            ref={buttonRef} 
            onClick={onButtonClick}
            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 lg:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 lg:px-10 py-4 lg:py-5 rounded-xl transition-all duration-300 text-base sm:text-lg lg:text-xl font-medium transform hover:translate-x-2 shadow-xl hover:shadow-orange-500/20 reveal-element"
          >
            {buttonText}
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl mt-8 lg:mt-20">
      {/* Desktop Background Image */}
      <div 
        className="absolute inset-0 w-full h-full hidden lg:block"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '80%',
          backgroundPosition: reversed ? '0% center' : '100% center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.2)',
        }}
      />
      
      {/* Mobile Background Image */}
      <div 
        className="absolute inset-0 w-full h-full lg:hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.2)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
      
      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-stretch">
        {reversed ? (
          <>
            <ContentSection />
          </>
        ) : (
          <>
            <ContentSection />
          </>
        )}
      </div>
    </div>
  );
};