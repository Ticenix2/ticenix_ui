import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false); // Onay işlemi durumu
  const [isApproved, setIsApproved] = useState(false); // Profil onay durumu

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-100 flex items-center justify-center py-10 px-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-10">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Profil Onayı Bekliyor
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8">
          Profiliniz başarıyla tamamlanmıştır. Hesabınızın onaylanmasını
          bekliyorsunuz. Lütfen onay işlemi için biraz zaman tanıyın.
        </p>

        <div className="text-center">
          <div className="mb-6">
            {/* Kum Saati Sembolü */}
            <span className="text-6xl">{/* Kum saati sembolü */}⏳</span>
          </div>

          <p className="text-gray-500 mb-4">
            Profilinizin onaylanması için gerekli adımlar tamamlanmıştır.
            Onay verildiğinde firmanıza özel domaine erişim sağlayabilirsiniz.
          </p>

          <p className="text-sm text-gray-400">
            Onay işlemi tamamlandığında, size e-posta yoluyla bildirimde
            bulunulacaktır. Lütfen e-postanızı kontrol edin.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            disabled
            className="w-full py-3 bg-gray-400 text-white text-lg font-semibold rounded-lg hover:bg-gray-500 cursor-not-allowed focus:outline-none transition duration-300"
          >
            Onay Bekleniyor...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
