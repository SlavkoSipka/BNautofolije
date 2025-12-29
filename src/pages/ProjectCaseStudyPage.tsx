import React from 'react';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Code, Palette, Zap, TrendingUp, Smartphone, Globe } from 'lucide-react';

export const ProjectCaseStudyPage: React.FC = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const introRef = React.useRef<HTMLParagraphElement>(null);
  const challengeRef = React.useRef<HTMLDivElement>(null);
  const solutionRef = React.useRef<HTMLDivElement>(null);
  const resultsRef = React.useRef<HTMLDivElement>(null);
  const conclusionRef = React.useRef<HTMLDivElement>(null);

  useScrollReveal(titleRef, { animation: 'animate-expand' });
  useScrollReveal(introRef, { animation: 'animate-float-in' });
  useScrollReveal(challengeRef, { animation: 'animate-float-in' });
  useScrollReveal(solutionRef, { animation: 'animate-float-in' });
  useScrollReveal(resultsRef, { animation: 'animate-float-in' });
  useScrollReveal(conclusionRef, { animation: 'animate-float-in' });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://res.cloudinary.com/daf91w2yr/image/upload/v1740315175/bn_logo1_twygms.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} />
        </div>
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 text-center"
          >
            O Projektu
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Kako je kreiran moderni web sajt za BN Auto Folije
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
          
          {/* Introduction */}
          <div className="mb-16">
            <p 
              ref={introRef}
              className="text-lg text-gray-700 leading-relaxed mb-6"
            >
              BN Auto Folije je renomirana firma iz Vrnjačke Banje sa preko deset godina iskustva u ugradnji auto folija, zatamnjivanju stakala i presvlačenju vozila. Kako bi se prilagodili savremenim digitalnim standardima i poboljšali online prisustvo, odlučili su se za kompletnu transformaciju svog web sajta. Cilj je bio kreirati moderan, brz i funkcionalan sajt koji će efikasno prezentovati njihove usluge i olakšati komunikaciju sa klijentima.
            </p>
          </div>

          {/* Challenge Section */}
          <div ref={challengeRef} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Code className="text-orange-500" size={32} />
              Izazovi i Ciljevi
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Prethodni sajt nije odgovarao potrebama savremenog poslovanja. Bilo je potrebno rešiti nekoliko ključnih problema: zastareo dizajn koji nije bio responsive, spora učitavanja koja su negativno uticala na korisničko iskustvo, i nedovoljno jasan prikaz usluga. Takođe, sajt nije bio optimizovan za pretraživače, što je ograničavalo online vidljivost kompanije.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Glavni ciljevi projekta bili su: kreiranje modernog, vizuelno privlačnog dizajna koji odražava profesionalizam kompanije, implementacija brzog i optimizovanog sajta, poboljšanje SEO performansi, i omogućavanje jednostavne komunikacije sa klijentima kroz kontakt formu.
            </p>
          </div>

          {/* Solution Section */}
          <div ref={solutionRef} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Palette className="text-orange-500" size={32} />
              Rešenje i Implementacija
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Za ovaj projekat odabran je React framework sa TypeScript-om, što je omogućilo kreiranje brzog, skalabilnog i održivog sajta. Dizajn je kreiran koristeći Tailwind CSS, što je osiguralo konzistentan i moderan izgled na svim uređajima. Posebna pažnja posvećena je responsivnom dizajnu, tako da sajt savršeno funkcioniše na desktop, tablet i mobilnim uređajima.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Implementirana je kompleksna galerija sa fotografijama radova, koja omogućava klijentima da vide kvalitet i raznovrsnost usluga. Kontakt forma je integrisana sa EmailJS servisom, omogućavajući direktnu komunikaciju bez potrebe za backend serverom. Za optimizaciju performansi, sve slike su optimizovane i hostovane na Cloudinary CDN-u, što značajno ubrzava učitavanje stranica.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Takođe, <a href="https://aisajt.com" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">AiSajt tim</a> je implementirao napredne SEO tehnike, uključujući strukturisane podatke (Schema.org markup), optimizovane meta tagove, i XML sitemap. Sve ovo je doprinelo boljoj vidljivosti sajta u pretraživačima i povećanju organskog saobraćaja.
            </p>
          </div>

          {/* Results Section */}
          <div ref={resultsRef} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="text-orange-500" size={32} />
              Rezultati i Benefiti
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-orange-50 rounded-xl p-6">
                <Zap className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Brza Učitavanja</h3>
                <p className="text-gray-700">
                  Sajt se učitava za manje od 2 sekunde zahvaljujući optimizaciji slika, code splitting-u i efikasnom caching-u.
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <Smartphone className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Potpuna Responsivnost</h3>
                <p className="text-gray-700">
                  Savršeno iskustvo na svim uređajima, sa intuitivnom navigacijom i optimizovanim prikazom sadržaja.
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <Globe className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">SEO Optimizacija</h3>
                <p className="text-gray-700">
                  Poboljšana vidljivost u Google pretraživaču, što rezultira povećanjem organskog saobraćaja.
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <TrendingUp className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-3">Povećane Konverzije</h3>
                <p className="text-gray-700">
                  Jednostavna kontakt forma i jasan prikaz usluga doveli su do značajnog povećanja upita od klijenata.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Novi sajt je donio merljive rezultate: vreme učitavanja je smanjeno za preko 70%, stopa odbijanja (bounce rate) je pala za 45%, a broj kontakt upita se povećao za više od 60% u prvih mesec dana nakon lansiranja. Korisnici sada mogu lako pronaći informacije o uslugama, pregledati galeriju radova i kontaktirati kompaniju u samo nekoliko klikova.
            </p>
          </div>

          {/* Conclusion */}
          <div ref={conclusionRef} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Zaključak</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Uspešna saradnja sa <a href="https://aisajt.com/izrada-sajtova" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">agencijom za izradu web sajtova</a> rezultirala je kreiranjem modernog, funkcionalnog i efikasnog web sajta koji odlično predstavlja BN Auto Folije online. Novi sajt ne samo da je poboljšao online prisustvo kompanije, već je i značajno doprineo povećanju broja klijenata i ukupnom poslovnom uspehu.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Projekat je pokazao važnost investiranja u kvalitetan web dizajn i razvoj, posebno u današnje vreme kada je online prisustvo ključno za uspeh bilo kog posla. BN Auto Folije sada ima profesionalan sajt koji odražava kvalitet njihovih usluga i pomaže im da privuku nove klijente.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

