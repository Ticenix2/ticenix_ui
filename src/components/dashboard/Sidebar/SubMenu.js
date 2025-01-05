import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SubMenu = ({ menu }) => {
  const location = useLocation();

  return (
    <ul className="space-y-2 mt-4 pl-3 border-l-4 border-orange-500 ml-4">
      {menu.subMenu.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            className={`block text-sm text-gray-700 hover:bg-orange-300 hover:text-gray-800 py-2 px-4 rounded-lg transition duration-200 ease-in-out 
                        ${location.pathname === item.path ? 'bg-orange-400 text-white' : ''}`}
          >
            {item.icon && <span className="mr-3">{item.icon}</span>} 
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
