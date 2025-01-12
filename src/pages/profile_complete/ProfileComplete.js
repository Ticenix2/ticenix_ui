import React from "react";
import ProfileContent from "../../components/profile_complete/ProfileContent";
import ProfileSidebar from "../../components/profile_complete/ProfileSidebar";

const ProfileComplete = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white p-8 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">Profil Tamamlama</h1>
          <p className="mt-2 text-lg">
            Hesabınızı aktif hale getirmek için adımları tamamlayın.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <ProfileSidebar userName="Ahmet" email="ahmet@gmail.com" />

        {/* Content */}
        <ProfileContent />
      </main>
    </div>
  );
};

export default ProfileComplete;
