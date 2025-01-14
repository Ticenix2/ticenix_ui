import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function DashboardAnnual() {
  const annualSales = 125000; // Yıllık satış toplamı
  const lastYearSales = 115000; // Geçen yılki satışlar
  const salesTrend = [8000, 8500, 9200, 9800, 10500, 11000, 11500, 12000, 13000, 14000, 15000, 16000]; // Son 12 ayın satışları
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

  const topSellingProducts = [
    { name: 'Akıllı Telefon', sales: 3200 },
    { name: 'Laptop', sales: 2900 },
    { name: 'Kulaklık', sales: 2700 },
    { name: 'Akıllı Saat', sales: 2300 },
    { name: 'Tablet', sales: 2100 },
  ];

  const salesGrowth = ((annualSales - lastYearSales) / lastYearSales) * 100;

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Yıllık Satış Trendleri',
        data: salesTrend,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 space-y-8">
      {/* Genel Bilgi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Yıllık Satışlar</h2>
          <p className="text-4xl font-bold text-red-600 mt-2">${annualSales.toLocaleString()}</p>
          <p className="text-sm text-gray-500">
            Bu yılki toplam satış ({salesGrowth > 0 ? '+' : ''}
            {salesGrowth.toFixed(2)}% geçen yıla göre)
          </p>
        </div>
        <div>
          <Line data={data} options={options} />
        </div>
      </div>

      {/* Performans Göstergeleri */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Ortalama Aylık Satış</h4>
          <p className="text-2xl font-semibold text-blue-600 mt-2">${(annualSales / 12).toFixed(2)}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Hedef Karşılanma</h4>
          <p className="text-2xl font-semibold text-green-600 mt-2">95%</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-sm font-medium text-gray-600">Geçen Yıl Satış</h4>
          <p className="text-2xl font-semibold text-red-600 mt-2">${lastYearSales.toLocaleString()}</p>
        </div>
      </div>

      {/* En Çok Satılan Ürünler */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">En Çok Satılan Ürünler</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <ul className="space-y-3">
            {topSellingProducts.map((product, index) => (
              <li key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{product.name}</span>
                <span className="text-gray-700 font-medium">{product.sales} adet</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardAnnual;
