import React, { useState, useEffect } from 'react';
import { AiOutlineCheck, AiOutlineSave, AiOutlineUndo } from 'react-icons/ai';
import { MdColorLens, MdFormatColorFill } from 'react-icons/md';
import { FaFontAwesomeFlag } from 'react-icons/fa';
import { HiOutlinePhoto } from 'react-icons/hi';

const themeOptions = [
  {
    id: 'luxury',
    name: 'Luxury',
    image: '/images/themes/luxury.png',
    primaryColor: '#D4AF37',
    secondaryColor: '#2C3E50',
    font: 'Lora, serif',
    headerBg: '#ffffff',
    footerBg: '#222222',
    headerImage: '/images/themes/luxury-header.jpg',
    footerImage: '/images/themes/luxury-footer.jpg',
    buttonColor: '#D4AF37',
    buttonHoverColor: '#b5942f',
    buttonTextColor: '#ffffff',
    animation: 'fade-in 0.5s ease-in-out',
  },
  {
    id: 'elegant',
    name: 'Elegant',
    image: '/images/themes/elegant.png',
    primaryColor: '#1A1A1A',
    secondaryColor: '#F1F1F1',
    font: 'Merriweather, serif',
    headerBg: '#111111',
    footerBg: '#e5e5e5',
    headerImage: '/images/themes/elegant-header.png',
    footerImage: '/images/themes/elegant-footer.png',
    buttonColor: '#1A1A1A',
    buttonHoverColor: '#444444',
    buttonTextColor: '#ffffff',
    animation: 'slide-in 1s ease-in-out',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    image: '/images/themes/minimal.png',
    primaryColor: '#ffffff',
    secondaryColor: '#000000',
    font: 'Arial, sans-serif',
    headerBg: '#f5f5f5',
    footerBg: '#333333',
    headerImage: '/images/themes/minimal-header.png',
    footerImage: '/images/themes/minimal-footer.png',
    buttonColor: '#ffffff',
    buttonHoverColor: '#000000',
    buttonTextColor: '#000000',
    animation: 'zoom-in 0.8s ease-in-out',
  },
];

const ThemeSettings = () => {
  const [selectedTheme, setSelectedTheme] = useState(themeOptions[0]);
  const [customPrimaryColor, setCustomPrimaryColor] = useState(selectedTheme.primaryColor);
  const [customSecondaryColor, setCustomSecondaryColor] = useState(selectedTheme.secondaryColor);
  const [customFont, setCustomFont] = useState(selectedTheme.font);
  const [customHeaderBg, setCustomHeaderBg] = useState(selectedTheme.headerBg);
  const [customFooterBg, setCustomFooterBg] = useState(selectedTheme.footerBg);
  const [customButtonColor, setCustomButtonColor] = useState(selectedTheme.buttonColor);
  const [customButtonHoverColor, setCustomButtonHoverColor] = useState(selectedTheme.buttonHoverColor);
  const [customButtonTextColor, setCustomButtonTextColor] = useState(selectedTheme.buttonTextColor);
  const [customAnimation, setCustomAnimation] = useState(selectedTheme.animation);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    // On component mount or theme change, reset theme preview to reflect updates
    if (isPreview) {
      setIsPreview(false);
    }
  }, [selectedTheme]);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setCustomPrimaryColor(theme.primaryColor);
    setCustomSecondaryColor(theme.secondaryColor);
    setCustomFont(theme.font);
    setCustomHeaderBg(theme.headerBg);
    setCustomFooterBg(theme.footerBg);
    setCustomButtonColor(theme.buttonColor);
    setCustomButtonHoverColor(theme.buttonHoverColor);
    setCustomButtonTextColor(theme.buttonTextColor);
    setCustomAnimation(theme.animation);
  };

  const handleSave = () => {
    alert('Tema ayarları başarıyla kaydedildi!');
  };

  const handleUndo = () => {
    setCustomPrimaryColor(selectedTheme.primaryColor);
    setCustomSecondaryColor(selectedTheme.secondaryColor);
    setCustomFont(selectedTheme.font);
    setCustomHeaderBg(selectedTheme.headerBg);
    setCustomFooterBg(selectedTheme.footerBg);
    setCustomButtonColor(selectedTheme.buttonColor);
    setCustomButtonHoverColor(selectedTheme.buttonHoverColor);
    setCustomButtonTextColor(selectedTheme.buttonTextColor);
    setCustomAnimation(selectedTheme.animation);
  };

  return (
    <div className="container mx-auto p-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Tema Ayarları</h1>
      <p className="text-lg text-gray-600 mb-8">
        Seçtiğiniz temayı özelleştirebilir, renk paleti, yazı tipleri, görseller ve animasyonlarla kurumsal sitenizin görsel kimliğini
        tamamen şekillendirebilirsiniz.
      </p>

      {/* Tema Seçimi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {themeOptions.map((theme) => (
          <div
            key={theme.id}
            className={`border-2 rounded-lg p-6 transition duration-300 ease-in-out transform ${
              selectedTheme.id === theme.id
                ? 'border-blue-600 shadow-xl'
                : 'border-gray-300 hover:scale-105'
            }`}
            onClick={() => handleThemeChange(theme)}
          >
            <img src={theme.image} alt={theme.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{theme.name}</h3>
            <p className="text-gray-600 mb-4">Kurumsal tasarım için ideal tema seçenekleri</p>
            {selectedTheme.id === theme.id && (
              <div className="text-green-500">
                <AiOutlineCheck size={24} /> Seçili
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tema Özelleştirme Paneli */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Tema Özelleştirme</h2>

        {/* Renk Seçimi */}
        <div className="flex sm:flex-row flex-col space-y-4 sm:space-x-8">
          <div className="flex-1">
            <label className="block text-gray-600 mb-2">Birincil Renk</label>
            <input
              type="color"
              value={customPrimaryColor}
              onChange={(e) => setCustomPrimaryColor(e.target.value)}
              className="w-full h-12 rounded-lg border-2 border-gray-300"
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-600 mb-2">İkincil Renk</label>
            <input
              type="color"
              value={customSecondaryColor}
              onChange={(e) => setCustomSecondaryColor(e.target.value)}
              className="w-full h-12 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Font Seçimi */}
        <div className="mt-6">
          <label className="block text-gray-600 mb-2">Yazı Tipi</label>
          <select
            value={customFont}
            onChange={(e) => setCustomFont(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg"
          >
            <option value="Arial, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            <option value="Merriweather, serif">Merriweather</option>
          </select>
        </div>

        {/* Header ve Footer Görselleri */}
        <div className="mt-8">
          <h3 className="text-lg text-gray-700 mb-4">Header ve Footer Görselleri</h3>
          <div className="flex sm:flex-row flex-col space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Header Görseli</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCustomHeaderBg(URL.createObjectURL(e.target.files[0]))}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Footer Görseli</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCustomFooterBg(URL.createObjectURL(e.target.files[0]))}
                className="w-full p-3 border-2 border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Buton Özelleştirme */}
        <div className="mt-8">
          <h3 className="text-lg text-gray-700 mb-4">Buton Özelleştirmeleri</h3>
          <div className="flex space-x-8">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Buton Rengi</label>
              <input
                type="color"
                value={customButtonColor}
                onChange={(e) => setCustomButtonColor(e.target.value)}
                className="w-full h-12 rounded-lg border-2 border-gray-300"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Buton Hover Rengi</label>
              <input
                type="color"
                value={customButtonHoverColor}
                onChange={(e) => setCustomButtonHoverColor(e.target.value)}
                className="w-full h-12 rounded-lg border-2 border-gray-300"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-600 mb-2">Buton Yazı Rengi</label>
            <input
              type="color"
              value={customButtonTextColor}
              onChange={(e) => setCustomButtonTextColor(e.target.value)}
              className="w-full h-12 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Kaydet ve Geri Al */}
        <div className="mt-8 flex space-x-6">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center"
          >
            <AiOutlineSave size={20} /> Kaydet
          </button>
          <button
            onClick={handleUndo}
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 flex items-center"
          >
            <AiOutlineUndo size={20} /> Değişiklikleri Geri Al
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
