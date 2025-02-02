import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// Footer Link Component
const FooterLink = ({ children, href }) => (
  <li>
    <a href={href} className="hover:text-gray-400 transition duration-300">{children}</a>
  </li>
);

// Social Media Icon Component
const SocialIcon = ({ href, icon }) => (
  <a href={href} className="text-gray-400 hover:text-white text-2xl transition duration-300">
    {icon}
  </a>
);

// Newsletter Form Component
const NewsletterForm = () => (
  <form className="flex">
    <input
      type="email"
      placeholder="E-posta adresiniz"
      className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none"
    />
    <button className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700 transition duration-300">
      Abone Ol
    </button>
  </form>
);

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Şirket Bilgileri */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Şirket Bilgileri</h3>
          <ul className="space-y-2">
            <FooterLink href="#">Hakkımızda</FooterLink>
            <FooterLink href="#">Kariyer</FooterLink>
            <FooterLink href="#">Mağazalarımız</FooterLink>
            <FooterLink href="#">İletişim</FooterLink>
          </ul>
        </div>

        {/* Müşteri Hizmetleri */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Müşteri Hizmetleri</h3>
          <ul className="space-y-2">
            <FooterLink href="#">Sipariş Takibi</FooterLink>
            <FooterLink href="#">İade Politikası</FooterLink>
            <FooterLink href="#">Gizlilik Politikası</FooterLink>
            <FooterLink href="#">Sıkça Sorulan Sorular</FooterLink>
          </ul>
        </div>

        {/* Popüler Kategoriler */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Popüler Kategoriler</h3>
          <ul className="space-y-2">
            <FooterLink href="#">Elektronik</FooterLink>
            <FooterLink href="#">Moda</FooterLink>
            <FooterLink href="#">Ev & Yaşam</FooterLink>
            <FooterLink href="#">Spor & Outdoor</FooterLink>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Bizi Takip Edin</h3>
          <div className="flex space-x-4">
            <SocialIcon href="#" icon={<FaFacebookF />} />
            <SocialIcon href="#" icon={<FaTwitter />} />
            <SocialIcon href="#" icon={<FaInstagram />} />
            <SocialIcon href="#" icon={<FaYoutube />} />
          </div>
        </div>

        {/* E-Bülten Aboneliği */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">E-Bülten Aboneliği</h3>
          <p className="text-sm text-gray-400 mb-3">Yeni kampanya ve fırsatları kaçırmamak için e-bültenimize abone olun.</p>
          <NewsletterForm />
        </div>
      </div>

      {/* Telif Hakkı ve Yasal Bilgiler */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p>© 2025 E-Ticaret Platformu. Tüm Hakları Saklıdır.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400 transition duration-300">Kullanım Şartları</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400 transition duration-300">Gizlilik Politikası</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400 transition duration-300">Çerez Politikası</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
