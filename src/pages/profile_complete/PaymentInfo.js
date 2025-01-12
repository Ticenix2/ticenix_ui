import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentInfo = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ödeme bilgileri tamamlandığında onay sayfasına yönlendir
    navigate("/profile-complete/confirmation");
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center">Ödeme Bilgileri</h2>
      <p className="text-center text-gray-600 mt-4">
        Hesabınızı doğrulamak için ödeme bilgilerinizi tamamlayın.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <label htmlFor="paymentMethod" className="block text-sm text-gray-700">Ödeme Yöntemi</label>
          <input
            type="text"
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-4 rounded-md border border-gray-300"
            placeholder="Ödeme Yöntemi"
            required
          />
        </div>
        <div className="space-y-4">
          <label htmlFor="billingAddress" className="block text-sm text-gray-700">Fatura Adresi</label>
          <input
            type="text"
            id="billingAddress"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            className="w-full p-4 rounded-md border border-gray-300"
            placeholder="Fatura Adresi"
            required
          />
        </div>
        <button type="submit" className="btn mt-4">
          İleri
        </button>
      </form>
    </div>
  );
};

export default PaymentInfo;
