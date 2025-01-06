import React, { useState, useEffect } from "react";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

const ThumbnailCarousel = ({ images = [], onImageSelect, visibleThumbnails = 5 }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  // Таймер для автоматичної зміни зображення
  useEffect(() => {
    const interval = setInterval(() => {
      setThumbnailIndex((prev) =>
        prev + 1 >= images.length ? 0 : prev + 1 // Переходить на перший елемент, якщо досягнуто кінця
      );
      onImageSelect(images[thumbnailIndex]); // Змінює велике зображення
    }, 3000); // Інтервал у 3 секунди

    return () => clearInterval(interval); // Очищення інтервалу при виході
  }, [images, thumbnailIndex, onImageSelect]);

  const handleScrollLeft = () => {
    setThumbnailIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const handleScrollRight = () => {
    setThumbnailIndex((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
  };

  // Хук для клавіатурної навігації
  useKeyboardNavigation(handleScrollLeft, handleScrollRight);

  return (
    <div className="relative w-full max-w-lg flex justify-center items-center mt-4 overflow-visible">
      {/* Ліва стрілка */}
      <button
        className="absolute left-2 p-2 bg-[#2e1f14] dark:bg-black rounded-full shadow-lg  hover:bg-gray-400 dark:hover:bg-gray-700"
        style={{ color: "white" }}
        onClick={handleScrollLeft}
      >
        {"‹"}
      </button>

      {/* Мініатюри */}
      <div className="flex gap-2 overflow-hidden px-8">
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
              className={`w-24 h-24 object-cover border rounded cursor-pointer hover:brightness-150 hover:scale-105 ${
                index === thumbnailIndex ? "border-white" : "border-gray-500"
              }`}
              onClick={() => {
                setThumbnailIndex(index); 
                onImageSelect(image); 
              }}
            />
          ))}
        </div>
      </div>

      {/* Права стрілка */}
      <button
        className="absolute right-2 p-2 bg-[#2e1f14] dark:bg-black rounded-full shadow-lg hover:bg-gray-400 dark:hover:bg-gray-700"
        style={{ color: "white" }}
        onClick={handleScrollRight}
      >
        {"›"}
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
