import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems, GalleryItem } from '../data/galleryData';

export const GalleryItemPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [currentItem, setCurrentItem] = React.useState<GalleryItem | null>(null);
  const [allImages, setAllImages] = React.useState<string[]>([]);

  const handlePrevImage = () => {
    setSelectedImageIndex(prev => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex(prev => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  React.useEffect(() => {
    const foundItem = galleryItems.find(item => item.id.toString() === id);
    if (foundItem) {
      setCurrentItem(foundItem);
      setAllImages([foundItem.image, ...foundItem.additionalImages]);
    }
  }, [id]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevImage, handleNextImage]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    allImages.forEach(src => { const img = new Image(); img.src = src; });
  }, [allImages]);

  if (!currentItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0f1a] to-black pt-[calc(7rem+env(safe-area-inset-top))] sm:pt-32 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-64 top-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/galerija')}
          className="mt-6 sm:mt-0 mb-4 sm:mb-8 flex items-center gap-2 text-white hover:text-orange-500 transition-colors relative z-10 text-sm sm:text-base"
        >
          <ArrowLeft size={16} className="sm:size-20" />
          Nazad na galeriju
        </button>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-24 max-w-full">
          {/* Image Viewer */}
          <div className="relative max-w-full overflow-hidden">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30"></div>
              <img
                src={allImages[selectedImageIndex]}
                alt={`${currentItem.title} ${selectedImageIndex + 1}`}
                className="relative w-full h-full max-w-full max-h-full object-contain rounded-xl"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="sm:size-24" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="sm:size-24" />
            </button>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-2 sm:mt-4 overflow-x-auto pb-2 scrollbar-hide max-w-full">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all ${
                    index === selectedImageIndex 
                      ? 'ring-2 ring-orange-500 scale-105' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full max-w-full max-h-full object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="text-white bg-black/30 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-white/10 max-w-full">
            <h1 className="text-xl sm:text-4xl font-bold mb-2 sm:mb-4">{currentItem.title}</h1>
            <h2 className="text-lg sm:text-2xl text-orange-500 mb-4 sm:mb-8">{currentItem.description}</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-xl font-semibold mb-2">O Projektu</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {currentItem.category === 'tinting' 
                    ? 'Profesionalno zatamnjivanje stakala sa premium folijama koje pružaju maksimalnu UV zaštitu i privatnost.'
                    : 'Kompletno presvlačenje vozila premium folijama koje pružaju zaštitu originalne boje i jedinstven izgled.'}
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-xl font-semibold mb-2">Karakteristike</h3>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  {currentItem.category === 'tinting' ? (
                    <>
                      <li>• UV zaštita do 99%</li>
                      <li>• Smanjenje toplote u vozilu</li>
                      <li>• Povećana privatnost</li>
                      <li>• Dugotrajnost i otpornost</li>
                    </>
                  ) : (
                    <>
                      <li>• Zaštita originalne boje</li>
                      <li>• Premium izgled</li>
                      <li>• Otpornost na ogrebotine</li>
                      <li>• Lako održavanje</li>
                    </>
                  )}
                </ul>
              </div>

              <button
                onClick={() => navigate('/kontakt')}
                className="w-full px-4 py-2 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl text-sm sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/20"
              >
                Zakaži Termin
              </button>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="py-8 sm:py-24 border-t border-white/10">
          <div className="text-center mb-8 sm:mb-16">
            <span className="inline-block px-3 sm:px-6 py-1 sm:py-2 bg-orange-500/20 rounded-full text-orange-500 text-xs sm:text-base font-medium mb-4">
              Pogledajte Još
            </span>
            <h2 className="text-xl sm:text-4xl font-bold text-white mb-4">
              Slični Projekti
              <span className="block mt-2 text-orange-500">Iz Naše Galerije</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-full">
            {galleryItems
              .filter(item => 
                item.category === currentItem.category && 
                item.id !== currentItem.id
              )
              .slice(0, 3)
              .map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(`/galerija/${item.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="relative overflow-hidden cursor-pointer rounded-xl group transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 max-w-full"
                >
                  <div className="relative overflow-hidden w-full aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full max-w-full max-h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-xl transition-opacity duration-500 group-hover:opacity-90">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 text-white">{item.title}</h3>
                        <p className="text-xs sm:text-base text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};