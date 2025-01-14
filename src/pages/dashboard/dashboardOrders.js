import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function DashboardOrders() {
  const totalOrders = 1500; // Yıllık toplam sipariş sayısı
  const completedOrders = 1200; // Tamamlanan siparişler
  const pendingOrders = 150; // Bekleyen siparişler
  const canceledOrders = 150; // İptal edilen siparişler

  const ordersTrend = [120, 140, 160, 180, 200, 220, 250, 280, 300, 320, 350, 400]; // Son 12 ayın siparişleri
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Sipariş Trendleri',
        data: ordersTrend,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => value,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 space-y-8">
      {/* Genel Bilgi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Toplam Siparişler</h2>
          <p className="text-4xl font-bold text-teal-600 mt-2">{totalOrders.toLocaleString()} Sipariş</p>
          <p className="text-sm text-gray-500">Bu yılki toplam sipariş sayısı</p>
        </div>
        <div>
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Sipariş Durumları */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Tamamlanan Siparişler</h4>
          <p className="text-2xl font-semibold text-blue-600 mt-2">{completedOrders.toLocaleString()}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Bekleyen Siparişler</h4>
          <p className="text-2xl font-semibold text-yellow-600 mt-2">{pendingOrders.toLocaleString()}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">İptal Edilen Siparişler</h4>
          <p className="text-2xl font-semibold text-red-600 mt-2">{canceledOrders.toLocaleString()}</p>
        </div>
      </div>

      {/* Son 7 Gün Sipariş Geçmişi */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Son 7 Gün Sipariş Geçmişi</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/14/2025</span>
              <span className="font-medium text-gray-700">15 Sipariş</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/13/2025</span>
              <span className="font-medium text-gray-700">12 Sipariş</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/12/2025</span>
              <span className="font-medium text-gray-700">18 Sipariş</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/11/2025</span>
              <span className="font-medium text-gray-700">22 Sipariş</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/10/2025</span>
              <span className="font-medium text-gray-700">14 Sipariş</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/09/2025</span>
              <span className="font-medium text-gray-700">20 Sipariş</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/08/2025</span>
              <span className="font-medium text-gray-700">16 Sipariş</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardOrders;
