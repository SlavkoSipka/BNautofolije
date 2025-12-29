import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CompactContact: React.FC = () => {
  const titleRef = React.useRef<HTMLDivElement>(null);
  const cardsRef = React.useRef<HTMLDivElement>(null);
  const [backgroundOpacity] = React.useState(0.4);

  useScrollReveal(titleRef);
  useScrollReveal(cardsRef);

  return (
    <div className="relative py-24 bg-black" style={{ position: 'relative', zIndex: 2 }}>
      {/* Desktop Background - Fixed */}
      <div
        className="absolute inset-0 opacity-40 hidden md:block"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1742219626/amg_2_e6yznu.jpg")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Mobile Background - Normal */}
      <div
        className="absolute inset-0 opacity-40 md:hidden"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.9)), url("https://res.cloudinary.com/daf91w2yr/image/upload/v1742219626/amg_2_e6yznu.jpg")',
          backgroundPosition: 'center 35%',
          backgroundSize: '468%',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-64 top-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 reveal-element">
          <span className="inline-block px-6 py-2 bg-orange-500/20 rounded-full text-orange-500 font-medium mb-4">
            Kontaktirajte Nas
          </span>
          <h2 className="text-4xl font-bold text-white">
            Tu Smo Za Vas
            <span className="block mt-2 text-orange-500">24/7</span>
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-element">
            <ContactCard
              icon={Phone}
              title="Telefon"
              info="+381603211338"
              link="tel:+381603211338"
              hoverEffect="hover:bg-orange-500"
            />
            <ContactCard
              icon={Mail}
              title="Email"
              info="bnautofolije@gmail.com"
              link="mailto:bnautofolije@gmail.com"
              hoverEffect="hover:bg-orange-500"
            />
            <ContactCard
              icon={MapPin}
              title="Lokacija"
              info="Moravska 298c, VB"
              link="https://maps.google.com/?q=Moravska+298c,+Vrnjačka+Banja+36210"
              hoverEffect="hover:bg-orange-500"
            />
            <Link 
              to="/kontakt"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-[1.02] flex flex-col"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Send className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pošaljite Poruku</h3>
              <p className="text-white/80 mb-4">Kontaktirajte nas za više informacija</p>
              <div className="mt-auto">
                <span className="text-white font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saznaj više
                  <Send size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
          
          {/* Map */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4600989774774!2d20.89931082062576!3d43.61617388557613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757652be6444f15%3A0xc8d1f8b59b29212b!2sMoravska%20298c%2C%20Vrnja%C4%8Dka%20Banja!5e0!3m2!1ssr!2srs!4v1740433314943!5m2!1ssr!2srs"
                width="100%"
                className="w-full h-[350px] md:h-[600px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  info: string;
  link: string;
  hoverEffect: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, info, link, hoverEffect }) => (
  <a 
    href={link}
    className="group bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col border border-white/10"
  >
    <div className={`w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 transition-colors ${hoverEffect}`}>
      <Icon className="text-orange-500 group-hover:text-white transition-colors" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 mb-4">Dostupni smo</p>
    <div className="mt-auto">
      <span className="text-orange-500 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
        {info}
        <Send size={20} className="transform group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </a>
);