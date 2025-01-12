import React from "react";
import { FaUserCircle, FaRegAddressCard, FaUserTie, FaCreditCard, FaHome, FaSignOutAlt } from "react-icons/fa"; // Çıkış simgesi ekledik
import { useNavigate, useLocation } from "react-router-dom"; // useLocation ekledik

const ProfileSidebar = ({ userName, email }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Aktif rota bilgisi almak için

  // Navigasyon işlevleri
  const goToBusinessInfo = () => navigate("/profile-complete/business-info");
  const goToContactInfo = () => navigate("/profile-complete/contact-info");
  const goToPaymentInfo = () => navigate("/profile-complete/payment-info");
  const goToConfirmation = () => navigate("/profile-complete/confirmation");
  const goToContact = () => navigate("/contact");

  // Anasayfaya yönlendirme işlevi
  const goToHome = () => navigate("/profile-complete");

  // Çıkış yapma işlevi (simüle edilen çıkış)
  const handleLogout = () => {
    // Burada çıkış işlemi yapılabilir (örneğin, token silme veya oturumu sonlandırma)
    // Bu örnekte sadece anasayfaya yönlendirme yapıyoruz
    navigate("/login"); // Oturum kapatıldıktan sonra login sayfasına yönlendirme
  };

  // Aktif menü öğesini belirlemek için aktif URL'yi kontrol etme
  const isActive = (path) => location.pathname === path ? "bg-blue-700 text-white" : "bg-white text-gray-900 hover:bg-blue-100 hover:text-blue-700"; // Aktif öğe için stil

  return (
    <aside className="bg-white shadow-lg p-6 rounded-lg">
      {/* User Info */}
      <div className="flex items-center mb-6">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-4 border-blue-500"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold text-gray-900">{`Merhaba, ${userName}!`}</h3>
          <p className="text-gray-600 text-sm">{email}</p>
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
          className={`w-full py-3 ${isActive("/profile-complete/business-info")} font-medium rounded-lg shadow transition duration-300`}
        >
          <FaUserTie className="mr-2 inline-block" />
          İşletme Bilgileri
        </button>
        <button
          onClick={goToContactInfo}
          className={`w-full py-3 ${isActive("/profile-complete/contact-info")} font-medium rounded-lg shadow transition duration-300`}
        >
          <FaRegAddressCard className="mr-2 inline-block" />
          İletişim Bilgileri
        </button>
        <button
          onClick={goToPaymentInfo}
          className={`w-full py-3 ${isActive("/profile-complete/payment-info")} font-medium rounded-lg shadow transition duration-300`}
        >
          <FaCreditCard className="mr-2 inline-block" />
          Ödeme Bilgileri
        </button>
        <button
          onClick={goToConfirmation}
          className={`w-full py-3 ${isActive("/profile-complete/confirmation")} font-medium rounded-lg shadow transition duration-300`}
        >
          Onay
        </button>
      </nav>

      {/* Anasayfa Yönlendirme */}
      <div className="mt-8 text-center">
        <button
          onClick={goToHome}
          className={`w-full py-3 ${isActive("/profile-complete")} bg-blue-500 text-white font-medium rounded-lg shadow transition duration-300`}
        >
          <FaHome className="mr-2 inline-block" />
          Anasayfaya Git
        </button>
      </div>

      {/* Contact Button */}
      <div className="mt-8 text-center">
        <button
          onClick={goToContact}
          className="text-sm text-blue-500 font-light hover:underline hover:text-blue-700 transition duration-300"
        >
          Bir sorun mu yaşıyorsunuz? <strong>Bize Ulaşın!</strong>
        </button>
      </div>

      {/* Logout Button (Kırmızı) */}
      <div className="mt-8 text-center">
        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-600 text-white font-medium rounded-lg shadow hover:bg-red-700 transition duration-300"
        >
          <FaSignOutAlt className="mr-2 inline-block" />
          Çıkış Yap
        </button>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
