import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { useNavigate } from 'react-router-dom';

interface BackgroundImage {
  url: string;
  opacity: number;
}

interface SlideContent {
  title: string;
  subtitle: string;
  buttonText: string;
  path: string;
}

export const Hero: React.FC = () => {
  const [backgrounds, setBackgrounds] = React.useState<BackgroundImage[]>([
    { url: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_80,fl_progressive/v1740346281/rs6_crni_xhw1ap.jpg', opacity: 1 },
    { url: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_80,fl_progressive/v1740317569/rs6_2_k0naen.png', opacity: 0 },
    { url: 'https://res.cloudinary.com/daf91w2yr/image/upload/q_80,fl_progressive/v1740347732/detalj2_sabvlc.jpg', opacity: 0 }
  ]);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideInterval = React.useRef<NodeJS.Timeout>();
  const [imagesPreloaded, setImagesPreloaded] = React.useState(false);
  useParallax();
  const navigate = useNavigate();

  // Preload all background images when component mounts
  React.useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = backgrounds.map(bg => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = bg.url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesPreloaded(true);
        console.log('All hero images preloaded successfully');
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesPreloaded(true);
      }
    };

    preloadImages();
  }, []);

  const slideContent: SlideContent[] = [
    {
      title: "Profesionalno Zatamnjivanje",
      subtitle: "Stakala",
      buttonText: "Zakaži termin",
      path: "/zatamnjivanje-stakla"
    },
    {
      title: "Kompletno Presvlačenje",
      subtitle: "Vašeg Vozila",
      buttonText: "Saznaj više",
      path: "/folije"
    },
    {
      title: "Detaljnost Profesionalna",
      subtitle: "i Očigledna",
      buttonText: "Pogledaj Galeriju",
      path: "/galerija"
    }
  ];

  const goToSlide = (direction: 'prev' | 'next') => {
    setCurrentSlide(prev => {
      if (direction === 'prev') {
        return prev === 0 ? backgrounds.length - 1 : prev - 1;
      }
      return (prev + 1) % backgrounds.length;
    });
    
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgrounds.length);
    }, 6500);
  };

  React.useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgrounds.length);
    }, 6500);

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [backgrounds.length]);

  React.useEffect(() => {
    setBackgrounds(prev => prev.map((bg, index) => ({
      ...bg,
      opacity: index === currentSlide ? 1 : 0
    })));
  }, [currentSlide]);

  return (
    <div className="hero-section relative h-screen overflow-hidden" style={{ zIndex: 1 }}>
      {/* Zaseban kontejner za pozadine */}
      <div className="backgrounds-container">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="background-slide"
            style={{
              backgroundImage: `url("${bg.url}")`,
              backgroundSize: 'cover',
              backgroundPosition: '65% center',
              backgroundRepeat: 'no-repeat',
              opacity: bg.opacity,
              transition: 'opacity 2s ease-in-out',
              position: 'fixed',
              zIndex: -1,
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh'
            }}
          />
        ))}
      </div>

      {/* Ostatak sadržaja */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30">
        <div className="absolute inset-x-0 top-[52%] sm:top-1/2 -translate-y-1/4 px-4 sm:px-8 lg:px-16 flex justify-between pointer-events-none z-20">
          <NavigationArrow direction="prev" onClick={() => goToSlide('prev')} />
          <NavigationArrow direction="next" onClick={() => goToSlide('next')} />
        </div>
        
        <div className="container mx-auto px-8 lg:px-16 h-full flex items-center justify-center text-center relative z-10">
          {slideContent.map((content, index) => (
            <HeroContent 
              key={index}
              content={content}
              isActive={currentSlide === index}
              onNavigate={() => navigate(content.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface NavigationArrowProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ direction, onClick }) => (
  <button 
    onClick={onClick}
    className="z-10 bg-black/20 hover:bg-black/40 text-white p-1 sm:p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 pointer-events-auto"
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
  >
    {direction === 'prev' ? <ChevronLeft size={24} className="sm:w-8 sm:h-8" /> : <ChevronRight size={24} className="sm:w-8 sm:h-8" />}
  </button>
);

interface HeroContentProps {
  content: SlideContent;
  isActive: boolean;
  onNavigate: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ content, isActive, onNavigate }) => (
  <div
    className={`hero-content absolute max-w-5xl text-white mt-200 sm:mt-250 space-y-8 sm:space-y-12 transition-all duration-[2000ms] ease-out will-change-transform transform-gpu ${
      isActive ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-90 invisible'
    }`}
    style={{
      transformOrigin: 'center center',
      perspective: '800px'
    }}
  >
    <div className="relative inline-block">
      <img
        src="https://res.cloudinary.com/daf91w2yr/image/upload/v1740337333/logo_mali_onye7s.png"
        alt="BN Auto Folije Logo"
        className="absolute top-1/3 sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] sm:max-w-[1200px] md:max-w-[1600px] pointer-events-none object-contain opacity-60"
        style={{
          filter: 'brightness(0.8) contrast(1.2)',
          mixBlendMode: 'multiply'
        }}
      />
      <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-white mt-16 sm:mt-48 md:mt-64 transform-gpu">
        <span className="inline-block bg-black/90 px-3 sm:px-4 md:px-6 py-2 -skew-x-12 transform title-bg-animation">
          <span className="inline-block skew-x-12 title-animation">{content.title}</span>
        </span>
        <br className="block mb-6 sm:mb-32 md:mb-40 lg:mb-56" />
        <span className="inline-block bg-black/90 px-3 sm:px-4 md:px-6 py-2 -skew-x-12 transform title-bg-animation title-bg-animation-delay">
          <span className="inline-block skew-x-12 text-orange-500 title-animation title-animation-delay">{content.subtitle}</span>
        </span>
      </h1>
      <div className="mt-6 sm:mt-24 md:mt-32 lg:mt-40 button-animation">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 -skew-x-12 transform origin-left rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors"></div>
          <button 
            onClick={onNavigate}
            className="relative px-4 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-4 md:py-5 lg:py-6 inline-flex items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-lg md:text-xl font-medium text-white transition-all hover:scale-105 transform-gpu"
          >
            {content.buttonText}
            <ChevronRight size={20} className="hidden sm:inline-block" />
          </button>
        </div>
      </div>
    </div>
  </div>
);