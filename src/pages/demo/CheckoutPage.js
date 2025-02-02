import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "iPhone 13 Pro",
      price: 999,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: 799,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const [address, setAddress] = useState({
    name: "",
    surname: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [payment, setPayment] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [coupon, setCoupon] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [discount, setDiscount] = useState(0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = totalPrice * 0.18; // Vergi %18
  const shipping = totalPrice > 1000 ? 0 : 50; // 1000 TL üzeri alışverişlerde ücretsiz kargo

  const finalPrice = totalPrice + tax + shipping - discount;

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(100); // %10 indirim kuponu
    } else {
      alert("Geçersiz kupon kodu");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.values(address).some((field) => field === "") ||
      Object.values(payment).some((field) => field === "")
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      alert("Ödeme işlemi başarıyla gerçekleştirildi.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Ödeme Sayfası
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Teslimat ve Ödeme Bilgileri */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-xl rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Teslimat Bilgileri
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ad"
                  value={address.name}
                  onChange={handleAddressChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Soyad"
                  value={address.surname}
                  onChange={handleAddressChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Adres"
                  value={address.address}
                  onChange={handleAddressChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Şehir"
                  value={address.city}
                  onChange={handleAddressChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Posta Kodu"
                  value={address.postalCode}
                  onChange={handleAddressChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Ülke"
                  value={address.country}
                  onChange={handleAddressChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ödeme Bilgileri
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="cardHolder"
                  placeholder="Kart Sahibi Adı"
                  value={payment.cardHolder}
                  onChange={handlePaymentChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Kart Numarası"
                  value={payment.cardNumber}
                  onChange={handlePaymentChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="Son Kullanma Tarihi (MM/YY)"
                  value={payment.expiryDate}
                  onChange={handlePaymentChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={payment.cvv}
                  onChange={handlePaymentChange}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
          </div>

          {/* Kupon Kodunu Uygulama */}
          <div className="bg-white shadow-xl rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Kupon Kodu
            </h2>
            <input
              type="text"
              value={coupon}
              onChange={handleCouponChange}
              placeholder="Kupon Kodunuzu Girin"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 w-full"
            />
            <button
              onClick={applyCoupon}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Kuponu Uygula
            </button>
          </div>
        </div>

        {/* Sipariş Özeti */}
        <div className="bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Sipariş Özeti
          </h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="text-gray-800 font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Ara Toplam</p>
              <p className="text-gray-800 font-semibold">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Vergi</p>
              <p className="text-gray-800 font-semibold">${tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Kargo</p>
              <p className="text-gray-800 font-semibold">
                ${shipping.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">İndirim</p>
              <p className="text-gray-800 font-semibold">
                -${discount.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <p className="text-gray-600">Toplam</p>
              <p className="text-gray-800">{finalPrice.toFixed(2)} TL</p>
            </div>
          </div>
          <Link to="/demo/order-confirm">
            <button
              onClick={handleSubmit}
              className={`w-full ${
                !isFormValid ? "bg-red-600" : "bg-blue-600"
              } text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-700 transition duration-300`}
            >
              Siparişi Onayla
            </button>
          </Link>
          {!isFormValid && (
            <p className="text-red-500 text-center mt-4">
              Lütfen tüm alanları doldurun.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
