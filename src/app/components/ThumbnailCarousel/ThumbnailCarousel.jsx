'use client';
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

const ThumbnailCarousel = ({ images = [], onImageSelect }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  // refs для прокрутки контейнерів
  const itemRefs = useRef([]);

  const isVideo   = (item) => typeof item === "object" && item?.type === "video";
  const getSrc    = (item) => (typeof item === "string" ? item : item?.src || "");
  const getPoster = (item) =>
    typeof item === "object" && item?.poster ? item.poster : "/default-poster.jpg";

  const handleScrollLeft = () => {
    const prevIndex = thumbnailIndex - 1 < 0 ? images.length - 1 : thumbnailIndex - 1;
    setThumbnailIndex(prevIndex);
    onImageSelect?.(images[prevIndex]);
  };

  const handleScrollRight = () => {
    const nextIndex = (thumbnailIndex + 1) % images.length;
    setThumbnailIndex(nextIndex);
    onImageSelect?.(images[nextIndex]);
  };

  useKeyboardNavigation(handleScrollLeft, handleScrollRight);

  // Scroll active thumb into view — avoid smooth scrollIntoView on iOS Safari
  // (can crash WebKit inside overflow/modal containers).
  useEffect(() => {
    const el = itemRefs.current[thumbnailIndex];
    if (!el || typeof el.scrollIntoView !== "function") return;
    try {
      const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "instant" in Element.prototype ? "instant" : "auto",
        inline: "center",
        block: "nearest",
      });
    } catch {
      /* ignore */
    }
  }, [thumbnailIndex]);

  return (
    <div className="relative flex justify-center items-center mt-2">
      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400"
        onClick={handleScrollLeft}
        aria-label="Scroll left"
      >
        &lsaquo;
      </button>

      <div className="flex overflow-hidden px-4 gap-4 sm:gap-2 scroll-smooth">
        {images.map((item, index) => {
          const src = getSrc(item);
          const poster = getPoster(item);

          const selectThis = () => {
            setThumbnailIndex(index);
            onImageSelect?.(item);
          };

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="w-24 sm:w-32 h-36 sm:h-48 shrink-0 relative"
            >
              {isVideo(item) ? (
                <Image
                  src={poster.includes(" ") ? encodeURI(poster) : poster}
                  alt={`Thumbnail ${index + 1}`}
                  width={128}
                  height={160}
                  sizes="96px"
                  className={`border rounded cursor-pointer object-cover h-full w-full hover:brightness-150 hover:scale-105 transition-transform duration-300 ${
                    index === thumbnailIndex ? "border-black dark:border-white" : "border-gray-500"
                  }`}
                  style={{ objectFit: "cover" }}
                  onClick={selectThis}
                  quality={60}
                />
              ) : (
                <Image
                  src={src.includes(" ") ? encodeURI(src) : src}
                  alt={`Thumbnail ${index + 1}`}
                  width={128}
                  height={160}
                  sizes="96px"
                  className={`border rounded cursor-pointer hover:brightness-150 hover:scale-105 transition-transform duration-300 h-full w-full ${
                    index === thumbnailIndex ? "border-black dark:border-white" : "border-gray-500"
                  }`}
                  style={{ objectFit: "cover" }}
                  onClick={selectThis}
                  quality={60}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        className="text-black dark:text-gray-300 text-2xl sm:text-3xl mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400"
        onClick={handleScrollRight}
        aria-label="Scroll right"
      >
        &rsaquo;
      </button>
    </div>
  );
};

export default ThumbnailCarousel;
