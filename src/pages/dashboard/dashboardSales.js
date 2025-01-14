import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function DashboardSales() {
  const totalSales = 250000; // Toplam satış miktarı
  const salesLastMonth = 22000; // Geçen ayın satışları
  const salesGrowth = ((salesLastMonth - 20000) / 20000) * 100; // Geçen aya göre satış artışı yüzdesi

  const salesTrend = [15000, 16000, 18000, 19000, 20000, 22000, 25000, 26000, 27000, 28000, 30000, 32000]; // Son 12 ayın satışları
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

  // Grafik verisi
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Satış Trendleri',
        data: salesTrend,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Grafik seçenekleri
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
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
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 space-y-8">
      {/* Genel Bilgi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Toplam Satışlar</h2>
          <p className="text-4xl font-bold text-teal-600 mt-2">${totalSales.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Bu yılki toplam satışlar</p>
        </div>
        <div>
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Satış Bilgileri */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Geçen Ay Satışları</h4>
          <p className="text-2xl font-semibold text-blue-600 mt-2">${salesLastMonth.toLocaleString()}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Satış Artışı</h4>
          <p className="text-2xl font-semibold text-yellow-600 mt-2">{salesGrowth.toFixed(2)}%</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Ortalama Satış</h4>
          <p className="text-2xl font-semibold text-green-600 mt-2">${(totalSales / 12).toLocaleString()}</p>
        </div>
      </div>

      {/* Satış Geçmişi */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Son 7 Gün Satış Geçmişi</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <ul className="space-y-3">
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/14/2025</span>
              <span className="font-medium text-gray-700">$1,500 Satış</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/13/2025</span>
              <span className="font-medium text-gray-700">$1,200 Satış</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/12/2025</span>
              <span className="font-medium text-gray-700">$1,800 Satış</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/11/2025</span>
              <span className="font-medium text-gray-700">$2,000 Satış</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/10/2025</span>
              <span className="font-medium text-gray-700">$1,400 Satış</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/09/2025</span>
              <span className="font-medium text-gray-700">$1,600 Satış</span>
            </li>
            <li className="flex justify-between items-center text-sm text-gray-600">
              <span>01/08/2025</span>
              <span className="font-medium text-gray-700">$1,500 Satış</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardSales;
