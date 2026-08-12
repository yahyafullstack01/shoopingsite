'use client';

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import ThumbnailCarousel from "../../components/ThumbnailCarousel/ThumbnailCarousel";
import CartIcon from "../CartIcon/CartIcon";
import { getSessionId } from '../../utils/session';
import { getBackendBaseUrl } from "../../utils/backendUrl";
import { isFavorite, toggleFavorite } from "../../utils/favorites";
import Toast from "../ToastCart/Toast";

function mediaKey(m) {
  if (typeof m === "string") return m;
  if (m?.type === "video") return m?.src || m?.poster || "";
  return m?.src || "";
}

const ProductBanner = ({
  selectedProduct,
  descriptionRef,
  handleContactButtonClick,
  onClose,
}) => {
  const { language, translateList } = useLanguage();
  const rawForm = translateList("home", "infoForm");
  const formTranslations =
    typeof rawForm === "object" && rawForm !== null ? rawForm : {};

  const videoRef = useRef(null);
  const modalBodyRef = useRef(null);

  const isVideo = (media) => typeof media === "object" && media?.type === "video";
  const getSrc = (media) => (typeof media === "string" ? media : media?.src || "");
  const getPoster = (media) =>
    typeof media === "object" && media?.poster ? media.poster : "/default-poster.jpg";

  const [currentImage, setCurrentImage] = useState(
    selectedProduct?.image || "/4.jpg"
  );

  const [lastCartQuantity, setLastCartQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [fav, setFav] = useState(false);

  const translatedName =
    selectedProduct?.translations?.[language]?.name || selectedProduct?.name;
  const translatedDescription =
    selectedProduct?.translations?.[language]?.description || selectedProduct?.description;

  const galleryItems = useMemo(() => {
    const imgs =
      Array.isArray(selectedProduct?.images) && selectedProduct.images.length
        ? selectedProduct.images
        : [selectedProduct?.image].filter(Boolean);
    return imgs.length ? imgs : ["/4.jpg"];
  }, [selectedProduct]);

  const galleryIndex = useMemo(() => {
    const cur = mediaKey(currentImage);
    const idx = galleryItems.findIndex((item) => mediaKey(item) === cur);
    return idx >= 0 ? idx : 0;
  }, [currentImage, galleryItems]);

  const galleryIndexRef = useRef(galleryIndex);
  galleryIndexRef.current = galleryIndex;
  const touchStartRef = useRef(null);

  const isMobileProductGallery = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 639px)').matches;

  useEffect(() => {
    if (videoRef.current) {
      try { videoRef.current.pause(); } catch {}
    }
    setCurrentImage(selectedProduct?.image || "/4.jpg");
    setFav(isFavorite(selectedProduct?.id));

    requestAnimationFrame(() => {
      const el = modalBodyRef.current;
      if (el) el.scrollTop = 0;
    });

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      if (videoRef.current) {
        try { videoRef.current.pause(); } catch {}
      }
    };
  }, [selectedProduct]);

  useEffect(() => {
    const swallowAbort = (e) => {
      if (String(e.reason)?.includes('AbortError')) {
        e.preventDefault();
      }
    };
    window.addEventListener('unhandledrejection', swallowAbort);
    return () => window.removeEventListener('unhandledrejection', swallowAbort);
  }, []);

  const onSelectMedia = (media) => {
    if (isVideo(currentImage) && videoRef.current) {
      try { videoRef.current.pause(); } catch {}
    }
    setCurrentImage(media);
  };

  const SWIPE_MIN_PX = 48;

  const handleGalleryTouchStart = (e) => {
    if (!isMobileProductGallery() || galleryItems.length <= 1) return;
    const t = e.targetTouches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  };

  const handleGalleryTouchEnd = (e) => {
    if (!touchStartRef.current || !isMobileProductGallery() || galleryItems.length <= 1) {
      touchStartRef.current = null;
      return;
    }
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartRef.current.x;
    const dy = t.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(dx) < SWIPE_MIN_PX) return;
    if (Math.abs(dy) > Math.abs(dx) * 0.75) return;

    const idx = galleryIndexRef.current;
    if (dx < 0) {
      const next = (idx + 1) % galleryItems.length;
      onSelectMedia(galleryItems[next]);
    } else {
      const prev = (idx - 1 + galleryItems.length) % galleryItems.length;
      onSelectMedia(galleryItems[prev]);
    }
  };

  const handleGalleryTouchCancel = () => {
    touchStartRef.current = null;
  };

  const goGalleryPrev = () => {
    if (galleryItems.length <= 1) return;
    const idx = galleryIndexRef.current;
    const prev = (idx - 1 + galleryItems.length) % galleryItems.length;
    onSelectMedia(galleryItems[prev]);
  };

  const goGalleryNext = () => {
    if (galleryItems.length <= 1) return;
    const idx = galleryIndexRef.current;
    const next = (idx + 1) % galleryItems.length;
    onSelectMedia(galleryItems[next]);
  };

  const onToggleFav = () => {
    if (!selectedProduct?.id) return;
    const next = toggleFavorite(selectedProduct.id);
    setFav(next.includes(selectedProduct.id));
    try {
      window.dispatchEvent(new Event("storage"));
    } catch {}
  };

  const handleClose = () => {
    if (videoRef.current) {
      try {
        videoRef.current.pause();
      } catch {}
    }
    onClose?.();
  };

  const handleAddToCart = async ({ product, selectedColor, selectedSize, quantity }) => {
    const sessionId = getSessionId();
    const name = (product.translations?.[language]?.name || product.name || product.title)
      .replace(/['"«»]/g, '')
      .replace(/грн|₴|uah/gi, '')
      .replace(/\s+/g, ' ')
      .trim();

    const rawPrice = product.discountPrice || product.price;
    const price = Number(String(rawPrice).replace(/[^\d.]/g, '')).toFixed(2);

    if (!sessionId) {
      alert("Не вдалося створити сесію. Спробуйте оновити сторінку.");
      return;
    }

    try {
      const res = await fetch(`${getBackendBaseUrl()}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          productId: product.id,
          name,
          price: Number(product.price),
          discountPrice: product.discountPrice ?? null,
          color: selectedColor,
          size: selectedSize,
          quantity,
        }),
      });

      const data = await res.json();
      if (data.success || data.message?.includes("додано")) {
        setLastCartQuantity(quantity);
        setShowToast(true);
      } else {
        alert(data.message || "Помилка при додаванні в корзину");
      }
    } catch (err) {
      console.error("❌ Cart POST error:", err);
      alert("Помилка при додаванні в корзину");
    }
  };

  if (!selectedProduct) return null;

  return (
    <>
      <div className="fixed inset-0 z-[70] bg-white dark:bg-neutral-950 sm:inset-x-0 sm:bottom-0 sm:left-0 sm:right-0 sm:top-20 sm:flex sm:items-start sm:justify-center sm:bg-black/90 sm:pt-3 md:top-24 md:pt-4 lg:top-28 dark:sm:bg-black/90">
        <div
          ref={modalBodyRef}
          className="relative flex h-full w-full max-w-5xl flex-col overflow-y-auto bg-white dark:bg-neutral-950 sm:h-auto sm:max-h-[calc(100vh-6.5rem)] sm:rounded-lg sm:shadow-xl md:max-h-[calc(100vh-7.5rem)] lg:max-h-[calc(100vh-8.75rem)]"
        >
          <div className="sticky top-0 z-[201] flex items-center justify-between gap-1 border-b border-neutral-100 bg-white/95 px-2 py-2.5 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/95 sm:hidden">
            <button
              type="button"
              onClick={handleClose}
              className="-ml-1 shrink-0 rounded-full p-2.5 text-neutral-900 dark:text-white"
              aria-label={formTranslations.back || "Back"}
            >
              <FaArrowLeft className="text-lg" />
            </button>
            <span className="min-w-0 flex-1 truncate text-center text-sm font-semibold text-neutral-900 dark:text-white">
              {translatedName}
            </span>
            <div className="flex shrink-0 items-center gap-0.5">
              <button
                type="button"
                onClick={onToggleFav}
                className="rounded-full p-2 text-neutral-900 dark:text-white"
                aria-label="Wishlist"
              >
                {fav ? (
                  <FaHeart className="text-lg text-red-500" />
                ) : (
                  <FaRegHeart className="text-lg" />
                )}
              </button>
              <CartIcon />
            </div>
          </div>

          <button
            type="button"
            className="absolute right-3 top-3 z-[200] hidden text-4xl text-black hover:text-red-500 dark:text-white sm:block sm:right-4 sm:top-4 sm:text-5xl"
            onClick={handleClose}
            aria-label={formTranslations.close || "Close"}
          >
            &times;
          </button>

          <div className="relative grid flex-1 grid-cols-1 sm:grid-cols-2 sm:items-start sm:gap-4 sm:p-4">
            <div className="relative w-full sm:col-start-1 sm:row-start-1">
              {selectedProduct.isTop ? (
                <span className="absolute left-3 top-3 z-10 rounded bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
                  {formTranslations.topBadge || "TOP"}
                </span>
              ) : null}
              {selectedProduct.isNew ? (
                <span
                  className={`absolute left-3 z-10 rounded bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/90 dark:text-emerald-200 ${
                    selectedProduct.isTop ? "top-10" : "top-3"
                  }`}
                >
                  {formTranslations.newBadge || "NEW"}
                </span>
              ) : null}

              <button
                type="button"
                onClick={onToggleFav}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md sm:hidden dark:bg-neutral-800/95"
                aria-label="Wishlist"
              >
                {fav ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-neutral-700 dark:text-gray-200" />
                )}
              </button>

              <div className="group relative w-full overflow-hidden sm:rounded-lg">
                <div
                  className="relative max-sm:touch-pan-y max-sm:select-none"
                  onTouchStart={handleGalleryTouchStart}
                  onTouchEnd={handleGalleryTouchEnd}
                  onTouchCancel={handleGalleryTouchCancel}
                >
                  {isVideo(currentImage) ? (
                    <video
                      ref={videoRef}
                      src={getSrc(currentImage)}
                      poster={getPoster(currentImage)}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full rounded-none sm:rounded-lg"
                      style={{ maxHeight: "min(70vh, 600px)", objectFit: "cover" }}
                      onPlay={(e) => e.currentTarget.play().catch(() => {})}
                    />
                  ) : (
                    <Image
                      src={getSrc(currentImage)}
                      alt={translatedName}
                      width={800}
                      height={600}
                      style={{ objectFit: "cover" }}
                      className="w-full rounded-none sm:rounded-lg pointer-events-none sm:pointer-events-auto"
                      draggable={false}
                      unoptimized={getSrc(currentImage).startsWith('/')}
                    />
                  )}
                </div>

                {galleryItems.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goGalleryPrev();
                      }}
                      className="absolute left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200/80 bg-white/90 text-lg text-neutral-900 shadow-md backdrop-blur-sm transition-opacity duration-200 hover:bg-white focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 dark:border-neutral-600 dark:bg-neutral-800/95 dark:text-white dark:hover:bg-neutral-800 sm:flex sm:opacity-0 sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto sm:group-focus-within:opacity-100 sm:group-focus-within:pointer-events-auto"
                      aria-label={
                        formTranslations.galleryPrev || "Previous image"
                      }
                    >
                      <FaChevronLeft aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goGalleryNext();
                      }}
                      className="absolute right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200/80 bg-white/90 text-lg text-neutral-900 shadow-md backdrop-blur-sm transition-opacity duration-200 hover:bg-white focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 dark:border-neutral-600 dark:bg-neutral-800/95 dark:text-white dark:hover:bg-neutral-800 sm:flex sm:opacity-0 sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto sm:group-focus-within:opacity-100 sm:group-focus-within:pointer-events-auto"
                      aria-label={
                        formTranslations.galleryNext || "Next image"
                      }
                    >
                      <FaChevronRight aria-hidden />
                    </button>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 sm:hidden">
                      {galleryItems.map((item, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => onSelectMedia(item)}
                          className={`h-1.5 rounded-full transition-all ${
                            i === galleryIndex
                              ? "w-6 bg-neutral-900 dark:bg-white"
                              : "w-1.5 bg-neutral-300 dark:bg-neutral-600"
                          }`}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-md bg-black/55 px-2 py-0.5 text-xs font-medium text-white sm:hidden">
                      {galleryIndex + 1}/{galleryItems.length}
                    </div>
                  </>
                ) : null}
              </div>

              <div className="hidden sm:block">
                <ThumbnailCarousel
                  images={selectedProduct.images || []}
                  onImageSelect={onSelectMedia}
                  visibleThumbnails={5}
                />
              </div>
            </div>

            <InfoForm
                cardSections
                gridEmbed
                requireSelection={true}
                product={{
                  ...selectedProduct,
                  name: translatedName,
                  description: translatedDescription,
                  image: getSrc(currentImage),
                  price: selectedProduct.discountPrice || selectedProduct.price,
                  oldPrice: selectedProduct.discountPrice ? selectedProduct.price : null,
                }}
                onAddToCartClick={handleAddToCart}
              />
          </div>
        </div>
      </div>

      {showToast && (
        <Toast
          product={{
            name: translatedName,
            price: selectedProduct.discountPrice || selectedProduct.price,
            oldPrice:
              selectedProduct.discountPrice &&
              selectedProduct.discountPrice < selectedProduct.price
                ? selectedProduct.price
                : null,
            image: selectedProduct.image,
            quantity: lastCartQuantity,
          }}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ProductBanner;
