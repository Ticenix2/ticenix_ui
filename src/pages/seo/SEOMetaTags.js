import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SEO_Meta_Tags = () => {
  const [metaTags, setMetaTags] = useState([
    { id: 1, page: 'Ana Sayfa', title: 'E-Ticaret Platformu', description: 'En iyi e-ticaret çözümleri', keywords: 'e-ticaret, platform, online satış' },
    { id: 2, page: 'Ürünler', title: 'Ürünlerimiz', description: 'En popüler ürünlerimizle tanışın', keywords: 'ürünler, popüler ürünler, en iyi ürünler' },
    { id: 3, page: 'Hakkımızda', title: 'Biz Kimiz?', description: 'Firmamız ve sunduğumuz hizmetler hakkında bilgi', keywords: 'hakkımızda, firma, hizmetler' },
  ]);

  const [newMetaTag, setNewMetaTag] = useState({
    page: '',
    title: '',
    description: '',
    keywords: ''
  });

  const handleAddMetaTag = () => {
    if (!newMetaTag.page || !newMetaTag.title || !newMetaTag.description || !newMetaTag.keywords) {
      toast.error('Lütfen tüm alanları doldurun!');
      return;
    }
    setMetaTags([
      ...metaTags,
      { ...newMetaTag, id: metaTags.length + 1 }
    ]);
    setNewMetaTag({ page: '', title: '', description: '', keywords: '' });
    toast.success('Yeni Meta Tag başarıyla eklendi!');
  };

  const handleEditMetaTag = (id, updatedTag) => {
    setMetaTags(metaTags.map(tag => tag.id === id ? { ...tag, ...updatedTag } : tag));
    toast.success('Meta Tag başarıyla güncellendi!');
  };

  const handleDeleteMetaTag = (id) => {
    setMetaTags(metaTags.filter(tag => tag.id !== id));
    toast.success('Meta Tag başarıyla silindi!');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">SEO Meta Tag Yönetimi</h1>
      <p className="text-lg text-gray-600 text-center mb-12">Web sitenizin sayfaları için özel SEO başlıklarını, açıklamalarını ve anahtar kelimelerini buradan yönetebilirsiniz.</p>

      {/* Yeni Meta Tag Ekleme Formu */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Yeni Meta Tag Ekle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Sayfa Adı"
            value={newMetaTag.page}
            onChange={(e) => setNewMetaTag({ ...newMetaTag, page: e.target.value })}
            className="p-4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Başlık"
            value={newMetaTag.title}
            onChange={(e) => setNewMetaTag({ ...newMetaTag, title: e.target.value })}
            className="p-4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Açıklama"
            value={newMetaTag.description}
            onChange={(e) => setNewMetaTag({ ...newMetaTag, description: e.target.value })}
            className="p-4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Anahtar Kelimeler (Virgülle ayrılmış)"
            value={newMetaTag.keywords}
            onChange={(e) => setNewMetaTag({ ...newMetaTag, keywords: e.target.value })}
            className="p-4 border-2 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={handleAddMetaTag}
          className="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Ekle
        </button>
      </div>

      {/* Meta Tags Listeleme */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mevcut Meta Tags</h2>

        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-sm">
            <tr>
              <th className="px-6 py-4 text-left text-gray-700">Sayfa Adı</th>
              <th className="px-6 py-4 text-left text-gray-700">Başlık</th>
              <th className="px-6 py-4 text-left text-gray-700">Açıklama</th>
              <th className="px-6 py-4 text-left text-gray-700">Anahtar Kelimeler</th>
              <th className="px-6 py-4 text-left text-gray-700">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {metaTags.map((metaTag) => (
              <tr key={metaTag.id} className="border-b text-sm">
                <td className="px-6 py-4 text-gray-800">{metaTag.page}</td>
                <td className="px-6 py-4 text-gray-800">{metaTag.title}</td>
                <td className="px-6 py-4 text-gray-800">{metaTag.description}</td>
                <td className="px-6 py-4 text-gray-800">{metaTag.keywords}</td>
                <td className="px-6 py-4 text-gray-800">
                  <button
                    onClick={() => handleEditMetaTag(metaTag.id, { title: 'Yeni Başlık', description: 'Yeni Açıklama' })}
                    className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-200"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDeleteMetaTag(metaTag.id)}
                    className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-200"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SEO_Meta_Tags;
