import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { BackgroundBreak } from '../components/BackgroundBreak';
import { Partners } from '../components/Partners';
import { CompactContact } from '../components/CompactContact';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <BackgroundBreak />
      <Partners />
      <CompactContact />
      <Footer />
    </>
  );
};