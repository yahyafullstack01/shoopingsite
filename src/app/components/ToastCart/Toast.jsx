'use client';

import { useEffect, useState } from 'react';

const Toast = ({ product, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 1, 0));
    }, 100);

    const timer = setTimeout(() => {
      onClose();
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onClose]);

  const hasDiscount = product.oldPrice && product.oldPrice > product.price;

  return (
    <div className="fixed top-6 right-6 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl w-[360px] p-5 z-50 animate-fade-in-up transition-all duration-300">
      <div className="flex items-center gap-3">
        <img
          src={product.image || `https://via.placeholder.com/80`}
          alt={product.name}
          className="w-20 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="font-normal text-base">{product.name}</p>
          <p className="text-sm mt-1">Кількість: {product.quantity}</p>

          <p className="text-sm mt-1">
            Ціна:{" "}
            {hasDiscount ? (
              <>
                <span className="text-red-600 font-semibold">{product.price} UAH</span>{" "}
                <span className="line-through text-gray-400">{product.oldPrice} UAH</span>
              </>
            ) : (
              <span>{product.price} UAH</span>
            )}
          </p>
        </div>
      </div>

      <div className="relative h-1 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden mt-4">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-sm text-gray-500 hover:text-red-500"
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;
