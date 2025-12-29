import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ThankYouAnimationProps {
  onClose: () => void;
}

export const ThankYouAnimation: React.FC<ThankYouAnimationProps> = ({ onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 animate-fadeIn">
      <div className="relative">
        {/* Logo animation */}
        <img
          src="https://res.cloudinary.com/daf91w2yr/image/upload/v1740315175/bn_logo1_twygms.png"
          alt="BN Auto Folije Logo"
          className="w-48 h-auto mb-8 animate-float"
        />
        
        {/* Success icon */}
        <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-1 animate-scaleIn">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>

        {/* Thank you message */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold text-white mb-4 animate-slideUp">
            Hvala Vam na Poruci!
          </h2>
          <p className="text-gray-300 animate-slideUp animation-delay-200">
            Kontaktiraćemo vas u najkraćem mogućem roku.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -inset-4 border-2 border-orange-500 rounded-xl animate-pulse opacity-20"></div>
      </div>
    </div>
  );
};