import React, { useState } from 'react';
import Product from '../../models/Product'; // Product modelini import ettik
import { addProduct } from '../../services/productService';

function ProductAdd() {
  const [newProduct, setNewProduct] = useState(new Product({})); // Başlangıçta boş bir ürün oluşturuyoruz

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      imageFile: e.target.files[0], // Görsel dosyasını state'e ekliyoruz
    }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = newProduct.toFormData(); // Ürünü FormData'ya dönüştür
      await addProduct(formData); // Ürünü ekle
      alert('Ürün başarıyla eklendi');
      setNewProduct(new Product({})); // Formu sıfırlıyoruz
    } catch (error) {
      alert('Ürün eklenirken bir hata oluştu');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Yeni Ürün Ekle</h1>
      <form onSubmit={handleAddProduct} className="bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ürün Adı */}
        <div className="form-group">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Ürün Adı</label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Ürün adı"
            value={newProduct.productName}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Açıklama */}
        <div className="form-group">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Açıklama</label>
          <textarea
            id="description"
            name="description"
            placeholder="Ürün açıklaması"
            value={newProduct.description}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Stok */}
        <div className="form-group">
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stok</label>
          <input
            type="number"
            id="stock"
            name="stock"
            placeholder="Stok miktarı"
            value={newProduct.stock}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Fiyat */}
        <div className="form-group">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Fiyat</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Fiyat"
            value={newProduct.price}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* İndirimli Fiyat */}
        <div className="form-group">
          <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700">İndirimli Fiyat</label>
          <input
            type="number"
            id="discountPrice"
            name="discountPrice"
            placeholder="İndirimli Fiyat"
            value={newProduct.discountPrice}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Kategori ID */}
        <div className="form-group">
          <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">Kategori ID</label>
          <input
            type="number"
            id="categoryId"
            name="categoryId"
            placeholder="Kategori ID"
            value={newProduct.categoryId}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Durum */}
        <div className="form-group">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Durum</label>
          <select
            id="status"
            name="status"
            value={newProduct.status}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="active">Aktif</option>
            <option value="inactive">Pasif</option>
          </select>
        </div>

        {/* Görsel Yükleme */}
        <div className="form-group">
          <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700">Görsel Yükle</label>
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            onChange={handleFileChange}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Ürün Ekle Butonu */}
        <div className="form-group col-span-2">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold text-lg rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Ürünü Ekle
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductAdd;
