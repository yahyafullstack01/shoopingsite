"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../../Functions/useLanguage";

export default function QuickAddModal({ product, onClose, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [colorError, setColorError] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const { language, translateList } = useLanguage();
  const menuItems = translateList("Infoform", "header");

  const translatedName = product.translations?.[language]?.name || product.name;
  const translatedColors = product.translations?.[language]?.colors || product.colors;
  const translatedSizes = product.sizes || [];

  const handleAddToCartClick = () => {
  let hasError = false;

  if (!selectedColor) {
    setColorError("Оберіть колір");
    hasError = true;
  } else setColorError("");

  if (!selectedSize) {
    setSizeError("Оберіть розмір");
    hasError = true;
  } else setSizeError("");

  if (quantity <= 0) {
    setQuantityError("Вкажіть кількість");
    hasError = true;
  } else setQuantityError("");

  if (hasError) return;

  onAddToCart({
    product: {
      ...product,
      // передаємо повну ціну + знижку (якщо є)
      price: product.price,
      discountPrice: product.discountPrice ?? null,
    },
    selectedColor,
    selectedSize,
    quantity,
  });

  onClose();
};

  const handleQuantityChange = (value) => {
    const valid = Math.max(1, Number(value));
    setQuantity(valid);
    if (valid > 0) setQuantityError("");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-end sm:items-center px-2"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-lg p-4 shadow-lg animate-slide-up sm:animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg sm:text-xl font-normal text-gray-900 dark:text-white">
            {translatedName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black dark:hover:text-white text-2xl"
            aria-label="Закрити"
          >
            &times;
          </button>
        </div>

        {/* Image */}
        {product.images?.[0] && (
          <img
            src={product.images[0]}
            alt={translatedName}
            className="w-full h-48 sm:h-56 object-cover rounded-lg mb-3"
          />
        )}

        {/* Color */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1 dark:text-white">
            {menuItems[1]}
          </label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className={`w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white ${colorError ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">{menuItems[2]}</option>
            {translatedColors?.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
          {colorError && <p className="text-red-500 text-sm mt-1">{colorError}</p>}
        </div>

        {/* Size */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1 dark:text-white">
            {menuItems[3]}
          </label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className={`w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white ${sizeError ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">{menuItems[2]}</option>
            {translatedSizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          {sizeError && <p className="text-red-500 text-sm mt-1">{sizeError}</p>}
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 dark:text-white">
            {menuItems[4]}
          </label>
          <div className="flex items-center rounded overflow-hidden bg-gray-100 dark:bg-gray-700">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="px-3 py-1 text-lg dark:text-white"
            >–</button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              className="w-full text-center p-2 bg-transparent dark:text-white"
            />
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-3 py-1 text-lg dark:text-white"
            >+</button>
          </div>
          {quantityError && <p className="text-red-500 text-sm mt-1">{quantityError}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 text-sm sm:text-base"
          >
            Закрити
          </button>
          <button
            onClick={handleAddToCartClick}
            className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm sm:text-base"
          >
            ДОДАТИ В КОШИК
          </button>
        </div>
      </div>
    </div>
  );
}
