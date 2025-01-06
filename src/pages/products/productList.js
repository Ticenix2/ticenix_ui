import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function ProductList() {
  const [products, setProducts] = useState([]);

  // Load products (you can fetch from an API or use a static list)
  useEffect(() => {
    // For now, I'll use a static list, but this can be replaced with a fetch request.
    const fetchedProducts = [
      { productName: 'Laptop', category: 'Elektronik', price: 5000, stock: 10, description: 'Laptop Açıklaması' },
      { productName: 'T-shirt', category: 'Giyim', price: 100, stock: 50, description: 'T-shirt Açıklaması' },
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Ürün Listesi</h1>

      {/* Bağlantı: Ürün Ekleme Sayfasına Git */}
      <Link to="/products/add">
        <button className="mb-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
          Yeni Ürün Ekle
        </button>
      </Link>

      {/* Ürün Listesi */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mevcut Ürünler</h2>
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Ürün Adı</th>
              <th className="py-2 px-4 text-left">Kategori</th>
              <th className="py-2 px-4 text-left">Fiyat (₺)</th>
              <th className="py-2 px-4 text-left">Stok</th>
              <th className="py-2 px-4 text-left">Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Henüz ürün eklenmemiş.
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{product.productName}</td>
                  <td className="py-2 px-4">{product.category}</td>
                  <td className="py-2 px-4">{product.price} ₺</td>
                  <td className="py-2 px-4">{product.stock}</td>
                  <td className="py-2 px-4">{product.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
