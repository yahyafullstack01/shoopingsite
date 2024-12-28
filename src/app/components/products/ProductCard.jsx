import React from "react";

const ProductCard = ({ product, onClick }) => (
  <div
    className="bg-gray-800  dark:bg-[#0f172a]   p-3 sm:p-4 rounded group cursor-pointer"
    onClick={onClick}
  >
    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded relative">
      <img
        src={product.image || `https://via.placeholder.com/150?text=${product.name}`}
        alt={product.name}
        className="object-cover w-full h-full rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black  dark:bg-[#0f172a]   opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded"></div>
    </div>
    <div className="mt-2 sm:mt-4 ">
      <h3 className="text-sm sm:text-lg font-medium">{product.name}</h3>
      <p className="text-xs sm:text-sm text-gray-400">Price: {product.price}₴</p>
      <p className="text-xs sm:text-sm text-gray-400">Size: {product.size}</p>
      <p className="text-sm text-gray-400">Category: {product.category}</p>
    </div>
  </div>
);

export default ProductCard;
