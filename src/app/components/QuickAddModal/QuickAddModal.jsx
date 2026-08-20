'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import { getProductImageSrc } from "../../utils/productData";
import {
  ProductColorSwatches,
  ProductSizeButtons,
} from "../ProductOptionPickers/ProductOptionPickers";

export default function QuickAddModal({ product, onClose, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [colorError, setColorError] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const { language, translateList } = useLanguage();
  const menuItems = translateList("Infoform", "header");

  const translatedName =
    product.translations?.[language]?.name || product.name;
  const translatedColors =
    product.translations?.[language]?.colors || product.colors;
  const translatedSizes = product.sizes || [];

  const handleAddToCartClick = () => {
    let hasError = false;

    if (!selectedColor) { setColorError("Оберіть колір"); hasError = true; } else setColorError("");
    if (!selectedSize) { setSizeError("Оберіть розмір"); hasError = true; } else setSizeError("");
    if (quantity <= 0) { setQuantityError("Вкажіть кількість"); hasError = true; } else setQuantityError("");

    if (hasError) return;

    onAddToCart({
      product: {
        ...product,
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
      className="fixed inset-0 z-[80] bg-black/50 flex justify-center items-center px-3 pt-16 sm:pt-20 pb-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md max-h-[calc(100vh-5.5rem)] sm:max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl sm:rounded-xl p-5 pt-4 shadow-xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header — sticky so title stays visible while scrolling */}
        <div className="sticky top-0 z-10 -mx-5 -mt-4 mb-4 flex items-start justify-between gap-3 bg-white/95 dark:bg-gray-900/95 px-5 pt-4 pb-3 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-lg sm:text-xl font-medium leading-snug text-gray-900 dark:text-white pr-2">
            {translatedName}
          </h2>
          <button
            onClick={onClose}
            className="shrink-0 leading-none text-gray-400 hover:text-black dark:hover:text-white text-3xl"
            aria-label="Закрити"
          >
            &times;
          </button>
        </div>

        {/* Image */}
        {product.images?.[0] && (
          <Image
            src={getProductImageSrc(product.images[0])}
            alt={translatedName}
            width={800}
            height={600}
            sizes="(max-width: 640px) 100vw, 600px"
            className="w-full h-48 sm:h-56 object-cover rounded-lg mb-3"
            unoptimized
          />
        )}

        <div className="mb-1 text-left">
          <ProductColorSwatches
            label={menuItems[1]}
            colors={translatedColors || []}
            value={selectedColor}
            onChange={(c) => {
              setSelectedColor(c);
              if (c) setColorError("");
            }}
            error={colorError}
            align="text-left"
          />
        </div>

        <div className="mb-1 text-left">
          <ProductSizeButtons
            label={menuItems[3]}
            sizes={translatedSizes}
            value={selectedSize}
            onChange={(s) => {
              setSelectedSize(s);
              if (s) setSizeError("");
            }}
            error={sizeError}
            align="text-left"
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 dark:text-white">
            {menuItems[4]}
          </label>
          <div className="flex items-center rounded overflow-hidden bg-gray-100 dark:bg-gray-700">
            <button onClick={() => handleQuantityChange(quantity - 1)} className="px-3 py-1 text-lg dark:text-white">–</button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              className="w-full text-center p-2 bg-transparent dark:text-white"
            />
            <button onClick={() => handleQuantityChange(quantity + 1)} className="px-3 py-1 text-lg dark:text-white">+</button>
          </div>
          {quantityError && <p className="text-red-500 text-sm mt-1">{quantityError}</p>}
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 text-sm sm:text-base">
            Закрити
          </button>
          <button onClick={handleAddToCartClick} className="px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm sm:text-base">
            ДОДАТИ В КОШИК
          </button>
        </div>
      </div>
    </div>
  );
}