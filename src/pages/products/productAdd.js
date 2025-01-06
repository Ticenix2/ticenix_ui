import React, { useState } from 'react';

function ProductAdd({ onAddProduct }) {  // onAddProduct prop'u ile ürün eklemeyi sağla
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    price: '',
    stock: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  // Formdaki alanlarda değişiklik olduğunda güncelleme yapma
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form gönderildiğinde yapılacak işlemler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basit validasyon
    const newErrors = {};
    if (!formData.productName) newErrors.productName = 'Ürün adı gereklidir.';
    if (!formData.category) newErrors.category = 'Kategori seçilmelidir.';
    if (!formData.price || isNaN(formData.price)) newErrors.price = 'Geçerli bir fiyat girin.';
    if (!formData.stock || isNaN(formData.stock)) newErrors.stock = 'Geçerli bir stok adedi girin.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Eğer validasyon başarılıysa, ürün ekleme işlemi yapılır
      onAddProduct(formData);  // Ürün verilerini dışarıya gönder

      // Kullanıcıya başarı mesajı gösterme
      alert('Ürün başarıyla eklendi!');

      // Formu sıfırlama
      setFormData({
        productName: '',
        category: '',
        price: '',
        stock: '',
        description: '',
      });
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Yeni Ürün Ekle</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 max-w-xl mx-auto">
        {/* Ürün Adı */}
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
            Ürün Adı
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className={`w-full border ${errors.productName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
          />
          {errors.productName && <p className="text-sm text-red-500 mt-1">{errors.productName}</p>}
        </div>

        {/* Kategori */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Kategori
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
          >
            <option value="">Kategori Seçin</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Giyim">Giyim</option>
            <option value="Ev ve Yaşam">Ev ve Yaşam</option>
          </select>
          {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category}</p>}
        </div>

        {/* Fiyat */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Fiyat (₺)
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={`w-full border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
          />
          {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price}</p>}
        </div>

        {/* Stok */}
        <div className="mb-4">
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2">
            Stok
          </label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className={`w-full border ${errors.stock ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
          />
          {errors.stock && <p className="text-sm text-red-500 mt-1">{errors.stock}</p>}
        </div>

        {/* Açıklama */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Açıklama
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Gönder Butonu */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
        >
          Ürünü Ekle
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
