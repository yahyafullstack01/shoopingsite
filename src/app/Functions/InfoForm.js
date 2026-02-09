
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
  const formTranslations = translateList("home", "infoForm") || {};

  const translatedName = product.translations?.[language]?.name || product.name;
  const translatedDescription = product.translations?.[language]?.description || product.description;
  const handleAddToCartClick = () => {
  let hasError = false;

  if (requireSelection && !selectedColor) {
    setColorError(formTranslations.colorError || "Select a color");
    hasError = true;
  } else {
    setColorError("");
  }

  if (requireSelection && !selectedSize) {
    setSizeError(formTranslations.sizeError || "Select a size");
    hasError = true;
  } else {
    setSizeError("");
  }

  if (quantity <= 0) {
    setQuantityError(formTranslations.quantityError || "Specify quantity");
    hasError = true;
  } else {
    setQuantityError("");
  }

  if (hasError) return;
const finalPrice = product.discountPrice ?? product.price;
const oldPrice = product.discountPrice ? product.price : null;

onAddToCartClick({
  product: {
    ...product,
    price: finalPrice,
    oldPrice,
  },
  selectedColor,
  selectedSize,
  quantity,
});

};

const handleContactClick = (e) => {
  e.preventDefault();
  let hasError = false;

  if (requireSelection && !selectedColor) {
    setColorError(formTranslations.colorError || "Select a color");
    hasError = true;
  } else {
    setColorError("");
  }

  if (requireSelection && !selectedSize) {
    setSizeError(formTranslations.sizeError || "Select a size");
    hasError = true;
  } else {
    setSizeError("");
  }

  if (quantity <= 0) {
    setQuantityError(formTranslations.quantityError || "Specify quantity");
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
      
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left tracking-tight">
  {translatedName}
</h1>



<p className="text-gray-700 dark:text-gray-400 text-base mt-8 text-center md:text-left">
  {menuItems[0]}: <span className="font-medium">{product.category || "Unknown Category"}</span>
</p>

<p className="text-gray-600 dark:text-gray-500 text-sm mb-4 text-center md:text-left">
  SKU: {product.sku}
</p>

<div className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
  {product.oldPrice && product.oldPrice > product.price ? (
    <>
      <span className="text-red-600">{product.price} UAH</span>
      <span className="line-through text-gray-400 ml-4">{product.oldPrice} UAH</span>
      <span className="text-green-600 text-sm ml-3 hidden">
        -{Math.round(100 - (product.price / product.oldPrice) * 100)}%
      </span>
    </>
  ) : (
    <span>{product.price} UAH</span>
  )}
</div>

<div className="mb-8">
  <label htmlFor="color" className="block text-sm font-medium mb-2 text-center md:text-left">
    {menuItems[1] || "Color"}
  </label>
  <select
    id="color"
    value={selectedColor}
    onChange={(e) => setSelectedColor(e.target.value)}
    className={`w-full md:w-1/2 p-3 border ${colorError ? "border-red-500" : "border-gray-300"} bg-white dark:bg-gray-800 rounded-md text-sm dark:text-gray-200`}
  >
    <option value="">{menuItems[2] || "Select"}</option>
    {(product.translations?.[language]?.colors || product.colors)?.map((color) => (
      <option key={color} value={color}>{color}</option>
    ))}
  </select>
  {colorError && <p className="text-red-500 text-sm mt-2">{colorError}</p>}
</div>

<div className="mb-8">
  <label htmlFor="size" className="block text-sm font-medium mb-2 text-center md:text-left">
    {menuItems[3] || "Size"}
  </label>
  <select
    id="size"
    value={selectedSize}
    onChange={(e) => setSelectedSize(e.target.value)}
    className={`w-full md:w-1/2 p-3 border ${sizeError ? "border-red-500" : "border-gray-300"} bg-white dark:bg-gray-800 rounded-md text-sm dark:text-gray-200`}
  >
    <option value="">{menuItems[2] || "Select"}</option>
    {product.sizes?.map((size) => (
      <option key={size} value={size}>{size}</option>
    ))}
  </select>
  {sizeError && <p className="text-red-500 text-sm mt-2">{sizeError}</p>}

  <div className="mt-4">
    <button
      onClick={() => setShowSizeChart(true)}
      className="text-base font-medium text-blue-600 dark:text-blue-400 underline hover:text-blue-800 transition"
    >
      {menuItems[6] || "Clothing Size Chart"}
    </button>
    {showSizeChart && <SizeChart onClose={() => setShowSizeChart(false)} />}
  </div>
</div>

<div className="mb-8">
  <label htmlFor="quantity" className="block text-sm font-medium mb-2 text-center md:text-left">
    {menuItems[4] || "Quantity"}
  </label>
  <div className="flex items-center w-full md:w-1/4 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
    <button
      type="button"
      onClick={() => handleQuantityChange(quantity - 1)}
      className="w-10 p-2 bg-gray-200 dark:bg-gray-600 text-lg hover:bg-gray-300 dark:hover:bg-gray-500"
    >
      -
    </button>
    <input
      id="quantity"
      type="number"
      value={quantity}
      onChange={(e) => handleQuantityChange(e.target.value)}
      min="1"
      className="w-full text-center bg-transparent border-none outline-none text-sm py-2 dark:text-white"
    />
    <button
      type="button"
      onClick={() => handleQuantityChange(quantity + 1)}
      className="w-10 p-2 bg-gray-200 dark:bg-gray-600 text-lg hover:bg-gray-300 dark:hover:bg-gray-500"
    >
      +
    </button>
  </div>
  {quantityError && <p className="text-red-500 text-sm mt-2">{quantityError}</p>}
</div>

<div className="flex flex-col md:flex-row md:space-x-4 mt-6">
  <button
    onClick={handleAddToCartClick}
    className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-3 rounded-md transition"
  >
    {formTranslations.addToCart || "ADD TO CART"}
  </button>

  <button
    onClick={handleContactClick}
    className="w-full md:w-1/2 bg-gray-800 hover:bg-gray-600 text-white dark:bg-lime-500 dark:hover:bg-lime-600 dark:text-black font-medium px-6 py-3 rounded-md transition mt-3 md:mt-0"
  >
    {menuItems[5] || "Contact Us"}
  </button>
  
  

  
</div>
<div className="mt-12">
<h2 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-white mb-6 text-center md:text-left">
    {menuItems[7] || "PRODUCT INFO"}
  </h2>
 <div className="text-gray-600 dark:text-gray-400 text-base leading-relaxed space-y-3">
    {Array.isArray(translatedDescription) && translatedDescription.map((line, index) => {
      if (line.toLowerCase().includes("details")) {
        return <p key={index} className="font-medium">{line}</p>;
      }
      if (line.trim().startsWith("·")) {
        return (
          <ul key={index} className="list-disc list-inside ml-6">
            <li>{line.replace("·", "").trim()}</li>
          </ul>
        );
      }
      return <p key={index}>{line}</p>;
    })}
  </div>
 </div>
{/*}
      <h1 className="text-2xl md:text-3xl font-normal mb-2 text-center md:text-left">
        {translatedName}
      </h1>
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
      <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base mb-2 text-center md:text-left">
        {menuItems[0]}: <span className="font-normal">{product.category || "Unknown Category"}</span>
      </p>
      <p className="text-gray-800 dark:text-gray-500 text-xs md:text-sm mb-4 text-center md:text-left">
        SKU: {product.sku}
      </p>
<div className="text-xl md:text-2xl font-normal mb-4 text-center md:text-left">
{product.oldPrice && product.oldPrice > product.price ? (
  <>
    <span className="text-red-600">{product.price} UAH</span>
    <span className="line-through text-gray-500 ml-4">{product.oldPrice} UAH</span>
    <span className="text-green-600 text-sm ml-2">
      -{Math.round(100 - (product.price / product.oldPrice) * 100)}%
    </span>
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

*/}
      
    
    </div>
  );
}
