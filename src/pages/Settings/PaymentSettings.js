import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PaymentSettings() {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: "Kredi Kartı", details: "**** **** **** 1234" },
    { id: 2, type: "Banka Transferi", details: "Ziraat Bankası - TR12 1234 5678 9101" },
  ]);

  const [newMethod, setNewMethod] = useState({ type: "", details: "" });

  // Yeni ödeme yöntemi ekleme
  const addPaymentMethod = () => {
    if (!newMethod.type || !newMethod.details) {
      toast.error("Lütfen tüm alanları doldurun!");
      return;
    }

    const newPayment = {
      id: paymentMethods.length + 1,
      ...newMethod,
    };

    setPaymentMethods([...paymentMethods, newPayment]);
    setNewMethod({ type: "", details: "" });
    toast.success("Ödeme yöntemi başarıyla eklendi!");
  };

  // Ödeme yöntemini silme
  const removePaymentMethod = (id) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
    toast.success("Ödeme yöntemi başarıyla silindi!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Ödeme Ayarları</h1>

      {/* Mevcut Ödeme Yöntemleri */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Mevcut Ödeme Yöntemleri</h2>
        {paymentMethods.length === 0 ? (
          <p className="text-gray-600">Henüz ödeme yöntemi eklenmedi.</p>
        ) : (
          <ul className="space-y-4">
            {paymentMethods.map((method) => (
              <li
                key={method.id}
                className="flex items-center justify-between p-4 border rounded-lg bg-gray-50"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{method.type}</h3>
                  <p className="text-sm text-gray-600">{method.details}</p>
                </div>
                <button
                  onClick={() => removePaymentMethod(method.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Yeni Ödeme Yöntemi Ekle */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Yeni Ödeme Yöntemi Ekle</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Ödeme Türü
            </label>
            <input
              id="type"
              type="text"
              value={newMethod.type}
              onChange={(e) => setNewMethod({ ...newMethod, type: e.target.value })}
              placeholder="Örn: Kredi Kartı"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
              Detaylar
            </label>
            <input
              id="details"
              type="text"
              value={newMethod.details}
              onChange={(e) => setNewMethod({ ...newMethod, details: e.target.value })}
              placeholder="Örn: **** **** **** 1234"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={addPaymentMethod}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Ödeme Yöntemi Ekle
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default PaymentSettings;
