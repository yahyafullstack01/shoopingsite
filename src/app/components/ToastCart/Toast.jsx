'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProductImageSrc } from '../../utils/productData';
import { useLanguage } from '../../Functions/useLanguage';

const Toast = ({ product, onClose }) => {
  const [progress, setProgress] = useState(100);
  const { translateList } = useLanguage();
  const rawCart = translateList('home', 'cart');
  const cartTranslations =
    typeof rawCart === 'object' && rawCart !== null ? rawCart : {};
  const goToCartLabel = cartTranslations.goToCart || 'Go to cart';

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
    <div className="fixed top-6 right-6 z-[300] w-[360px] max-w-[calc(100vw-1.5rem)] animate-fade-in-up rounded-xl border border-gray-300 bg-white p-5 text-black shadow-xl transition-all duration-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
      <div className="flex items-center gap-3">
        <img
          src={getProductImageSrc(product.image)}
          alt={product.name}
          className="h-24 w-20 rounded-lg object-cover"
        />
        <div className="flex-1">
          <p className="text-base font-normal">{product.name}</p>
          <p className="mt-1 text-sm">Кількість: {product.quantity}</p>

          <p className="mt-1 text-sm">
            Ціна:{' '}
            {hasDiscount ? (
              <>
                <span className="font-semibold text-red-600">
                  {product.price} UAH
                </span>{' '}
                <span className="text-gray-400 line-through">
                  {product.oldPrice} UAH
                </span>
              </>
            ) : (
              <span>{product.price} UAH</span>
            )}
          </p>
        </div>
      </div>

      <Link
        href="/Cart"
        onClick={onClose}
        className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#22c55e] py-3 text-sm font-semibold text-white transition hover:bg-[#16a34a]"
      >
        {goToCartLabel}
      </Link>

      <div className="relative mt-4 h-1 overflow-hidden rounded bg-gray-300 dark:bg-gray-700">
        <div
          className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-2 text-sm text-gray-500 hover:text-red-500"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;
