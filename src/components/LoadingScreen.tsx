import React from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [imagesPreloaded, setImagesPreloaded] = React.useState(false);
  
  // Preload hero slide images
  React.useEffect(() => {
    const heroImages = [
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740346281/rs6_crni_xhw1ap.jpg',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740317569/rs6_2_k0naen.png',
      'https://res.cloudinary.com/daf91w2yr/image/upload/q_75,fl_progressive/v1740347732/detalj2_sabvlc.jpg'
    ];
    
    const preloadImages = async () => {
      const imagePromises = heroImages.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
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
        // Still mark as preloaded even if there's an error to prevent blocking the UI
        setImagesPreloaded(true);
      }
    };

    preloadImages();

    // Fallback timer in case image loading takes too long
    const timer = setTimeout(() => {
      if (!imagesPreloaded) {
        setImagesPreloaded(true);
        console.log('Preloading timed out, continuing with loading screen');
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(timer);
  }, []);

  // Only complete loading when both timer has elapsed and images are preloaded
  React.useEffect(() => {
    if (imagesPreloaded) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 2500); // Show loading screen for 2.5 seconds minimum

      return () => clearTimeout(timer);
    }
  }, [imagesPreloaded, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/daf91w2yr/image/upload/v1740315175/bn_logo1_twygms.png"
          alt="BN Auto Folije Logo"
          className="w-48 h-auto loading-logo"
        />
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};