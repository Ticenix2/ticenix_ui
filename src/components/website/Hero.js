import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-32">
      {/* Arka Plan Görseli */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero-background.jpg')`,
        }}
      ></div>

      {/* Arka Plan Üzerine Gradyan Katman */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* İçerik */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Ticenix ile Hızlı ve Güçlü E-Ticaret Çözümleri
        </h1>
        <p className="mt-4 text-xl leading-relaxed">
          İşletmenizi büyütmek için güçlü, güvenilir ve kullanıcı dostu bir
          e-ticaret altyapısı.
        </p>

        <div className="mt-6 space-x-4">
          <a
            href="/register"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg text-xl font-semibold shadow-lg hover:bg-gray-100 transition duration-200"
          >
            Kayıt ol
          </a>
          <a
            href="#features"
            className="bg-orange-700 text-white px-8 py-3 rounded-lg text-xl font-semibold shadow-lg hover:bg-orange-800 transition duration-200"
          >
            Daha Fazla Bilgi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
