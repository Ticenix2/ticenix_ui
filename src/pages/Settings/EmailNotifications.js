import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch } from "@headlessui/react";
import { AiOutlineSave, AiOutlineMail, AiOutlineReload } from "react-icons/ai";

const EmailNotifications = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [email, setEmail] = useState("admin@example.com");
  const [additionalEmails, setAdditionalEmails] = useState(["info@example.com"]);
  const [smtpSettings, setSmtpSettings] = useState({
    server: "smtp.example.com",
    port: 587,
    username: "",
    password: "",
    secure: false,
  });
  const [notificationTypes, setNotificationTypes] = useState({
    orderConfirmation: true,
    shipmentUpdate: true,
    refundRequest: false,
    lowStockAlert: true,
    newUserRegistration: false,
  });

  const handleAddEmail = () => {
    if (email && !additionalEmails.includes(email)) {
      setAdditionalEmails([...additionalEmails, email]);
      setEmail("");
      toast.success("E-posta başarıyla eklendi!");
    } else {
      toast.error("Geçersiz veya zaten eklenmiş bir e-posta girdiniz.");
    }
  };

  const handleSaveSettings = () => {
    toast.success("Ayarlar başarıyla kaydedildi!");
    console.log("Kaydedilen Ayarlar:", {
      isNotificationsEnabled,
      additionalEmails,
      smtpSettings,
      notificationTypes,
    });
  };

  const handleSendTestEmail = () => {
    toast.info("Test e-postası gönderildi!");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Başlık ve Kaydet Butonu */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">E-posta Bildirimleri</h1>
        <button
          onClick={handleSaveSettings}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center"
        >
          <AiOutlineSave className="mr-2" />
          Kaydet
        </button>
      </div>

      {/* Genel Bildirim Ayarları */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Genel Bildirim Ayarları</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 font-medium">Bildirimleri Aktif Et</span>
          <Switch
            checked={isNotificationsEnabled}
            onChange={setIsNotificationsEnabled}
            className={`${
              isNotificationsEnabled ? "bg-indigo-600" : "bg-gray-300"
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span
              className={`${
                isNotificationsEnabled ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Yeni E-posta Adresi</label>
          <div className="flex space-x-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md p-2"
              placeholder="Yeni E-posta"
            />
            <button
              onClick={handleAddEmail}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Ekle
            </button>
          </div>
        </div>
        <ul className="mt-4">
          {additionalEmails.map((email, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b py-2"
            >
              <span className="text-gray-700">{email}</span>
              <button
                onClick={() =>
                  setAdditionalEmails(additionalEmails.filter((e) => e !== email))
                }
                className="text-red-600 hover:underline"
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bildirim Türleri */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Bildirim Türleri</h2>
        <div className="space-y-4">
          {[
            { label: "Sipariş Onayı", key: "orderConfirmation" },
            { label: "Sevkiyat Bildirimi", key: "shipmentUpdate" },
            { label: "İade Talebi", key: "refundRequest" },
            { label: "Stok Seviyesi Azaldı", key: "lowStockAlert" },
            { label: "Yeni Kullanıcı Kaydı", key: "newUserRegistration" },
          ].map((type) => (
            <div className="flex items-center justify-between" key={type.key}>
              <span className="text-gray-700 font-medium">{type.label}</span>
              <Switch
                checked={notificationTypes[type.key]}
                onChange={(value) =>
                  setNotificationTypes((prev) => ({
                    ...prev,
                    [type.key]: value,
                  }))
                }
                className={`${
                  notificationTypes[type.key] ? "bg-indigo-600" : "bg-gray-300"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span
                  className={`${
                    notificationTypes[type.key] ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          ))}
        </div>
      </div>

      {/* SMTP Ayarları */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">SMTP Ayarları</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-2">SMTP Sunucusu</label>
            <input
              type="text"
              name="server"
              value={smtpSettings.server}
              onChange={(e) =>
                setSmtpSettings((prev) => ({ ...prev, server: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">SMTP Portu</label>
            <input
              type="number"
              name="port"
              value={smtpSettings.port}
              onChange={(e) =>
                setSmtpSettings((prev) => ({ ...prev, port: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Kullanıcı Adı</label>
            <input
              type="text"
              name="username"
              value={smtpSettings.username}
              onChange={(e) =>
                setSmtpSettings((prev) => ({ ...prev, username: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Şifre</label>
            <input
              type="password"
              name="password"
              value={smtpSettings.password}
              onChange={(e) =>
                setSmtpSettings((prev) => ({ ...prev, password: e.target.value }))
              }
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-2 flex items-center">
            <label className="mr-4 text-gray-700 font-medium">SSL/TLS</label>
            <Switch
              checked={smtpSettings.secure}
              onChange={(value) =>
                setSmtpSettings((prev) => ({ ...prev, secure: value }))
              }
              className={`${
                smtpSettings.secure ? "bg-indigo-600" : "bg-gray-300"
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span
                className={`${
                  smtpSettings.secure ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSendTestEmail}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
          >
            <AiOutlineMail className="mr-2" />
            Test E-postası Gönder
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default EmailNotifications;
