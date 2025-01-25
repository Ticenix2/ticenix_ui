import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SystemSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    siteTitle: "E-Ticaret Platformu",
    metaDescription: "En iyi e-ticaret platformu.",
    systemStatus: "Aktif",
    maintenanceMode: false,
    emailAddress: "support@example.com",
    smtpServer: "smtp.example.com",
    smtpPort: 587,
    apiRateLimit: 1000,
    debugMode: false,
  });

  // Değişiklikleri yönetme
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Ayarları kaydetme
  const handleSaveSettings = () => {
    toast.success("Ayarlar başarıyla kaydedildi!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Sistem Ayarları</h1>

      {/* Sekmeler */}
      <div className="flex border-b mb-6">
        {["Genel", "Sistem", "E-posta", "Gelişmiş"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.toLowerCase()
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* İçerik */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        {activeTab === "general" && (
          <>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Genel Ayarlar</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Site Başlığı</label>
                <input
                  type="text"
                  name="siteTitle"
                  value={settings.siteTitle}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Meta Açıklama</label>
                <textarea
                  name="metaDescription"
                  value={settings.metaDescription}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          </>
        )}

        {activeTab === "system" && (
          <>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Sistem Ayarları</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Sistem Durumu</label>
                <select
                  name="systemStatus"
                  value={settings.systemStatus}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full"
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
          </>
        )}

        {activeTab === "e-posta" && (
          <>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">E-posta Ayarları</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Gönderen E-posta Adresi</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={settings.emailAddress}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SMTP Sunucusu</label>
                <input
                  type="text"
                  name="smtpServer"
                  value={settings.smtpServer}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">SMTP Port</label>
                <input
                  type="number"
                  name="smtpPort"
                  value={settings.smtpPort}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          </>
        )}

        {activeTab === "gelişmiş" && (
          <>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Gelişmiş Ayarlar</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">API Sınırlandırması (Rate Limit)</label>
                <input
                  type="number"
                  name="apiRateLimit"
                  value={settings.apiRateLimit}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md w-full"
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
          </>
        )}
      </div>

      {/* Kaydet Butonu */}
      <div className="text-right mt-4">
        <button
          onClick={handleSaveSettings}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Ayarları Kaydet
        </button>
      </div>

      {/* Toast Bildirimleri */}
      <ToastContainer />
    </div>
  );
}

export default SystemSettings;
