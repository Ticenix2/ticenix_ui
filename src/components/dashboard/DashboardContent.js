import React from 'react';
import { FiBarChart2, FiShoppingCart, FiClock, FiAlertTriangle } from 'react-icons/fi';

function DashboardContent() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Sayfa Başlığı ve Hızlı Aksiyonlar */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <div className="mt-4 lg:mt-0 flex space-x-4">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded shadow">
            <FiShoppingCart className="mr-2" /> Yeni Sipariş Ekle
          </button>
          <button className="flex items-center bg-gray-300 hover:bg-gray-400 px-5 py-3 rounded shadow">
            <FiBarChart2 className="mr-2" /> Rapor İndir
          </button>
        </div>
      </div>

      {/* Özet Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {[
          {
            title: 'Toplam Satışlar',
            value: '₺120,000',
            subtext: 'Bu ay',
            icon: <FiBarChart2 size={24} />,
            color: 'bg-green-100 text-green-600',
          },
          {
            title: 'Yeni Siparişler',
            value: '24',
            subtext: 'Bugün',
            icon: <FiShoppingCart size={24} />,
            color: 'bg-blue-100 text-blue-600',
          },
          {
            title: 'Bekleyen Siparişler',
            value: '8',
            subtext: 'Onay bekliyor',
            icon: <FiClock size={24} />,
            color: 'bg-orange-100 text-orange-600',
          },
          {
            title: 'Kritik Stok',
            value: '12 Ürün',
            subtext: 'Stok bitmek üzere',
            icon: <FiAlertTriangle size={24} />,
            color: 'bg-red-100 text-red-600',
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-sm ${card.color}`}
          >
            <div className="flex items-center">
              <div className="mr-4">{card.icon}</div>
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-2xl font-bold">{card.value}</p>
                <p className="text-sm">{card.subtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grafikler */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {['Aylık Satışlar', 'Sipariş Durumları'].map((title, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="h-56 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-500">Grafik buraya gelecek</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sipariş Tablosu */}
      <div className="bg-white shadow rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold mb-6">Son Siparişler</h2>
        <table className="w-full table-auto text-sm text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-3">Sipariş No</th>
              <th className="py-3">Müşteri</th>
              <th className="py-3">Tarih</th>
              <th className="py-3">Durum</th>
              <th className="py-3">Toplam</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: '#12345',
                customer: 'Ahmet Yılmaz',
                date: '2025-01-05',
                status: 'Tamamlandı',
                total: '₺300',
                statusColor: 'text-green-600',
              },
              {
                id: '#12346',
                customer: 'Mehmet Ak',
                date: '2025-01-04',
                status: 'Beklemede',
                total: '₺450',
                statusColor: 'text-orange-600',
              },
            ].map((order, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-3">{order.id}</td>
                <td className="py-3">{order.customer}</td>
                <td className="py-3">{order.date}</td>
                <td className={`py-3 ${order.statusColor}`}>{order.status}</td>
                <td className="py-3">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Kritik Ürün Listesi */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Kritik Stok Ürünler</h2>
        <ul className="divide-y divide-gray-200">
          {[
            { name: 'Ürün Adı 1', stock: '5 Adet' },
            { name: 'Ürün Adı 2', stock: '2 Adet' },
          ].map((product, index) => (
            <li key={index} className="flex justify-between py-4">
              <span>{product.name}</span>
              <span className="text-red-600">{product.stock}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardContent;
