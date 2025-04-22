// src/pages/HomePage.js

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TechnologiesSection from '../components/home/TechnologiesSection';
import InsightsSection from '../components/home/InsightsSection';
import AboutSection from '../components/home/AboutSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TechnologiesSection />
      <InsightsSection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
