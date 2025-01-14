import React from 'react';

function OrderHistory() {
  // Geçmiş Siparişler Verisi
  const orderHistory = [
    { id: 1, date: '12/25/2024', customer: 'Ali Yılmaz', total: '₺200.00', status: 'Tamamlandı' },
    { id: 2, date: '12/15/2024', customer: 'Zeynep Demir', total: '₺350.00', status: 'İptal Edildi' },
    { id: 3, date: '12/05/2024', customer: 'Murat Korkmaz', total: '₺180.00', status: 'İade Edildi' },
    { id: 4, date: '11/20/2024', customer: 'Mehmet Çelik', total: '₺500.00', status: 'Kısmi Tamamlandı' },
  ];

  // Durum renkleri
  const statusColors = {
    Tamamlandı: 'bg-green-100 text-green-800',
    'İptal Edildi': 'bg-red-100 text-red-800',
    'İade Edildi': 'bg-yellow-100 text-yellow-800',
    'Kısmi Tamamlandı': 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Geçmiş Siparişler</h2>
      <p className="text-sm text-gray-600">Geçmişteki tüm siparişlerin durumunu burada görüntüleyebilirsiniz.</p>

      {/* Sipariş Tablosu */}
      <div className="overflow-x-auto bg-gray-50 p-6 rounded-lg shadow-sm">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Sipariş ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Tarih</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Müşteri</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Toplam</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Durum</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4 text-sm text-gray-700">{order.id}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{order.date}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{order.customer}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{order.total}</td>
                <td className={`py-3 px-4 text-sm font-medium ${statusColors[order.status]}`}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sayfa Bilgisi */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Toplam {orderHistory.length} sipariş görüntüleniyor</span>
        <div className="flex space-x-2">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-sm py-2 px-4 rounded-lg"
          >
            Önceki
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-sm py-2 px-4 rounded-lg"
          >
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
