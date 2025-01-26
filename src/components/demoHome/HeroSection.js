import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl font-extrabold mb-6">
          En Yeni Ürünlerle Tanışın
        </h1>
        <p className="text-xl mb-8">
          En iyi fiyatlarla en kaliteli ürünleri keşfedin. Şimdi alışveriş yapmaya başlayın!
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/products"
            className="bg-orange-600 hover:bg-orange-500 text-white py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Ürünleri Keşfet
          </Link>
          <Link
            to="/offers"
            className="bg-transparent border-2 border-orange-600 hover:bg-orange-600 hover:text-white text-orange-600 py-3 px-8 rounded-full text-lg transition duration-300"
          >
            İndirimler
          </Link>
        </div>
      </div>
      <img
        src="https://via.placeholder.com/1600x900" // Buraya ana sayfa görselinizi koyabilirsiniz
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
