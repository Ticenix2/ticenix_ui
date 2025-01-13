import React, { useState, useEffect } from 'react';
import { fetchProducts, updateProduct, deleteProduct } from '../../services/productService';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editProductName, setEditProductName] = useState('');
  const [editProductPrice, setEditProductPrice] = useState('');
  const [editProductStock, setEditProductStock] = useState('');
  
  // Ürünleri al
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await fetchProducts();
        setProducts(productData);
      } catch (error) {
        console.error('Ürünler alınırken bir hata oluştu', error);
      }
    };
    loadProducts();
  }, []);

  // Ürün güncelle
  const handleEditProduct = async (productId) => {
    if (!editProductName.trim() || !editProductPrice || !editProductStock) return;

    try {
      const updatedProduct = {
        productName: editProductName,
        price: editProductPrice,
        stock: editProductStock,
      };
      await updateProduct(productId, updatedProduct);
      setProducts(products.map(product => 
        product.productId === productId ? { ...product, productName: editProductName, price: editProductPrice, stock: editProductStock } : product
      ));
      setEditProductId(null);
      setEditProductName('');
      setEditProductPrice('');
      setEditProductStock('');
      alert('Ürün başarıyla güncellendi!');
    } catch (error) {
      alert('Ürün güncellenirken bir hata oluştu');
    }
  };

  // Ürün sil
  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter(product => product.productId !== productId));
      alert('Ürün başarıyla silindi!');
    } catch (error) {
      alert('Ürün silinirken bir hata oluştu');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Ürün Listesi</h1>
      
      {/* Ürünler Listesi */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Ürünler</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Ürün Adı</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Fiyat</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Stok</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId} className="border-b">
                {editProductId === product.productId ? (
                  <>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={editProductName}
                        onChange={(e) => setEditProductName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        value={editProductPrice}
                        onChange={(e) => setEditProductPrice(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        value={editProductStock}
                        onChange={(e) => setEditProductStock(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleEditProduct(product.productId)}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                      >
                        Güncelle
                      </button>
                      <button
                        onClick={() => setEditProductId(null)}
                        className="ml-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                      >
                        İptal
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.productName}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.price} ₺</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.stock}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => {
                          setEditProductId(product.productId);
                          setEditProductName(product.productName);
                          setEditProductPrice(product.price);
                          setEditProductStock(product.stock);
                        }}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.productId)}
                        className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Sil
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
