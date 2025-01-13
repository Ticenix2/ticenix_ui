import React from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminContent from "../components/admin/AdminContent";
import UserAvatar from "../components/admin/UserAvatar";

const AdminPage = () => {
  return (
    <div className="flex">
      {/* Admin Sidebar */}
      <AdminSidebar />

      <div className="flex-1">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
          {/* User Avatar */}
          <UserAvatar />
        </header>

        {/* Admin Content */}
        <AdminContent />
      </div>
    </div>
  );
};

export default AdminPage;
