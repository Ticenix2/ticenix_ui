import React from 'react';

const FeaturedProducts = ({ products }) => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Öne Çıkan Ürünler</h2>

        {/* Ürün Kartları Listesi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Ürün Resmi */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-md mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                {/* İndirim varsa göster */}
                {product.discount && (
                  <span className="absolute top-0 left-0 bg-red-600 text-white px-4 py-2 rounded-tr-lg rounded-bl-lg text-sm font-semibold shadow-md">
                    %{product.discount}% İndirim
                  </span>
                )}
              </div>

              {/* Ürün Bilgileri */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{product.category}</p>
              <div className="flex items-center justify-between">
                {/* Fiyat */}
                <span className="text-xl font-bold text-gray-900">
                  {product.discount ? (
                    <>
                      <span className="line-through text-gray-500">{product.originalPrice}₺</span>
                      <span className="ml-2 text-red-600">{product.price}₺</span>
                    </>
                  ) : (
                    `${product.price}₺`
                  )}
                </span>

                {/* Sepete Ekle Butonu */}
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => console.log(`Ürün ${product.name} sepete eklendi`)}
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Örnek ürün verileri
const exampleProducts = [
  {
    id: 1,
    name: 'Akıllı Telefon',
    category: 'Elektronik',
    price: 2999,
    originalPrice: 3599,
    discount: 15,
    image: 'https://via.placeholder.com/400x400',
  },
  {
    id: 2,
    name: 'Moda Sweatshirt',
    category: 'Giyim',
    price: 199,
    originalPrice: 249,
    discount: 10,
    image: 'https://via.placeholder.com/400x400',
  },
  {
    id: 3,
    name: 'Bluetooth Kulaklık',
    category: 'Elektronik',
    price: 799,
    originalPrice: 899,
    discount: 12,
    image: 'https://via.placeholder.com/400x400',
  },
  {
    id: 4,
    name: 'Laptop',
    category: 'Elektronik',
    price: 4599,
    originalPrice: 4999,
    discount: 8,
    image: 'https://via.placeholder.com/400x400',
  },
];

export default function App() {
  return <FeaturedProducts products={exampleProducts} />;
}
