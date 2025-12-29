import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import emailjs from '@emailjs/browser';
import { ThankYouAnimation } from '../components/ThankYouAnimation';

export const ContactPage: React.FC = () => {
  const heroTitleRef = React.useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = React.useRef<HTMLSpanElement>(null);
  const formRef = React.useRef<HTMLDivElement>(null);
  const contactInfoRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [showThankYou, setShowThankYou] = useState(false);

  useScrollReveal(heroTitleRef, { animation: 'animate-expand' });
  useScrollReveal(heroSubtitleRef, { animation: 'animate-slide-rotate' });
  useScrollReveal(formRef, { animation: 'animate-float-in' });
  useScrollReveal(contactInfoRef, { animation: 'animate-float-in' });
  useScrollReveal(mapRef, { animation: 'animate-scale-rotate' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      await emailjs.sendForm(
        'service_10xbm08',
        'template_y6evgsz',
        form,
        '2m-7qzdNRBfhg99ri'
      );
      setShowThankYou(true);
      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = '#000';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div id="top" className="pt-32 bg-black">
      {showThankYou && <ThankYouAnimation onClose={() => setShowThankYou(false)} />}
      {/* Hero Section with 3D Perspective */}
      <div className="relative h-[50vh] bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-60 transform scale-110"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2583&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'perspective(1000px) rotateX(-5deg) scale(1.1)',
            transformOrigin: 'center bottom'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="relative container mx-auto px-8 lg:px-16 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 ref={heroTitleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 reveal-on-scroll">
              Kontaktirajte Nas
              <span ref={heroSubtitleRef} className="block mt-4 text-orange-500 reveal-on-scroll stagger-1">24/7 Dostupni</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formRef} className="relative reveal-on-scroll">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-30" />
              <div className="relative bg-gray-900 p-8 rounded-2xl shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2">Ime</label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Vaše ime"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2">Prezime</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Vaše prezime"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="vas@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone_number"
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="+381 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Poruka</label>
                    <textarea
                      name="message"
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors h-32"
                      placeholder="Vaša poruka..."
                    />
                  </div>
                  {submitStatus.type === 'error' && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 group transition-all duration-300"
                  >
                    <span>{isSubmitting ? 'Slanje...' : 'Pošalji Poruku'}</span>
                    <Send size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-16">
              <h2 className="text-4xl font-bold text-white mb-12">
                Posetite Nas
                <span className="block mt-2 text-orange-500">U Našem Servisu</span>
              </h2>
              <div className="space-y-8 md:space-y-12">
                <ContactInfo
                  icon={MapPin}
                  title="Naša Lokacija"
                  info="Moravska 298c, Vrnjačka Banja 36210"
                  link="https://maps.google.com/?q=Moravska+298c,+Vrnjačka+Banja+36210"
                  linkText="Pogledaj na mapi"
                />
                <ContactInfo
                  icon={Phone}
                  title="Telefon"
                  info="+381603211338"
                  link="tel:+381603211338"
                  linkText="Pozovi odmah"
                />
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  info="bnautofolije@gmail.com"
                  link="mailto:bnautofolije@gmail.com"
                  linkText="Pošalji email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div ref={mapRef} className="py-24 bg-gradient-to-t from-black to-gray-900 reveal-on-scroll">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4600989774774!2d20.89931082062576!3d43.61617388557613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757652be6444f15%3A0xc8d1f8b59b29212b!2sMoravska%20298c%2C%20Vrnja%C4%8Dka%20Banja!5e0!3m2!1ssr!2srs!4v1740433314943!5m2!1ssr!2srs"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  info: string;
  link: string;
  linkText: string;
  index?: number;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: Icon, title, info, link, linkText, index = 0 }) => (
  <div className="flex gap-4 md:gap-6">
    <div className="w-16 h-16 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
      <Icon size={32} className="text-orange-500" />
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{info}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
      >
        {linkText}
        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);