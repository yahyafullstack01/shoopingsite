import React, { useState } from "react";

export default function FilterSidebar({
  showColorFilter = true,
  showSizeFilter = true,
  maxPrice,
  setMaxPrice,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}) {
  const [isColorOpen, setIsColorOpen] = useState(false); 
  const [isSizeOpen, setIsSizeOpen] = useState(false); 

  const colors = ["Red", "Blue", "Green"]; 
  const sizes = ["S", "M", "L", "XL"]; 

  const handlePriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  const toggleColorMenu = () => setIsColorOpen(!isColorOpen);
  const toggleSizeMenu = () => setIsSizeOpen(!isSizeOpen);

  return (
    <aside className="w-full md:w-1/4 bg-gray-800 p-6 rounded">
      <div className="mb-6">
      <div className="mb-16">
      <h2 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
        Browse by
      </h2>
      <ul className="text-gray-300 space-y-2">
        <li>
          <a href="#" className="hover:text-white underline">
            All Products
          </a>
        </li>
      </ul>
    </div>
        <h2 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
          Filter by
        </h2>

        <div className="text-gray-300 space-y-6">
          {/* Price Filter */}
          <div>
            <label className="block text-sm font-medium mb-2 border-b border-gray-700">
              Price
            </label>
            <div className="flex items-center justify-between text-ml mb-2">
              <span>7.5₴</span>
              <span>{maxPrice}₴</span>
            </div>
            <input
              type="range"
              min="7.5"
              max="130"
              step="0.5"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none focus:outline-none"
            />
          </div>

          {/* Color Filter */}
          {showColorFilter && (
            <div className="relative">
              <div
                className="flex justify-between items-center cursor-pointer border-b border-gray-700 pb-2"
                onClick={toggleColorMenu}
              >
                <label className="block text-sm font-medium">Color</label>
                <span className="text-gray-400 text-lg">+</span>
              </div>
              {isColorOpen && (
                <div className="mt-2 bg-gray-700 rounded p-2">
                  {colors.map((color) => (
                    <div
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className="cursor-pointer p-1 hover:bg-gray-600 rounded"
                    >
                      {color}
                    </div>
                  ))}
                </div>
              )}
              {selectedColor && (
                <div className="text-sm mt-1 text-gray-300">Selected: {selectedColor}</div>
              )}
            </div>
          )}

          {/* Size Filter */}
          {showSizeFilter && (
            <div className="relative">
              <div
                className="flex justify-between items-center cursor-pointer border-b border-gray-700 pb-2"
                onClick={toggleSizeMenu}
              >
                <label className="block text-sm font-medium">Size</label>
                <span className="text-gray-400 text-lg">+</span>
              </div>
              {isSizeOpen && (
                <div className="mt-2 bg-gray-700 rounded p-2">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="cursor-pointer p-1 hover:bg-gray-600 rounded"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              )}
              {selectedSize && (
                <div className="text-sm mt-1 text-gray-300">Selected: {selectedSize}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
