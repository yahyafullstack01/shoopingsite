"use client";
import React, { useState } from "react";
import Image from "next/image";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

const ThumbnailCarousel = ({ images = [], onImageSelect }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  const handleScrollLeft = () => {
    const prevIndex = thumbnailIndex - 1 < 0 ? images.length - 1 : thumbnailIndex - 1;
    setThumbnailIndex(prevIndex);
    onImageSelect(images[prevIndex]);
  };

  const handleScrollRight = () => {
    const nextIndex = (thumbnailIndex + 1) % images.length;
    setThumbnailIndex(nextIndex);
    onImageSelect(images[nextIndex]);
  };

  useKeyboardNavigation(handleScrollLeft, handleScrollRight);

  const isVideo = (item) => typeof item === "object" && item.type === "video";
  const getSrc = (item) => (typeof item === "string" ? item : item.src);
  const getPoster = (item) =>
    typeof item === "object" && item.poster ? item.poster : "/default-poster.jpg";

  return (
    <div className="relative max-w-lg flex justify-center items-center mt-2 overflow-visible">
      {/* Ліва стрілка */}
      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        onClick={handleScrollLeft}
        aria-label="Scroll left"
      >
        &lsaquo;
      </button>

      {/* Мініатюри */}
      <div className="flex overflow-hidden px-4">
        <div
          className="flex gap-4 sm:gap-0 transition-transform duration-300"
          style={{
            transform: `translateX(-${thumbnailIndex * 60}px)`,
          }}
        >
          {images.map((item, index) => {
            const src = getSrc(item);
            const poster = getPoster(item);

            return (
              <div key={index} className="w-24 sm:w-32 sm:h-32 relative">
                {isVideo(item) ? (
                  <video
                    width={96}
                    height={96}
                    muted
                    playsInline
                    preload="metadata"
                    poster={poster}
                    className={`border rounded cursor-pointer hover:brightness-150 hover:scale-105 ${
                      index === thumbnailIndex
                        ? "border-black dark:border-white"
                        : "border-gray-500"
                    }`}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                    onClick={() => {
                      setThumbnailIndex(index);
                      onImageSelect(item);
                    }}
                  >
                    <source src={src} type="video/mp4" />

                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    width={96}
                    height={96}
                    style={{ objectFit: "cover" }}
                    className={`border rounded cursor-pointer hover:brightness-150 hover:scale-105 ${
                      index === thumbnailIndex
                        ? "border-black dark:border-white"
                        : "border-gray-500"
                    }`}
                    onClick={() => {
                      setThumbnailIndex(index);
                      onImageSelect(item);
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Права стрілка */}
      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        onClick={handleScrollRight}
        aria-label="Scroll right"
      >
        &rsaquo;
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
