import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { FaSearch, FaLink, FaMobileAlt, FaDesktop, FaRegLightbulb } from 'react-icons/fa';
import { AiOutlineBarChart, AiOutlineThunderbolt } from 'react-icons/ai';
import { MdPageview } from 'react-icons/md';

const SEOOverview = () => {
  const [seoData, setSeoData] = useState({
    score: 0,
    keywords: [],
    backlinks: 0,
    pageSpeed: 0,
    mobileFriendly: true,
    metaTags: {
      title: '',
      description: '',
      keywords: '',
    },
    traffic: [],
    improvementSuggestions: []
  });

  useEffect(() => {
    // Simüle edilmiş API çağrısı
    setSeoData({
      score: 88,
      keywords: [
        { keyword: 'e-ticaret platformu', rank: 1, volume: 10000, cpc: 1.5 },
        { keyword: 'online alışveriş', rank: 5, volume: 8000, cpc: 1.2 },
      ],
      backlinks: 320,
      pageSpeed: 92,
      mobileFriendly: true,
      metaTags: {
        title: 'En İyi E-Ticaret Platformu - Online Mağaza Oluştur',
        description: 'En yüksek puanlı e-ticaret platformumuz ile kendi online mağazanızı oluşturun.',
        keywords: 'e-ticaret, online mağaza, platform, en iyi e-ticaret'
      },
      traffic: [
        { date: '2023-01-01', sessions: 1500 },
        { date: '2023-01-02', sessions: 1800 },
        { date: '2023-01-03', sessions: 2000 },
        { date: '2023-01-04', sessions: 2200 },
        { date: '2023-01-05', sessions: 2400 },
      ],
      improvementSuggestions: [
        "Sayfa hızını artırarak kullanıcı deneyimini geliştirin.",
        "Tıklama oranını artırmak için meta etiketlerini optimize edin.",
        "Kaliteli dış bağlantıları artırın."
      ]
    });
  }, []);

  const trafficChartData = {
    labels: seoData.traffic.map(data => data.date),
    datasets: [
      {
        label: 'Web Sitesi Trafiği',
        data: seoData.traffic.map(data => data.sessions),
        borderColor: '#2C3E50',
        backgroundColor: 'rgba(44,62,80, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="container mx-auto p-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">SEO Performansı Genel Bakış</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Web sitenizin SEO sağlığını analiz edin, gelişim alanlarını keşfedin ve SEO performansınızı artırmak için öneriler alın.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

        {/* SEO Skoru */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-t-4 border-blue-600">
          <AiOutlineBarChart size={40} className="text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">SEO Skoru</h2>
          <p className="text-3xl font-bold text-gray-800 mt-4">{seoData.score}%</p>
          <p className="mt-2 text-sm text-gray-500 text-center">Web sitenizin SEO sağlık puanı, çeşitli metriklere dayalı olarak hesaplanmaktadır. Yüksek puan, yüksek görünürlük anlamına gelir.</p>
        </div>

        {/* Anahtar Kelime Sıralamaları */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
          <FaSearch size={40} className="text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Anahtar Kelime Sıralamaları</h2>
          <ul className="mt-4 text-left text-gray-600 space-y-2">
            {seoData.keywords.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <span>{item.keyword}</span>
                <span className="font-semibold">Sıra: {item.rank}</span>
                <span>Hacim: {item.volume}</span>
                <span>CPC: {item.cpc} $</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dış Bağlantılar */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-yellow-600">
          <FaLink size={40} className="text-yellow-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Dış Bağlantılar</h2>
          <p className="text-3xl font-bold text-gray-800 mt-4">{seoData.backlinks} Dış Bağlantı</p>
          <p className="mt-2 text-sm text-gray-500">Web sitenize yönlendiren toplam dış bağlantı sayısı. Yüksek bağlantı sayısı, SEO açısından önemlidir.</p>
        </div>

      </div>

      {/* Trafik Grafik */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Web Sitesi Trafiği</h2>
        <Line data={trafficChartData} options={{
          responsive: true,
          scales: {
            y: { beginAtZero: true },
          },
        }} />
        <p className="mt-4 text-sm text-gray-500 text-center">Son bir hafta içindeki oturum sayısını takip edin ve trafik trendini görün.</p>
      </div>

      {/* Sayfa Hızı */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-12 flex items-center justify-between">
        <AiOutlineThunderbolt size={40} className="text-red-600" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Sayfa Hızı</h2>
          <p className="text-3xl font-bold text-gray-800">{seoData.pageSpeed}%</p>
          <p className="mt-2 text-sm text-gray-500">Sayfa hızının %90 ve üzerinde olması, hem kullanıcı deneyimi hem de SEO açısından önemlidir. Web sitenizin hızını optimize edin.</p>
        </div>
      </div>

      {/* Mobil Uyumluluk */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-12 flex items-center justify-between">
        <FaMobileAlt size={40} className="text-blue-500" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Mobil Uyumluluk</h2>
          <p className="text-3xl font-bold text-gray-800">{seoData.mobileFriendly ? 'Mobil Uyumludur' : 'Mobil Uyumsuz'}</p>
          <p className="mt-2 text-sm text-gray-500">{seoData.mobileFriendly ? 'Web siteniz mobil cihazlar için tamamen optimize edilmiştir.' : 'Mobil uyumluluk, kullanıcı deneyimi ve SEO için kritik öneme sahiptir.'}</p>
        </div>
      </div>

      {/* Meta Etiketler */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meta Etiketler</h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Başlık</label>
          <input
            type="text"
            value={seoData.metaTags.title}
            onChange={(e) => setSeoData({ ...seoData, metaTags: { ...seoData.metaTags, title: e.target.value } })}
            className="w-full p-3 border-2 border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Açıklama</label>
          <textarea
            value={seoData.metaTags.description}
            onChange={(e) => setSeoData({ ...seoData, metaTags: { ...seoData.metaTags, description: e.target.value } })}
            className="w-full p-3 border-2 border-gray-300 rounded-lg"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Anahtar Kelimeler</label>
          <input
            type="text"
            value={seoData.metaTags.keywords}
            onChange={(e) => setSeoData({ ...seoData, metaTags: { ...seoData.metaTags, keywords: e.target.value } })}
            className="w-full p-3 border-2 border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SEOOverview;
