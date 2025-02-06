import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search, ChevronDown, Globe, DollarSign } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // **Dil ve Para Birimi Seçimi**
  const [languages] = useState([
    { code: "tr", name: "Türkçe" },
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" }
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  const [currencies] = useState([
    { code: "TRY", symbol: "₺" },
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" }
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState("TRY");

  // **Menü Öğeleri**
  const menuItems = [
    { name: "Kategoriler", link: "/categories" },
    { name: "Fırsatlar", link: "/deals" },
    { name: "Markalar", link: "/brands" },
    { name: "Yeni Gelenler", link: "/new-arrivals" },
    { name: "Kampanyalar", link: "/offers" }
  ];

  return (
    <header className="bg-white shadow-md">
      {/* Üst Bar - Dil, Para Birimi, Hesap & Sepet */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-100 text-sm">
        {/* Dil Seçimi */}
        <div className="relative group">
          <button className="flex items-center text-gray-700">
            <Globe size={16} className="mr-1" />
            {languages.find((lang) => lang.code === selectedLanguage)?.name}
            <ChevronDown size={16} className="ml-1" />
          </button>
          <ul className="absolute hidden group-hover:block bg-white border rounded shadow-lg mt-2">
            {languages.map((lang) => (
              <li
                key={lang.code}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setSelectedLanguage(lang.code)}
              >
                {lang.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Para Birimi Seçimi */}
        <div className="relative group">
          <button className="flex items-center text-gray-700">
            <DollarSign size={16} className="mr-1" />
            {currencies.find((curr) => curr.code === selectedCurrency)?.symbol}{" "}
            {selectedCurrency}
            <ChevronDown size={16} className="ml-1" />
          </button>
          <ul className="absolute hidden group-hover:block bg-white border rounded shadow-lg mt-2">
            {currencies.map((curr) => (
              <li
                key={curr.code}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setSelectedCurrency(curr.code)}
              >
                {curr.symbol} {curr.code}
              </li>
            ))}
          </ul>
        </div>

        {/* Hesap ve Sepet */}
        <div className="flex space-x-4">
          <Link to="/account" className="flex items-center text-gray-700 hover:text-blue-600">
            <User size={18} className="mr-1" />
            Hesabım
          </Link>
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-blue-600">
            <ShoppingCart size={18} className="mr-1" />
            Sepetim
          </Link>
        </div>
      </div>

      {/* Orta Bölüm - Logo & Arama Çubuğu */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Ticenix</Link>
        </div>

        {/* Arama Çubuğu */}
        <div className="hidden md:flex w-2/5 relative">
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

      {/* Ana Menü */}
      <nav className={`md:flex ${menuOpen ? "block" : "hidden"} bg-gray-200 py-3 md:bg-transparent`}>
        <ul className="md:flex md:justify-center space-y-4 md:space-y-0 md:space-x-6 px-6">
          {menuItems.map((item) => (
            <li key={item.name} className="text-lg font-semibold text-gray-700 hover:text-blue-600">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
