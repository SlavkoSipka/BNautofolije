import React from 'react';

export const BackgroundBreak: React.FC = () => {
  return (
    <div className="relative h-[45vh] md:h-[55vh] -mb-20" style={{ position: 'relative', zIndex: 2 }}>
      {/* Desktop Image - Fixed Background */}
      <div
        className="absolute inset-0 hidden md:block bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740412509/kontakt_w00zg5.jpg")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          top: '0'
        }}
      />
      
      {/* Mobile Image - Normal Background (Not Fixed) */}
      <div
        className="absolute inset-0 block md:hidden bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.9)), url("https://res.cloudinary.com/daf91w2yr/image/upload/q_90/v1740492612/WhatsApp_Image_2025-02-23_at_18.13.31_8ff7c5a2_rlksf7.jpg")',
          backgroundPosition: '70% 85%',
          backgroundSize: '200%',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(80%)',
          zIndex: '-1'
        }}
      />
    </div>
  );
};