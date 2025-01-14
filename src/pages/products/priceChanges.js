import React from 'react';

// Örnek Fiyat Değişiklikleri Verisi
const priceChanges = [
  {
    id: 1,
    name: 'Akıllı Telefon',
    currentPrice: '₺2,499.99',
    priceHistory: [
      { date: '01/01/2025', price: '₺2,799.99' },
      { date: '12/15/2024', price: '₺2,699.99' },
      { date: '11/01/2024', price: '₺2,999.99' },
      { date: '10/01/2024', price: '₺3,199.99' },
    ],
  },
  {
    id: 2,
    name: 'Kablosuz Kulaklık',
    currentPrice: '₺999.99',
    priceHistory: [
      { date: '01/01/2025', price: '₺1,199.99' },
      { date: '12/15/2024', price: '₺1,099.99' },
      { date: '11/01/2024', price: '₺1,299.99' },
    ],
  },
  {
    id: 3,
    name: 'Bluetooth Hoparlör',
    currentPrice: '₺1,299.99',
    priceHistory: [
      { date: '01/01/2025', price: '₺1,499.99' },
      { date: '12/15/2024', price: '₺1,399.99' },
      { date: '11/01/2024', price: '₺1,599.99' },
    ],
  },
];

function PriceChanges() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">Ürün Fiyat Değişiklikleri</h2>
          <p className="mt-4 text-lg text-gray-600">
            Son fiyat değişikliklerini ve geçmiş fiyatları takip edin.
          </p>
        </div>

        {/* Fiyat Değişikliği Tablosu */}
        <div className="space-y-12">
          {priceChanges.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                {/* Ürün Başlık ve Fiyat */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="mt-2 text-xl text-teal-600">{product.currentPrice}</p>
                </div>
                {/* Grafik Alanı (Bu kısımda grafik veya diagram eklenebilir) */}
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg text-gray-600">Grafik</span>
                </div>
              </div>

              {/* Fiyat Geçmişi Tablosu */}
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Tarih</th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Fiyat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.priceHistory.map((history, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4 text-sm text-gray-700">{history.date}</td>
                        <td className="py-3 px-4 text-sm text-gray-700">{history.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceChanges;
