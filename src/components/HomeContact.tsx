import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomeContact: React.FC = () => {
  return (
    <div className="relative py-8 overflow-hidden bg-gradient-to-b from-gray-100 to-white -mt-48">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-64 top-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Phone className="text-orange-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <p className="text-gray-600 mb-4">Dostupni smo 24/7</p>
              <a 
                href="tel:+381123456789" 
                className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center gap-2"
              >
                +381 12 345 6789
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Mail className="text-orange-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Pišite nam</p>
              <a 
                href="mailto:bnautofolije@gmail.com" 
                className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center gap-2"
              >
                bnautofilije@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <MapPin className="text-orange-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lokacija</h3>
              <p className="text-gray-600 mb-4">Posetite nas</p>
              <a 
                href="https://maps.google.com/?q=Moravska+298c,+Vrnjačka+Banja+36210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center gap-2"
              >
                Moravska 298c, VB
              </a>
            </div>

            <Link 
              to="/kontakt#top"
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group flex flex-col justify-between text-white"
            >
              <div>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Send className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Pošaljite Poruku</h3>
                <p className="text-white/80 mb-4">Kontakt forma</p>
              </div>
              <span className="text-white font-medium inline-flex items-center gap-2">
                Saznaj više
              </span>
            </Link>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4600989774774!2d20.89931082062576!3d43.61617388557613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757652be6444f15%3A0xc8d1f8b59b29212b!2sMoravska%20298c%2C%20Vrnja%C4%8Dka%20Banja!5e0!3m2!1ssr!2srs!4v1740433314943!5m2!1ssr!2srs"
                width="100%"
                height="400"
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