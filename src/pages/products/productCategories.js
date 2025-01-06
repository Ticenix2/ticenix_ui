import React, { useEffect, useState } from 'react';

function ProductCategories() {
  const [categories, setCategories] = useState([
    "Elektronik",
    "Giyim",
    "Ev ve Yaşam",
    "Gıda",
    "Mobilya",
  ]);
  const [loading, setLoading] = useState(false); // Simulate data load

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a loading delay
  }, []);

  return (
    <div className="categories-page">
      <h2 className="text-2xl font-semibold mb-4">Ürün Kategorileri</h2>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <ul className="list-disc pl-4">
          {categories.map((category, index) => (
            <li key={index} className="py-2">{category}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductCategories;
