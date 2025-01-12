import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar/Sidebar';
import DashboardContent from '../../components/dashboard/DashboardContent'; // DashboardContent dosyasını import ettik.

function DashboardPage() {
  return (
    <div className="flex h-auto">
      {/* Ana İçerik Alanı */}
      <div className="flex-1 p-6 overflow-y-auto">
        <DashboardContent /> {/* DashboardContent bileşenini ekledik */}
      </div>
    </div>
  );
}

export default DashboardPage;
