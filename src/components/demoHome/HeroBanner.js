import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Edit, Trash, Plus } from "lucide-react";

const HeroBanner = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      title: "Yılın En Büyük İndirimleri Şimdi Başladı!",
      description: "Sınırlı süreli kampanyalarla %50'ye varan indirimlerden faydalanın! Kaçırmayın!",
      backgroundImage: "https://source.unsplash.com/1600x900/?shopping,sale",
      buttons: [
        { text: "Hemen Alışverişe Başla", link: "/shop-now", primary: true },
        { text: "Kampanya Detayları", link: "/campaign-details", primary: false }
      ]
    }
  ]);

  // Yeni Banner Ekleme
  const addBanner = () => {
    const newTitle = prompt("Yeni Banner Başlığı:");
    const newDesc = prompt("Banner Açıklaması:");
    const newImage = prompt("Arka Plan Görsel URL:");
    if (newTitle && newDesc && newImage) {
      setBanners([
        ...banners,
        {
          id: banners.length + 1,
          title: newTitle,
          description: newDesc,
          backgroundImage: newImage,
          buttons: []
        }
      ]);
    }
  };

  // Banner Düzenleme
  const editBanner = (id) => {
    const updatedBanners = banners.map((banner) => {
      if (banner.id === id) {
        const newTitle = prompt("Yeni Başlık:", banner.title);
        const newDesc = prompt("Yeni Açıklama:", banner.description);
        const newImage = prompt("Yeni Arka Plan Görsel URL:", banner.backgroundImage);

        return {
          ...banner,
          title: newTitle || banner.title,
          description: newDesc || banner.description,
          backgroundImage: newImage || banner.backgroundImage
        };
      }
      return banner;
    });
    setBanners(updatedBanners);
  };

  // Banner Silme
  const deleteBanner = (id) => {
    setBanners(banners.filter((banner) => banner.id !== id));
  };

  return (
    <div>
      {banners.map((banner) => (
        <section
          key={banner.id}
          className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-white overflow-hidden"
        >
          {/* Arka Plan */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${banner.backgroundImage}')`,
              backgroundAttachment: "fixed"
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* İçerik */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-6 md:px-12"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-tight mb-4">
              <span className="text-yellow-400">{banner.title}</span>
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-6">{banner.description}</p>

            {/* Butonlar */}
            <div className="flex justify-center space-x-4">
              {banner.buttons.map((button, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }}>
                  <Link
                    to={button.link}
                    className={`inline-block px-6 py-3 rounded-lg text-lg shadow-md transition duration-300 ${
                      button.primary
                        ? "bg-yellow-500 text-black font-semibold hover:bg-yellow-400"
                        : "bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-900"
                    }`}
                  >
                    {button.text}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Düzenleme ve Silme Butonları */}
            <div className="absolute top-5 right-5 flex space-x-3">
              <button onClick={() => editBanner(banner.id)} className="text-blue-400">
                <Edit size={24} />
              </button>
              <button onClick={() => deleteBanner(banner.id)} className="text-red-500">
                <Trash size={24} />
              </button>
            </div>
          </motion.div>
        </section>
      ))}

      {/* Yeni Banner Ekle */}
      <div className="flex justify-center my-6">
        <button onClick={addBanner} className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-lg hover:bg-blue-700 transition duration-300">
          <Plus size={20} className="mr-2" />
          Yeni Banner Ekle
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
