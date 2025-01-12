import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const [isApproved, setIsApproved] = useState(false); // Onay durumu
  const [isProcessing, setIsProcessing] = useState(false); // Onay işlemi

  const handleApprove = () => {
    setIsProcessing(true);
    
    // Simülasyon olarak onay verildiğinde 2 saniye bekleyip yönlendirme yapıyoruz
    setTimeout(() => {
      setIsApproved(true);
      // Profil onayı tamamlandığında, müşteriye özel domaine yönlendirme
      navigate("/panel/dashboard"); // Dashboard'a yönlendir
    }, 2000);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center">Profil Onayı</h2>
      <p className="text-center text-gray-600 mt-4">
        Profiliniz başarıyla tamamlandı. Hesabınızın onaylanmasını bekliyorsunuz.
      </p>

      <div className="mt-8">
        {/* Eğer onay bekliyorsa onay butonu göster */}
        {!isApproved && !isProcessing ? (
          <>
            <p className="text-center text-gray-500 mt-4">
              Onay işlemi için lütfen bekleyin.
            </p>
            <button
              onClick={handleApprove}
              className="btn mt-4"
            >
              Onayı Ver
            </button>
          </>
        ) : isProcessing ? (
          <p className="text-center text-gray-500 mt-4">Onay işlemi yapılıyor...</p>
        ) : (
          <p className="text-center text-green-500 mt-4">Profiliniz başarıyla onaylandı!</p>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
