'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../Functions/useLanguage';
import Toast from '../ToastCart/Toast';
import QuickAddModal from '../QuickAddModal/QuickAddModal';
import ProductBanner from '../products/ProductBanner';
import { getSessionId } from '../../utils/session';

const NewArrivalsInfo = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);

  const { language, translateList } = useLanguage();
  const infoLabels = translateList('Infoform', 'header');
  const priceLabel = infoLabels[8] || 'Price';

  const openBanner = (product) => {
    setSelectedProduct(product);
    setShowBanner(true);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAddToCart = async ({ product, selectedColor, selectedSize, quantity }) => {
    const sessionId = getSessionId();

    if (!sessionId) {
      alert('Сесія не знайдена. Спробуйте оновити сторінку.');
      return;
    }

    const name = product.translations?.[language]?.name || product.name || product.title;
    const price = Number(String(product.price).replace(/[^\d.]/g, '')).toFixed(2);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          productId: product.id,
          name,
          price,
          color: selectedColor,
          size: selectedSize,
          quantity,
        }),
      });

      const data = await res.json();

      if (data.success || data.message?.includes('додано')) {
        setLastProduct({ name, price, image: product.image, quantity });
        setShowToast(true);
      } else {
        alert(data.message || 'Помилка при додаванні');
      }
    } catch (error) {
      console.error('❌ API помилка:', error);
    }

    setShowModal(false);
    setShowBanner(false);
  };

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-black dark:text-white mb-8 text-center uppercase">
        Усі новинки
      </h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => {
          const translatedName = product.translations?.[language]?.name || product.name;

          return (
            <article
              key={product.id}
              className="bg-gray-100 dark:bg-[#0f172a] p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div
                onClick={() => openBanner(product)}
                onKeyDown={(e) => e.key === 'Enter' && openBanner(product)}
                role="button"
                tabIndex={0}
                className="relative cursor-pointer group"
                aria-label={`View details for ${translatedName}`}
              >
                <figure className="w-full overflow-hidden rounded relative aspect-[3/4]">
                  <Image
                    src={product.image || `https://via.placeholder.com/300x400?text=${translatedName}`}
                    alt={translatedName || 'Product Image'}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    НОВИНКА
                  </div>
                  <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm sm:text-base font-medium rounded">
                    Переглянути деталі
                  </figcaption>
                </figure>
              </div>

              <section className="mt-3 sm:mt-4">
                <h3 className="text-sm sm:text-lg font-semibold text-center sm:text-left">
                  {translatedName}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mt-1 text-center sm:text-left">
                  <span className="font-semibold">{priceLabel}:</span> {product.price} <span className="text-xs">UAH</span>
                </p>
              </section>

              <div className="mt-3 flex flex-col items-center sm:items-start gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(product);
                  }}
                  className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded transition"
                >
                  Додати в корзину
                </button>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  Натисніть на фото, щоб переглянути деталі
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Банер з детальним переглядом */}
      {showBanner && selectedProduct && (
        <ProductBanner
          selectedProduct={selectedProduct}
          onClose={() => {
            setShowBanner(false);
            setSelectedProduct(null);
          }}
          handleAddToCart={handleAddToCart}
          descriptionRef={null}
          handleContactButtonClick={() => {}}
        />
      )}

      {/* Модалка з вибором кольору/розміру/кількості */}
      {showModal && selectedProduct && (
        <QuickAddModal
          product={selectedProduct}
          onClose={() => {
            setShowModal(false);
            setSelectedProduct(null);
          }}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Toast повідомлення */}
      {showToast && lastProduct && (
        <Toast
          product={lastProduct}
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
};

export default NewArrivalsInfo;
