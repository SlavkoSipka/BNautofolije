import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Placeholder for partner logos - you can update these with actual logos later
const partners = [
  {
    name: '3M',
    logo: 'https://res.cloudinary.com/daf91w2yr/image/upload/v1740413558/Nenaslovljeni_dizajn_hahnw0.png',
    url: 'https://www.3m.com/'
  },
  {
    name: 'Avery Dennison',
    logo: 'https://res.cloudinary.com/daf91w2yr/image/upload/v1741115121/AD_H1_Logo_Red_RGB_st3scq.png',
    url: 'https://www.averydennison.com/'
  },
  {
    name: 'Partner 3',
    logo: 'https://www.kpmf.com/assets/img/logo/logo.png',
    url: 'https://www.kpmf.com/'
  },
  {
    name: 'Partner 4',
    logo: 'https://www.orafol.com/typo3conf/ext/orafol_package/Resources/Public/Images/orafol-logo.png',
    url: 'https://www.orafol.com/'
  },
  {
    name: 'Partner 5',
    logo: 'https://res.cloudinary.com/dij7ynio3/image/upload/v1740498381/xpel_plvoyr.png',
    url: 'https://www.xpel.com/'
  },
  {
    name: 'Partner 6',
    logo: 'https://www.hexis-graphics.com/wp-content/themes/Hexis/images/hexis_logo.svg',
    url: 'https://www.hexis-graphics.com/'
  }
];

export const Partners: React.FC = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useScrollReveal(titleRef);
  useScrollReveal(containerRef);

  return (
    <div className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden" style={{ zIndex: 2 }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-64 top-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <span ref={titleRef} className="inline-block px-6 py-2 bg-orange-100 rounded-full text-orange-500 font-medium mb-4 reveal-element">
            Naši Partneri
          </span>
          <h2
            ref={titleRef}
            className="text-5xl font-bold text-white reveal-element"
          >
            Premium Brendovi
            <span className="block mt-2 text-3xl text-orange-500">kojima verujemo</span>
          </h2>
        </div>

        <div 
          ref={containerRef} 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-16 items-center partners-grid reveal-element relative bg-black/20 rounded-2xl p-4 md:p-8 backdrop-blur-sm"
        >
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`group flex items-center justify-center p-4 md:p-6 grayscale-[30%] hover:grayscale-0 transition-all duration-500 hover:scale-110 transform-gpu ${
                index > 0 ? 'border-t md:border-t-0 border-white/5' : ''
              }`}
            >
              <div className="absolute inset-0 bg-orange-50/5 group-hover:bg-orange-50/20 rounded-lg md:rounded-xl transition-all duration-500 -z-10"></div>
              {partner.logo ? (
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center relative py-4 md:py-0"
                >
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-auto h-20 md:h-28 object-contain brightness-110"
                  />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 md:w-12 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
              ) : (
                <div className="w-40 h-20 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                  <span className="text-gray-400">{partner.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};