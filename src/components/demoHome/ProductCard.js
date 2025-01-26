import React from 'react';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, description } = product;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="mt-2 text-gray-500 text-sm">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold text-orange-600">
            ${price.toFixed(2)}
          </span>
          <button className="bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
