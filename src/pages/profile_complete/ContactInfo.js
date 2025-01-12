import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Telefon ve Adres ikonları

const ContactInfo = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Validation
    if (!phoneNumber) validationErrors.phoneNumber = "Telefon numarası gereklidir.";
    if (!address) validationErrors.address = "Adres gereklidir.";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form valid ise ödeme bilgileri sayfasına yönlendir
      navigate("/profile-complete/payment-info");
    }
  };

  return (
    <div className="w-full max-w-screen-xl bg-white p-10 space-y-8 flex flex-col justify-center">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
        İletişim Bilgilerinizi Girin
      </h2>
      <p className="text-center text-gray-500 text-lg mb-8">
        Hesabınızı doğrulamak ve müşterilerinizle iletişim kurmak için iletişim bilgilerinizi doldurun.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8 flex-grow">
        {/* Telefon Numarası */}
        <div className="mb-6">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 flex items-center"
          >
            <FaPhoneAlt className="mr-2 text-indigo-600" />
            Telefon Numarası
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={`w-full p-4 rounded-lg border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
            placeholder="Telefon Numarası"
            required
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        {/* Adres */}
        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 flex items-center"
          >
            <FaMapMarkerAlt className="mr-2 text-indigo-600" />
            Adres
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`w-full p-4 rounded-lg border ${errors.address ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
            placeholder="Adres"
            required
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </div>

        {/* İleri Butonu */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none transition duration-300"
          >
            İleri
          </button>
        </div>
      </form>

      <div className="text-center text-sm text-gray-500 mt-6">
        <p>
          Yardıma mı ihtiyacınız var?{" "}
          <a href="/help" className="text-indigo-600 hover:underline">
            Yardım Merkezi
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
