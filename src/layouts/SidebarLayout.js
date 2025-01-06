import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar/Sidebar';

function SidebarLayout() {
  return (
    <div className="flex">
      {/* Sol Sidebar */}
      <Sidebar />

      {/* Sayfa içeriği */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default SidebarLayout;
