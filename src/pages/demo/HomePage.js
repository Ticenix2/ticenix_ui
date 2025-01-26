import React from 'react';
import HeroSection from '../../components/demoHome/HeroSection';
import CategoriesSection from '../../components/demoHome/CategoriesSection';
import FeaturedProductsSection from '../../components/demoHome/FeaturedProductsSection';
import SearchBar from '../../components/demoHome/SearchBar';
import Footer from '../../components/demoHome/Footer';
import NavigationBar from '../../components/demoHome/NavigationBar';
import PromoBanner from '../../components/demoHome/PromoBanner';
import ProductList from '../../components/demoHome/ProductList';
import ProductFilter from '../../components/demoHome/ProductFilter';
import OfferSection from '../../components/demoHome/OfferSection';

const Homepage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <SearchBar />
      <PromoBanner />
      <CategoriesSection />
      <ProductFilter />
      <FeaturedProductsSection />
      <ProductList />
      <OfferSection />
      <Footer />
    </div>
  );
};

export default Homepage;
