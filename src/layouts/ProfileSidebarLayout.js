import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileSidebar from '../components/profile_complete/ProfileSidebar';

function ProfileSidebarLayout() {
  return (
    <div className="flex">
      {/* Sol Sidebar */}
      <ProfileSidebar />

      {/* Sayfa içeriği */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileSidebarLayout;
