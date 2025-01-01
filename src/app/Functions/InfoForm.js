"use client";
// Компонент формы информации о продукте
// Принимает `product` для отображения информации о выбранном продукте 
// и `onContactClick` для обработки нажатия кнопки "Contact Us"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { handleContactButtonClick } from "../utils/products"; // Імпорт функції
import { useLanguage } from './useLanguage'; // Adjust the import path as necessary

export default function InfoForm({ product }) {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { language } = useLanguage(); // Get the current language
  const handleContactClick = () => {
    handleContactButtonClick(router, product, selectedColor, selectedSize, quantity);
  };

  // Get the translated name based on the current language
  const translatedName = product.translations?.[language]?.name || product.name;
  // Get the translated description based on the current language
  const translatedDescription = product.translations?.[language]?.description || product.description;


  if (!product) {
    return <p className="text-gray-500">No product selected.</p>;
  }

  return (
    <div className="flex flex-col px-4 md:px-0">
      {/* Product Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2 text-center md:text-left">
        {translatedName}
      </h1>
      <p className="text-gray-500 text-xs md:text-sm mb-4 text-center md:text-left">
        SKU: {product.sku}
      </p>
      <p className="text-xl md:text-2xl font-bold text-white mb-4 text-center md:text-left">
        {product.price}₴
      </p>
      
      {/* Size Selector */}
      <div className="mb-6 md:mb-8">
        <label
          htmlFor="size"
          className="block text-sm font-medium mb-2 text-center md:text-left"
        >
          Size
        </label>
        <select
          id="size"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-700 rounded bg-gray-800 text-gray-300"
        >
          <option value="">Select</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      {/* Color Selector */}
      <div className="mb-6 md:mb-8">
        <label
          htmlFor="color"
          className="block text-sm font-medium mb-2 text-center md:text-left"
        >
          Color
        </label>
        <select
          id="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-700 rounded bg-gray-800 text-gray-300"
        >
          <option value="">Select</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
      </div>
{/* Quantity Selector */}
<div className="mb-6 md:mb-8">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium mb-2 text-center md:text-left"
        >
          Quantity
        </label>
        <div className="flex items-center w-full md:w-1/4">
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="p-2 bg-gray-700 text-white rounded-l hover:bg-gray-600"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            min="1"
            className="w-full p-2 border-t border-b border-gray-700 bg-gray-800 text-center text-gray-300"
          />
          <button
            type="button"
            onClick={() => setQuantity((prev) => prev + 1)}
            className="p-2 bg-gray-700 text-white rounded-r hover:bg-gray-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Contact Button */}
      <button
        onClick={handleContactClick}
        className="w-full md:w-1/2 bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded transition duration-300"
      >
        Contact Us
      </button>

      {/* Product Info */}
      <div className="mt-10">
        <h2 className="text-lg md:text-xl font-semibold text-white mb-4 text-center md:text-left">
          PRODUCT INFO
        </h2>
        <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
          {translatedDescription}
        </p>
      </div>
    </div>
  );
}