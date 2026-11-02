"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../Functions/useLanguage";
import { getProductImageSrc } from "../../utils/productData";
import {
  ProductColorSwatches,
  ProductSizeButtons,
} from "../ProductOptionPickers/ProductOptionPickers";

const MAX_GALLERY = 8;

function collectGallery(product) {
  const list = [];
  const push = (media) => {
    const src = getProductImageSrc(media);
    if (src && !list.includes(src) && !src.endsWith(".mp4")) list.push(src);
  };
  if (product?.image) push(product.image);
  if (Array.isArray(product?.images)) product.images.forEach(push);
  return list.slice(0, MAX_GALLERY);
}

export default function QuickAddModal({ product, onClose, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [colorError, setColorError] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [slide, setSlide] = useState(0);

  const { language, translateList } = useLanguage();
  const menuItems = translateList("Infoform", "header") || [];
  const formT = translateList("home", "infoForm") || {};
  const closeLabel = formT.close || (language === "UA" ? "Закрити" : "Close");
  const addToCartLabel =
    formT.addToCart || (language === "UA" ? "ДОДАТИ В КОШИК" : "ADD TO CART");

  const translatedName =
    product.translations?.[language]?.name || product.name;
  const translatedColors =
    product.translations?.[language]?.colors || product.colors;
  const translatedSizes = product.sizes || [];
  const gallery = useMemo(() => collectGallery(product), [product]);
  const price = product?.discountPrice ?? product?.price;
  const oldPrice = product?.discountPrice ? product?.price : null;

  useEffect(() => {
    setSlide(0);
    setSelectedColor("");
    setSelectedSize("");
    setQuantity(1);
    setColorError("");
    setSizeError("");
    setQuantityError("");
  }, [product?.id]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const go = useCallback(
    (dir) => {
      const n = Math.max(gallery.length, 1);
      setSlide((i) => (i + dir + n) % n);
    },
    [gallery.length]
  );

  const handleAddToCartClick = () => {
    let hasError = false;

    if (!selectedColor) {
      setColorError(
        formT.colorError ||
          (language === "UA" ? "Оберіть колір" : "Select a color")
      );
      hasError = true;
    } else setColorError("");
    if (!selectedSize) {
      setSizeError(
        formT.sizeError ||
          (language === "UA" ? "Оберіть розмір" : "Select a size")
      );
      hasError = true;
    } else setSizeError("");
    if (quantity <= 0) {
      setQuantityError(
        formT.quantityError ||
          (language === "UA" ? "Вкажіть кількість" : "Specify quantity")
      );
      hasError = true;
    } else setQuantityError("");

    if (hasError) return;

    onAddToCart({
      product: {
        ...product,
        price: product.price,
        discountPrice: product.discountPrice ?? null,
      },
      selectedColor,
      selectedSize,
      quantity,
    });

    onClose();
  };

  const handleQuantityChange = (value) => {
    const valid = Math.max(1, Number(value) || 1);
    setQuantity(valid);
    if (valid > 0) setQuantityError("");
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/45 px-0 pt-14 sm:items-center sm:px-4 sm:pt-16 sm:pb-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[calc(100vh-3.5rem)] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl dark:bg-neutral-950 sm:max-h-[90vh] sm:max-w-lg sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-neutral-100 px-4 py-3 dark:border-neutral-800 sm:px-5">
          <div className="min-w-0">
            <h2 className="truncate text-base font-medium leading-snug text-neutral-900 dark:text-white sm:text-lg">
              {translatedName}
            </h2>
            {price != null ? (
              <p className="mt-0.5 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {oldPrice != null ? (
                  <>
                    <span className="text-red-600">{price} UAH</span>{" "}
                    <span className="font-normal text-neutral-400 line-through">
                      {oldPrice} UAH
                    </span>
                  </>
                ) : (
                  <span>{price} UAH</span>
                )}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-neutral-100 text-neutral-600 transition hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            aria-label={closeLabel}
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
          {/* Gallery */}
          {gallery.length > 0 ? (
            <div className="mb-5">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-neutral-100 sm:h-72 dark:bg-neutral-900">
                <Image
                  src={gallery[slide] || gallery[0]}
                  alt={`${translatedName} ${slide + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 512px"
                  className="object-contain"
                  unoptimized
                  priority
                />

                {gallery.length > 1 ? (
                  <>
                    <button
                      type="button"
                      aria-label={formT.galleryPrev || "Previous image"}
                      onClick={() => go(-1)}
                      className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/55"
                    >
                      <FaChevronLeft className="text-sm" />
                    </button>
                    <button
                      type="button"
                      aria-label={formT.galleryNext || "Next image"}
                      onClick={() => go(1)}
                      className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/55"
                    >
                      <FaChevronRight className="text-sm" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/35 px-2.5 py-1.5 backdrop-blur-sm">
                      {gallery.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          aria-label={`Photo ${i + 1}`}
                          onClick={() => setSlide(i)}
                          className={`h-1.5 rounded-full transition ${
                            i === slide
                              ? "w-4 bg-white"
                              : "w-1.5 bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>

              {gallery.length > 1 ? (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {gallery.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      onClick={() => setSlide(i)}
                      className={`relative h-16 w-12 shrink-0 overflow-hidden rounded-lg transition ${
                        i === slide
                          ? "ring-2 ring-neutral-900 ring-offset-1 dark:ring-white"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          <ProductColorSwatches
            label={menuItems[1] || "Color"}
            colors={translatedColors || []}
            value={selectedColor}
            onChange={(c) => {
              setSelectedColor(c);
              if (c) setColorError("");
            }}
            error={colorError}
            align="text-left"
          />

          <ProductSizeButtons
            label={menuItems[3] || "Size"}
            sizes={translatedSizes}
            value={selectedSize}
            onChange={(s) => {
              setSelectedSize(s);
              if (s) setSizeError("");
            }}
            error={sizeError}
            align="text-left"
          />

          {/* Quantity */}
          <div className="mb-2">
            <label className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
              {menuItems[4] || "Quantity"}
            </label>
            <div className="inline-flex h-11 items-stretch overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
              <button
                type="button"
                onClick={() => handleQuantityChange(quantity - 1)}
                className="w-11 text-lg text-neutral-700 transition hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800"
                aria-label="Decrease quantity"
              >
                –
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
                className="w-14 appearance-none border-0 bg-transparent text-center text-sm font-medium outline-none dark:text-white"
              />
              <button
                type="button"
                onClick={() => handleQuantityChange(quantity + 1)}
                className="w-11 text-lg text-neutral-700 transition hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-800"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            {quantityError ? (
              <p className="mt-1 text-sm text-red-500">{quantityError}</p>
            ) : null}
          </div>
        </div>

        {/* Footer actions */}
        <div className="shrink-0 border-t border-neutral-100 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 sm:px-5">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
            >
              {closeLabel}
            </button>
            <button
              type="button"
              onClick={handleAddToCartClick}
              className="flex-[1.4] rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {addToCartLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
