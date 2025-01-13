import React, { useState, useEffect } from 'react';
import { fetchProducts, updateProductStock } from '../../services/productService'; // Stok güncelleme fonksiyonu
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toast bildirimlerini kullanabilmek için gerekli

function ProductStock() {
  const [products, setProducts] = useState([]);
  const [newStock, setNewStock] = useState('');
  const [loading, setLoading] = useState(false);

  // Ürünleri yükleme
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const productData = await fetchProducts();
        setProducts(productData);
      } catch (error) {
        console.error('Ürünler alınırken hata oluştu:', error);
        toast.error('Ürünler alınırken hata oluştu!');
      }
      setLoading(false);
    };

    loadProducts();
  }, []);

  // Stok güncelleme
  const handleStockUpdate = async (productId) => {
    if (!newStock || newStock <= 0) {
      toast.error('Geçersiz stok değeri');
      return;
    }

    try {
      setLoading(true);
      const updatedStock = { stock: newStock };

      await updateProductStock(productId, updatedStock); // Backend'e stok güncellemesi gönderiliyor
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.productId === productId ? { ...product, stock: newStock } : product
        )
      );
      setNewStock('');
      toast.success('Stok başarıyla güncellendi!');
    } catch (error) {
      toast.error('Stok güncellenirken bir hata oluştu!');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Stok Yönetimi</h1>
      
      {/* Stok Yükleme ve Güncelleme */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Ürün Stokları</h2>
        
        {/* Stok Güncelleme Formu */}
        <div className="flex justify-between mb-4">
          <input
            type="number"
            value={newStock}
            onChange={(e) => setNewStock(e.target.value)}
            placeholder="Yeni Stok Miktarı"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={() => handleStockUpdate()}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Stok Güncelle
          </button>
        </div>

        {/* Ürün Listesi */}
        {loading ? (
          <div className="text-center text-xl text-gray-600">Yükleniyor...</div>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Ürün Adı</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Stok</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId} className="border-b">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.productName}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.stock}</td>
                  <td className="px-6 py-4 text-center">
                    {/* Stok Güncelleme */}
                    <input
                      type="number"
                      placeholder="Yeni Stok"
                      value={newStock}
                      onChange={(e) => setNewStock(e.target.value)}
                      className="p-2 border border-gray-300 rounded-md mr-2"
                    />
                    <button
                      onClick={() => handleStockUpdate(product.productId)}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                      Stok Güncelle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Toast Container for Notifications */}
      <ToastContainer />
    </div>
  );
}

export default ProductStock;
