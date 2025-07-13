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

  return (
    <div className="fixed top-6 right-6 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl w-[360px] p-5 z-50 animate-fade-in-up transition-all duration-300">
      <div className="flex items-center gap-3">
        <img
          src={product.image || `https://via.placeholder.com/80`}
          alt={product.name}
          className="w-20 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="font-semibold text-base">{product.name}</p>
          <p className="text-sm mt-1">Кількість: {product.quantity}</p>
          <p className="text-sm">Ціна: {product.price} UAH</p>
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
{/*}
'use client';
import { useEffect } from 'react';

const Toast = ({ product, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 10000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-5 right-5 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg w-[300px] p-4 z-50 animate-fade-in-up">
      <div className="flex items-center">
        <img
          src={product.image || `https://via.placeholder.com/80`}
          alt={product.name}
          className="w-16 h-20 object-cover rounded mr-3"
        />
        <div>
          <p className="font-bold text-sm">{product.name}</p>
          <p className="text-xs mt-1">Кількість: {product.quantity}</p>
          <p className="text-xs">Ціна: {product.price} UAH</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
*/}