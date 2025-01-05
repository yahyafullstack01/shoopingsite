import React, { useState } from "react";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

const ThumbnailCarousel = ({ images = [], onImageSelect, visibleThumbnails = 5 }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  const handleScrollLeft = () => {
    setThumbnailIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleScrollRight = () => {
    if (thumbnailIndex + visibleThumbnails < images.length) {
      setThumbnailIndex((prev) => prev + 1);
    }
  };
//{Хук для клавіатури}}
  useKeyboardNavigation(handleScrollLeft, handleScrollRight);

  return (
    <div className="relative w-full max-w-lg flex justify-center items-center mt-4">
      {/* Ліва стрілка */}
      <button
        className={`absolute left-0 p-1 bg-white dark:bg-black rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${
          thumbnailIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleScrollLeft}
        disabled={thumbnailIndex === 0}
      >
        {"‹"}
      </button>

      {/* Мініатюри */}
      <div className="flex gap-2 overflow-hidden">
        <div
          className="flex gap-2 transition-transform duration-300"
          style={{
            transform: `translateX(-${thumbnailIndex * 60}px)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 object-cover border rounded cursor-pointer hover:scale-105 ${
                index === thumbnailIndex ? "border-lime-500" : "border-gray-500"
              }`}
              onClick={() => onImageSelect(image)}
            />
          ))}
        </div>
      </div>

      {/* Права стрілка */}
      <button
        className={`absolute right-0 p-1 bg-white dark:bg-black rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${
          thumbnailIndex + visibleThumbnails >= images.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        onClick={handleScrollRight}
        disabled={thumbnailIndex + visibleThumbnails >= images.length}
      >
        {"›"}
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
