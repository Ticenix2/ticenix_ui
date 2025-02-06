import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, ShoppingCart, User, Search, ChevronDown, Globe, DollarSign, Heart, Bell, Package, Moon, Sun
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // **Dil ve Para Birimi Seçimi**
  const languages = [
    { code: "tr", name: "Türkçe" },
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" }
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  const currencies = [
    { code: "TRY", symbol: "₺" },
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" }
  ];
  const [selectedCurrency, setSelectedCurrency] = useState("TRY");

  // **Menü Öğeleri ve Mega Menü**
  const categories = [
    { name: "Elektronik", subcategories: ["Telefon", "Bilgisayar", "Tablet", "TV"] },
    { name: "Moda", subcategories: ["Kadın", "Erkek", "Çocuk", "Aksesuar"] },
    { name: "Ev & Yaşam", subcategories: ["Mobilya", "Dekorasyon", "Mutfak"] },
    { name: "Spor & Outdoor", subcategories: ["Fitness", "Kamp", "Bisiklet"] },
    { name: "Kozmetik", subcategories: ["Parfüm", "Cilt Bakımı", "Makyaj"] }
  ];

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? "bg-gray-900 text-white" : "bg-white shadow-md"} transition-all`}>
      {/* Üst Bar */}
      <div className={`flex justify-between items-center px-6 py-2 text-sm ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        
        {/* Dil Seçimi */}
        <div className="relative group">
          <button className="flex items-center">
            <Globe size={16} className="mr-1" />
            {languages.find((lang) => lang.code === selectedLanguage)?.name}
            <ChevronDown size={16} className="ml-1" />
          </button>
          <ul className="absolute hidden group-hover:block bg-white border rounded shadow-lg mt-2">
            {languages.map((lang) => (
              <li key={lang.code} className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setSelectedLanguage(lang.code)}>
                {lang.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Para Birimi Seçimi */}
        <div className="relative group">
          <button className="flex items-center">
            <DollarSign size={16} className="mr-1" />
            {currencies.find((curr) => curr.code === selectedCurrency)?.symbol} {selectedCurrency}
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>

        {/* Sipariş, Destek, Favoriler */}
        <div className="flex space-x-4">
          <Link to="/orders" className="flex items-center hover:text-blue-500">
            <Package size={18} className="mr-1" /> Siparişlerim
          </Link>
          <Link to="/wishlist" className="flex items-center hover:text-blue-500">
            <Heart size={18} className="mr-1" /> Favorilerim
          </Link>
          <button onClick={toggleDarkMode} className="flex items-center hover:text-blue-500">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* Orta Bölüm */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Ticenix</Link>
        </div>

        {/* Arama Çubuğu */}
        <div className="hidden md:flex w-2/5 bg-white border border-gray-300 rounded-full px-3 py-2 shadow-sm">
          <Search size={20} className="text-gray-400" />
          <input type="text" placeholder="Ürün ara..." className="w-full outline-none px-2" />
        </div>

        {/* Sepet ve Kullanıcı */}
        <div className="flex space-x-4">
          <Link to="/cart" className="flex items-center hover:text-blue-500">
            <ShoppingCart size={20} className="mr-1" /> Sepetim
          </Link>
          <Link to="/account" className="flex items-center hover:text-blue-500">
            <User size={20} className="mr-1" /> Hesabım
          </Link>
        </div>
      </div>

      {/* Ana Menü */}
      <nav className="bg-blue-600 text-white py-3">
        <ul className="flex justify-center space-x-6 px-6">
          {categories.map((cat) => (
            <li key={cat.name} className="group relative">
              <Link to={`/category/${cat.name}`} className="text-lg font-semibold hover:underline">
                {cat.name}
              </Link>
              <ul className="absolute hidden group-hover:block bg-white text-gray-700 border rounded shadow-lg mt-2">
                {cat.subcategories.map((sub) => (
                  <li key={sub} className="px-4 py-2 hover:bg-gray-200">
                    <Link to={`/category/${sub}`}>{sub}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
