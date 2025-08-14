import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import HireMeSection from './components/HireMeSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSlider from './components/PortfolioSlider';
import TestimonialSlider from './components/TestimonialSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <HireMeSection />
      <ServicesSection />
      <PortfolioSlider />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </>
  );
};

export default App;