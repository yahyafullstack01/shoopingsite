import React, { useState } from "react";
import { useLanguage } from "./useLanguage";
export default function FilterSidebar({
  showSizeFilter = true,
  maxPrice,
  setMaxPrice,
  selectedSize,
  handleSizeSelect,
  selectedCategory,
  handleCategorySelect,
  children,
}) {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("Filtersidebar", "header");
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const menuBar = translateList("SortMenu", "SizCatalogues");

  const sizes = ["All", "S", "M", "L", "XL"];
  const categories = [
    "All",
    "Costumes",
    "Suits",
    "Dress",
    "Shirts",
    "Skirts",
    "Sweaters",
    "T-shirt",
    "Jeans",
    "Jacket",
    "Tops",
    "Outerwear",
  ];

  const handlePriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  const toggleSizeMenu = () => setIsSizeOpen(!isSizeOpen);
  const toggleCategoryMenu = () => setIsCategoryOpen(!isCategoryOpen);

  return (
    <aside className="w-full md:w-1/4 bg-gray-300 p-4 sm:p-6 rounded-lg shadow-2xl dark:bg-[#0f172a] dark:shadow-[0_0_20px_10px_rgba(59,130,246,0.4)]" aria-label="Filter Sidebar">
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-900 dark:border-gray-700 pb-2">
        {menuItems[0]}
        </h2>
        <ul className="text-gray-950 dark:text-gray-300 space-y-2">
          <li>
            <a href="#" className="hover:text-grey dark:hover:text-white underline">
            {menuItems[1]}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-950 dark:border-gray-700 pb-2">
        {menuItems[2]}
        </h2>

        <div className="text-gray dark:text-gray-300 space-y-6">
          {/* Price Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">{menuItems[3]}</label>
            <div className="flex items-center justify-between text-sm sm:text-base mb-2">
              <span>100₴</span>
              <span>{maxPrice}₴</span>
            </div>
            <input
              type="range"
              min="100"
              max="5500"
              step="10"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full h-1 bg-gray-800 dark:bg-gray-700 rounded-lg appearance-none focus:outline-none"
            />
          </div>

          {/* Size Filter */}
          {showSizeFilter && (
            <div className="relative">
              <div
                className="flex justify-between items-center cursor-pointer border-b border-gray-800 dark:border-gray-700 pb-2"
                onClick={toggleSizeMenu}
              >
                <label className="block text-sm font-medium">{menuItems[4]}</label>
                <span className={`text-gray-400 text-lg ${isSizeOpen ? "-" : "+"}`}></span>
              </div>
              {isSizeOpen && (
                <div className="mt-2 bg-gray-400 dark:bg-gray-700 rounded p-2">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      onClick={() => {
                        handleSizeSelect(size);
                        toggleSizeMenu();
                      }}
                      className={`cursor-pointer p-1 rounded ${
                        selectedSize === size || (size === menuItems[6] && selectedSize === "")
                          ? "dark:bg-blue-500 text-gray dark:text-white"
                          : "hover:bg-gray-600 text-gray bg-gray-300 dark:bg-[#64748b48] dark:text-gray-300"
                      }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              )}
              <div className="text-sm mt-1 dark:text-gray-300">{menuItems[5]}: {selectedSize || menuItems[6]}</div>
            </div>
          )}

          {/* Category Filter */}
          <div className="relative">
            <div
              className="flex justify-between items-center cursor-pointer border-b border-gray-700 pb-2"
              onClick={toggleCategoryMenu}
            >
              <label className="block text-sm font-medium">{menuItems[7]}</label>
              <span className={`text-gray-600 dark:text-gray-400 text-lg ${isCategoryOpen ? "-" : "+"}`}></span>
            </div>
            {isCategoryOpen && (
              <div className="mt-2 bg-gray-400 dark:bg-gray-700 rounded p-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    onClick={() => {
                      handleCategorySelect(category);
                      toggleCategoryMenu();
                    }}
                    className={`cursor-pointer p-1 rounded ${
                      selectedCategory === category || (category === menuItems[6] && selectedCategory === "")
                        ? "dark:bg-blue-500 text-gray dark:text-white"
                        : "hover:bg-gray-600 text-gray bg-gray-300 dark:bg-[#64748b48] dark:text-gray-300"
                    }`}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
            <div className="text-sm mt-1 text-gray dark:text-gray-300">{menuItems[5]}: {selectedCategory || menuItems[6]}</div>
          </div>

          {/* Sort Menu */}
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </aside>
  );
}