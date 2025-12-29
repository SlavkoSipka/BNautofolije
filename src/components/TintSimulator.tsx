import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TintCombination {
  front: number;
  rear: number;
  image: string;
}

const tintMatrix: TintCombination[][] = [
  [
    { front: 0, rear: 65, image: 'https://res.cloudinary.com/dij7ynio3/image/upload/q_65/v1740613689/0-65_okh10p.png' },
    { front: 0, rear: 85, image: 'https://res.cloudinary.com/dij7ynio3/image/upload/q_65/v1740613688/0-85_xwngil.png' },
    { front: 0, rear: 95, image: 'https://res.cloudinary.com/dij7ynio3/image/upload/q_65/v1740613683/0-95_sjuvxp.png' },
  ],
  [
    { front: 30, rear: 65, image: 'https://res.cloudinary.com/dij7ynio3/image/upload/q_65/v1740613704/30-65_uwtxqq.png' },
    { front: 30, rear: 85, image: 'https://res.cloudinary.com/dij7ynio3/image/upload/q_65/v1740613702/30-85_j03scm.png' },
    { front: 30, rear: 95, image: 'https://res.cloudinary.com/dij7ynio3/image/upload/q_65/v1740613699/30-95_ex4y88.png' },
  ],
  [
    { front: 50, rear: 65, image: 'https://res.cloudinary.com/dij7ynio3/image/upload/q_65/v1740613702/50-65_vru0jr.png' },
    { front: 50, rear: 85, image: 'https://res.cloudinary.com/dij7ynio3/image/upload/q_65/v1740613702/50-85_kezj3u.png' },
    { front: 50, rear: 95, image: 'https://res.cloudinary.com/dij7ynio3/image/upload/q_65/v1740613696/50-95_hdcfcx.png' },
  ],
];

// Funkcija za preučitavanje slika
const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

export const TintSimulator: React.FC = () => {
  const [frontIndex, setFrontIndex] = useState(0);
  const [rearIndex, setRearIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(tintMatrix[0][0].image);
  const [error, setError] = useState('');
  
  const titleRef = React.useRef<HTMLDivElement>(null);
  const simulatorRef = React.useRef<HTMLDivElement>(null);
  const controlsRef = React.useRef<HTMLDivElement>(null);

  useScrollReveal(titleRef, { animation: 'animate-float-in' });
  useScrollReveal(simulatorRef, { animation: 'animate-scale-rotate' });
  useScrollReveal(controlsRef, { animation: 'animate-slide-rotate' });

  // Preučitavanje slika када se stranica otvori
  useEffect(() => {
    const allImages = tintMatrix.flat().map(combo => combo.image);
    preloadImages(allImages);
  }, []); // Prazan niz znači da se izvršava samo jednom pri mount-ovanju

  const adjustTint = (type: 'front' | 'rear', direction: 'up' | 'down') => {
    setError('');
    let newFrontIndex = frontIndex;
    let newRearIndex = rearIndex;

    if (type === 'front') {
      newFrontIndex = direction === 'up' ? frontIndex + 1 : frontIndex - 1;
      if (newFrontIndex >= 0 && newFrontIndex < 3) {
        setFrontIndex(newFrontIndex);
        setCurrentImage(tintMatrix[newFrontIndex][rearIndex].image);
      }
    } else {
      newRearIndex = direction === 'up' ? rearIndex + 1 : rearIndex - 1;
      if (newRearIndex >= 0 && newRearIndex < 3) {
        setRearIndex(newRearIndex);
        setCurrentImage(tintMatrix[frontIndex][newRearIndex].image);
      }
    }
  };

  const TintControl = ({ type, value, index }: { type: 'front' | 'rear'; value: number; index: number }) => {
    const isMinValue = index === 0;
    const isMaxValue = index === 2;

    return (
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium text-white min-w-[120px]">
          {type === 'front' ? 'Prednja' : 'Zadnja'}: {value}%
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => adjustTint(type, 'down')}
            disabled={isMinValue}
            className={`p-2 rounded-lg transition-all ${
              isMinValue 
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                : 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700'
            }`}
          >
            <Minus size={20} />
          </button>
          <button
            onClick={() => adjustTint(type, 'up')}
            disabled={isMaxValue}
            className={`p-2 rounded-lg transition-all ${
              isMaxValue 
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700'
            }`}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    );
  };

  const currentCombination = tintMatrix[frontIndex][rearIndex];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-8 lg:px-16">
        <div ref={titleRef} className="text-center mb-20 reveal-on-scroll">
          <span className="inline-block px-6 py-2 bg-orange-500/20 rounded-full text-orange-500 font-medium mb-4">
            Simulator Zatamnjivanja
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Interaktivni Prikaz
            <span className="block mt-2 text-orange-500">Zatamnjenja Stakala</span>
          </h2>
          <p className="text-xl text-gray-300">
            Vizualizujte kako će izgledati vaše vozilo sa različitim stepenima zatamnjenja
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30"></div>
            <div ref={simulatorRef} className="relative bg-white p-8 rounded-2xl shadow-2xl mb-8 reveal-on-scroll">
              <div className="relative aspect-[3/2] rounded-xl overflow-hidden">
                {currentImage && (
                  <img
                    src={currentImage}
                    alt="Car tint preview"
                    key={currentImage}
                    className="w-full h-full object-contain transition-opacity duration-300"
                    onError={() => setError('Greška pri učitavanju slike')}
                  />
                )}
              </div>
            </div>
          </div>

          <div ref={controlsRef} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-white/10 reveal-on-scroll">
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <TintControl type="front" value={currentCombination.front} index={frontIndex} />
              <TintControl type="rear" value={currentCombination.rear} index={rearIndex} />
            </div>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-gray-400">
              Napomena: Stvarni izgled zatamnjenja može varirati u zavisnosti od tipa stakla i uslova osvetljenja.
              Za najbolje rezultate, posetite nas i pogledajte uživo uzorke folija.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};