"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { handleContactButtonClick } from "../utils/products";
import { useLanguage } from "./useLanguage";
import SizeChart from "../components/SizeChart/SizeChart";

export default function InfoForm({
  product,
  showDiscount = false,
  onAddToCartClick,
  requireSelection = false
}) {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [colorError, setColorError] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);

  const { language, translateList } = useLanguage();
  const menuItems = translateList("Infoform", "header");

  const translatedName = product.translations?.[language]?.name || product.name;
  const translatedDescription = product.translations?.[language]?.description || product.description;
  const handleAddToCartClick = () => {
  let hasError = false;

  if (requireSelection && !selectedColor) {
    setColorError("Оберіть колір");
    hasError = true;
  } else {
    setColorError("");
  }

  if (requireSelection && !selectedSize) {
    setSizeError("Оберіть розмір");
    hasError = true;
  } else {
    setSizeError("");
  }

  if (quantity <= 0) {
    setQuantityError("Вкажіть кількість");
    hasError = true;
  } else {
    setQuantityError("");
  }

  if (hasError) return;

  onAddToCartClick({
    product,
    selectedColor,
    selectedSize,
    quantity,
  });
};

const handleContactClick = (e) => {
  e.preventDefault();
  let hasError = false;

  if (requireSelection && !selectedColor) {
    setColorError("Оберіть колір");
    hasError = true;
  } else {
    setColorError("");
  }

  if (requireSelection && !selectedSize) {
    setSizeError("Оберіть розмір");
    hasError = true;
  } else {
    setSizeError("");
  }

  if (quantity <= 0) {
    setQuantityError("Вкажіть кількість");
    hasError = true;
  } else {
    setQuantityError("");
  }

  if (hasError) return;

  handleContactButtonClick(router, product, selectedColor, selectedSize, quantity, language);
};

  const handleQuantityChange = (value) => {
    const validQuantity = Math.max(1, Number(value));
    setQuantity(validQuantity);
    if (validQuantity > 0) setQuantityError("");
  };

  return (
    <div className="flex flex-col px-4 md:px-0">
      <h1 className="text-2xl md:text-3xl font-normal mb-2 text-center md:text-left">
        {translatedName}
      </h1>
      <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mb-2 text-center md:text-left">
        {menuItems[0]}: <span className="font-normal">{product.category || "Unknown Category"}</span>
      </p>
      <p className="text-gray-800 dark:text-gray-500 text-xs md:text-sm mb-4 text-center md:text-left">
        SKU: {product.sku}
      </p>

      <div className="text-xl md:text-2xl font-normal mb-4 text-center md:text-left">
        {showDiscount && product.discountPrice ? (
          <>
            <span className="text-red-600">{product.discountPrice} UAH</span>
            <span className="line-through text-gray-500 ml-4">{product.price} UAH</span>
          </>
        ) : (
          <span>{product.price} UAH</span>
        )}
      </div>

      
      <div className="mb-6 md:mb-8">
        <label htmlFor="color" className="block text-sm font-normal mb-2 text-center md:text-left">
          {menuItems[1] || "Color"}
        </label>
        <select
          id="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className={`w-full md:w-1/2 p-2 border ${colorError ? "border-red-500" : "border-gray-300"} bg-gray-200 rounded dark:bg-gray-800 dark:text-gray-300`}
        >
          <option value="">{menuItems[2] || "Select"}</option>
          {(product.translations?.[language]?.colors || product.colors)?.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
        {colorError && <p className="text-red-500 text-sm mt-2">{colorError}</p>}
      </div>

      
      <div className="mb-6 md:mb-8">
        <label htmlFor="size" className="block text-sm font-normal mb-2 text-center md:text-left">
          {menuItems[3] || "Size"}
        </label>
        <select
          id="size"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className={`w-full md:w-1/2 p-2 border ${sizeError ? "border-red-500" : "border-gray-300"} bg-gray-200 rounded dark:bg-gray-800 dark:text-gray-300`}
        >
          <option value="">{menuItems[2] || "Select"}</option>
          {product.sizes?.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        {sizeError && <p className="text-red-500 text-sm mt-2">{sizeError}</p>}
           
      <div className="mb-6 md:mb-2 mt-4">
        <button
          onClick={() => setShowSizeChart(true)}
          className="text-xl text-black dark:text-white underline transition-colors duration-300 hover:text-blue-500 focus-visible:text-blue-900 dark:hover:text-blue-500 dark:focus-visible:text-blue-500 focus-visible:outline-none"
        >
          {menuItems[6] || "Clothing Size Chart"}
        </button>
        {showSizeChart && <SizeChart onClose={() => setShowSizeChart(false)} />}
      </div>
      </div>

    
      <div className="mb-6 md:mb-8">
        <label htmlFor="quantity" className="block text-sm font-normal mb-2 text-center md:text-left">
          {menuItems[4] || "Quantity"}
        </label>
        <div className="flex items-center w-full md:w-1/4 bg-gray-200 dark:bg-gray-700 rounded">
          <button
            type="button"
            onClick={() => handleQuantityChange(quantity - 1)}
            className="p-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-l dark:hover:bg-gray-600"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
            min="1"
            className={`w-full p-2 text-center ${quantityError ? "border-red-500" : ""}`}
          />
          <button
            type="button"
            onClick={() => handleQuantityChange(quantity + 1)}
            className="p-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-r dark:hover:bg-gray-600"
          >
            +
          </button>
        </div>
        {quantityError && <p className="text-red-500 text-sm mt-2">{quantityError}</p>}
      </div>

      <div className="flex space-x-4 mt-4">
       <button
          onClick={handleAddToCartClick}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          ДОДАТИ В КОШИК
        </button>  
        <button
          onClick={handleContactClick}
          className="w-full md:w-1/2 bg-gray-700 hover:bg-gray-500 text-white dark:bg-lime-500 dark:hover:bg-lime-600 dark:text-black font-normal py-2 rounded transition duration-300"
        >
          {menuItems[5] || "Contact Us"}
        </button>
      </div>


      
      <div className="mt-10">
        <h2 className="text-lg md:text-xl font-normal text-black dark:text-white mb-4 text-center md:text-left">
          {menuItems[7] || "PRODUCT INFO"}
        </h2>
        <div className="text-gray-500 dark:text-gray-400 text-sm md:text-base text-left space-y-2">
  {Array.isArray(translatedDescription) && (
    <>
      {translatedDescription.map((line, index) => {
        if (line.toLowerCase().includes("details")) {
          return <p key={index} className="font-normal">{line}</p>;
        }

        if (line.trim().startsWith("·")) {
          return (
            <ul key={index} className="list-disc list-inside ml-4">
              <li>{line.replace("·", "").trim()}</li>
            </ul>
          );
        }

        return <p key={index}>{line}</p>;
      })}
    </>
  )}
</div>
      </div>
    </div>
  );
}
