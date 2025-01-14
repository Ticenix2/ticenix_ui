import React from 'react';

function NewOrders() {
  // Yeni Siparişler Verisi
  const newOrders = [
    { id: 1, date: '01/14/2025', customer: 'Ali Yılmaz', total: '₺200.00', status: 'Bekliyor' },
    { id: 2, date: '01/13/2025', customer: 'Zeynep Demir', total: '₺350.00', status: 'Bekliyor' },
    { id: 3, date: '01/12/2025', customer: 'Murat Korkmaz', total: '₺180.00', status: 'Bekliyor' },
    { id: 4, date: '01/11/2025', customer: 'Mehmet Çelik', total: '₺500.00', status: 'Bekliyor' },
  ];

  // Sipariş durumlarına göre renklerin belirlenmesi
  const statusColors = {
    Bekliyor: 'bg-yellow-100 text-yellow-800',
    Tamamlandı: 'bg-green-100 text-green-800',
    İptal: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Yeni Siparişler</h2>
      <p className="text-sm text-gray-600">Bu sayfada yeni gelen siparişlerin tüm bilgilerine erişebilirsiniz.</p>

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
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Aksiyon</th>
            </tr>
          </thead>
          <tbody>
            {newOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4 text-sm text-gray-700">{order.id}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{order.date}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{order.customer}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{order.total}</td>
                <td className={`py-3 px-4 text-sm font-medium ${statusColors[order.status]}`}>{order.status}</td>
                <td className="py-3 px-4 text-sm text-center">
                  <button
                    className="bg-teal-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-teal-700 focus:outline-none"
                  >
                    İşlem Yap
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sayfa Bilgisi */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Toplam {newOrders.length} sipariş görüntüleniyor</span>
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

export default NewOrders;
