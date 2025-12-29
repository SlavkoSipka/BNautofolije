import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryPopupProps {
  items: Array<{
    image: string;
    additionalImages: string[];
    title: string;
    description: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export const GalleryPopup: React.FC<GalleryPopupProps> = ({
  items,
  currentIndex,
  onClose,
  onPrevious,
  onNext
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const currentItem = items[currentIndex];
  const allImages = [currentItem.image, ...currentItem.additionalImages];

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        if (selectedImageIndex > 0) {
          setSelectedImageIndex(selectedImageIndex - 1);
        }
      }
      if (e.key === 'ArrowRight') {
        if (selectedImageIndex < allImages.length - 1) {
          setSelectedImageIndex(selectedImageIndex + 1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, selectedImageIndex, allImages.length]);

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < allImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  React.useEffect(() => {
    setSelectedImageIndex(0);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-white transition-colors"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 text-white/50 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={handleNextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 text-white/50 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={() => selectedImageIndex > 0 && setSelectedImageIndex(selectedImageIndex - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={() => selectedImageIndex < allImages.length - 1 && setSelectedImageIndex(selectedImageIndex + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>

      {/* Image Container */}
      <div className="w-full h-full flex flex-col items-center justify-center p-8">
        <div className="relative max-w-7xl w-full h-[80vh] flex items-center justify-center">
          <img
            src={allImages[selectedImageIndex]}
            alt={currentItem.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">{currentItem.title}</h3>
          <p className="text-gray-300">{currentItem.description}</p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4 px-4">
        {allImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`h-16 w-24 rounded-lg overflow-hidden transition-all duration-300 ${
              index === selectedImageIndex ? 'ring-2 ring-orange-500 scale-110' : 'opacity-50 hover:opacity-100'
            }`}
          >
            <img
              src={image}
              alt={`${currentItem.title} - Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};