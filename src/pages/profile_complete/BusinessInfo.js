import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için kullanıyoruz

const BusinessInfo = () => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // İşletme bilgileri tamamlandığında bir sonraki adıma geçmek için yönlendirme
    navigate("/profile-complete/contact-info");
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center">İşletme Bilgileri</h2>
      <p className="text-center text-gray-600 mt-4">
        İşletmenizi tanıtın, bu bilgiler gelecekteki işlemlerinizde kullanılacaktır.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <label htmlFor="businessName" className="block text-sm text-gray-700">İşletme Adı</label>
          <input
            type="text"
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full p-4 rounded-md border border-gray-300"
            placeholder="İşletme Adı"
            required
          />
        </div>
        <div className="space-y-4">
          <label htmlFor="businessType" className="block text-sm text-gray-700">İşletme Türü</label>
          <input
            type="text"
            id="businessType"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full p-4 rounded-md border border-gray-300"
            placeholder="İşletme Türü"
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

export default BusinessInfo;
