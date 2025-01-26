import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SEOPerformance = () => {
  const trafficData = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz"],
    datasets: [
      {
        label: "Organik Trafik",
        data: [1200, 1500, 1800, 2200, 2500, 2700, 3000],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
      },
      {
        label: "Doğrudan Trafik",
        data: [900, 1100, 1300, 1600, 1800, 2000, 2200],
        borderColor: "#2196f3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const performanceMetrics = [
    { label: "Sayfa Hızı", value: "1.3 sn", status: "İyi" },
    { label: "Mobil Uyumluluk", value: "98%", status: "İyi" },
    { label: "Dizinlenmiş Sayfalar", value: "450", status: "Normal" },
    { label: "Hata Oranı", value: "2%", status: "İyi" },
  ];

  const topPerformingPages = [
    { page: "Ana Sayfa", views: 12000, bounceRate: "25%", avgTime: "3 dk" },
    { page: "Ürünler", views: 8500, bounceRate: "30%", avgTime: "2.5 dk" },
    { page: "İletişim", views: 4500, bounceRate: "40%", avgTime: "1 dk" },
    { page: "Blog", views: 6200, bounceRate: "35%", avgTime: "2 dk" },
  ];

  const handleOptimizePerformance = () => {
    toast.success("Performans optimizasyon önerileri başarıyla oluşturuldu!");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">SEO Performansı Yönetimi</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Web sitenizin performansını analiz edin ve optimize edin. Sayfa hızınızı artırarak, mobil uyumluluğunuzu geliştirerek ve daha fazla organik trafik çekerek arama motorlarında daha yüksek sıralamalar elde edin.
      </p>

      {/* Performans Metrikleri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {performanceMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col justify-between border-l-4"
            style={{
              borderColor: metric.status === "İyi" ? "#4caf50" : "#ff9800",
            }}
          >
            <p className="text-gray-700 font-medium text-lg">{metric.label}</p>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            <p
              className={`mt-2 text-sm font-semibold ${
                metric.status === "İyi" ? "text-green-600" : "text-orange-600"
              }`}
            >
              {metric.status}
            </p>
          </div>
        ))}
      </div>

      {/* Trafik Kaynağı Analizi */}
      <div className="bg-white shadow-lg p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trafik Kaynağı Analizi</h2>
        <Line data={trafficData} />
      </div>

      {/* En İyi Performans Gösteren Sayfalar */}
      <div className="bg-white shadow-lg p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">En İyi Performans Gösteren Sayfalar</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-gray-700 font-medium">Sayfa</th>
              <th className="px-6 py-4 text-left text-gray-700 font-medium">Ziyaret Sayısı</th>
              <th className="px-6 py-4 text-left text-gray-700 font-medium">Hemen Çıkma Oranı</th>
              <th className="px-6 py-4 text-left text-gray-700 font-medium">Ortalama Ziyaret Süresi</th>
            </tr>
          </thead>
          <tbody>
            {topPerformingPages.map((page, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 text-gray-900 font-medium">{page.page}</td>
                <td className="px-6 py-4 text-gray-800">{page.views}</td>
                <td className="px-6 py-4 text-gray-800">{page.bounceRate}</td>
                <td className="px-6 py-4 text-gray-800">{page.avgTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optimizasyon */}
      <div className="bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Performans Optimizasyonu</h2>
        <p className="text-gray-600 mb-4">
          Daha iyi sonuçlar elde etmek için SEO performansınızı optimize edin. Önerilen optimizasyon tekniklerini görüntülemek için aşağıdaki butona tıklayın.
        </p>
        <button
          onClick={handleOptimizePerformance}
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Optimizasyon Önerileri Al
        </button>
      </div>
    </div>
  );
};

export default SEOPerformance;
