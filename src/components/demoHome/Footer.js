import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Şirket</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Hakkımızda</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">İletişim</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Gizlilik Politikası</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Kullanıcı Sözleşmesi</a></li>
            </ul>
          </div>

          {/* Column 2: Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Müşteri Hizmetleri</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Sipariş Takibi</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">İade Politikası</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Sıkça Sorulan Sorular</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Bültenimize Abone Olun</h3>
            <p className="text-gray-400 mb-4">En yeni ürünler, kampanyalar ve fırsatlar hakkında bilgi almak için abone olun.</p>
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full p-3 text-black rounded-md border border-gray-300 mb-4"
            />
            <button className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700">
              Abone Ol
            </button>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-12">
          <p>© 2025 Şirket Adı. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
