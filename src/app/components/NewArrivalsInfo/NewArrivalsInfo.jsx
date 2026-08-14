"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";
import Toast from "../ToastCart/Toast";
import QuickAddModal from "../QuickAddModal/QuickAddModal";
import ProductBanner from "../products/ProductBanner";
import { getSessionId } from "../../utils/session";
import { getBackendBaseUrl } from "../../utils/backendUrl";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getFavorites, toggleFavorite } from "../../utils/favorites";
// хелпер для стабільного ID
const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

// допоміжна функція для вибору картинки (та сама, що в OffersInfo)
const getProductSrc = (product) => {
  const raw =
    product.image ||
    (Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : null) ||
    "/placeholder/300x400.jpg";

  if (typeof raw === "string") return raw.includes(" ") ? encodeURI(raw) : raw;

  if (raw && typeof raw === "object" && typeof raw.src === "string") {
    return raw.src;
  }

  return "/placeholder/300x400.jpg";
};

const NewArrivalsInfo = ({ products, prefetchedProduct = null }) => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);
  const [favorites, setFavorites] = useState(getFavorites());

  const { language, translateList } = useLanguage();
  const infoLabels = translateList("Infoform", "header");
  const priceLabel = infoLabels[8] || "Price";
  const pageTranslations = translateList("home", "newArrivalsPage") || {};

  const orderedNew = useMemo(
    () => (Array.isArray(products) ? products : []),
    [products]
  );

  const openBanner = (product) => {
    setSelectedProduct(product);
    setShowBanner(true);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAddToCart = async ({
    product,
    selectedColor,
    selectedSize,
    quantity,
  }) => {
    const sessionId = getSessionId();
    if (!sessionId) {
      alert(pageTranslations.sessionNotFound || "Session not found. Try refreshing the page.");
      return;
    }

    const id = getId(product);
    const name =
      product.translations?.[language]?.name ||
      product.name ||
      product.title ||
      pageTranslations.productFallback || "Product";

    // підтримка ціни зі знижкою
    const basePriceNum =
      Number(String(product.price).replace(/[^\d.]/g, "")) || 0;
    const discountNum = product?.discountPrice
      ? Number(
          String(product.discountPrice).replace(/[^\d.]/g, "")
        ) || basePriceNum
      : null;

    const price = basePriceNum.toFixed(2);
    const discountPrice =
      discountNum !== null ? discountNum.toFixed(2) : null;

    try {
      const res = await fetch(
        `${getBackendBaseUrl()}/api/cart`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            productId: id,
            name,
            price, // базова ціна
            discountPrice, // якщо є знижка — передаємо
            color: selectedColor,
            size: selectedSize,
            quantity,
          }),
        }
      );

      const data = await res.json();
      if (data?.success || data?.message?.includes("додано")) {
        setLastProduct({
          name,
          price: discountPrice || price,
          image: product.image,
          quantity,
        });
        setShowToast(true);
      } else {
        alert(data?.message || pageTranslations.errorAdding || "Error adding");
      }
    } catch (error) {
      console.error("❌ API error:", error);
      alert(pageTranslations.errorAdding || "Error adding to cart");
    }

    setShowModal(false);
    setShowBanner(false);
  };

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  useEffect(() => {
    if (productId && prefetchedProduct && String(prefetchedProduct.id) === productId) {
      setSelectedProduct(prefetchedProduct);
      setShowBanner(true);
      return;
    }
    if (!productId) {
      setShowBanner(false);
      setSelectedProduct(null);
    }
  }, [productId, prefetchedProduct]);

  const handleFavoriteToggle = (productId) => {
    const updated = toggleFavorite(productId);
    setFavorites(updated);
  };

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300">
      <h2 className="text-3xl font-semibold text-black dark:text-white mb-8 text-center uppercase">
        {pageTranslations.heading || "All New Arrivals"}
      </h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {orderedNew.map((product) => {
          const translatedName =
            product.translations?.[language]?.name ||
            product.name ||
            pageTranslations.productFallback || "Product";
          const pid = getId(product);
          const isFav = favorites.includes(pid);

          const hasDiscount =
            product.discountPrice !== undefined &&
            product.discountPrice !== null &&
            product.discountPrice !== "";

          const cleanBasePrice = String(product.price).replace(
            /[^\d.]/g,
            ""
          );
          const cleanDiscountPrice = hasDiscount
            ? String(product.discountPrice).replace(/[^\d.]/g, "")
            : null;

          const offerPrice = cleanDiscountPrice || cleanBasePrice;
          const productUrl = `/product/${pid}`;

          // 👇 нове: беремо нормальний src + прапор локального файлу
          const src = getProductSrc(product);
          const isLocal = typeof src === "string" && src.startsWith("/");

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
                onKeyDown={(e) =>
                  e.key === "Enter" && openBanner(product)
                }
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
                      isFav ? "text-red-600" : "text-gray-400"
                    }`}
                    aria-label={pageTranslations.addToFavorites || "Add to favorites"}
                  >
                    {isFav ? <FaHeart /> : <FaRegHeart />}
                  </button>

                  <Image
                    src={src}
                    alt={translatedName || "Product Image"}
                    width={300}
                    height={400}
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="w-full h-full object-cover rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                    itemProp="image"
                    unoptimized={isLocal}
                    loader={isLocal ? ({ src }) => src : undefined}
                  />

                  <div className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                    {pageTranslations.badge || "NEW"}
                  </div>
                  <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm sm:text-base font-medium rounded">
                    {pageTranslations.viewDetails || "View details"}
                  </figcaption>
                </figure>
              </div>

              {/* Ціна з відображенням знижки */}
              <section className="mt-3 sm:mt-4">
                <h3 className="text-sm sm:text-lg font-normal text-center sm:text-left">
                  {translatedName}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mt-1 text-center sm:text-left">
                  <span className="font-semibold">{priceLabel}:</span>{" "}
                  {hasDiscount ? (
                    <>
                      <span className="text-red-600 font-semibold">
                        {product.discountPrice} UAH
                      </span>{" "}
                      <span className="line-through text-gray-500">
                        {product.price} UAH
                      </span>
                    </>
                  ) : (
                    <>
                      {product.price} <span className="text-xs">UAH</span>
                    </>
                  )}
                </p>
              </section>

              {/* Offer для Product (schema.org) */}
              <div
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
                className="hidden"
              >
                <meta itemProp="priceCurrency" content="UAH" />
                <meta
                  itemProp="price"
                  content={offerPrice || "0"}
                />
                <link
                  itemProp="availability"
                  href="https://schema.org/InStock"
                />
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
                  {pageTranslations.addToCart || "ADD TO CART"}
                </button>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {pageTranslations.clickPhoto || "Click on the photo to view details"}
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
        <Toast
          product={lastProduct}
          onClose={() => setShowToast(false)}
        />
      )}
    </section>
  );
};

export default NewArrivalsInfo;
