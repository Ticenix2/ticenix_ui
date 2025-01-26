import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Arama işlemini başlat (bunu API'ye bağlayabilirsiniz)
      console.log(`Arama: ${searchQuery}`);
    }
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ürün Arayın</h2>
        <p className="text-lg text-gray-600 mb-8">
          İstediğiniz ürünü bulmak için arama yapın.
        </p>
        <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Aradığınız ürünü yazın..."
            className="w-full py-3 px-5 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-3 flex items-center text-orange-600 hover:text-orange-700"
          >
            <FaSearch className="w-6 h-6" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
