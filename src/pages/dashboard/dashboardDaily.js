import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function DashboardDaily() {
  // Bugün ve dün yapılan satışlar, siparişler ve kar
  const totalSalesToday = 8000; // Bugün yapılan toplam satış
  const totalSalesYesterday = 7500; // Dün yapılan satış
  const totalOrdersToday = 120; // Bugün alınan sipariş sayısı
  const totalOrdersYesterday = 115; // Dün alınan sipariş sayısı
  const totalProfitToday = 2000; // Bugün elde edilen kar
  const totalProfitYesterday = 1800; // Dün elde edilen kar

  // Satış artışı yüzdesi
  const salesGrowth = ((totalSalesToday - totalSalesYesterday) / totalSalesYesterday) * 100;
  const orderGrowth = ((totalOrdersToday - totalOrdersYesterday) / totalOrdersYesterday) * 100;
  const profitGrowth = ((totalProfitToday - totalProfitYesterday) / totalProfitYesterday) * 100;

  // Günlük satış trendi (Son 7 gün)
  const dailySalesData = [6500, 7000, 7200, 7500, 7800, 8000, 8200];
  const dailyOrdersData = [100, 110, 105, 115, 120, 125, 130];
  const dailyProfitData = [1500, 1600, 1550, 1700, 1800, 2000, 2100];
  const days = ['01/08', '01/09', '01/10', '01/11', '01/12', '01/13', '01/14'];

  // Grafik verisi
  const data = {
    labels: days,
    datasets: [
      {
        label: 'Günlük Satışlar ($)',
        data: dailySalesData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Günlük Siparişler',
        data: dailyOrdersData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Günlük Kar ($)',
        data: dailyProfitData,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
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
      {/* Genel Satış ve Sipariş Bilgisi */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bugün Yapılan Satışlar */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700">Bugün Yapılan Satışlar</h2>
          <p className="text-3xl font-bold text-teal-600 mt-2">${totalSalesToday.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Bugünkü toplam satış miktarı</p>
          <p className={`text-sm font-semibold mt-4 ${salesGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {salesGrowth >= 0 ? 'Artış' : 'Azalış'}: {salesGrowth.toFixed(2)}%
          </p>
        </div>

        {/* Bugün Alınan Siparişler */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700">Bugün Alınan Siparişler</h2>
          <p className="text-3xl font-bold text-teal-600 mt-2">{totalOrdersToday}</p>
          <p className="text-sm text-gray-500">Bugün alınan sipariş sayısı</p>
          <p className={`text-sm font-semibold mt-4 ${orderGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {orderGrowth >= 0 ? 'Artış' : 'Azalış'}: {orderGrowth.toFixed(2)}%
          </p>
        </div>

        {/* Bugün Elde Edilen Kar */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700">Bugün Elde Edilen Kar</h2>
          <p className="text-3xl font-bold text-teal-600 mt-2">${totalProfitToday.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Bugünkü toplam kar</p>
          <p className={`text-sm font-semibold mt-4 ${profitGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {profitGrowth >= 0 ? 'Artış' : 'Azalış'}: {profitGrowth.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Satış, Sipariş ve Kar Trend Grafikleri */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Son 7 Gün Satış, Sipariş ve Kar Trendleri</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Ekstra Detaylar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Günlük Siparişler ve Kar */}
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Günlük Siparişler</h4>
          <p className="text-3xl font-bold text-teal-600">{totalOrdersToday}</p>
          <p className="text-sm text-gray-500">Bugünkü sipariş sayısı</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Günlük Kar</h4>
          <p className="text-3xl font-bold text-teal-600">${totalProfitToday.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Bugünkü kar miktarı</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardDaily;
