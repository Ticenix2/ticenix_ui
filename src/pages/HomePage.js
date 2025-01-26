import React from 'react';
import Navbar from '../components/website/Navbar';
import Hero from '../components/website/Hero';
import Features from '../components/website/Features';
import Pricing from '../components/website/Pricing';
import Contact from '../components/website/Contact';
import Footer from '../components/website/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
