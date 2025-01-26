import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo ve Ticenix Yazısı */}
          <div className="flex items-center space-x-4">
            <img src="/images/logo.png" alt="Ticenix Logo" className="h-10 w-10" />
            <a
              href="#"
              className="text-2xl font-bold tracking-wide text-white hover:text-orange-200"
            >
              Ticenix
            </a>
          </div>

          {/* Navigation Links */}
          <div className="space-x-6 hidden md:flex">
            <a
              href="#features"
              className="hover:text-orange-200 text-lg font-medium transition-all duration-200"
            >
              Özellikler
            </a>
            <a
              href="#pricing"
              className="hover:text-orange-200 text-lg font-medium transition-all duration-200"
            >
              Fiyatlandırma
            </a>
            <a
              href="#contact"
              className="hover:text-orange-200 text-lg font-medium transition-all duration-200"
            >
              İletişim
            </a>
            <a
              href="#demo"
              className="hover:text-orange-200 text-lg font-medium transition-all duration-200"
            >
              Demo Talep Et
            </a>
          </div>

          {/* Giriş Yap & Kayıt Ol */}
          <div className="space-x-4 flex items-center">
            <a
              href="/login"
              className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold shadow hover:bg-orange-50 hover:shadow-md transition-all duration-200"
            >
              Giriş Yap
            </a>
            <a
              href="/register"
              className="bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow hover:bg-orange-800 hover:shadow-md transition-all duration-200"
            >
              Kayıt Ol
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
