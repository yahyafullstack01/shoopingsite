'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../Functions/useLanguage';
import Toast from '../ToastCart/Toast';
import QuickAddModal from '../QuickAddModal/QuickAddModal';
import ProductBanner from '../products/ProductBanner';
import { getSessionId } from '../../utils/session';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { getFavorites, toggleFavorite } from '../../utils/favorites';
import { PRIORITY_NEW, prioritizeByIds } from '../../utils/priorities';

// хелпер для стабільного ID
const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

const NewArrivalsInfo = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);
  const [favorites, setFavorites] = useState(getFavorites());

  const { language, translateList } = useLanguage();
  const infoLabels = translateList('Infoform', 'header');
  const priceLabel = infoLabels[8] || 'Price';

  // 1) беремо лише новинки
  const onlyNew = useMemo(
    () => (Array.isArray(products) ? products.filter((p) => p.isNew === true) : []),
    [products]
  );

  // 2) застосовуємо пріоритети новинок
  const orderedNew = useMemo(
    () => prioritizeByIds(onlyNew, PRIORITY_NEW),
    [onlyNew]
  );

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

    const id = getId(product);
    const name = product.translations?.[language]?.name || product.name || product.title || 'Product';

    // підтримка ціни зі знижкою
    const basePriceNum = Number(String(product.price).replace(/[^\d.]/g, '')) || 0;
    const discountNum = product?.discountPrice
      ? Number(String(product.discountPrice).replace(/[^\d.]/g, '')) || basePriceNum
      : null;

    const price = basePriceNum.toFixed(2);
    const discountPrice = discountNum !== null ? discountNum.toFixed(2) : null;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          productId: id,
          name,
          price,           // базова ціна
          discountPrice,   // якщо є знижка — передаємо
          color: selectedColor,
          size: selectedSize,
          quantity,
        }),
      });

      const data = await res.json();
      if (data?.success || data?.message?.includes('додано')) {
        setLastProduct({
          name,
          price: discountPrice || price,
          image: product.image,
          quantity,
        });
        setShowToast(true);
      } else {
        alert(data?.message || 'Помилка при додаванні');
      }
    } catch (error) {
      console.error('❌ API помилка:', error);
      alert('Помилка при додаванні до кошика');
    }

    setShowModal(false);
    setShowBanner(false);
  };

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleFavoriteToggle = (productId) => {
    const updated = toggleFavorite(productId);
    setFavorites(updated);
  };

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-black dark:text-white mb-8 text-center uppercase">
        Усі новинки
      </h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {orderedNew.map((product) => {
          const translatedName = product.translations?.[language]?.name || product.name || 'Товар';
          const pid = getId(product);
          const isFav = favorites.includes(pid);
          const cleanPrice = String(product.price).replace(/[^\d.]/g, '');
          const productUrl = `/product/${pid}`;

          return (
            <article
              key={pid}
              className="bg-gray-100 dark:bg-[#0f172a] p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* schema.org */}
              <meta itemProp="name" content={translatedName} />
              <link itemProp="url" href={productUrl} />

              <div
                onClick={() => openBanner(product)}
                onKeyDown={(e) => e.key === 'Enter' && openBanner(product)}
                role="button"
                tabIndex={0}
                className="relative cursor-pointer group"
                aria-label={`View details for ${translatedName}`}
              >
                <figure className="w-full overflow-hidden rounded relative aspect-[3/4]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFavoriteToggle(pid);
                    }}
                    className={`absolute top-2 right-2 text-xl z-10 transition duration-300 ${
                      isFav ? 'text-red-600' : 'text-gray-400'
                    }`}
                    aria-label="Додати в улюблене"
                  >
                    {isFav ? <FaHeart /> : <FaRegHeart />}
                  </button>

                  <Image
                    src={
                      product.image ||
                      `https://via.placeholder.com/300x400?text=${encodeURIComponent(translatedName)}`
                    }
                    alt={translatedName || 'Product Image'}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                    itemProp="image"
                  />
                  <div className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                    НОВИНКА
                  </div>
                  <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm sm:text-base font-medium rounded">
                    Переглянути деталі
                  </figcaption>
                </figure>
              </div>

              <section className="mt-3 sm:mt-4">
                <h3 className="text-sm sm:text-lg font-normal text-center sm:text-left">
                  {translatedName}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mt-1 text-center sm:text-left">
                  <span className="font-semibold">{priceLabel}:</span>{' '}
                  {product.price} <span className="text-xs">UAH</span>
                </p>
              </section>

              {/* Offer для Product (schema.org) */}
              <div itemProp="offers" itemScope itemType="https://schema.org/Offer" className="hidden">
                <meta itemProp="priceCurrency" content="UAH" />
                <meta itemProp="price" content={cleanPrice || '0'} />
                <link itemProp="availability" href="https://schema.org/InStock" />
                <link itemProp="url" href={productUrl} />
              </div>

              <div className="mt-3 flex flex-col items-center sm:items-start gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(product);
                  }}
                  className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded transition"
                >
                  ДОДАТИ В КОШИК
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

      {/* Toast */}
      {showToast && lastProduct && (
        <Toast product={lastProduct} onClose={() => setShowToast(false)} />
      )}
    </section>
  );
};

export default NewArrivalsInfo;
