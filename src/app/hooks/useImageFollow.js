"use client";
import { useState } from "react";

export default function useImageFollow(imagesLength, visibleCount = 5) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesLength - 1 : prevIndex - 1
    );
  };

  const displayedImages = Array(visibleCount)
    .fill(null)
    .map(
      (_, i) =>
        (currentIndex + i) % imagesLength 
    );

  return { currentIndex, displayedImages, handleNext, handlePrev };
}
