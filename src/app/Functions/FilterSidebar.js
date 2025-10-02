"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./useLanguage";
import { FiFilter } from "react-icons/fi";

export default function FilterSidebar({
  /** поточне обране максимальне значення слайдера */
  maxPrice,
  /** setter для maxPrice */
  setMaxPrice,
  /** ДИНАМІЧНА СТЕЛЯ — максимальна ціна серед усіх товарів */
  priceLimit,
  selectedSize,
  handleSizeSelect,
  selectedCategory,
  handleCategorySelect,
  children,
}) {
  const { translateList } = useLanguage();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // межі слайдера
  const PRICE_MIN = 100;
  const PRICE_MAX = Math.max(PRICE_MIN, Number(priceLimit) || 10000);

  // 🔍 Перевірка ширини екрану
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const menuItems = translateList("Filtersidebar", "header") || [];
  const selectLabel = translateList("Infoform", "header")[2] || "Select";

  const originalCategories = [
    "All", "Costumes", "Dresses", "Shirts", "Skirts",
    "Sweaters", "Pants", "Jackets", "Tops", "Outerwear", "Shorts"
  ];
  const translatedCategories = Array.isArray(translateList("Filtersidebar", "Categories"))
    ? translateList("Filtersidebar", "Categories")
    : originalCategories;

  const categoryMap = Object.fromEntries(
    translatedCategories.map((label, i) => [label, originalCategories[i]])
  );
  const categoryReverseMap = Object.fromEntries(
    originalCategories.map((key, i) => [key.toLowerCase(), translatedCategories[i]])
  );

  const originalSizes = ["All", "XS", "S", "M", "L", "XL"]; // додав XS, щоб не ламався фільтр
  const translatedSizes = Array.isArray(translateList("Filtersidebar", "SizeCatalogue"))
    ? translateList("Filtersidebar", "SizeCatalogue")
    : originalSizes;

  const sizeMap = Object.fromEntries(
    translatedSizes.map((label, i) => [label, originalSizes[i]])
  );

  const handlePriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  const resetAll = () => {
    handleCategorySelect("");   // не "All", а порожній рядок
    handleSizeSelect("");
    setMaxPrice(PRICE_MAX);     // скидаємо до реального максимуму
  };

  // 🖥 Десктоп
  if (!isMobile) {
    return (
      <div className="sticky top-16 z-30 bg-gray-100 dark:bg-black border-b border-gray-300 dark:border-gray-700 px-4 py-4 rounded-md shadow-md">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {/* Категорія */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 flex items-center gap-1">
              📂 {menuItems[7] || "Category"}
            </label>
            <select
              value={categoryReverseMap[selectedCategory?.toLowerCase()] || "All"}
              onChange={(e) =>
                handleCategorySelect(
                  e.target.value === "All" ? "" : categoryMap[e.target.value]
                )
              }
              className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
            >
              {translatedCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Розмір */}
          <div className="flex flex-col ml-8">
            <label className="text-sm font-medium mb-1 flex items-center gap-1">
              📏 {menuItems[4] || "Size"}
            </label>
            <select
              value={selectedSize || "All"}
              onChange={(e) =>
                handleSizeSelect(e.target.value === "All" ? "" : e.target.value)
              }
              className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
            >
              {translatedSizes.map((size) => (
                <option key={size} value={sizeMap[size]}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Ціна */}
          <div className="flex flex-col ml-8">
            <label className="text-sm font-medium mb-1 flex items-center gap-1">
              💰 {menuItems[3] || "Price"}
            </label>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
              <span>{PRICE_MIN}</span>
              <span>{maxPrice}</span>
            </div>
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step="10"
              value={Math.min(maxPrice, PRICE_MAX)}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none"
            />
          </div>

          {/* Сортування + Скидання */}
          <div className="flex flex-col ml-8">
            <label className="text-sm font-medium mb-1 invisible">Sort</label>
            <div className="flex items-center justify-between gap-2">
              {children}
              <button
                className="text-sm text-blue-600 hover:underline whitespace-nowrap"
                onClick={resetAll}
              >
                🔄 {menuItems[10] || "Reset"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 📱 Мобільна версія
  return (
    <>
      <button
        className="md:hidden fixed bottom-6 right-6 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex flex-col items-center justify-center gap-1 z-50 animate-bounce"
        onClick={() => setIsFilterOpen(true)}
        aria-label="Open Filters"
      >
        <FiFilter size={24} />
        <span className="text-xs font-medium">{menuItems[8]}</span>
      </button>

      {isFilterOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      <aside
        className={`w-full bg-white dark:bg-[#0f172a] p-4 sm:p-6 rounded-t-3xl shadow-2xl fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isFilterOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-950 dark:border-gray-700 pb-2">
          {menuItems[2] || "Filters"}
        </h2>

        <div className="grid grid-cols-2 gap-4 md:block">
          {/* Категорія */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              📂 {menuItems[7] || "Category"}
            </label>
            <select
              value={categoryReverseMap[selectedCategory?.toLowerCase()] || "All"}
              onChange={(e) =>
                handleCategorySelect(
                  e.target.value === "All" ? "" : categoryMap[e.target.value]
                )
              }
              className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            >
              {translatedCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Розмір */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              📏 {menuItems[4] || "Size"}
            </label>
            <select
              value={selectedSize || "All"}
              onChange={(e) =>
                handleSizeSelect(e.target.value === "All" ? "" : e.target.value)
              }
              className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            >
              {translatedSizes.map((size) => (
                <option key={size} value={sizeMap[size]}>{size}</option>
              ))}
            </select>
          </div>

          {/* Ціна */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1 dark:text-white">
              💰 {menuItems[3] || "Price"}
            </label>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
              <span>{PRICE_MIN}</span>
              <span>{maxPrice}</span>
            </div>
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step="10"
              value={Math.min(maxPrice, PRICE_MAX)}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none"
            />
          </div>

          {/* Сортування + Скидання */}
          <div className="col-span-2 flex items-center justify-between gap-2 mt-2">
            {children}
            <button
              className="text-sm text-blue-600 hover:underline whitespace-nowrap"
              onClick={resetAll}
            >
              🔄 {menuItems[10] || "Reset"}
            </button>
          </div>
        </div>

        <div className="w-full mt-6 md:hidden">
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => setIsFilterOpen(false)}
          >
            {menuItems[9] || "Close filters"}
          </button>
        </div>
      </aside>
    </>
  );
}
{/*"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./useLanguage";
import { FiFilter } from "react-icons/fi";

export default function FilterSidebar({
  maxPrice,
  setMaxPrice,
  selectedSize,
  handleSizeSelect,
  selectedCategory,
  handleCategorySelect,
  children,
}) {
  const { translateList } = useLanguage();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔍 Перевірка ширини екрану
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const menuItems = translateList("Filtersidebar", "header") || [];
  const selectLabel = translateList("Infoform", "header")[2] || "Select";

  const originalCategories = [
    "All", "Costumes", "Dresses", "Shirts", "Skirts",
    "Sweaters", "Pants", "Jackets", "Tops", "Outerwear", "Shorts"
  ];
  const translatedCategories = Array.isArray(translateList("Filtersidebar", "Categories"))
    ? translateList("Filtersidebar", "Categories")
    : originalCategories;
  const categoryMap = Object.fromEntries(
    translatedCategories.map((label, i) => [label, originalCategories[i]])
  );
  const categoryReverseMap = Object.fromEntries(
    originalCategories.map((key, i) => [key.toLowerCase(), translatedCategories[i]])
  );

  const originalSizes = ["All", "S", "M", "L", "XL"];
  const translatedSizes = Array.isArray(translateList("Filtersidebar", "SizeCatalogue"))
    ? translateList("Filtersidebar", "SizeCatalogue")
    : originalSizes;
  const sizeMap = Object.fromEntries(
    translatedSizes.map((label, i) => [label, originalSizes[i]])
  );

  const handlePriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  // 🖥 Горизонтальний вигляд (десктоп)
  if (!isMobile) {
    return (
      <div className="sticky top-16 z-30 bg-gray-100 dark:bg-black border-b border-gray-300 dark:border-gray-700 px-4 py-4 rounded-md shadow-md">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
      
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 flex items-center gap-1">
              📂 {menuItems[7] || "Category"}
            </label>
            <select
              value={categoryReverseMap[selectedCategory?.toLowerCase()] || "All"}
              onChange={(e) =>
                handleCategorySelect(
                  e.target.value === "All" ? "" : categoryMap[e.target.value]
                )
              }
              className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
            >
              {translatedCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          
          <div className="flex flex-col ml-8">
            <label className="text-sm font-medium mb-1 flex items-center gap-1">
              📏 {menuItems[4] || "Size"}
            </label>
            <select
              value={selectedSize || "All"}
              onChange={(e) =>
                handleSizeSelect(e.target.value === "All" ? "" : e.target.value)
              }
              className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-800 dark:text-white"
            >
              {translatedSizes.map((size) => (
                <option key={size} value={sizeMap[size]}>
                  {size}
                </option>
              ))}
            </select>
          </div>

        
          <div className="flex flex-col ml-8">
            <label className="text-sm font-medium mb-1 flex items-center gap-1">
              💰 {menuItems[3] || "Price"}
            </label>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
              <span>100</span>
              <span>{maxPrice}</span>
            </div>
            <input
              type="range"
              min="100"
              max="7500"
              step="10"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none"
            />
          </div>

          
          <div className="flex flex-col ml-8">
            <label className="text-sm font-medium mb-1 invisible">Sort</label>
            <div className="flex items-center justify-between gap-2">
              {children}
              <button
                className="text-sm text-blue-600 hover:underline whitespace-nowrap"
                onClick={() => {
                  handleCategorySelect("All");
                  handleSizeSelect("");
                  setMaxPrice(5500);
                }}
              >
                🔄 {menuItems[10] || "Reset"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 📱 Мобільна версія з кнопкою
  return (
    <>
      
      <button
        className="md:hidden fixed bottom-6 right-6 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex flex-col items-center justify-center gap-1 z-50 animate-bounce"
        onClick={() => setIsFilterOpen(true)}
        aria-label="Open Filters"
      >
        <FiFilter size={24} />
        <span className="text-xs font-medium">{menuItems[8]}</span>
      </button>

    
      {isFilterOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

    
      <aside
        className={`w-full bg-white dark:bg-[#0f172a] p-4 sm:p-6 rounded-t-3xl shadow-2xl fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isFilterOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-950 dark:border-gray-700 pb-2">
          {menuItems[2] || "Filters"}
        </h2>

        <div className="grid grid-cols-2 gap-4 md:block">
      
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              📂 {menuItems[7] || "Category"}
            </label>
            <select
              value={categoryReverseMap[selectedCategory?.toLowerCase()] || "All"}
              onChange={(e) =>
                handleCategorySelect(
                  e.target.value === "All" ? "" : categoryMap[e.target.value]
                )
              }
              className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            >
              {translatedCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-white">
              📏 {menuItems[4] || "Size"}
            </label>
            <select
              value={selectedSize || "All"}
              onChange={(e) =>
                handleSizeSelect(e.target.value === "All" ? "" : e.target.value)
              }
              className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            >
              {translatedSizes.map((size) => (
                <option key={size} value={sizeMap[size]}>{size}</option>
              ))}
            </select>
          </div>

      
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1 dark:text-white">
              💰 {menuItems[3] || "Price"}
            </label>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
              <span>100</span>
              <span>{maxPrice}</span>
            </div>
            <input
              type="range"
              min="100"
              max="5500"
              step="10"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none"
            />
          </div>

          
          <div className="col-span-2 flex items-center justify-between gap-2 mt-2">
            {children}
            <button
              className="text-sm text-blue-600 hover:underline whitespace-nowrap"
              onClick={() => {
                handleCategorySelect("All");
                handleSizeSelect("");
                setMaxPrice(5500);
              }}
            >
              🔄 {menuItems[10] || "Reset"}
            </button>
          </div>
        </div>

        <div className="w-full mt-6 md:hidden">
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => setIsFilterOpen(false)}
          >
            {menuItems[9] || "Close filters"}
          </button>
        </div>
      </aside>
    </>
  );
}
*/}