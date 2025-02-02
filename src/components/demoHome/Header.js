import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Search, Plus, Trash, Edit } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // **Diller**
  const [languages, setLanguages] = useState([
    { code: "tr", name: "Türkçe" },
    { code: "en", name: "English" }
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  // **Para Birimleri**
  const [currencies, setCurrencies] = useState([
    { code: "TRY", symbol: "₺" },
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" }
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState("TRY");

  // **Menü Öğeleri**
  const [menuItems, setMenuItems] = useState([
    { name: "Kategoriler", link: "/categories" },
    { name: "Fırsatlar", link: "/deals" },
    { name: "Markalar", link: "/brands" },
    { name: "Yeni Gelenler", link: "/new-arrivals" },
    { name: "Kampanyalar", link: "/offers" }
  ]);

  // **Dil / Para Birimi Yönetimi**
  const addLanguage = () => {
    const newLang = prompt("Yeni Dil İsmi:");
    const newCode = prompt("Dil Kodu:");
    if (newLang && newCode) {
      setLanguages([...languages, { code: newCode, name: newLang }]);
    }
  };

  const deleteLanguage = (code) => {
    setLanguages(languages.filter((lang) => lang.code !== code));
  };

  const addCurrency = () => {
    const newCurrency = prompt("Yeni Para Birimi:");
    const newSymbol = prompt("Para Birimi Sembolü:");
    if (newCurrency && newSymbol) {
      setCurrencies([...currencies, { code: newCurrency, symbol: newSymbol }]);
    }
  };

  const deleteCurrency = (code) => {
    setCurrencies(currencies.filter((curr) => curr.code !== code));
  };

  // **Menü Yönetimi**
  const addMenuItem = () => {
    const newName = prompt("Menü İsmi:");
    const newLink = prompt("Menü Linki:");
    if (newName && newLink) {
      setMenuItems([...menuItems, { name: newName, link: newLink }]);
    }
  };

  const deleteMenuItem = (name) => {
    setMenuItems(menuItems.filter((item) => item.name !== name));
  };

  return (
    <header className="bg-white shadow-md">
      {/* Üst Bar - Dil, Para Birimi, Hesap & Sepet */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-100 text-sm">
        {/* Dil Seçimi */}
        <div className="flex space-x-2">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="p-1 border border-gray-300 rounded-md text-gray-700"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
          <button onClick={addLanguage} className="text-green-600">
            <Plus size={18} />
          </button>
        </div>

        {/* Para Birimi Seçimi */}
        <div className="flex space-x-2">
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="p-1 border border-gray-300 rounded-md text-gray-700"
          >
            {currencies.map((curr) => (
              <option key={curr.code} value={curr.code}>{curr.symbol} {curr.code}</option>
            ))}
          </select>
          <button onClick={addCurrency} className="text-green-600">
            <Plus size={18} />
          </button>
        </div>

        {/* Hesap ve Sepet */}
        <div className="flex space-x-4">
          <Link to="/account" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <User size={18} />
            <span>Hesabım</span>
          </Link>
          <Link to="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
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

        {/* Arama Çubuğu */}
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

      {/* Ana Menü */}
      <nav className={`md:flex ${menuOpen ? "block" : "hidden"} bg-gray-200 py-3 md:bg-transparent`}>
        <ul className="md:flex md:justify-center space-y-4 md:space-y-0 md:space-x-6 px-6">
          {menuItems.map((item) => (
            <li key={item.name} className="flex items-center space-x-2">
              <Link to={item.link} className="block text-lg font-semibold text-gray-700 hover:text-blue-600">
                {item.name}
              </Link>
              <button onClick={() => deleteMenuItem(item.name)} className="text-red-500">
                <Trash size={18} />
              </button>
            </li>
          ))}
          <li>
            <button onClick={addMenuItem} className="flex items-center text-green-600 text-lg font-semibold">
              <Plus size={20} className="mr-1" />
              Menü Ekle
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
