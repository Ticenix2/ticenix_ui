import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
  const [language, setLanguage] = useState("tr");
  const [currency, setCurrency] = useState("TRY");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md">
      {/* Üst Bar - Dil, Para Birimi, Hesap & Sepet */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-100 text-sm">
        <div className="flex space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-1 border border-gray-300 rounded-md text-gray-700"
          >
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="p-1 border border-gray-300 rounded-md text-gray-700"
          >
            <option value="TRY">₺ TRY</option>
            <option value="USD">$ USD</option>
            <option value="EUR">€ EUR</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <Link to="/account" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <User size={18} />
            <span>Hesabım</span>
          </Link>
          <Link to="/demo/shopping-cart" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <ShoppingCart size={18} />
            <span>Sepetim</span>
          </Link>
        </div>
      </div>

      {/* Orta Bölüm - Logo ve Arama Çubuğu */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Ticenix</Link>
        </div>

        {/* Arama Çubuğu (Mobilde Gizlenir) */}
        <div className="hidden md:flex w-3/5">
          <input
            type="text"
            placeholder="Ürün ara..."
            className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-600 p-3 rounded-r-md text-white hover:bg-blue-700">
            <Search size={20} />
          </button>
        </div>

        {/* Mobil Menü Butonu */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Ana Menü - Mobil ve Masaüstü */}
      <nav className={`md:flex ${menuOpen ? "block" : "hidden"} bg-gray-200 py-3 md:bg-transparent`}>
        <ul className="md:flex md:justify-center space-y-4 md:space-y-0 md:space-x-6 px-6">
          <li>
            <Link to="/categories" className="block text-lg font-semibold text-gray-700 hover:text-blue-600">
              Kategoriler
            </Link>
          </li>
          <li>
            <Link to="/deals" className="block text-lg font-semibold text-gray-700 hover:text-blue-600">
              Fırsatlar
            </Link>
          </li>
          <li>
            <Link to="/brands" className="block text-lg font-semibold text-gray-700 hover:text-blue-600">
              Markalar
            </Link>
          </li>
          <li>
            <Link to="/new-arrivals" className="block text-lg font-semibold text-gray-700 hover:text-blue-600">
              Yeni Gelenler
            </Link>
          </li>
          <li>
            <Link to="/offers" className="block text-lg font-semibold text-gray-700 hover:text-blue-600">
              Kampanyalar
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobil Arama Çubuğu */}
      <div className="md:hidden px-6 py-3">
        <div className="flex">
          <input
            type="text"
            placeholder="Ürün ara..."
            className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-600 p-3 rounded-r-md text-white hover:bg-blue-700">
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
