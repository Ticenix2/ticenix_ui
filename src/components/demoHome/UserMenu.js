import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut, FiSettings, FiShoppingBag } from 'react-icons/fi';

const UserMenu = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Kullanıcı simgesi */}
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-gray-700 shadow-md transition-all"
      >
        <FaUserCircle size={24} />
        <span className="hidden md:inline-block font-medium">Hesabım</span>
      </button>

      {/* Menü açılır kutusu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
          <ul className="py-2 text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
              <FiSettings />
              <span>Profilim</span>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
              <FiShoppingBag />
              <span>Siparişlerim</span>
            </li>
            <li
              onClick={onLogout}
              className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer text-red-600"
            >
              <FiLogOut />
              <span>Çıkış Yap</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
