import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, ChevronRight, Info } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white relative" style={{ zIndex: 10 }}>
      {/* Main Footer Content */}
      <div className="w-full px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="https://res.cloudinary.com/daf91w2yr/image/upload/v1740315175/bn_logo1_twygms.png"
              alt="BN Auto Folije Logo"
              className="h-16 w-auto"
            />
            <p className="text-gray-400 leading-relaxed">
              Profesionalna ugradnja auto folija sa preko 10 godina iskustva. 
              Koristimo samo premium materijale i najnovije tehnike instalacije.
            </p>
            <div>
              <a 
                href="https://www.instagram.com/bn_autofolije/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Brzi Linkovi</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  Početna
                </Link>
              </li>
              <li>
                <Link to="/zatamnjivanje-stakla" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  Zatamnjivanje Stakla
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  Folije
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Kontakt Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-orange-500" />
                </div>
                <span>Moravska 298c, Vrnjačka Banja 36210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-orange-500" />
                </div>
                <a href="tel:+381603211338" className="hover:text-orange-500 transition-colors">
                  +381603211338
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-orange-500" />
                </div>
                <a href="mailto:bnautofolije@gmail.com" className="hover:text-orange-500 transition-colors">
                  bnautofolije@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-8 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BN Auto Folije. Sva prava zadržana.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                to="/o-projektu"
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 hover:border-orange-500/50 rounded-lg text-orange-400 hover:text-orange-300 transition-all duration-300 text-sm font-medium group"
              >
                <Info size={16} className="group-hover:rotate-12 transition-transform" />
                O projektu
              </Link>
              <p className="text-gray-400 text-sm">Website by <a href="https://aisajt.com" className="text-orange-500 hover:text-orange-400 transition-colors">AiSajt</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};