"use client";
import { useState, useEffect } from "react";

// Хук для управления последовательностью изображений с автопрокруткой
// imagesLength — общее количество изображений
// visibleCount — количество видимых изображений
// autoScrollDelay — задержка автопрокрутки в миллисекундах
export default function useImageFollow(imagesLength, visibleCount = 5, autoScrollDelay = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0); // Индекс текущего изображения

  // Обработчик для перехода к следующему изображению
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
  };

  // Обработчик для перехода к предыдущему изображению
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesLength - 1 : prevIndex - 1
    );
  };

  // Эффект для автоматической прокрутки изображений через указанный промежуток времени
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Переход к следующему изображению
    }, autoScrollDelay);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [autoScrollDelay]);

  // Вычисляем массив индексов отображаемых изображений
  const displayedImages = Array.from({ length: visibleCount }).map(
    (_, i) => (currentIndex + i) % imagesLength
  );

  // Возвращаем текущий индекс, массив отображаемых изображений и обработчики переключения
  return { currentIndex, displayedImages, handleNext, handlePrev };
}
