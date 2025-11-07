'use client';
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";

const ThumbnailCarousel = ({ images = [], onImageSelect }) => {
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  // refs для прокрутки контейнерів
  const itemRefs = useRef([]);
  // refs для самих <video>, щоб мати змогу ставити на паузу всі разом
  const videoRefs = useRef([]);
  // один таймер для debouce hover-відтворення
  const hoverTimerRef = useRef(null);

  const isVideo   = (item) => typeof item === "object" && item?.type === "video";
  const getSrc    = (item) => (typeof item === "string" ? item : item?.src || "");
  const getPoster = (item) =>
    typeof item === "object" && item?.poster ? item.poster : "/default-poster.jpg";

  const safePlay = (videoEl) => {
    if (!videoEl) return;
    const p = videoEl.play?.();
    if (p && typeof p.catch === "function") p.catch(() => {}); // глушимо AbortError
  };

  const safePause = (videoEl) => {
    try {
      if (videoEl?.pause) {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    } catch {}
  };

  const pauseAllVideos = () => {
    videoRefs.current.forEach((v) => safePause(v));
  };

  const handleScrollLeft = () => {
    const prevIndex = thumbnailIndex - 1 < 0 ? images.length - 1 : thumbnailIndex - 1;
    pauseAllVideos();
    setThumbnailIndex(prevIndex);
    onImageSelect?.(images[prevIndex]);
  };

  const handleScrollRight = () => {
    const nextIndex = (thumbnailIndex + 1) % images.length;
    pauseAllVideos();
    setThumbnailIndex(nextIndex);
    onImageSelect?.(images[nextIndex]);
  };

  useKeyboardNavigation(handleScrollLeft, handleScrollRight);

  // плавно доскролюємо активний елемент у видимість
  useEffect(() => {
    itemRefs.current[thumbnailIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [thumbnailIndex]);

  // при розмонтуванні — прибираємо таймер і ставимо паузу
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
      pauseAllVideos();
    };
  }, []);

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
          const isLocal = typeof src === "string" && src.startsWith("/");

          const selectThis = () => {
            pauseAllVideos();
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
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  width={96}
                  height={96}
                  muted
                  playsInline
                  preload="metadata"
                  poster={poster}
                  className={`border rounded cursor-pointer object-cover h-full w-full hover:brightness-150 hover:scale-105 transition-transform duration-300 ${
                    index === thumbnailIndex ? "border-black dark:border-white" : "border-gray-500"
                  }`}
                  // дебаунсимо старт відтворення при наведенні
                  onMouseEnter={(e) => {
                    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
                    const el = e.currentTarget;
                    hoverTimerRef.current = setTimeout(() => safePlay(el), 120);
                  }}
                  onMouseLeave={(e) => {
                    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
                    safePause(e.currentTarget);
                  }}
                  onClick={selectThis}
                  onPlay={(e) => e.currentTarget.play().catch(() => {})}
                >
                  <source src={src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={96}
                  height={96}
                  className={`border rounded cursor-pointer hover:brightness-150 hover:scale-105 transition-transform duration-300 h-full w-full ${
                    index === thumbnailIndex ? "border-black dark:border-white" : "border-gray-500"
                  }`}
                  style={{ objectFit: "cover" }}
                  onClick={selectThis}
                  unoptimized={isLocal}
                  loader={isLocal ? ({ src }) => src : undefined}
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
