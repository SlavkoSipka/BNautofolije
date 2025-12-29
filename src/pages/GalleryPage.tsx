import React from 'react';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Camera, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import { categories, galleryItems } from '../data/galleryData';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [filteredItems, setFilteredItems] = React.useState(galleryItems);
  const navigate = useNavigate();
  
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const filterRef = React.useRef<HTMLDivElement>(null);
  const galleryRef = React.useRef<HTMLDivElement>(null);

  useScrollReveal(titleRef);
  useScrollReveal(filterRef);
  useScrollReveal(galleryRef);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    setFilteredItems(
      selectedCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        {/* Desktop Background Image - Fixed */}
        <div 
          className="absolute inset-0 opacity-30 hidden md:block"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1742219626/amg_2_e6yznu.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'brightness(1.3) contrast(1.1)'
          }}
        />
        
        {/* Mobile Background Image - Not Fixed */}
        <div 
          className="absolute inset-0 opacity-30 md:hidden"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/daf91w2yr/image/upload/v1742219626/amg_2_e6yznu.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(1.3) contrast(1.1)'
          }}
        />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 top-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -left-64 bottom-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black"></div>

        <div className="container mx-auto px-8 lg:px-16 relative">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500/20 rounded-full text-orange-500 font-medium mb-6">
              <Camera size={18} />
              <span>Naši Radovi</span>
            </span>
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 reveal-element">
              Galerija
              <span className="block mt-4 text-orange-500">Premium Transformacija</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Pogledajte naše najnovije radove i transformacije vozila kroz premium folije i zatamnjivanja stakala
            </p>
          </div>

          {/* Filter Buttons */}
          <div ref={filterRef} className="flex flex-wrap justify-center gap-4 mt-12 reveal-element">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2
                  ${selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
              >
                <Filter size={16} />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[2000px] mx-auto px-4">
          <div
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => navigate(`/galerija/${item.id}`)}
                className="relative overflow-hidden cursor-pointer aspect-[16/10] rounded-xl group transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="relative overflow-hidden h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-xl transition-opacity duration-500 group-hover:opacity-80">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-200">{item.description}</p>
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