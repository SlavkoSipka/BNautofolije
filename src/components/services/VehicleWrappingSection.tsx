import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';

export const VehicleWrappingSection: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const descriptionRef = React.useRef<HTMLParagraphElement>(null);
  const featuresRef = React.useRef<HTMLUListElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useScrollReveal(titleRef);
  useScrollReveal(descriptionRef);
  useScrollReveal(featuresRef);
  useScrollReveal(buttonRef);

  return (
    <div className="relative rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl mt-8 lg:mt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Desktop Background Image */}
      <div 
        className="absolute inset-0 w-full h-full hidden lg:block"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740400562/s6_qo7poo.png")',
          backgroundSize: '35%',
          backgroundPosition: '0% center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.5)',
        }}
      />
      
      {/* Mobile Background Image */}
      <div 
        className="absolute inset-0 w-full h-full lg:hidden"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740400562/s6_qo7poo.png")',
          backgroundSize: 'contain',
          backgroundPosition: '0% center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.1)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-black/30 lg:via-black/60 lg:to-black/50" />
      
      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 py-12 lg:py-20 flex flex-col justify-center text-white lg:ml-auto text-right">
          <div className="services-content-animation right-content">
            <h3 ref={titleRef} className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-8 leading-tight reveal-element">
              Kompletno presvlačenje
              <span className="block mt-2 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                premium folijama
              </span>
            </h3>
            <p ref={descriptionRef} className="hidden lg:block text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 lg:mb-12 reveal-element">
              Transformišite izgled vašeg vozila uz našu profesionalnu uslugu presvlačenja. Koristimo samo najkvalitetnije folije koje pružaju:
            </p>
            <ul ref={featuresRef} className="space-y-4 lg:space-y-6 mb-8 lg:mb-12 flex flex-col items-end reveal-element">
              {["Zaštitu originalne boje vozila", "Otpornost na ogrebotine i UV zračenje", "Dugotrajnost i lako održavanje"].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 lg:gap-4 text-sm sm:text-lg lg:text-xl group justify-end">
                  <span>{feature}</span>
                  <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                    <Shield className="text-orange-500" size={24} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-end">
              <button 
                ref={buttonRef}
                onClick={() => navigate('/folije')}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 lg:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 lg:px-10 py-4 lg:py-5 rounded-xl transition-all duration-300 text-base sm:text-lg lg:text-xl font-medium transform hover:translate-x-2 shadow-xl hover:shadow-orange-500/20 reveal-element"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 lg:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-8 lg:px-10 py-3 lg:py-5 rounded-xl transition-all duration-300 text-sm sm:text-lg lg:text-xl font-medium transform hover:translate-x-2 shadow-xl hover:shadow-orange-500/20 reveal-element">
                Saznaj više
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};