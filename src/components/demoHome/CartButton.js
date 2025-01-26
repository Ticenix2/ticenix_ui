import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = ({ itemCount = 0, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700 transition-all duration-200"
    >
      <FaShoppingCart size={20} className="mr-2" />
      <span>Sepetim</span>

      {/* Ürün sayısı göstergesi */}
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center -mt-2 -mr-2">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
