import React from 'react';

// Ürün Verisi
const products = [
  { id: 1, name: 'Ürün 1', price: '₺100.00', imageUrl: 'https://via.placeholder.com/300x300?text=Ürün+1' },
  { id: 2, name: 'Ürün 2', price: '₺150.00', imageUrl: 'https://via.placeholder.com/300x300?text=Ürün+2' },
  { id: 3, name: 'Ürün 3', price: '₺200.00', imageUrl: 'https://via.placeholder.com/300x300?text=Ürün+3' },
  { id: 4, name: 'Ürün 4', price: '₺250.00', imageUrl: 'https://via.placeholder.com/300x300?text=Ürün+4' },
  { id: 5, name: 'Ürün 5', price: '₺300.00', imageUrl: 'https://via.placeholder.com/300x300?text=Ürün+5' },
];

function ProductImages() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Başlık ve Açıklama */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800">Ürün Görselleri</h2>
          <p className="mt-4 text-lg text-gray-600">
            Aşağıda tüm ürünlerimizin görsellerini ve detaylarını bulabilirsiniz. Dilediğiniz ürüne tıklayarak daha fazla bilgi alabilirsiniz.
          </p>
        </div>

        {/* Ürün Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-all transform hover:scale-105">
              {/* Ürün Görseli */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Ürün Detayları */}
              <div className="p-6 bg-gradient-to-t from-gray-900 to-transparent absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                <p className="text-lg text-teal-400 mt-2">{product.price}</p>
                <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg shadow-md transform transition-all hover:bg-teal-700 hover:scale-105">
                  Detaylar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductImages;
