import React, { useState } from 'react';

const ProductFilter = ({ categories = [], onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Filtreleme değişikliklerini üst bileşene ilet
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({ category: e.target.value, minPrice, maxPrice });
  };

  const handlePriceChange = () => {
    onFilterChange({ category: selectedCategory, minPrice, maxPrice });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Filtreler</h3>

      {/* Kategori Filtreleme */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Kategori
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="mt-2 block w-full p-3 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        >
          <option value="">Tüm Kategoriler</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Fiyat Filtreleme */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Fiyat Aralığı</label>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            className="w-1/2 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
          <span>-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            className="w-1/2 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Fiyat Aralığına Göre Filtrele Butonu */}
      <button
        onClick={handlePriceChange}
        className="w-full bg-orange-600 text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Filtrele
      </button>
    </div>
  );
};

export default ProductFilter;
