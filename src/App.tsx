import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { WindowTintingPage } from './pages/WindowTintingPage';
import { PPFProtectionPage } from './pages/PPFProtectionPage';
import { WrappingPage } from './pages/WrappingPage';
import { GalleryPage } from './pages/GalleryPage';
import { GalleryItemPage } from './pages/GalleryItemPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectCaseStudyPage } from './pages/ProjectCaseStudyPage';
import { LoadingScreen } from './components/LoadingScreen';
import { PageTransition } from './components/PageTransition';

function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isPageTransitioning, setIsPageTransitioning] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setIsPageTransitioning(true);
  }, [location]);

  return (
    <>
      {isPageTransitioning ? (
        <PageTransition onLoadingComplete={() => setIsPageTransitioning(false)} />
      ) : (
        <div className="min-h-screen bg-white">
          <Navigation isScrolled={isScrolled} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/zatamnjivanje-stakla" element={<WindowTintingPage />} />
            <Route path="/ppf-zastita" element={<PPFProtectionPage />} />
            <Route path="/folije" element={<WrappingPage />} />
            <Route path="/galerija" element={<GalleryPage />} />
            <Route path="/galerija/:id" element={<GalleryItemPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/o-projektu" element={<ProjectCaseStudyPage />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;