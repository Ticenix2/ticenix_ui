import React, { useState } from 'react';
import { FaTachometerAlt, FaProductHunt, FaBox, FaUsers, FaChartBar, FaCog, FaSearch, FaFileInvoice, FaUserShield } from 'react-icons/fa';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggle = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null); 
    } else {
      setActiveMenu(menu); 
    }
  };

  return (
    <div className="w-64 bg-gradient-to-b from-orange-100 to-orange-300 text-gray-800 pb-[11.7%] p-6 flex flex-col shadow-lg overflow-hidden">
      <div className="text-center mb-8">
        <img src="/images/logo.png" alt="Ticenix Logo" className="h-12 mx-auto" />
        <h2 className="text-lg font-semibold mt-2 text-gray-800">Ticenix Admin Panel</h2>
      </div>

      <ul className="space-y-3 flex-grow">
        {/* Main Menu */}
        {MainMenu.map((menu) => (
          <li key={menu.name}>
            <button
              onClick={() => handleToggle(menu.name)}
              className="w-full flex items-center space-x-3 hover:bg-orange-500 p-2 rounded-lg transition duration-200 ease-in-out hover:text-white"
            >
              {menu.icon}
              <span className="text-sm font-medium">{menu.label}</span>
            </button>
            {activeMenu === menu.name && (
              <SubMenu menu={menu} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
