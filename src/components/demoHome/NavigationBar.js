import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-orange-600 hover:text-orange-500">
            E-Ticaret
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="text-lg hover:text-orange-500">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-lg hover:text-orange-500">
                Ürünler
              </Link>
            </li>
            <li>
              <Link to="/offers" className="text-lg hover:text-orange-500">
                İndirimler
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg hover:text-orange-500">
                Hakkında
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg hover:text-orange-500">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Ürün Ara..."
              className="px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="hover:text-orange-500">
            <FaUserCircle className="text-2xl" />
          </Link>
          <Link to="/cart" className="relative hover:text-orange-500">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute top-0 right-0 bg-orange-600 text-white text-xs rounded-full px-1">3</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <ul className="flex flex-col items-center py-4">
            <li>
              <Link to="/" className="py-2 text-lg hover:text-orange-500">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/products" className="py-2 text-lg hover:text-orange-500">
                Ürünler
              </Link>
            </li>
            <li>
              <Link to="/offers" className="py-2 text-lg hover:text-orange-500">
                İndirimler
              </Link>
            </li>
            <li>
              <Link to="/about" className="py-2 text-lg hover:text-orange-500">
                Hakkında
              </Link>
            </li>
            <li>
              <Link to="/contact" className="py-2 text-lg hover:text-orange-500">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
