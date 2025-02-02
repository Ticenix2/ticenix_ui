import React, { useState } from "react";

const ProductFilters = () => {
  // Filtrelerin açılma/kapanma durumu
  const [isOpen, setIsOpen] = useState(false);

  // Filtrelerin durumları
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    brands: [],
    colors: [],
    ratings: 0,
    discount: false,
    productType: "",
    size: "",
    popularity: "",
  });

  const brands = ["Apple", "Samsung", "Sony", "Nike", "Adidas"];
  const colors = ["Red", "Blue", "Black", "White", "Green"];
  const ratings = [1, 2, 3, 4, 5];
  const productTypes = ["Phone", "Laptop", "Headphones", "Shoes"];
  const sizes = ["Small", "Medium", "Large"];
  const popularity = ["Popular", "New", "Top Rated"];

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBrandChange = (brand) => {
    setFilters((prev) => {
      const newBrands = prev.brands.includes(brand)
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand];
      return {
        ...prev,
        brands: newBrands,
      };
    });
  };

  const handleColorChange = (color) => {
    setFilters((prev) => {
      const newColors = prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color];
      return {
        ...prev,
        colors: newColors,
      };
    });
  };

  const handleRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      ratings: rating,
    }));
  };

  const handleDiscountChange = () => {
    setFilters((prev) => ({
      ...prev,
      discount: !prev.discount,
    }));
  };

  const handleProductTypeChange = (type) => {
    setFilters((prev) => ({
      ...prev,
      productType: type,
    }));
  };

  const handleSizeChange = (size) => {
    setFilters((prev) => ({
      ...prev,
      size: size,
    }));
  };

  const handlePopularityChange = (pop) => {
    setFilters((prev) => ({
      ...prev,
      popularity: pop,
    }));
  };

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-xl">
      {/* Filtre Başlığı ve Ok İkonu */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer p-4 bg-white text-gray-800 rounded-lg border border-gray-200 shadow-sm"
      >
        <span className="text-xl font-semibold">Filtreyi Göster</span>
        <svg
          className={`w-6 h-6 transform transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Filtre Paneli */}
      {isOpen && (
        <div className="transition-all duration-500 ease-in-out mt-4">
          {/* Yatay Düzen - Flexbox ile Filtreler */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Fiyat Aralığı */}
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Fiyat Aralığı</h4>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                name="priceRange"
                value={filters.priceRange[0]}
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>{filters.priceRange[0]}₺</span>
                <span>{filters.priceRange[1]}₺</span>
              </div>
            </div>

            {/* Marka Filtre */}
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Markalar</h4>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="form-checkbox text-blue-600"
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Renk Filtre */}
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Renkler</h4>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      filters.colors.includes(color)
                        ? "border-blue-600"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  />
                ))}
              </div>
            </div>

            {/* Yıldızlı Değerlendirme */}
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Değerlendirme</h4>
              <div className="flex space-x-2">
                {ratings.map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingChange(rating)}
                    className={`${
                      filters.ratings >= rating ? "text-yellow-500" : "text-gray-400"
                    } text-xl`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* İndirimli Ürünler */}
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-700 mb-3">İndirimli Ürünler</h4>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.discount}
                  onChange={handleDiscountChange}
                  className="form-checkbox text-blue-600"
                />
                <span>İndirimli Ürünler</span>
              </label>
            </div>

            {/* Ürün Tipi */}
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Ürün Tipi</h4>
              <div className="space-y-2">
                {productTypes.map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="productType"
                      checked={filters.productType === type}
                      onChange={() => handleProductTypeChange(type)}
                      className="form-radio text-blue-600"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Boyut Filtre */}
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Boyut Seçimi</h4>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <label key={size} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="size"
                      checked={filters.size === size}
                      onChange={() => handleSizeChange(size)}
                      className="form-radio text-blue-600"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Popülerlik Filtre */}
            <div className="flex flex-col">
              <h4 className="text-lg font-medium text-gray-700 mb-3">Popülerlik</h4>
              <div className="space-y-2">
                {popularity.map((pop) => (
                  <label key={pop} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="popularity"
                      checked={filters.popularity === pop}
                      onChange={() => handlePopularityChange(pop)}
                      className="form-radio text-blue-600"
                    />
                    <span>{pop}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Uygula Butonu */}
          <button
            onClick={() => console.log(filters)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
          >
            Filtreyi Uygula
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
