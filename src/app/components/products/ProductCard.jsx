'use client';

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import { FaHeart, FaRegHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { toggleFavorite, isFavorite } from "../../utils/favorites";
import { getProductImageSrc } from "../../utils/productData";

const MAX_CAROUSEL = 6;

function collectGallery(product) {
  const list = [];
  const push = (media) => {
    const src = getProductImageSrc(media);
    if (src && !list.includes(src) && !src.endsWith(".mp4")) list.push(src);
  };
  // Cover (`image`) first, then gallery extras — matches product data model
  if (product.image) push(product.image);
  if (Array.isArray(product.images) && product.images.length) {
    product.images.forEach(push);
  }
  return list.slice(0, MAX_CAROUSEL);
}

const ProductCard = ({ product, onClick, onAddToCart, priority = false }) => {
  const { language, translateList } = useLanguage();
  const translatedName =
    product.translations?.[language]?.name || product.name || "Product";
  const translatedCategory =
    product.translations?.[language]?.category || product.category || "";

  const cardTranslations = translateList("home", "productCard") || {};
  const gallery = useMemo(() => collectGallery(product), [product]);
  const [slide, setSlide] = useState(0);
  const [touched, setTouched] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const touchStartX = React.useRef(null);

  useEffect(() => {
    setFavorite(isFavorite(product.id));
    setSlide(0);
    setTouched(false);
  }, [product.id]);

  const sizes = Array.isArray(product.sizes) ? product.sizes.filter(Boolean) : [];
  // Prefer translated color names for current UI language (UA/EN)
  const langKey = language === "EN" || language === "en" ? "EN" : "UA";
  const translatedColors =
    product.translations?.[langKey]?.colors ||
    product.translations?.[language]?.colors ||
    product.colors;
  const colors = Array.isArray(translatedColors)
    ? translatedColors.filter(Boolean)
    : [];
  const sizeLabel =
    sizes.length > 0
      ? sizes.slice(0, 5).join(" · ") + (sizes.length > 5 ? "…" : "")
      : null;
  const colorLabel =
    colors.length > 0
      ? colors.slice(0, 3).join(", ") + (colors.length > 3 ? "…" : "")
      : null;

  const go = useCallback(
    (dir, e) => {
      e?.stopPropagation?.();
      setTouched(true);
      setSlide((i) => {
        const n = Math.max(gallery.length, 1);
        return (i + dir + n) % n;
      });
    },
    [gallery.length]
  );

  const handleToggle = (e) => {
    e.stopPropagation();
    const updated = toggleFavorite(product.id);
    setFavorite(updated.includes(product.id));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const finalPrice = product.discountPrice ?? product.price;
    const oldPrice = product.discountPrice ? product.price : null;
    onAddToCart({
      product: {
        ...product,
        price: finalPrice,
        oldPrice,
        name: translatedName,
        image: gallery[0] || getProductImageSrc(product.image),
      },
      selectedColor: "",
      selectedSize: "",
      quantity: 1,
    });
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1, e);
    touchStartX.current = null;
  };

  const hasCarousel = gallery.length > 1;
  const safeGallery =
    gallery.length > 0 ? gallery : [getProductImageSrc(product.image)];
  // First photo always mounted; extra photos only after user swipes (faster first paint)
  const visibleIndexes = new Set([slide]);
  if (touched) {
    visibleIndexes.add((slide + 1) % safeGallery.length);
    visibleIndexes.add((slide - 1 + safeGallery.length) % safeGallery.length);
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg dark:bg-[#0f172a] dark:ring-white/10">
      {/* Media */}
      <div
        className="relative cursor-pointer"
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        role="button"
        tabIndex={0}
        aria-label={`${cardTranslations.viewDetails || "View details"}: ${translatedName}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <figure className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
          {safeGallery.map((src, i) => {
            if (!visibleIndexes.has(i)) return null;
            const isActive = i === slide;
            const isLocal = typeof src === "string" && src.startsWith("/");
            return (
              <div
                key={src + i}
                className={`absolute inset-0 transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {/*
                  Local /public paths often contain spaces (e.g. /Dress/Name/1.avif).
                  Next image optimizer is slow/unreliable for those — serve files directly.
                */}
                <Image
                  src={src}
                  alt={`${translatedName} ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={priority && i === 0}
                  loading={priority && i === 0 ? "eager" : "lazy"}
                  fetchPriority={priority && i === 0 ? "high" : "auto"}
                  quality={70}
                  unoptimized={isLocal}
                  className="object-cover"
                />
              </div>
            );
          })}

          <button
            type="button"
            onClick={handleToggle}
            className={`absolute right-2.5 top-2.5 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-lg shadow-sm backdrop-blur-sm transition dark:bg-black/50 ${
              favorite ? "text-red-600" : "text-gray-500"
            }`}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            {favorite ? <FaHeart /> : <FaRegHeart />}
          </button>

          <div className="absolute left-2.5 top-2.5 z-20 flex flex-col gap-1">
            {product.isTop ? (
              <span className="rounded-full bg-red-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                {cardTranslations.topBadge || "TOP"}
              </span>
            ) : null}
            {product.isNew ? (
              <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                {cardTranslations.newBadge || "NEW"}
              </span>
            ) : null}
          </div>

          {hasCarousel && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => go(-1, e)}
                className="absolute left-2 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-sm text-white backdrop-blur-sm hover:bg-black/55"
              >
                <FaChevronLeft />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => go(1, e)}
                className="absolute right-2 top-1/2 z-20 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-sm text-white backdrop-blur-sm hover:bg-black/55"
              >
                <FaChevronRight />
              </button>
              <div className="absolute bottom-2.5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1.5 backdrop-blur-sm">
                {safeGallery.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Photo ${i + 1}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTouched(true);
                      setSlide(i);
                    }}
                    className={`rounded-full transition ${
                      i === slide
                        ? "h-2 w-2 bg-white"
                        : "h-1.5 w-1.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </figure>
      </div>

      {/* Info + CTA */}
      <div className="flex flex-1 flex-col gap-3 p-3.5 sm:p-4">
        <div className="min-h-[2.75rem]">
          <h3
            className="cursor-pointer text-base font-semibold leading-snug text-gray-900 line-clamp-2 dark:text-white"
            onClick={onClick}
          >
            {translatedName}
          </h3>
          {translatedCategory ? (
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {translatedCategory}
            </p>
          ) : null}
        </div>

        {/* Price + sizes on one row; colors always on the next line */}
        <div className="border-t border-gray-100 pt-2.5 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-300">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-gray-900 dark:text-white">
              {product.discountPrice ? (
                <>
                  <span className="text-red-600">{product.discountPrice} UAH</span>{" "}
                  <span className="font-normal text-gray-400 line-through">
                    {product.price} UAH
                  </span>
                </>
              ) : (
                <>{product.price} UAH</>
              )}
            </span>
            {sizeLabel ? (
              <>
                <span className="h-3 w-px bg-gray-300 dark:bg-gray-600" aria-hidden />
                <span>
                  {(cardTranslations.sizesLabel || "Sizes") + ": "}
                  {sizeLabel}
                </span>
              </>
            ) : null}
          </div>
          {colorLabel ? (
            <p className="mt-1 line-clamp-2 text-gray-600 dark:text-gray-300">
              {colorLabel}
            </p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-auto w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:bg-white dark:text-neutral-900 dark:hover:bg-gray-100"
        >
          {cardTranslations.addToCart || "ADD TO CART"}
        </button>

        <button
          type="button"
          onClick={onClick}
          className="text-center text-[11px] text-gray-500 underline-offset-2 hover:underline dark:text-gray-400"
        >
          {cardTranslations.viewDetails || "View details"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
