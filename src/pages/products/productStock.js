import React, { useState } from 'react';

function ProductStock({ product, onStockChange }) {
  const [stock, setStock] = useState(product.stock);

  const handleIncrease = () => {
    setStock(stock + 1);
    onStockChange(product.id, stock + 1); // Pass updated stock to parent component
  };

  const handleDecrease = () => {
    if (stock > 0) {
      setStock(stock - 1);
      onStockChange(product.id, stock - 1); // Pass updated stock to parent component
    }
  };

  return (
    <div className="stock-management">
      <button onClick={handleIncrease} className="increase-btn">
        Artır
      </button>
      <span>{stock}</span>
      <button onClick={handleDecrease} className="decrease-btn">
        Azalt
      </button>
    </div>
  );
}

export default ProductStock;
