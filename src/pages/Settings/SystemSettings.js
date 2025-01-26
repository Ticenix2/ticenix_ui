import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSettings, FiMail, FiDatabase, FiActivity } from "react-icons/fi";

function SystemSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    siteTitle: "E-Ticaret Platformu",
    metaDescription: "Dünyanın en iyi e-ticaret platformu.",
    systemStatus: "Aktif",
    maintenanceMode: false,
    emailAddress: "support@example.com",
    smtpServer: "smtp.example.com",
    smtpPort: 587,
    apiRateLimit: 1000,
    debugMode: false,
    logRetention: 30,
    analyticsEnabled: true,
  });

  // Form değişikliklerini yönet
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Ayarları kaydet
  const handleSaveSettings = () => {
    toast.success("Ayarlar başarıyla kaydedildi!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sistem Ayarları</h1>

      {/* Sekme Başlıkları */}
      <div className="flex space-x-6 border-b-2 pb-4 mb-6">
        {[
          { id: "general", label: "Genel", icon: <FiSettings /> },
          { id: "system", label: "Sistem", icon: <FiDatabase /> },
          { id: "email", label: "E-posta", icon: <FiMail /> },
          { id: "advanced", label: "Gelişmiş", icon: <FiActivity /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {tab.icon}
            <span className="ml-2">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Sekme İçerikleri */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {activeTab === "general" && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Genel Ayarlar</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Site Başlığı</label>
                <input
                  type="text"
                  name="siteTitle"
                  value={settings.siteTitle}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Meta Açıklama</label>
                <textarea
                  name="metaDescription"
                  value={settings.metaDescription}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "system" && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sistem Ayarları</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Sistem Durumu</label>
                <select
                  name="systemStatus"
                  value={settings.systemStatus}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Pasif">Pasif</option>
                </select>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Bakım Modu
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === "email" && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">E-posta Ayarları</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Gönderen E-posta</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={settings.emailAddress}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SMTP Sunucusu</label>
                <input
                  type="text"
                  name="smtpServer"
                  value={settings.smtpServer}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SMTP Port</label>
                <input
                  type="number"
                  name="smtpPort"
                  value={settings.smtpPort}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "advanced" && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Gelişmiş Ayarlar</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">API Sınırlandırma</label>
                <input
                  type="number"
                  name="apiRateLimit"
                  value={settings.apiRateLimit}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="debugMode"
                    checked={settings.debugMode}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Debug Modu
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Kaydet Butonu */}
      <div className="mt-6 text-right">
        <button
          onClick={handleSaveSettings}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 shadow-lg"
        >
          Ayarları Kaydet
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default SystemSettings;
