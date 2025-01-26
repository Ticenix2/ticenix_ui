import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Grafik için Recharts kütüphanesi

const SEOKeywordManagement = () => {
  // Anahtar kelimeler verisi
  const [keywords, setKeywords] = useState([
    { id: 1, keyword: 'e-ticaret platformu', rank: 1, volume: 10000, cpc: 1.5, trend: [100, 110, 120, 130, 140] },
    { id: 2, keyword: 'online alışveriş', rank: 5, volume: 8000, cpc: 1.2, trend: [70, 75, 85, 90, 100] },
  ]);

  const [newKeyword, setNewKeyword] = useState({ keyword: '', rank: '', volume: '', cpc: '', category: '' });

  const handleAddKeyword = () => {
    setKeywords([...keywords, { ...newKeyword, id: keywords.length + 1, trend: Array(5).fill(newKeyword.volume) }]);
    setNewKeyword({ keyword: '', rank: '', volume: '', cpc: '', category: '' });
  };

  const handleDeleteKeyword = (id) => {
    setKeywords(keywords.filter(keyword => keyword.id !== id));
  };

  const handleEditKeyword = (id, updatedKeyword) => {
    setKeywords(keywords.map(keyword => keyword.id === id ? { ...keyword, ...updatedKeyword } : keyword));
  };

  return (
    <div className="container mx-auto p-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">SEO Anahtar Kelimeleri Yönetimi</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">Web sitenizin SEO stratejisini geliştirmeniz için anahtar kelimelerinizi yönetin, düzenleyin ve analiz edin.</p>

      {/* Anahtar Kelime Ekleme Formu */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yeni Anahtar Kelime Ekle</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Anahtar Kelime"
            value={newKeyword.keyword}
            onChange={(e) => setNewKeyword({ ...newKeyword, keyword: e.target.value })}
            className="p-2 border border-gray-300 rounded-md w-1/4"
          />
          <input
            type="number"
            placeholder="Sıra"
            value={newKeyword.rank}
            onChange={(e) => setNewKeyword({ ...newKeyword, rank: e.target.value })}
            className="p-2 border border-gray-300 rounded-md w-1/4"
          />
          <input
            type="number"
            placeholder="Hacim"
            value={newKeyword.volume}
            onChange={(e) => setNewKeyword({ ...newKeyword, volume: e.target.value })}
            className="p-2 border border-gray-300 rounded-md w-1/4"
          />
          <input
            type="number"
            placeholder="CPC ($)"
            value={newKeyword.cpc}
            onChange={(e) => setNewKeyword({ ...newKeyword, cpc: e.target.value })}
            className="p-2 border border-gray-300 rounded-md w-1/4"
          />
          <select
            value={newKeyword.category}
            onChange={(e) => setNewKeyword({ ...newKeyword, category: e.target.value })}
            className="p-2 border border-gray-300 rounded-md w-1/4"
          >
            <option value="">Kategori Seç</option>
            <option value="high-volume">Yüksek Hacimli</option>
            <option value="low-competition">Düşük Rekabetli</option>
            <option value="high-competition">Yüksek Rekabetli</option>
          </select>
          <button
            onClick={handleAddKeyword}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Ekle
          </button>
        </div>
      </div>

      {/* Anahtar Kelimeleri Listeleme */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Anahtar Kelimeler</h2>

        {/* Anahtar Kelimeler Tablosu */}
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Anahtar Kelime</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Sıra</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Hacim</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">CPC ($)</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Kategori</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((keyword) => (
              <tr key={keyword.id} className="border-b">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{keyword.keyword}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{keyword.rank}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{keyword.volume}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{keyword.cpc} $</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{keyword.category}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  <button
                    onClick={() => handleEditKeyword(keyword.id, { rank: 2, volume: 12000, cpc: 1.8 })}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-yellow-600"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDeleteKeyword(keyword.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Anahtar Kelime Trend Grafiği */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Anahtar Kelime Trend Analizi</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={keywords[0].trend ? keywords[0].trend.map((val, index) => ({ name: `Week ${index + 1}`, value: val })) : []}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SEOKeywordManagement;
