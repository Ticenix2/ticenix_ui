import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactInfo = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // İletişim bilgileri tamamlandığında ödeme bilgileri sayfasına geçmek için yönlendirme
    navigate("/profile-complete/payment-info");
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center">İletişim Bilgileri</h2>
      <p className="text-center text-gray-600 mt-4">
        Hesabınızı doğrulamak ve müşterilerinizle iletişim kurmak için iletişim bilgilerinizi doldurun.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <label htmlFor="phoneNumber" className="block text-sm text-gray-700">Telefon Numarası</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-4 rounded-md border border-gray-300"
            placeholder="Telefon Numarası"
            required
          />
        </div>
        <div className="space-y-4">
          <label htmlFor="address" className="block text-sm text-gray-700">Adres</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-4 rounded-md border border-gray-300"
            placeholder="Adres"
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

export default ContactInfo;
