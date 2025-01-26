import React from "react";

const CategoryCard = ({ name, image }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-xl font-semibold">{name}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
