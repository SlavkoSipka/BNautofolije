import React from 'react';
import { Shield, Sparkles, Droplets, Car, ArrowRight } from 'lucide-react';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Partners } from '../components/Partners';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const WrappingPage: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const subtitleRef = React.useRef<HTMLSpanElement>(null);
  const descriptionRef = React.useRef<HTMLParagraphElement>(null);
  const statsRef = React.useRef<HTMLDivElement>(null);
  const benefitsRef = React.useRef<HTMLDivElement>(null);
  const benefitsTitleRef = React.useRef<HTMLDivElement>(null);

  useScrollReveal(titleRef, { animation: 'animate-expand' });
  useScrollReveal(subtitleRef, { animation: 'animate-slide-rotate' });
  useScrollReveal(descriptionRef, { animation: 'animate-float-in' });
  useScrollReveal(statsRef, { animation: 'animate-scale-rotate' });
  useScrollReveal(benefitsRef, { animation: 'animate-float-in' });
  useScrollReveal(benefitsTitleRef, { animation: 'animate-float-in' });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black flex items-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 opacity-80 hidden lg:block"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740530685/velika_krrrus.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.95) contrast(1.05)',
          }}
        />
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 opacity-80 lg:hidden"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740530685/velika_krrrus.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(1.2)',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-16 lg:pb-32 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-orange-500 bg-orange-500/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium tracking-wider uppercase">Premium Folije</span>
            </div>
            
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight reveal-on-scroll">
              Kompletno Presvlačenje
              <span ref={subtitleRef} className="block mt-4 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent reveal-on-scroll stagger-1">
                Vašeg Vozila
              </span>
            </h1>
            
            <p ref={descriptionRef} className="text-base sm:text-lg text-gray-300 leading-relaxed mt-8 reveal-on-scroll stagger-2">
              Transformišite izgled vašeg vozila uz našu profesionalnu uslugu presvlačenja. 
            </p>

            <div className="flex flex-wrap gap-6 mt-12">
              <button 
                onClick={() => navigate('/kontakt')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/20 flex items-center justify-center gap-3"
              >
                Zakaži Termin
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </button>
            </div>

            <div ref={statsRef} className="grid grid-cols-3 gap-8 mt-16 max-w-lg reveal-on-scroll stagger-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-400">Godina Iskustva</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Premium Kvalitet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Godina Garancije</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-32 bg-gradient-to-b from-[#0a0f1a] to-black relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-64 top-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -left-64 bottom-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16">
          <div ref={benefitsTitleRef} className="text-center mb-20 reveal-on-scroll">
            <span className="inline-block px-6 py-2 bg-orange-500/20 rounded-full text-orange-500 font-medium mb-4 animate-float-in">
              Prednosti
            </span>
            <h2 className="text-4xl font-bold text-white mb-4 animate-expand">
              Zašto Izabrati Naše
              <span className="block mt-2 text-orange-500 animate-slide-rotate">Premium Folije</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-float-in">
              Koristimo samo najkvalitetnije materijale koji pružaju maksimalnu zaštitu i dugotrajnost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={Shield}
              title="Zaštita Originalne Boje"
              description="Čuva originalnu boju vozila od spoljašnjih uticaja i ogrebotina"
            />
            <BenefitCard
              icon={Sparkles}
              title="Premium Izgled"
              description="Širok izbor boja i završnih obrada za jedinstven izgled"
            />
            <BenefitCard
              icon={Droplets}
              title="Lako Održavanje"
              description="Hidrofobna površina olakšava čišćenje i održavanje"
            />
            <BenefitCard
              icon={Car}
              title="Reverzibilnost"
              description="Mogućnost vraćanja na originalnu boju bez oštećenja"
            />
          </div>
        </div>
      </div>

      <Partners />

      {/* Color Options Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 top-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -left-64 bottom-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-orange-500/20 rounded-full text-orange-500 font-medium mb-4">
              Opcije
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Dostupne Završne
              <span className="block mt-2 text-orange-500">Obrade</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" onClick={() => navigate('/galerija')}>
            <FinishOption
              title="SJAJ"
              description="Klasičan, sjajni završni sloj koji daje dubinu i sjaj"
              image="https://res.cloudinary.com/daf91w2yr/image/upload/v1740608667/IMG_1668_iswp3x.jpg"
              onClick={() => navigate('/galerija')}
            />
            <FinishOption
              title="MATTE"
              description="Savrsena zavrsna mat folija"
              image="https://res.cloudinary.com/daf91w2yr/image/upload/v1740612008/IMG_5175_bvafre.jpg"
              onClick={() => navigate('/galerija')}
            />
            <FinishOption
              title="SATIN"
              description="Polumat završna obrada za sofisticiran izgled"
              image="https://e.pcloud.link/publink/show?code=XZKgilZyEjcqmj9gKS11HI6BhdVJkm7UOzV"
              onClick={() => navigate('/galerija')}
            />
          </div>
          
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate('/galerija')}
              className="w-full sm:w-auto min-w-[250px] px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/20 flex items-center justify-center gap-3 group"
            >
              Cela Galerija
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group relative">
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
    <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:-translate-y-1 transition-all duration-500 group-hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-4 bg-orange-500 rounded-full blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <Icon className="text-orange-500 transform group-hover:rotate-12 transition-transform duration-500" size={32} />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors duration-500"></div>
    </div>
  </div>
);

interface FinishOptionProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const FinishOption: React.FC<FinishOptionProps> = ({ title, description, image, onClick }) => (
  <div
    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-500 cursor-pointer"
    onClick={onClick}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-500 transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
  </div>
);