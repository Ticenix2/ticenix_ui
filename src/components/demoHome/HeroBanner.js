import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Hero Banner Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?shopping,sale')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 md:px-12"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-tight mb-4">
          <span className="text-yellow-400">Yılın En Büyük İndirimleri</span> Şimdi Başladı!
        </h1>
        <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-6">
          Sınırlı süreli kampanyalarla %50'ye varan indirimlerden faydalanın! Kaçırmayın!
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/shop-now"
              className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg text-lg shadow-md hover:bg-yellow-400 transition duration-300"
            >
              Hemen Alışverişe Başla
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/campaign-details"
              className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg text-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Kampanya Detayları
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
