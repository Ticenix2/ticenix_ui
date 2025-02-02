import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// Footer Link Component
const FooterLink = ({ children, href, onDelete, onEdit }) => (
  <li className="flex justify-between items-center">
    <a href={href} className="hover:text-gray-400 transition duration-300">{children}</a>
    <div className="flex space-x-2">
      <button onClick={onEdit} className="text-yellow-500 hover:text-yellow-400">Düzenle</button>
      <button onClick={onDelete} className="text-red-500 hover:text-red-400">Sil</button>
    </div>
  </li>
);

// Social Media Icon Component
const SocialIcon = ({ href, icon, onDelete, onEdit }) => (
  <div className="relative">
    <a href={href} className="text-gray-400 hover:text-white text-2xl transition duration-300">
      {icon}
    </a>
    {onDelete && (
      <button
        onClick={onDelete}
        className="absolute top-0 right-0 text-red-500 text-sm"
      >
        X
      </button>
    )}
    {onEdit && (
      <button
        onClick={onEdit}
        className="absolute top-0 right-0 text-yellow-500 text-sm"
      >
        ✎
      </button>
    )}
  </div>
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
  const [footerData, setFooterData] = useState({
    companyInfo: [
      { name: "Hakkımızda", href: "#" },
      { name: "Kariyer", href: "#" },
      { name: "Mağazalarımız", href: "#" },
      { name: "İletişim", href: "#" },
    ],
    customerService: [
      { name: "Sipariş Takibi", href: "#" },
      { name: "İade Politikası", href: "#" },
      { name: "Gizlilik Politikası", href: "#" },
      { name: "Sıkça Sorulan Sorular", href: "#" },
    ],
    popularCategories: [
      { name: "Elektronik", href: "#" },
      { name: "Moda", href: "#" },
      { name: "Ev & Yaşam", href: "#" },
      { name: "Spor & Outdoor", href: "#" },
    ],
    socialMedia: [
      { href: "#", icon: <FaFacebookF /> },
      { href: "#", icon: <FaTwitter /> },
      { href: "#", icon: <FaInstagram /> },
      { href: "#", icon: <FaYoutube /> },
    ],
  });

  // Ekleme Fonksiyonları
  const addFooterLink = (section, newLink) => {
    setFooterData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], newLink],
    }));
  };

  const addSocialMedia = (newUrl, newIcon) => {
    const newIconElement = { href: newUrl, icon: newIcon };
    setFooterData((prevData) => ({
      ...prevData,
      socialMedia: [...prevData.socialMedia, newIconElement],
    }));
  };

  // Silme Fonksiyonları
  const deleteFooterLink = (section, index) => {
    const updatedSection = footerData[section].filter((_, idx) => idx !== index);
    setFooterData((prevData) => ({
      ...prevData,
      [section]: updatedSection,
    }));
  };

  const deleteSocialMedia = (index) => {
    const updatedSocialMedia = footerData.socialMedia.filter((_, idx) => idx !== index);
    setFooterData((prevData) => ({
      ...prevData,
      socialMedia: updatedSocialMedia,
    }));
  };

  // Düzenleme Fonksiyonları
  const editFooterLink = (section, index, newName, newHref) => {
    const updatedSection = footerData[section].map((item, idx) =>
      idx === index ? { name: newName, href: newHref } : item
    );
    setFooterData((prevData) => ({
      ...prevData,
      [section]: updatedSection,
    }));
  };

  const editSocialMedia = (index, newUrl) => {
    const updatedSocialMedia = footerData.socialMedia.map((item, idx) =>
      idx === index ? { ...item, href: newUrl } : item
    );
    setFooterData((prevData) => ({
      ...prevData,
      socialMedia: updatedSocialMedia,
    }));
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Şirket Bilgileri */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Şirket Bilgileri</h3>
          <ul className="space-y-2">
            {footerData.companyInfo.map((item, index) => (
              <FooterLink
                key={index}
                href={item.href}
                onDelete={() => deleteFooterLink("companyInfo", index)}
                onEdit={() => {
                  const newName = prompt("Yeni isim girin:", item.name);
                  const newHref = prompt("Yeni link girin:", item.href);
                  if (newName && newHref) {
                    editFooterLink("companyInfo", index, newName, newHref);
                  }
                }}
              >
                {item.name}
              </FooterLink>
            ))}
          </ul>
          {/* Şirket Bilgileri Ekle */}
          <button
            className="text-green-500 hover:text-green-400"
            onClick={() => {
              const newName = prompt("Yeni isim girin:");
              const newHref = prompt("Yeni link girin:");
              if (newName && newHref) {
                addFooterLink("companyInfo", { name: newName, href: newHref });
              }
            }}
          >
            Ekle
          </button>
        </div>

        {/* Müşteri Hizmetleri */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Müşteri Hizmetleri</h3>
          <ul className="space-y-2">
            {footerData.customerService.map((item, index) => (
              <FooterLink
                key={index}
                href={item.href}
                onDelete={() => deleteFooterLink("customerService", index)}
                onEdit={() => {
                  const newName = prompt("Yeni isim girin:", item.name);
                  const newHref = prompt("Yeni link girin:", item.href);
                  if (newName && newHref) {
                    editFooterLink("customerService", index, newName, newHref);
                  }
                }}
              >
                {item.name}
              </FooterLink>
            ))}
          </ul>
          {/* Müşteri Hizmetleri Ekle */}
          <button
            className="text-green-500 hover:text-green-400"
            onClick={() => {
              const newName = prompt("Yeni isim girin:");
              const newHref = prompt("Yeni link girin:");
              if (newName && newHref) {
                addFooterLink("customerService", { name: newName, href: newHref });
              }
            }}
          >
            Ekle
          </button>
        </div>

        {/* Popüler Kategoriler */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Popüler Kategoriler</h3>
          <ul className="space-y-2">
            {footerData.popularCategories.map((item, index) => (
              <FooterLink
                key={index}
                href={item.href}
                onDelete={() => deleteFooterLink("popularCategories", index)}
                onEdit={() => {
                  const newName = prompt("Yeni isim girin:", item.name);
                  const newHref = prompt("Yeni link girin:", item.href);
                  if (newName && newHref) {
                    editFooterLink("popularCategories", index, newName, newHref);
                  }
                }}
              >
                {item.name}
              </FooterLink>
            ))}
          </ul>
          {/* Popüler Kategoriler Ekle */}
          <button
            className="text-green-500 hover:text-green-400"
            onClick={() => {
              const newName = prompt("Yeni isim girin:");
              const newHref = prompt("Yeni link girin:");
              if (newName && newHref) {
                addFooterLink("popularCategories", { name: newName, href: newHref });
              }
            }}
          >
            Ekle
          </button>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Bizi Takip Edin</h3>
          <div className="flex space-x-4">
            {footerData.socialMedia.map((item, index) => (
              <SocialIcon
                key={index}
                href={item.href}
                icon={item.icon}
                onDelete={() => deleteSocialMedia(index)}
                onEdit={() => {
                  const newUrl = prompt("Yeni URL girin:", item.href);
                  if (newUrl) {
                    editSocialMedia(index, newUrl);
                  }
                }}
              />
            ))}
          </div>
          {/* Sosyal Medya Ekle */}
          <button
            className="text-green-500 hover:text-green-400"
            onClick={() => {
              const newUrl = prompt("Yeni URL girin:");
              const newIcon = <FaFacebookF />;  // Bu kısmı ihtiyaca göre değiştirebilirsiniz
              if (newUrl) {
                addSocialMedia(newUrl, newIcon);
              }
            }}
          >
            Ekle
          </button>
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
