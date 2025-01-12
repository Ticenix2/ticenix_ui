import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegAddressCard,
  FaIndustry,
  FaGlobe,
  FaUserTie,
} from "react-icons/fa"; // İkonlar

const BusinessInfo = () => {
  const navigate = useNavigate();
  const [businessName, setBusinessName] = useState("");
  const [businessField, setBusinessField] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [domainOption, setDomainOption] = useState(""); // Domain Seçeneği
  const [customDomain, setCustomDomain] = useState(""); // Kendi Domaini
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Validation
    if (!businessName)
      validationErrors.businessName = "İşletme adı gereklidir.";
    if (!businessField)
      validationErrors.businessField = "Ticaret alanı gereklidir.";
    if (!taxNumber) validationErrors.taxNumber = "Vergi numarası gereklidir.";
    if (domainOption === "own" && !customDomain)
      validationErrors.customDomain = "Lütfen domaininizi girin.";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form valid ise iletişim bilgileri sayfasına yönlendir
      navigate("/profile-complete/contact-info");
    }
  };

  return (
    <div className="w-full max-w-screen-xl bg-white p-8 sm:p-10 space-y-8 flex flex-col justify-center mx-auto">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
        İşletme Bilgilerinizi Girin
      </h2>
      <p className="text-center text-gray-500 text-lg mb-8">
        İşletmenizle ilgili bilgilerinizi girin ve hesabınızı doğrulayın.
        Profilinizin tamamlanabilmesi için aşağıdaki adımları takip edin.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* İşletme Adı */}
        <div className="mb-6">
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-gray-700 flex items-center"
          >
            <FaIndustry className="mr-2 text-indigo-600" />
            İşletme Adı
          </label>
          <input
            type="text"
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className={`w-full p-4 rounded-lg border ${
              errors.businessName ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
            placeholder="İşletme Adı"
            required
          />
          {errors.businessName && (
            <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>
          )}
        </div>

        {/* Ticaret Alanı */}
        <div className="mb-6">
          <label
            htmlFor="businessField"
            className="block text-sm font-medium text-gray-700 flex items-center"
          >
            <FaUserTie className="mr-2 text-indigo-600" />
            Ticaret Alanı
          </label>
          <input
            type="text"
            id="businessField"
            value={businessField}
            onChange={(e) => setBusinessField(e.target.value)}
            className={`w-full p-4 rounded-lg border ${
              errors.businessField ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
            placeholder="Ticaret Alanı"
            required
          />
          {errors.businessField && (
            <p className="text-red-500 text-xs mt-1">{errors.businessField}</p>
          )}
        </div>

        {/* Vergi Numarası */}
        <div className="mb-6">
          <label
            htmlFor="taxNumber"
            className="block text-sm font-medium text-gray-700 flex items-center"
          >
            <FaRegAddressCard className="mr-2 text-indigo-600" />
            Vergi Numarası
          </label>
          <input
            type="text"
            id="taxNumber"
            value={taxNumber}
            onChange={(e) => setTaxNumber(e.target.value)}
            className={`w-full p-4 rounded-lg border ${
              errors.taxNumber ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
            placeholder="Vergi Numarası"
            required
          />
          {errors.taxNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.taxNumber}</p>
          )}
        </div>

        {/* Domain Seçeneği */}
        <div className="mb-6">
          <label
            htmlFor="domainOption"
            className="block text-sm font-medium text-gray-700 flex items-center"
          >
            <FaGlobe className="mr-2 text-indigo-600" />
            Domain Bilgisi
          </label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="ownDomain"
                name="domainOption"
                value="own"
                checked={domainOption === "own"}
                onChange={() => setDomainOption("own")}
                className="text-indigo-600"
              />
              <label htmlFor="ownDomain" className="ml-2 text-sm">
                Kendi domainimi kullanacağım
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="temporaryDomain"
                name="domainOption"
                value="temporary"
                checked={domainOption === "temporary"}
                onChange={() => setDomainOption("temporary")}
                className="text-indigo-600"
              />
              <label htmlFor="temporaryDomain" className="ml-2 text-sm">
                Geçici domain kullanacağım
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="unknownDomain"
                name="domainOption"
                value="unknown"
                checked={domainOption === "unknown"}
                onChange={() => setDomainOption("unknown")}
                className="text-indigo-600"
              />
              <label htmlFor="unknownDomain" className="ml-2 text-sm">
                Bilmiyorum
              </label>
            </div>
          </div>
          {domainOption === "own" && (
            <div className="mt-4">
              <label
                htmlFor="customDomain"
                className="block text-sm font-medium text-gray-700"
              >
                Kendi Domaininizi Girin
              </label>
              <input
                type="text"
                id="customDomain"
                value={customDomain}
                onChange={(e) => setCustomDomain(e.target.value)}
                className={`w-full p-4 rounded-lg border ${
                  errors.customDomain ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
                placeholder="Kendi domaininizi buraya girin"
              />
              {errors.customDomain && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.customDomain}
                </p>
              )}
            </div>
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
          Domain yönlendirmesi veya diğer teknik işlemler hakkında yardıma mı
          ihtiyacınız var?{" "}
          <a href="/help" className="text-indigo-600 hover:underline">
            Yardım Merkezi
          </a>
        </p>
      </div>
    </div>
  );
};

export default BusinessInfo;
