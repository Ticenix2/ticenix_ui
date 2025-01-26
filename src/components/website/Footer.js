import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Ticenix ile İşletmenizi Güçlendirin</h3>
            <p className="mt-2 text-sm text-gray-400">
              Güçlü altyapı, esnek çözümler ve mükemmel müşteri desteği.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#"
              className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
            >
              Şimdi Başlayın
            </a>
          </div>
        </div>

        {/* Middle Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-4">Ürünler</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Özellikler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Demo Talebi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Fiyatlandırma
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kaynaklar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Destek
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hakkımızda</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Kariyer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Gizlilik Politikası
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  İletişim Formu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  destek@ticenix.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  +90 555 555 55 55
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ticenix. Tüm hakları saklıdır.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white">
              Kullanım Koşulları
            </a>{' '}
            |{' '}
            <a href="#" className="hover:text-white">
              Gizlilik Politikası
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
