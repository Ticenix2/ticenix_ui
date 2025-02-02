import React, { useState } from 'react';
import Header from '../../components/demoHome/Header';
import HeroBanner from '../../components/demoHome/HeroBanner';
import Categories from '../../components/demoHome/Categories';
import ProductFilters from '../../components/demoHome/ProductFilters'; // Filtreyi üst kısma taşıdık
import FeaturedProducts from '../../components/demoHome/FeaturedProducts';
import BestSellers from '../../components/demoHome/BestSellers';
import NewArrivals from '../../components/demoHome/NewArrivals';
import DailyDeals from '../../components/demoHome/DailyDeals';
import CustomerReviews from '../../components/demoHome/CustomerReviews';
import Newsletter from '../../components/demoHome/Newsletter';
import Footer from '../../components/demoHome/Footer';

const HomePage = () => {
  // Geçici olarak boş state'ler (Backend eklenince güncellenecek)
  const [categories] = useState([]);
  const [featuredProducts] = useState([]);
  const [bestSellers] = useState([]);
  const [newArrivals] = useState([]);
  const [dailyDeals] = useState([]);
  const [customerReviews] = useState([]);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Banner (Ana Kampanya Afişi) */}
      <HeroBanner />

      {/* Ürün Filtreleme - HeroBanner ve Categories arasına yerleştirildi */}
      <ProductFilters /> {/* Burada filtreyi üst kısmı entegre ettik */}

      {/* Kategoriler */}
      <Categories categories={categories} />

      {/* Öne Çıkan Ürünler */}
      <FeaturedProducts products={featuredProducts} />

      {/* En Çok Satanlar */}
      <BestSellers products={bestSellers} />

      {/* Yeni Gelen Ürünler */}
      <NewArrivals products={newArrivals} />

      {/* Günün Fırsatları */}
      <DailyDeals products={dailyDeals} />

      {/* Müşteri Yorumları */}
      <CustomerReviews reviews={customerReviews} />

      {/* E-Bülten Aboneliği */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
