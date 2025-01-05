import React from 'react';
import Sidebar from '../components/dashboard/Sidebar/Sidebar';

function DashboardPage() {
  return (
    <div className="flex h-auto">
      {/* Sol Sidebar */}
      <Sidebar/>
      {/* Ana İçerik Alanı */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Dashboard sayfasına hoş geldiniz! Burada genel istatistikler ve raporlar yer alacak.</p>
        
        {/* Buraya daha fazla içerik ekledikçe, içerik otomatik olarak kayabilir */}
        {/* Örneğin alt menüler */}
      </div>
    </div>
  );
}

export default DashboardPage;
