import React, { useState } from "react";

// Başlangıç filtresi yapılandırması
const initialFilterData = {
  priceRange: { min: 0, max: 1000, step: 10 },
  filters: [
    {
      type: "brands",
      label: "Markalar",
      options: ["Apple", "Samsung", "Sony", "Nike", "Adidas"],
      isMultiple: true,
    },
    {
      type: "colors",
      label: "Renkler",
      options: ["Kırmızı", "Mavi", "Siyah", "Beyaz", "Yeşil"],
      isMultiple: true,
    },
  ],
};

const ProductFilters = ({ filterData = initialFilterData }) => {
  const [filters, setFilters] = useState(filterData);
  const [isOpen, setIsOpen] = useState(false);

  // Fiyat aralığı değişimi
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      priceRange: name === "min" ? [Number(value), prev.priceRange[1]] : [prev.priceRange[0], Number(value)],
    }));
  };

  // Dinamik olarak seçenek eklemek
  const handleAddFilterOption = (filterType, newOption) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };
      const filter = updatedFilters.filters.find((f) => f.type === filterType);
      if (filter) {
        filter.options.push(newOption);
      }
      return updatedFilters;
    });
  };

  // Dinamik olarak seçenek silmek
  const handleRemoveFilterOption = (filterType, optionToRemove) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };
      const filter = updatedFilters.filters.find((f) => f.type === filterType);
      if (filter) {
        filter.options = filter.options.filter((option) => option !== optionToRemove);
      }
      return updatedFilters;
    });
  };

  // Dinamik olarak filtre eklemek
  const handleAddFilter = (newFilter) => {
    setFilters((prev) => ({
      ...prev,
      filters: [...prev.filters, newFilter],
    }));
  };

  // Filtreyi silmek
  const handleRemoveFilter = (filterType) => {
    setFilters((prev) => ({
      ...prev,
      filters: prev.filters.filter((filter) => filter.type !== filterType),
    }));
  };

  // Başlık değişikliği
  const handleLabelChange = (filterType, newLabel) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev };
      const filter = updatedFilters.filters.find((f) => f.type === filterType);
      if (filter) {
        filter.label = newLabel;
      }
      return updatedFilters;
    });
  };

  // Seçenek değişikliği (Checkbox veya Radio)
  const handleSelectionChange = (filterType, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      const filter = newFilters.filters.find((f) => f.type === filterType);

      if (filter.isMultiple) {
        if (filter.options.includes(value)) {
          filter.options = filter.options.filter((option) => option !== value);
        } else {
          filter.options.push(value);
        }
      } else {
        filter.options = [value];
      }

      return newFilters;
    });
  };

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-xl">
      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between cursor-pointer p-4 bg-white text-gray-800 rounded-lg border border-gray-200 shadow-sm">
        <span className="text-xl font-semibold">Filtreyi Göster</span>
        <svg className={`w-6 h-6 transform transition-all duration-300 ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Filtre Paneli */}
      {isOpen && (
        <div className="transition-all duration-500 ease-in-out mt-4">
          {/* Fiyat Aralığı */}
          <div className="flex flex-col mb-6">
            <h4 className="text-lg font-medium text-gray-700 mb-3">Fiyat Aralığı</h4>
            <input
              type="range"
              min={filters.priceRange.min}
              max={filters.priceRange.max}
              step={filters.priceRange.step}
              name="min"
              value={filters.priceRange[0] || filters.priceRange.min}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg"
            />
            <input
              type="range"
              min={filters.priceRange.min}
              max={filters.priceRange.max}
              step={filters.priceRange.step}
              name="max"
              value={filters.priceRange[1] || filters.priceRange.max}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg"
            />
            <div className="flex justify-between mt-2 text-sm">
              <span>{filters.priceRange[0] || filters.priceRange.min}₺</span>
              <span>{filters.priceRange[1] || filters.priceRange.max}₺</span>
            </div>
          </div>

          {/* Dinamik Filtreler */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filters.filters.map((filter) => (
              <div key={filter.type} className="flex flex-col">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium text-gray-700 mb-3">{filter.label}</h4>
                  {/* Başlık Değiştirme */}
                  <button
                    onClick={() => {
                      const newLabel = prompt("Yeni başlık girin:", filter.label);
                      if (newLabel) {
                        handleLabelChange(filter.type, newLabel);
                      }
                    }}
                    className="text-sm text-blue-600"
                  >
                    Başlığı Düzenle
                  </button>
                </div>
                <div className="space-y-2">
                  {filter.options.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type={filter.isMultiple ? "checkbox" : "radio"}
                        checked={filter.isMultiple ? filters[filter.type]?.includes(option) : filters[filter.type] === option}
                        onChange={() => handleSelectionChange(filter.type, option)}
                        className="form-checkbox text-blue-600"
                      />
                      <span>{option}</span>
                      {filter.isMultiple && (
                        <button onClick={() => handleRemoveFilterOption(filter.type, option)} className="text-sm text-red-500 ml-2">
                          Sil
                        </button>
                      )}
                    </label>
                  ))}
                </div>
                {/* Yeni Seçenek Ekleme */}
                <button
                  onClick={() => {
                    const newOption = prompt("Yeni seçenek ekleyin:");
                    if (newOption) {
                      handleAddFilterOption(filter.type, newOption);
                    }
                  }}
                  className="text-sm text-blue-600 mt-2"
                >
                  Yeni Seçenek Ekle
                </button>
                {/* Filtreyi Sil */}
                <button
                  onClick={() => handleRemoveFilter(filter.type)}
                  className="text-sm text-red-600 mt-2"
                >
                  Filtreyi Sil
                </button>
              </div>
            ))}
          </div>

          {/* Yeni Filtre Ekleme */}
          <button
            onClick={() => {
              const filterType = prompt("Filtre türünü (örneğin, 'markalar', 'renkler') girin:");
              const filterLabel = prompt("Filtre başlığını girin:");
              const isMultiple = prompt("Çoklu seçim için 'true' yazın, tekli seçim için 'false':") === 'true';
              const newFilter = {
                type: filterType,
                label: filterLabel,
                options: [],
                isMultiple,
              };
              handleAddFilter(newFilter);
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
          >
            Yeni Filtre Ekle
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
