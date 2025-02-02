import React from "react";

const OrderConfirmationPage = () => {
  // Manuel olarak tanımlanan sipariş detayları
  const orderDetails = {
    orderNumber: "123456789",
    orderDate: "2025-02-02",
    shippingAddress: "Örnek Mahallesi, Örnek Sokak No:1, Gebze, Kocaeli, Türkiye",
    paymentMethod: "Kredi Kartı",
    items: [
      {
        id: 1,
        name: "Ürün 1",
        price: "100,00",
        quantity: 2,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Ürün 2",
        price: "50,00",
        quantity: 1,
        image: "https://via.placeholder.com/150",
      },
    ],
    totalAmount: "250,00",
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sipariş Onayı</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sipariş Özeti</h2>

        <div className="space-y-4">
          <div>
            <span className="text-sm font-medium text-gray-600">Sipariş Numarası:</span>
            <span className="text-lg font-semibold text-gray-800">{orderDetails.orderNumber}</span>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-600">Sipariş Tarihi:</span>
            <span className="text-lg font-semibold text-gray-800">{orderDetails.orderDate}</span>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-600">Teslimat Adresi:</span>
            <span className="text-lg font-semibold text-gray-800">{orderDetails.shippingAddress}</span>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-600">Ödeme Yöntemi:</span>
            <span className="text-lg font-semibold text-gray-800">{orderDetails.paymentMethod}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Sipariş Detayları</h3>

        <div className="space-y-4">
          {orderDetails.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">{item.name}</h4>
                  <p className="text-sm text-gray-500">₺{item.price}</p>
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-800">x{item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-semibold text-gray-700">Toplam Tutar</span>
          <span className="text-2xl font-bold text-gray-900">₺{orderDetails.totalAmount}</span>
        </div>

        <div className="mt-6">
          <button
            onClick={() => alert("Sipariş detaylarına yönlendiriliyorsunuz...")}
            className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sipariş Detayları
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
