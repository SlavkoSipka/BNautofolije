import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone } from 'lucide-react';

export const PPFPackages: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = React.useRef<HTMLDivElement>(null);
  const packagesRef = React.useRef<HTMLDivElement>(null);

  useScrollReveal(titleRef);
  useScrollReveal(packagesRef);

  return (
    <div className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-64 top-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-20 reveal-element">
          <span className="inline-block px-6 py-2 bg-orange-500/20 rounded-full text-orange-500 font-medium mb-4 tracking-wider uppercase">
            PPF Paketi
          </span>
          <h2 className="text-4xl font-bold mb-6">
            Izaberite Nivo
            <span className="block mt-2 text-orange-500">Zaštite</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Odaberite između dve opcije zaštite vašeg vozila, prilagođene vašim potrebama i budžetu
          </p>
        </div>

        {/* Packages Grid */}
        <div ref={packagesRef} className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto reveal-element">
          {/* Basic Package */}
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <h3 className="text-2xl font-bold mb-6 text-center tracking-wider">UDARNA ZONA</h3>
            <div className="h-48 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/daf91w2yr/image/upload/v1740522888/prednja_ovnfym.png"
                alt="Udarna zona zaštita"
                className="w-full h-full object-contain md:object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <ul className="space-y-4 mb-8 text-gray-300 flex-grow">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Softwersko sečenje
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Prednji branik
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Farove L+D
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Retrovizori
              </li>
            </ul>
            <div className="text-center space-y-6 mt-auto">
              <div className="text-sm text-gray-400">Vreme izrade: oko 1-2 dana</div>
              <button 
                onClick={() => navigate('/kontakt')}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Phone size={20} />
                Pozovite Nas
              </button>
            </div>
          </div>

          {/* Full Package */}
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <h3 className="text-2xl font-bold mb-6 text-center tracking-wider">KOMPLETAN AUTO</h3>
            <div className="h-48 mb-6 overflow-hidden rounded-xl">
              <img
                src="https://res.cloudinary.com/daf91w2yr/image/upload/v1740522889/Ceo_a43zns.png"
                alt="Kompletna zaštita"
                className="w-full h-full object-contain md:object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <ul className="space-y-4 mb-8 text-gray-300 flex-grow">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Kompletna pokrivenost
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Softwersko sečenje
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Hauba + krila
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Branici P+Z
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Krila + farovi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Leva i desna strana (vrata + stranica)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Gepek + krov
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Sjajni spojleri + difuzori
              </li>
            </ul>
            <div className="text-center space-y-6 mt-auto">
              <div className="text-sm text-gray-400">Vreme izrade: oko 3-5 dana</div>
              <button 
                onClick={() => navigate('/kontakt')}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Phone size={20} />
                Pozovite Nas
              </button>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-16 text-center text-gray-400 text-sm max-w-2xl mx-auto">
          Kontaktirajte nas za više informacija i besplatne konsultacije.
        </div>
      </div>
    </div>
  );
};