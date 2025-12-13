"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import Toast from "../ToastCart/Toast";
import QuickAddModal from "../QuickAddModal/QuickAddModal";
import ProductBanner from "../products/ProductBanner";
import { getSessionId } from "../../utils/session";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getFavorites, toggleFavorite } from "../../utils/favorites";
import {
  PRIORITY_NEW_YEAR,
  prioritizeByIds,
} from "../../utils/priorities";

// 🔹 стабільний ID
const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

// 🔹 картинка
const getProductSrc = (product) => {
  const raw =
    product.image ||
    (Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : null) ||
    "/placeholder/300x400.jpg";

  if (typeof raw === "string") return raw;
  if (raw?.src) return raw.src;

  return "/placeholder/300x400.jpg";
};

const NewYearOffersInfo = ({ products }) => {
  const { language, translateList } = useLanguage();
  const priceLabel = translateList("Infoform", "header")?.[8] || "Price";

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);
  const [favorites, setFavorites] = useState(getFavorites());

  // 🔹 тільки новорічні
  const onlyNewYear = useMemo(
    () =>
      Array.isArray(products)
        ? products.filter(
            (p) =>
              p.isNewYearOffer === true ||
              p.isNewYear === true ||
              p.tags?.includes("new-year")
          )
        : [],
    [products]
  );

  const orderedNewYear = useMemo(
    () => prioritizeByIds(onlyNewYear, PRIORITY_NEW_YEAR),
    [onlyNewYear]
  );

  // 🔥 ЄДИНИЙ ПРАВИЛЬНИЙ ADD TO CART (як special-offers)
  const handleAddToCart = async ({
    product,
    selectedColor,
    selectedSize,
    quantity,
  }) => {
    const sessionId = getSessionId();
    if (!sessionId) return alert("Сесія не знайдена");

    const id = getId(product);
    const name =
      product.translations?.[language]?.name ||
      product.name ||
      "Product";

    const base = Number(String(product.price).replace(/[^\d.]/g, "")) || 0;
    const disc = Number(String(product.discountPrice).replace(/[^\d.]/g, "")) || 0;

    const hasDiscount = disc > 0 && disc < base;
    const finalPrice = hasDiscount ? disc : base;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          productId: id,
          name,
          price: finalPrice.toFixed(2), // 🔥 ФІНАЛЬНА ЦІНА
          originalPrice: base.toFixed(2), // для закреслення
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
        price: finalPrice.toFixed(2),
        image: product.image,
        quantity,
      });
      setShowToast(true);
    } else {
      alert(data?.message || "Помилка");
    }

    setShowModal(false);
    setShowBanner(false);
  };

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 px-5">
      <h2 className="text-3xl font-semibold text-center mb-8 uppercase">
        Новорічні пропозиції
      </h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {orderedNewYear.map((product) => {
          const id = getId(product);
          const isFav = favorites.includes(id);

          const base = Number(String(product.price).replace(/[^\d.]/g, "")) || 0;
          const disc = Number(String(product.discountPrice).replace(/[^\d.]/g, "")) || 0;
          const hasDiscount = disc > 0 && disc < base;

          return (
            <article key={id} className="bg-gray-100 dark:bg-[#0f172a] p-4 rounded-lg">
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setShowBanner(true);
                }}
              >
                <Image
                  src={getProductSrc(product)}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover rounded"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFavorites(toggleFavorite(id));
                  }}
                  className="absolute top-2 right-2 text-xl"
                >
                  {isFav ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
                </button>

                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  NEW YEAR
                </span>
              </div>

              <h3 className="mt-3 text-sm font-medium">
                {product.translations?.[language]?.name || product.name}
              </h3>

              <p className="text-sm mt-1">
                <b>{priceLabel}:</b>{" "}
                {hasDiscount ? (
                  <>
                    <span className="text-red-600 font-semibold">{disc} UAH</span>{" "}
                    <span className="line-through text-gray-500">{base} UAH</span>
                  </>
                ) : (
                  <span>{base} UAH</span>
                )}
              </p>

              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setShowModal(true);
                }}
                className="mt-3 w-full bg-green-600 text-white py-2 rounded"
              >
                ДОДАТИ В КОШИК
              </button>
            </article>
          );
        })}
      </div>

      {showBanner && selectedProduct && (
        <ProductBanner
          selectedProduct={selectedProduct}
          onClose={() => setShowBanner(false)}
          handleAddToCart={handleAddToCart}
        />
      )}

      {showModal && selectedProduct && (
        <QuickAddModal
          product={selectedProduct}
          onClose={() => setShowModal(false)}
          onAddToCart={handleAddToCart}
        />
      )}

      {showToast && lastProduct && (
        <Toast product={lastProduct} onClose={() => setShowToast(false)} />
      )}
    </section>
  );
};

export default NewYearOffersInfo;
