import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlineUndo, AiOutlineSave } from 'react-icons/ai';
import { MdColorLens, MdFormatColorFill } from 'react-icons/md';
import { FaFontAwesomeFlag } from 'react-icons/fa';

const themes = [
  {
    id: 'modern-shop',
    name: 'Modern Shop',
    description: 'Clean, modern and professional design perfect for any e-commerce store.',
    image: '/images/themes/modern-shop.png',
    primaryColor: '#007bff',
    secondaryColor: '#ff6600',
    font: 'Roboto, sans-serif',
    demoLink: '/demo/modern-shop',
  },
  {
    id: 'classic-elegance',
    name: 'Classic Elegance',
    description: 'A timeless design with rich typography and a sophisticated look.',
    image: '/images/themes/classic-elegance.png',
    primaryColor: '#8B4513',
    secondaryColor: '#F5DEB3',
    font: 'Georgia, serif',
    demoLink: '/demo/classic-elegance',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Focuses on simplicity with clean lines and minimalistic style.',
    image: '/images/themes/minimalist.png',
    primaryColor: '#ffffff',
    secondaryColor: '#000000',
    font: 'Arial, sans-serif',
    demoLink: '/demo/minimalist',
  },
  {
    id: 'techy-vibe',
    name: 'Techy Vibe',
    description: 'Sleek and modern design perfect for tech and electronics.',
    image: '/images/themes/techy-vibe.png',
    primaryColor: '#00bcd4',
    secondaryColor: '#ff5722',
    font: 'Helvetica, sans-serif',
    demoLink: '/demo/techy-vibe',
  },
  {
    id: 'fashionista',
    name: 'Fashionista',
    description: 'A trendy and stylish design for fashion and apparel stores.',
    image: '/images/themes/fashionista.png',
    primaryColor: '#e91e63',
    secondaryColor: '#9c27b0',
    font: 'Poppins, sans-serif',
    demoLink: '/demo/fashionista',
  },
];

const ThemeSelection = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isCustomizationMode, setIsCustomizationMode] = useState(false);
  const [customPrimaryColor, setCustomPrimaryColor] = useState('');
  const [customSecondaryColor, setCustomSecondaryColor] = useState('');
  const [customFont, setCustomFont] = useState('');

  const handleSelectTheme = (theme) => {
    setSelectedTheme(theme);
    setIsPreviewMode(false);
    setIsCustomizationMode(false);
    setCustomPrimaryColor(theme.primaryColor);
    setCustomSecondaryColor(theme.secondaryColor);
    setCustomFont(theme.font);
  };

  const handleSaveTheme = () => {
    alert(`"${selectedTheme.name}" theme has been saved successfully!`);
  };

  const handleUndoChanges = () => {
    setSelectedTheme(null);
    setIsPreviewMode(false);
    setIsCustomizationMode(false);
    setCustomPrimaryColor('');
    setCustomSecondaryColor('');
    setCustomFont('');
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Tema Seçimi ve Özelleştirme</h1>
      <p className="text-lg text-gray-600 mb-6">
        E-ticaret siteniz için bir tema seçin ve daha sonra özelleştirmek için aşağıdaki adımları takip edin.
      </p>

      {/* Tema Seçimi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`border-2 rounded-lg p-6 transition duration-300 ease-in-out transform ${
              selectedTheme?.id === theme.id
                ? 'border-blue-600 shadow-xl'
                : 'border-gray-300 hover:scale-105'
            }`}
            onClick={() => handleSelectTheme(theme)}
          >
            <img src={theme.image} alt={theme.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{theme.name}</h3>
            <p className="text-gray-600 mb-4">{theme.description}</p>
            {selectedTheme?.id === theme.id && (
              <div className="text-green-500">
                <AiOutlineCheck size={24} /> Seçildi
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tema Özelleştirmeleri */}
      {selectedTheme && isCustomizationMode && (
        <div className="mb-8">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">Tema Özelleştir</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-8">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Birincil Renk</label>
              <input
                type="color"
                value={customPrimaryColor || selectedTheme.primaryColor}
                onChange={(e) => setCustomPrimaryColor(e.target.value)}
                className="w-full h-12 rounded-lg border-2 border-gray-300"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-600 mb-2">İkincil Renk</label>
              <input
                type="color"
                value={customSecondaryColor || selectedTheme.secondaryColor}
                onChange={(e) => setCustomSecondaryColor(e.target.value)}
                className="w-full h-12 rounded-lg border-2 border-gray-300"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-600 mb-2">Yazı Tipi</label>
            <select
              value={customFont || selectedTheme.font}
              onChange={(e) => setCustomFont(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            >
              <option value="Roboto, sans-serif">Roboto</option>
              <option value="Georgia, serif">Georgia</option>
              <option value="Arial, sans-serif">Arial</option>
              <option value="Helvetica, sans-serif">Helvetica</option>
              <option value="Poppins, sans-serif">Poppins</option>
            </select>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => setIsCustomizationMode(false)}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
            >
              Özelleştirmeyi Kapat
            </button>
            <button
              onClick={handleSaveTheme}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Kaydet
            </button>
          </div>
        </div>
      )}

      {/* Önizleme Modu */}
      {selectedTheme && !isCustomizationMode && !isPreviewMode && (
        <div className="flex justify-between items-center mb-8">
          <div className="text-lg text-gray-700">
            <strong>Seçilen Tema:</strong> {selectedTheme.name}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsPreviewMode(true)}
              className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Önizle
            </button>
            <button
              onClick={handleSaveTheme}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Kaydet
            </button>
          </div>
        </div>
      )}

      {/* Canlı Önizleme */}
      {isPreviewMode && (
        <div className="mb-8">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">Önizleme</h2>
          <iframe
            src={selectedTheme.demoLink}
            title="Tema Önizleme"
            className="w-full h-96 border-2 rounded-lg"
          ></iframe>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => setIsPreviewMode(false)}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
            >
              Kapat
            </button>
            <button
              onClick={handleSaveTheme}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Kaydet
            </button>
          </div>
        </div>
      )}

      {/* Değişiklikleri Geri Al */}
      {selectedTheme && (
        <div className="mt-6">
          <button
            onClick={handleUndoChanges}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
          >
            <AiOutlineUndo size={20} /> Değişiklikleri Geri Al
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSelection;
