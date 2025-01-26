import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineSave, AiOutlineInfoCircle, AiFillFileText } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

const SEOSettings = () => {
  const [settings, setSettings] = useState({
    siteTitle: "E-Ticaret Platformu - En İyi Alışveriş",
    metaDescription: "Dünyanın en iyi e-ticaret platformunda alışveriş yapın.",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    twitterCard: "",
    robotsContent: "User-agent: *\nDisallow: /admin",
    sitemapURL: "https://example.com/sitemap.xml",
    schemaMarkup: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveSettings = () => {
    console.log("Kaydedilen SEO Ayarları:", settings);
    toast.success("SEO Ayarları başarıyla kaydedildi!");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Başlık ve Açıklama */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">SEO Ayarları</h1>
        <button
          onClick={handleSaveSettings}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center"
        >
          <AiOutlineSave className="mr-2" />
          Kaydet
        </button>
      </div>

      {/* Tab Navigasyonu */}
      <Tab.Group>
        <Tab.List className="flex space-x-4 mb-8">
          {["Genel Ayarlar", "Sosyal Medya", "Yapılandırılmış Veri", "Robots.txt", "Sitemap"].map(
            (tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `px-4 py-2 rounded-lg font-medium ${
                    selected ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"
                  }`
                }
              >
                {tab}
              </Tab>
            )
          )}
        </Tab.List>

        <Tab.Panels>
          {/* Genel Ayarlar */}
          <Tab.Panel className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Genel SEO Ayarları</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">Site Başlığı</label>
                <input
                  type="text"
                  name="siteTitle"
                  value={settings.siteTitle}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Bu başlık, Google arama sonuçlarında görünecektir.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Meta Açıklama</label>
                <textarea
                  name="metaDescription"
                  value={settings.metaDescription}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Meta açıklamanız arama sonuçlarında gösterilecektir.
                </p>
              </div>
            </div>

            {/* Canlı Google Önizleme */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Google Arama Önizleme</h3>
              <div className="border border-gray-300 p-4 rounded-lg">
                <p className="text-blue-700 font-medium">{settings.siteTitle}</p>
                <p className="text-sm text-gray-600">{settings.metaDescription}</p>
                <p className="text-sm text-green-600">https://example.com</p>
              </div>
            </div>
          </Tab.Panel>

          {/* Sosyal Medya */}
          <Tab.Panel className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Sosyal Medya Ayarları</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-2">Open Graph Başlığı</label>
                <input
                  type="text"
                  name="ogTitle"
                  value={settings.ogTitle}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Open Graph Açıklama</label>
                <textarea
                  name="ogDescription"
                  value={settings.ogDescription}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Open Graph Görsel URL</label>
                <input
                  type="text"
                  name="ogImage"
                  value={settings.ogImage}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Twitter Card Tipi</label>
                <select
                  name="twitterCard"
                  value={settings.twitterCard}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">Seçiniz</option>
                  <option value="summary">Summary</option>
                  <option value="summary_large_image">Summary with Large Image</option>
                </select>
              </div>
            </div>
          </Tab.Panel>

          {/* Yapılandırılmış Veri */}
          <Tab.Panel className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Yapılandırılmış Veri (Schema Markup)</h2>
            <textarea
              name="schemaMarkup"
              value={settings.schemaMarkup}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 font-mono text-sm"
              rows={8}
            />
            <p className="text-sm text-gray-500 mt-2">
              JSON-LD formatında yapılandırılmış verilerinizi buraya ekleyebilirsiniz.
            </p>
          </Tab.Panel>

          {/* Robots.txt */}
          <Tab.Panel className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Robots.txt</h2>
            <textarea
              name="robotsContent"
              value={settings.robotsContent}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 font-mono text-sm"
              rows={6}
            />
          </Tab.Panel>

          {/* Sitemap */}
          <Tab.Panel className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">XML Sitemap</h2>
            <input
              type="url"
              name="sitemapURL"
              value={settings.sitemapURL}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <ToastContainer />
    </div>
  );
};

export default SEOSettings;
