import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, ChevronDown, Globe, Heart, Package, Moon, Sun } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // **Dil Seçimi**
  const languages = [
    { code: "tr", name: "Türkçe" },
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" }
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  // **Menü Öğeleri ve Mega Menü**
  const categories = [
    { name: "Elektronik", subcategories: ["Telefon", "Bilgisayar", "Tablet", "TV"] },
    { name: "Moda", subcategories: ["Kadın", "Erkek", "Çocuk", "Aksesuar"] },
    { name: "Ev & Yaşam", subcategories: ["Mobilya", "Dekorasyon", "Mutfak"] },
    { name: "Spor & Outdoor", subcategories: ["Fitness", "Kamp", "Bisiklet"] },
    { name: "Kozmetik", subcategories: ["Parfüm", "Cilt Bakımı", "Makyaj"] }
  ];

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? "bg-gray-900 text-white" : "bg-white shadow-lg"} transition-all`}>
      {/* Üst Bar */}
      <div className={`flex justify-between items-center px-6 py-2 text-sm ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        
        {/* Dil Seçimi */}
        <div className="relative group">
          <button className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
            <Globe size={16} className="mr-1" />
            {languages.find((lang) => lang.code === selectedLanguage)?.name}
            <ChevronDown size={16} className="ml-1" />
          </button>
          <ul className="absolute hidden group-hover:block bg-white text-gray-700 border border-gray-200 rounded-lg shadow-xl mt-2 w-40">
            {languages.map((lang) => (
              <li key={lang.code} className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-all"
                onClick={() => setSelectedLanguage(lang.code)}>
                {lang.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Sipariş, Destek, Favoriler */}
        <div className="flex space-x-4">
          <Link to="/orders" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
            <Package size={18} className="mr-1" /> Siparişlerim
          </Link>
          <Link to="/wishlist" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
            <Heart size={18} className="mr-1" /> Favorilerim
          </Link>
          <button onClick={toggleDarkMode} className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* Orta Bölüm */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-3xl font-bold text-blue-600">
          <Link to="/">Ticenix</Link>
        </div>

        {/* Arama Çubuğu */}
        <div className="hidden md:flex w-2/5 bg-white border border-gray-300 rounded-full px-3 py-2 shadow-lg transition-all hover:shadow-2xl">
          <Search size={20} className="text-gray-400" />
          <input type="text" placeholder="Ürün ara..." className="w-full outline-none px-2" />
        </div>

        {/* Sepet ve Kullanıcı */}
        <div className="flex space-x-6">
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
            <ShoppingCart size={20} className="mr-1" /> Sepetim
          </Link>
          <Link to="/demo/account" className="flex items-center text-gray-700 hover:text-blue-500 transition-all">
            <User size={20} className="mr-1" /> Hesabım
          </Link>
        </div>
      </div>

      {/* Ana Menü */}
      <nav className="bg-blue-600 text-white py-4 shadow-lg">
        <ul className="flex justify-center space-x-8 px-6">
          {categories.map((cat) => (
            <li key={cat.name} className="group relative">
              <Link to={`/category/${cat.name}`} className="text-lg font-semibold hover:text-blue-200 py-2 px-4 transition-all ease-in-out duration-300 transform hover:scale-110">
                {cat.name}
              </Link>

              {/* Alt Menü */}
              <ul className="absolute hidden group-hover:block bg-gradient-to-b from-white to-blue-50 text-gray-700 border border-gray-300 rounded-lg shadow-2xl mt-2 w-[250px] py-2 transition-all ease-in-out duration-300">
                {cat.subcategories.map((sub) => (
                  <li key={sub} className="px-4 py-3 hover:bg-blue-100 cursor-pointer transition-all transform hover:scale-105">
                    <Link to={`/category/${sub}`} className="text-gray-700 hover:text-blue-600">
                      {sub}
                    </Link>
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
