"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../../Functions/useLanguage";
import { getProductImageSrc } from "../../utils/productData";
import { getSessionId } from "../../utils/session";
import { getBackendBaseUrl } from "../../utils/backendUrl";
import {
  ProductColorSwatches,
  ProductSizeButtons,
} from "../../components/ProductOptionPickers/ProductOptionPickers";
import ProductCard from "../../components/products/ProductCard";

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

export default function ProductPageClient({ product, relatedProducts = [] }) {
  const { language, translateList } = useLanguage();
  const isUA = language === "UA";

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [colorError, setColorError] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [slide, setSlide] = useState(0);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const menuItems = translateList("Catalogues", "header") || [];
  const formT = translateList("home", "infoForm") || {};
  const addToCartLabel =
    formT.addToCart || (isUA ? "ДОДАТИ В КОШИК" : "ADD TO CART");

  const translatedName =
    product.translations?.[language]?.name || product.name;
  const translatedCategory =
    product.translations?.[language]?.category || product.category;
  const translatedColors =
    product.translations?.[language]?.colors || product.colors || [];
  const translatedDescriptionRaw = product.translations?.[language]?.description;
  const descriptionParagraphs = Array.isArray(translatedDescriptionRaw)
    ? translatedDescriptionRaw
    : translatedDescriptionRaw
      ? [translatedDescriptionRaw]
      : [];
  const sizes = Array.isArray(product.sizes) ? product.sizes : [];

  const gallery = useMemo(() => collectGallery(product), [product]);
  const safeGallery = gallery.length > 0 ? gallery : [getProductImageSrc(product.image)];

  const price = product?.discountPrice ?? product?.price;
  const oldPrice = product?.discountPrice ? product?.price : null;

  const go = useCallback(
    (dir) => {
      setSlide((i) => (i + dir + safeGallery.length) % safeGallery.length);
    },
    [safeGallery.length]
  );

  // Same request shape AllProducts.jsx already sends to the backend —
  // reused here and for the related-products cards below.
  const postToCart = async ({ product: p, selectedColor: color, selectedSize: size, quantity: qty }) => {
    const sessionId = getSessionId();
    if (!sessionId) {
      alert(isUA ? "Не вдалося створити сесію. Спробуйте оновити сторінку." : "Could not create a session. Please refresh.");
      return false;
    }
    const name = p.translations?.[language]?.name || p.name;
    try {
      const res = await fetch(`${getBackendBaseUrl()}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          productId: p.id,
          name,
          price: Number(p.price || 0).toFixed(2),
          discountPrice: p.discountPrice ? Number(p.discountPrice).toFixed(2) : null,
          color,
          size,
          quantity: qty,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || data.error || res.statusText || "Cart error");
      }
      return true;
    } catch (err) {
      console.error("❌ Помилка додавання в корзину:", err);
      return false;
    }
  };

  const handleAddToCart = async () => {
    let hasError = false;
    if (!selectedColor && translatedColors.length) {
      setColorError(formT.colorError || (isUA ? "Оберіть колір" : "Select a color"));
      hasError = true;
    } else setColorError("");
    if (!selectedSize && sizes.length) {
      setSizeError(formT.sizeError || (isUA ? "Оберіть розмір" : "Select a size"));
      hasError = true;
    } else setSizeError("");
    if (hasError) return;

    const ok = await postToCart({
      product,
      selectedColor,
      selectedSize,
      quantity,
    });
    setStatus(ok ? "success" : "error");
  };

  const handleRelatedAddToCart = (arg) => {
    postToCart(arg).then((ok) => setStatus(ok ? "success" : "error"));
  };

  const breadcrumbLabels = {
    home: isUA ? "Головна" : "Home",
    catalog: isUA ? "Усі товари" : "All products",
  };

  return (
    <div className="bg-gray-100 text-black dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:px-8">
        {/* Breadcrumbs — also matches generateBreadcrumbSchema() JSON-LD in page.js */}
        <nav aria-label="Breadcrumb" className="mb-4 text-xs text-gray-500 dark:text-gray-400">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:underline">
                {breadcrumbLabels.home}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/All-products" className="hover:underline">
                {breadcrumbLabels.catalog}
              </Link>
            </li>
            {translatedCategory ? (
              <>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href={`/All-products?category=${String(product.category || "").toLowerCase()}`}
                    className="hover:underline"
                  >
                    {translatedCategory}
                  </Link>
                </li>
              </>
            ) : null}
            <li aria-hidden>/</li>
            <li className="text-gray-700 dark:text-gray-200" aria-current="page">
              {translatedName}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-900">
              <Image
                src={safeGallery[slide] || safeGallery[0]}
                alt={`${translatedName} ${slide + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized
                priority
              />
              {safeGallery.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Previous photo"
                    onClick={() => go(-1)}
                    className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/55"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    onClick={() => go(1)}
                    className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/55"
                  >
                    <FaChevronRight />
                  </button>
                </>
              ) : null}
            </div>
            {safeGallery.length > 1 ? (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {safeGallery.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setSlide(i)}
                    className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-lg transition ${
                      i === slide
                        ? "ring-2 ring-neutral-900 ring-offset-1 dark:ring-white"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="64px" className="object-cover" unoptimized />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Details */}
          <div>
            <h1 className="text-2xl font-semibold leading-snug sm:text-3xl">{translatedName}</h1>
            {translatedCategory ? (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{translatedCategory}</p>
            ) : null}

            <p className="mt-4 text-xl font-semibold">
              {oldPrice != null ? (
                <>
                  <span className="text-red-600">{price} UAH</span>{" "}
                  <span className="font-normal text-neutral-400 line-through">{oldPrice} UAH</span>
                </>
              ) : (
                <span>{price} UAH</span>
              )}
            </p>

            {descriptionParagraphs.length > 0 ? (
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {descriptionParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ) : null}

            <div className="mt-6">
              <ProductColorSwatches
                label={menuItems[1] || "Color"}
                colors={translatedColors}
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
                sizes={sizes}
                value={selectedSize}
                onChange={(s) => {
                  setSelectedSize(s);
                  if (s) setSizeError("");
                }}
                error={sizeError}
                align="text-left"
              />

              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium">{menuItems[4] || "Quantity"}</label>
                <div className="inline-flex h-11 items-stretch overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-11 text-lg hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    aria-label="Decrease quantity"
                  >
                    –
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
                    className="w-14 appearance-none border-0 bg-transparent text-center text-sm font-medium outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-11 text-lg hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 sm:w-auto sm:px-8"
              >
                {addToCartLabel}
              </button>

              {status === "success" ? (
                <p className="mt-3 text-sm text-emerald-600">
                  {isUA ? "✅ Додано в кошик" : "✅ Added to cart"}
                </p>
              ) : null}
              {status === "error" ? (
                <p className="mt-3 text-sm text-red-500">
                  {isUA ? "Помилка при додаванні в корзину" : "Error adding to cart"}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 ? (
          <section className="mt-14">
            <h2 className="mb-4 text-lg font-semibold">
              {isUA ? "Схожі товари" : "Related products"}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={handleRelatedAddToCart} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
