import React from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için kullanacağız

const ProfileComplete = () => {
  const navigate = useNavigate();

  const goToBusinessInfo = () => {
    navigate("/profile-complete/business-info");
  };

  const goToContactInfo = () => {
    navigate("/profile-complete/contact-info");
  };

  const goToPaymentInfo = () => {
    navigate("/profile-complete/payment-info");
  };

  const goToConfirmation = () => {
    navigate("/profile-complete/confirmation");
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center">Profil Tamamlama</h2>
      <p className="text-center text-gray-600 mt-4">
        Hesabınızı tam olarak kullanabilmek için profil bilgilerinizi tamamlamanız gerekiyor.
      </p>

      <div className="mt-8 space-y-6">
        <button onClick={goToBusinessInfo} className="btn">
          İşletme Bilgileri
        </button>
        <button onClick={goToContactInfo} className="btn">
          İletişim Bilgileri
        </button>
        <button onClick={goToPaymentInfo} className="btn">
          Ödeme Bilgileri
        </button>
        <button onClick={goToConfirmation} className="btn">
          Profil Onayı
        </button>
      </div>
    </div>
  );
};

export default ProfileComplete;
