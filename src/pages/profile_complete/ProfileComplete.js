import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileComplete = () => {
  const navigate = useNavigate();

  // Navigation functions
  const goToBusinessInfo = () => navigate("/profile-complete/business-info");
  const goToContactInfo = () => navigate("/profile-complete/contact-info");
  const goToPaymentInfo = () => navigate("/profile-complete/payment-info");
  const goToConfirmation = () => navigate("/profile-complete/confirmation");
  const goToContact = () => navigate("/contact");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white p-8 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Profil Tamamlama
          </h1>
          <p className="mt-2 text-lg">
            Hesabınızı aktif hale getirmek için adımları tamamlayın.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Panel */}
          <aside className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                className="w-20 h-20 rounded-full border-4 border-blue-500"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Merhaba, Ahmet!
                </h3>
                <p className="text-gray-600 text-sm">ahmet@gmail.com</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full bg-gray-200 h-2 rounded-full mb-6">
              <div
                className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>

            {/* Menu Buttons */}
            <nav className="space-y-4">
              <button
                onClick={goToBusinessInfo}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                İşletme Bilgileri
              </button>
              <button
                onClick={goToContactInfo}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                İletişim Bilgileri
              </button>
              <button
                onClick={goToPaymentInfo}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Ödeme Bilgileri
              </button>
              <button
                onClick={goToConfirmation}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Profil Onayı
              </button>
            </nav>

            <div className="mt-8 text-center">
              <button
                onClick={goToContact}
                className="text-sm text-blue-500 font-light hover:underline hover:text-blue-700 transition duration-300"
              >
                Bir sorun mu yaşıyorsunuz? <strong>Bize Ulaşın!</strong>
              </button>
            </div>
          </aside>

          {/* Right Panel */}
          <section className="col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Profil Tamamlama Adımları
            </h2>
            <p className="text-gray-600 text-lg">
              Hesabınızın tüm özelliklerini kullanabilmek için aşağıdaki
              adımları tamamlayın.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "İşletme Bilgileri",
                  description:
                    "İşletmenize ait temel bilgileri girin ve verilerinizi güncelleyin.",
                  onClick: goToBusinessInfo,
                },
                {
                  step: 2,
                  title: "İletişim Bilgileri",
                  description:
                    "E-posta, telefon numarası ve diğer iletişim bilgilerinizi güncelleyin.",
                  onClick: goToContactInfo,
                },
                {
                  step: 3,
                  title: "Ödeme Bilgileri",
                  description:
                    "Hesabınıza ödeme bilgilerini ekleyin ve ödeme işlemlerinizi yönetin.",
                  onClick: goToPaymentInfo,
                },
                {
                  step: 4,
                  title: "Profil Onayı",
                  description:
                    "Profil bilgilerinizi tamamladıktan sonra onay işlemi yapılacaktır.",
                  onClick: goToConfirmation,
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
                      <h3 className="text-xl font-semibold text-gray-900">
                        {title}
                      </h3>
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
        </div>
      </main>
    </div>
  );
};

export default ProfileComplete;
