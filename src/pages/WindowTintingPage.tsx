import React from 'react';
import { Shield, Sun, Thermometer, Lock } from 'lucide-react';
import { Footer } from '../components/Footer';
import { TintSimulator } from '../components/TintSimulator';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const WindowTintingPage: React.FC = () => {
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

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black flex items-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 opacity-90 hidden lg:block"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740752894/m5_az36zb.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            filter: 'brightness(1.1) contrast(1.1)',
          }}
        />
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 opacity-90 lg:hidden"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740752894/m5_az36zb.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: '65% center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(1.2) contrast(1.1)',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50 lg:via-black/50 lg:to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-transparent lg:to-transparent opacity-80" />

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-16 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-orange-500 bg-orange-500/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium tracking-wider uppercase">Premium Usluga</span>
              </div>
              
              <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight reveal-on-scroll">
                Profesionalno
                <span ref={subtitleRef} className="block mt-4 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent reveal-on-scroll stagger-1">
                  Zatamnjivanje Stakala
                </span>
              </h1>
              
              <p ref={descriptionRef} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 reveal-on-scroll stagger-2">
                Pružamo vrhunsku uslugu zatamnjivanja stakala koristeći najkvalitetnije folije koje garantuju dugotrajnost i maksimalnu zaštitu.
              </p>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button 
                  onClick={() => navigate('/kontakt')}
                  className="w-full sm:w-auto px-6 py-4 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/20 flex items-center justify-center gap-2"
                >
                  Zakaži Termin
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </button>
              </div>

              <div ref={statsRef} className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 reveal-on-scroll stagger-3">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">99%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">UV Zaštita</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Godina Iskustva</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Zadovoljnih Klijenata</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TintSimulator />

      {/* Law Info Card */}
      <div className="bg-gradient-to-b from-black to-[#0a0f1a] relative">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 blur opacity-30"></div>
          <div className="relative bg-black/30 backdrop-blur-sm overflow-hidden border-y border-white/10">
            <div className="grid lg:grid-cols-2 items-stretch">
              <div className="p-8 lg:p-16 xl:p-24 flex flex-col justify-center">
                <div className="max-w-xl">
                  <span className="inline-block px-6 py-2 bg-orange-500/20 rounded-full text-orange-500 font-medium mb-6">
                    Zakonska Regulativa
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                    Zatamnjivanje Stakala
                    <span className="block mt-4 text-orange-500">U Skladu sa Zakonom</span>
                  </h2>
                  <div className="space-y-8 text-gray-300">
                    <p className="text-xl">
                      Procedura za dobijanje atesta za zatamnjena stakla sastavljena je iz 3 procesa:
                    </p>
                    <ul className="space-y-6 list-none">
                      <li className="flex items-start gap-6">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-lg">1</span>
                        <span className="text-lg leading-relaxed">Potrebno je auto zatamniti, ugrađivač sprema papire o ugrađenoj foliji na automobil za atest.</span>
                      </li>
                      <li className="flex items-start gap-6">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-lg">2</span>
                        <span className="text-lg leading-relaxed">Odlazi se u AMSS gde se vrši pregled folija za atest, koji košta oko 100-130 eura zavisno gde se radi.</span>
                      </li>
                      <li className="flex items-start gap-6">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-lg">3</span>
                        <span className="text-lg leading-relaxed">Završili ste kompletnu proceduru. Za par dana Vam oni šalju ATEST na kućnu adresu ili idete da ga preuzmete, jedino dobro u svemu je to da je atest TRAJAN.</span>
                      </li>
                    </ul>
                    <p className="text-orange-500 font-medium text-lg pt-6">
                      S poštovanjem, BN autofolije team
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] lg:min-h-full">
                <img
                  src="https://res.cloudinary.com/daf91w2yr/image/upload/v1742219787/Nenaslovljeni_dizajn_3_yb9fcg.png"
                  alt="Atest za zatamnjivanje stakala"
                  className="absolute inset-0 w-full h-full object-contain lg:object-cover"
                />
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
              icon={Sun}
              title="UV Zaštita"
              description="Blokira do 99% štetnih UV zraka, štiteći vas i enterijer vozila"
            />
            <BenefitCard
              icon={Thermometer}
              title="Kontrola Temperature"
              description="Smanjuje toplotu u vozilu do 60%, čineći vožnju prijatnijom"
            />
            <BenefitCard
              icon={Shield}
              title="Sigurnost"
              description="Dodatni sloj zaštite koji drži staklo na okupu u slučaju loma"
            />
            <BenefitCard
              icon={Lock}
              title="Privatnost"
              description="Povećana privatnost uz zadržavanje potpune vidljivosti"
            />
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
      <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      
      {/* Hover indicator */}
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors duration-500"></div>
    </div>
  </div>
);

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => (
  <div className="text-center">
    <div className="inline-block bg-orange-500/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
      <span className="text-2xl font-bold text-orange-500">{number}</span>
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);