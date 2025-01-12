import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileContent = () => {
  const navigate = useNavigate();

  return (
    <section className="col-span-2 space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Profil Tamamlama Adımları</h2>
      <p className="text-gray-600 text-lg">
        Hesabınızın tüm özelliklerini kullanabilmek için aşağıdaki adımları tamamlayın.
      </p>

      {/* Steps */}
      <div className="space-y-6">
        {[
          {
            step: 1,
            title: "İşletme Bilgileri",
            description:
              "İşletmenize ait temel bilgileri girin ve verilerinizi güncelleyin.",
            onClick: () => navigate("/profile-complete/business-info"), // Yönlendirme URL'si
          },
          {
            step: 2,
            title: "İletişim Bilgileri",
            description:
              "E-posta, telefon numarası ve diğer iletişim bilgilerinizi güncelleyin.",
            onClick: () => navigate("/profile-complete/contact-info"), // Yönlendirme URL'si
          },
          {
            step: 3,
            title: "Ödeme Bilgileri",
            description:
              "Hesabınıza ödeme bilgilerini ekleyin ve ödeme işlemlerinizi yönetin.",
            onClick: () => navigate("/profile-complete/payment-info"), // Yönlendirme URL'si
          },
          {
            step: 4,
            title: "Profil Onayı",
            description:
              "Profil bilgilerinizi tamamladıktan sonra onay işlemi yapılacaktır.",
            onClick: () => navigate("/profile-complete/confirmation"), // Yönlendirme URL'si
          },
        ].map(({ step, title, description, onClick }) => (
          <div
            key={step}
            className="flex items-center justify-between p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-lg">
                {step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
            <button
              onClick={onClick}
              className="py-2 px-4 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Başla
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileContent;
