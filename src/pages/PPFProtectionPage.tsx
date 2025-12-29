import React from 'react';
import { Shield, Sparkles, Droplets, Car } from 'lucide-react';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PPFPackages } from '../components/PPFPackages';

export const PPFProtectionPage: React.FC = () => {
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
            backgroundImage: 'url("https://res.cloudinary.com/dij7ynio3/image/upload/v1740508046/m5_ygjxeo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.8) contrast(1.2)',
          }}
        />
        {/* Mobile Background Image */}
        <div
          className="absolute inset-0 opacity-80 lg:hidden"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/dij7ynio3/image/upload/v1740508046/m5_ygjxeo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(1)',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-16 lg:pb-32 flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-orange-500 bg-orange-500/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium tracking-wider uppercase">Premium Zaštita</span>
            </div>
            
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight reveal-on-scroll">
              PPF Zaštitne
              <span ref={subtitleRef} className="block mt-4 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent reveal-on-scroll stagger-1">
                Folije
              </span>
            </h1>
            
            <p ref={descriptionRef} className="text-base sm:text-lg text-gray-300 leading-relaxed mt-8 reveal-on-scroll stagger-2">
              Vrhunska zaštita laka vašeg vozila od oštećenja, ogrebotina i udaraca kamenja. 
              Providna folija koja čuva originalni izgled i vrednost vašeg automobila.
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
                <div className="text-gray-400">Nevidljiva Zaštita</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Godina Garancije</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PPF Info Section */}
      <div className="py-24 bg-gradient-to-b from-black via-[#0a0f1a] to-gray-900">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-orange-500/20 rounded-full text-orange-500 font-medium mb-4">
              Šta je PPF?
            </span>
            <h2 className="text-4xl font-bold text-white mb-8">
              XPEL Ultimate Plus™
              <span className="block mt-2 text-orange-500">Paint Protection Film</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-black to-black rounded-2xl blur opacity-50"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dij7ynio3/image/upload/v1740508458/XPEL_BIG.D_hqbehi.png"
                  alt="XPEL Ultimate Plus PPF"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Text Content Side */}
            <div className="text-white space-y-8">
              <p className="text-lg leading-relaxed text-gray-300">
                Paint Protection Film (PPF) predstavlja revolucionarnu tehnologiju zaštite vozila - kristalno prozirnu poliuretansku foliju izuzetne čvrstoće i izdržljivosti. Savršeno prijanja uz sve vrste završne obrade automobila, bilo da je u pitanju sjajni ili mat lak, pružajući nevidljivu ali snažnu barijeru protiv svih svakodnevnih opasnosti na putu.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Možete se odlučiti za parcijalnu zaštitu najugroženijih delova kao što su prednji branik, hauba, krila, farovi i retrovizori, ili za potpunu zaštitu celog vozila. Bez obzira na vaš izbor, PPF folija će pouzdano štititi lak vašeg automobila godinama koje dolaze.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-orange-500 mb-2">30</div>
                  <div className="text-sm text-gray-400">Sekundi Samozalečenja</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-orange-500 mb-2">99%</div>
                  <div className="text-sm text-gray-400">Zaštita od Udaraca</div>
                </div>
              </div>
              <button 
                onClick={() => navigate('/kontakt')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/20 flex items-center justify-center gap-3"
              >
                Zakaži Termin
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* XPEL Ultimate Plus Benefits */}
      <div className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740524691/installer-of-paint-protection-film-scaled_acsbhj.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.2)',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Mobile Background */}
        <div
          className="absolute inset-0 block lg:hidden"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740524691/installer-of-paint-protection-film-scaled_acsbhj.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.2)',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="relative container mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              ULTIMATE <span className="text-yellow-400">PLUS</span>™ PREDNOSTI
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
            <XPELBenefitCard
              icon="💰"
              title="DOBRA INVESTICIJA"
              description="Zaštitite vrednost vašeg vozila i uštedite na budućim popravkama"
            />
            <XPELBenefitCard
              icon="♾️"
              title="SAMOIZLEČENJE"
              description="Napredna tehnologija koja eliminiše manje ogrebotine"
            />
            <XPELBenefitCard
              icon="☀️"
              title="NE ŽUTI"
              description="Otpornost na UV zračenje sprečava žućenje folije"
            />
            <XPELBenefitCard
              icon="🛡️"
              title="OTPORNOST NA OŠTEĆENJA"
              description="Izuzetna zaštita od udaraca kamenja i ogrebotina"
            />
            <XPELBenefitCard
              icon="💧"
              title="HIDROFOBNA POVRŠINA"
              description="Odbija vodu i olakšava održavanje čistoće"
            />
            <XPELBenefitCard
              icon="💎"
              title="ULTRA VISOK SJAJ"
              description="Održava i poboljšava originalni sjaj vozila"
            />
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 top-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -left-64 bottom-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-orange-500/20 rounded-full text-orange-500 font-medium mb-4">
              Naš Pristup
            </span>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Preciznost i Perfekcija
              <span className="block mt-2 text-orange-500">Kroz 4 Faze</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Svako vozilo prolazi kroz naš rigorozni proces pripreme i instalacije. Svaka faza je pažljivo osmišljena kako bi osigurala besprekoran rezultat i dugotrajnu zaštitu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              image="https://res.cloudinary.com/dij7ynio3/image/upload/v1740521814/Wichita_Clear_Bra_-_Porsche_911_GT3_RS_-_Porsche_911_-_XPEL_Paint_Protection_Film_-_Full_Body_Wrap_-_Paint_Protection_911_GT3_RS_-_991.2_GT3_RS_-_Lizard_Green_-_PTS_911_-_Car_Wash_-_Foam_Cannon_-_mfwiwf.jpg"
              title="TEMELJNO ČIŠĆENJE"
              description="Specijalizovani tretman pranja koji uklanja sve tragove prljavštine i priprema površinu za dalju obradu."
              number="01"
            />
            <ProcessStep
              image="https://res.cloudinary.com/dij7ynio3/image/upload/v1740522188/Synthetic-Clay-Bar-Decontamination-Wave-Detail_d0ecle.webp"
              title="DUBINSKA PRIPREMA"
              description="Profesionalna dekontaminacija površine specijalnom glinom koja eliminiše mikroskopske nečistoće i kontaminante."
              number="02"
            />
            <ProcessStep
              image="https://res.cloudinary.com/dij7ynio3/image/upload/v1740522240/express-polish_qmkviw.jpg"
              title="FINALNA KOREKCIJA"
              description="Precizno poliranje koje savršeno priprema površinu, uklanja mikro-oštećenja i osigurava optimalno prijanjanje folije."
              number="03"
            />
            <ProcessStep
              image="https://res.cloudinary.com/dij7ynio3/image/upload/v1740521946/ppfinstall_dljpb3.jpg"
              title="EKSPERTSKA APLIKACIJA"
              description="Precizno sečenje i instalacija PPF folije uz posebnu pažnju na ivice i konture, garantujući savršeno uklapanje sa dizajnom vozila."
              number="04"
            />
          </div>
        </div>
      </div>

      <PPFPackages />

      <Footer />
    </div>
  );
};

interface XPELBenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const XPELBenefitCard: React.FC<XPELBenefitCardProps> = ({ icon, title, description }) => (
  <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-white/10 hover:bg-black/40 transition-all duration-500 hover:scale-105">
    <div className="text-2xl sm:text-4xl mb-2 sm:mb-6">{icon}</div>
    <h3 className="text-sm sm:text-xl font-bold text-white mb-2 sm:mb-4 line-clamp-2">{title}</h3>
    <p className="hidden sm:block text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
  </div>
);

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <div className="group relative">
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 transform hover:-translate-y-1 transition-all duration-500 group-hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-4 bg-orange-500 rounded-full blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <Icon className="text-orange-500 transform group-hover:rotate-12 transition-transform duration-500" size={32} />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors duration-500"></div>
    </div>
  </div>
);

interface ProcessStepProps {
  image: string;
  title: string;
  description: string;
  number: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ image, title, description, number }) => (
  <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">{number}</div>
    <div className="relative space-y-6">
      <div className="h-48 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
      </div>
    </div>
  </div>
);