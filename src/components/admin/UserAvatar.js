import React, { useState } from "react";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

const UserAvatar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out!");
  };

  return (
    <div className="relative">
      {/* Avatar Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src="https://via.placeholder.com/40" // Replace with the user's avatar URL
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-gray-800 font-medium hidden sm:block">Admin</span>
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-48">
          <button
            className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
            onClick={() => console.log("Go to profile")}
          >
            <FaUserCircle className="mr-2" />
            Profil
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
            onClick={() => console.log("Go to settings")}
          >
            <FaCog className="mr-2" />
            Ayarlar
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-100"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" />
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
