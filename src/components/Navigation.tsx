import React from 'react';
import { Menu, X, Phone, ChevronDown, Instagram } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isScrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 text-white ${
      isScrolled 
        ? 'bg-black/80 py-2 shadow-lg backdrop-blur-md' 
        : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-4'
    }`}>
      <div className="px-8 lg:px-16">
        <div className={`flex items-center justify-between transition-all ${
          isScrolled ? 'py-3' : 'py-5'
        }`}>
          <div className="flex items-center relative">
            <Link to="/">
              <img 
                src="https://res.cloudinary.com/daf91w2yr/image/upload/v1740315175/bn_logo1_twygms.png"
                alt="BN Auto Folije Logo" 
                className={`transition-all duration-500 ${
                  isScrolled 
                    ? 'h-8 md:h-12' 
                    : 'h-10 md:h-16'
                } w-auto object-contain hover:scale-105 transform-gpu`}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12 ml-auto">
            <NavLink to="/" isActive={location.pathname === '/'}>Početna</NavLink>
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-lg font-medium hover:text-orange-500 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Usluge
                <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 origin-top ${
                  isServicesOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="py-2 min-w-[200px]">
                  <Link 
                    to="/zatamnjivanje-stakla" 
                    className="block px-6 py-3 hover:bg-orange-500/20 transition-colors text-white hover:text-orange-500"
                  >
                    Zatamnjivanje Stakala
                  </Link>
                  <Link to="/folije" className="block px-6 py-3 hover:bg-orange-500/20 transition-colors text-white hover:text-orange-500">
                    Folije u Boji 
                  </Link>
                  <Link to="/ppf-zastita" className="block px-6 py-3 hover:bg-orange-500/20 transition-colors text-white hover:text-orange-500">
                    PPF - Providna Zastitna Folija
                  </Link>
                </div>
              </div>
            </div>
            <NavLink to="/galerija" isActive={location.pathname === '/galerija'}>Galerija</NavLink>
            <NavLink to="/kontakt" isActive={location.pathname === '/kontakt'}>Kontakt</NavLink>
            <span className="flex items-center gap-2 transition-colors text-lg pl-6 ml-4 border-l border-white/5">
              <a
                href="https://www.instagram.com/bn_autofolije/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-orange-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <Phone size={20} />
              <a href="tel:+381603211338" className="hover:text-orange-500 transition-colors">+381603211338</a>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-sm ${
          isScrolled ? 'bg-black/80' : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent'
        }`}>
          <div className="px-8 lg:px-16 py-8">
            <div className="flex flex-col gap-8">
              <Link to="/" className={`text-xl font-medium ${location.pathname === '/' ? 'text-orange-500' : 'hover:text-orange-500'}`}>
                Početna
              </Link>
              <div className="space-y-4">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-xl hover:text-orange-500 transition-colors font-medium flex items-center gap-2"
                >
                  Usluge
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`pl-4 space-y-4 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-40' : 'max-h-0'}`}>
                  <Link 
                    to="/zatamnjivanje-stakla" 
                    className={`block text-lg transition-colors ${
                      location.pathname === '/zatamnjivanje-stakla' ? 'text-orange-500' : 'hover:text-orange-500'
                    }`}
                  >
                    Zatamljivanje stakala
                  </Link>
                  <Link to="/folije" className="block text-lg hover:text-orange-500 transition-colors">
                    Folije u Boji
                  </Link>
                  <Link to="/ppf-zastita" className="block text-lg hover:text-orange-500 transition-colors">
                    PPF - Providna Zastitna Folija
                  </Link>
                </div>
              </div>
              <Link 
                to="/galerija" 
                className={`text-xl font-medium ${location.pathname === '/galerija' ? 'text-orange-500' : 'hover:text-orange-500'}`}
              >
                Galerija
              </Link>
              <Link 
                to="/kontakt"
                className={`text-xl font-medium ${location.pathname === '/kontakt' ? 'text-orange-500' : 'hover:text-orange-500'}`}
              >
                Kontakt
              </Link>
              <div className="flex items-center gap-2 text-xl pt-4 border-t border-white/10">
                <a
                  href="https://www.instagram.com/bn_autofolije/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange-500 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <Phone size={20} />
                <a href="tel:+381603211338" className="hover:text-orange-500 transition-colors">+381603211338</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, href, children, isActive }) => {
  if (to) {
    return (
      <Link
        to={to} 
        className={`${isActive ? 'text-orange-500' : 'hover:text-orange-500'} transition-colors text-lg font-medium`}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <a
      href={href}
      className="hover:text-orange-500 transition-colors text-lg font-medium"
    >
      {children}
    </a>
  );
};