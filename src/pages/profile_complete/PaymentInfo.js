import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCreditCard,
  FaLock,
  FaShippingFast,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const PaymentInfo = () => {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState(""); // Kart Numarası
  const [expiryDate, setExpiryDate] = useState(""); // Son Kullanma Tarihi
  const [cvv, setCvv] = useState(""); // CVV
  const [billingAddress, setBillingAddress] = useState(""); // Fatura Adresi
  const [errors, setErrors] = useState({}); // Hata mesajları

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Validation
    if (!cardNumber) validationErrors.cardNumber = "Kart numarası gereklidir.";
    if (!expiryDate)
      validationErrors.expiryDate = "Son kullanma tarihi gereklidir.";
    if (!cvv) validationErrors.cvv = "CVV kodu gereklidir.";
    if (!billingAddress)
      validationErrors.billingAddress = "Fatura adresi gereklidir.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form valid ise yönlendir
      navigate("/profile-complete/confirmation");
    }
  };

  return (
    <div className="w-full max-w-screen-xl bg-white p-10 space-y-8 flex flex-col justify-center">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
        <FaCreditCard className="inline mr-2 text-indigo-600" /> Ödeme
        Bilgilerinizi Girin
      </h2>
      <p className="text-center text-gray-600 text-lg mb-8">
        Güvenli ödeme işlemi için gerekli bilgilerinizi aşağıda doldurun.{" "}
        <strong>Bilgileriniz güvende!</strong>
      </p>

      <form onSubmit={handleSubmit} className="space-y-8 flex-grow">
        {/* Kart Numarası */}
        <div className="mb-6">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700 flex items-center"
          >
            <FaCreditCard className="mr-2 text-indigo-600" />
            Kredi Kartı Numarası
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className={`w-full p-4 rounded-lg border ${
              errors.cardNumber ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
            placeholder="Kart numaranızı girin"
            required
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
          )}
        </div>

        {/* Son Kullanma Tarihi ve CVV */}
        <div className="flex gap-6 mb-6">
          <div className="w-1/2">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700 flex items-center"
            >
              <FaShippingFast className="mr-2 text-indigo-600" /> Son Kullanma
              Tarihi
            </label>
            <input
              type="month"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className={`w-full p-4 rounded-lg border ${
                errors.expiryDate ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
              required
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
            )}
          </div>

          <div className="w-1/2">
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-700 flex items-center"
            >
              <FaLock className="mr-2 text-indigo-600" /> CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className={`w-full p-4 rounded-lg border ${
                errors.cvv ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
              placeholder="CVV kodunu girin"
              required
            />
            {errors.cvv && (
              <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
            )}
          </div>
        </div>

        {/* Fatura Adresi */}
        <div className="mb-6">
          <label
            htmlFor="billingAddress"
            className="block text-sm font-medium text-gray-700 flex items-center"
          >
            <FaShippingFast className="mr-2 text-indigo-600" /> Fatura Adresi
          </label>
          <input
            type="text"
            id="billingAddress"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            className={`w-full p-4 rounded-lg border ${
              errors.billingAddress ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
            placeholder="Fatura adresinizi girin"
            required
          />
          {errors.billingAddress && (
            <p className="text-red-500 text-xs mt-1">{errors.billingAddress}</p>
          )}
        </div>

        {/* Ödeme Butonu */}
        <div className="flex justify-center mb-6">
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition duration-300"
          >
            <FaCreditCard className="inline mr-2" /> Ödemeyi Tamamla
          </button>
        </div>
      </form>

      {/* Ödeme Güvenlik Vurgusu */}
      <div className="text-center text-sm text-gray-500 mt-6">
        <p>
          Ödeme işleminiz tamamen güvenli ve şifreli bir şekilde işlenecektir.{" "}
          <strong>Veri gizliliğiniz bizim için çok önemlidir!</strong>
        </p>
        <div className="flex justify-center gap-12 mt-6">
          {/* SSL Güvenliği Ikonu */}
          <div className="flex items-center space-x-2">
            <FaLock className="text-indigo-600 text-3xl" />
          </div>

          {/* Visa Ikonu */}
          <div className="flex items-center space-x-2">
            <FaCcVisa className="text-blue-600 text-3xl" />
          </div>

          {/* Mastercard Ikonu */}
          <div className="flex items-center space-x-2">
            <FaCcMastercard className="text-red-600 text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
