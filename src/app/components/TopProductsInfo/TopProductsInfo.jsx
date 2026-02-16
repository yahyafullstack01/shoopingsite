"use client";

import products from "../../data/products";
import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import { handleContactButtonClick } from "../../utils/products";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import Image from "next/image";
import { getSessionId } from "../../utils/session";
import Toast from "../ToastCart/Toast";
import QuickAddModal from "../QuickAddModal/QuickAddModal";

// ⬇️ додаємо пріоритети тільки для цієї сторінки
import { PRIORITY_TOP, prioritizeByIds } from "../../utils/priorities";

// ---- helpers ---------------------------------------------------------------
const normalizeMedia = (m) =>
  typeof m === "string" ? { type: "image", src: m } : m;

const getDefaultMedia = (product) => {
  // пріоритет: перший елемент у images -> fallback на product.image
  const first = product?.images?.[0] ?? product?.image ?? null;
  return first ? normalizeMedia(first) : null;
};
// ---------------------------------------------------------------------------

export default function TopProductsInfo() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("home", "top_products");
  const pageTranslations = translateList("home", "topProductsPage") || {};
  const router = useRouter();
  const searchParams = useSearchParams();
  const descriptionRef = useRef(null);

  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);
  const [quickAddProduct, setQuickAddProduct] = useState(null);

  const handleOpenQuickAdd = (product) => setQuickAddProduct(product);
  const handleCloseQuickAdd = () => setQuickAddProduct(null);

  // 1) Сира вибірка топів
  const topRaw = useMemo(() => products.filter((p) => p.isTop === true), []);

  // 2) Пріоритетні ID -> на початок; решта — у вихідному порядку
  const topSorted = useMemo(
    () => prioritizeByIds(topRaw, PRIORITY_TOP),
    [topRaw]
  );

  const selectedProductId = searchParams.get("product");
  const initialProduct = selectedProductId
    ? topSorted.find((p) => p.id === Number(selectedProductId))
    : topSorted[0];

  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  // Use product.image as fallback, consistent with ProductBanner
  const [selectedMedia, setSelectedMedia] = useState(
    initialProduct ? (getDefaultMedia(initialProduct) || normalizeMedia(initialProduct.image)) : null
  );

  // якщо змінився ?product у URL — підміняємо й дефолтне медіа
  useEffect(() => {
    if (!selectedProductId) return;
    const found = topSorted.find((p) => p.id === Number(selectedProductId));
    if (found) {
      setSelectedProduct(found);
      // Ensure we always have valid media - try images array first, then fallback to product.image
      const media = getDefaultMedia(found) || normalizeMedia(found.image);
      setSelectedMedia(media);
      setTimeout(() => {
        descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [selectedProductId, topSorted]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // Ensure we always have valid media - try images array first, then fallback to product.image
    const media = getDefaultMedia(product) || normalizeMedia(product.image);
    setSelectedMedia(media);
    router.push(`?product=${product.id}`, { scroll: false });
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = async ({ product, selectedColor, selectedSize, quantity }) => {
    const sessionId = getSessionId();
    if (!sessionId) {
      alert(pageTranslations.sessionError || "Could not create session. Try refreshing the page.");
      return;
    }
    if (!selectedColor || !selectedSize) {
      alert(pageTranslations.fillAllFields || "Please fill all fields");
      return;
    }

    const payload = { sessionId, productId: product.id, color: selectedColor, size: selectedSize, quantity };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || pageTranslations.addToCartError || "Error adding to cart");
        return;
      }

      const toastImage =
        selectedMedia?.type === "video"
          ? selectedMedia?.poster
          : selectedMedia?.src || product.image;

      setLastProduct({
        name: product.translations?.[language]?.name || product.title,
        price: product.price,
        image: toastImage,
        quantity,
      });
      setShowToast(true);
    } catch (err) {
      console.error("❌ Adding to cart failed:", err);
      alert(pageTranslations.addToCartError || "Error adding to cart");
    }
  };

  const onContactClick = (selectedColor, selectedSize, quantity, currentLanguage) => {
    handleContactButtonClick(
      router,
      selectedProduct,
      selectedColor,
      selectedSize,
      quantity,
      currentLanguage
    );
  };

  return (
    <div className="dark:bg-black bg-gray-100 text-black dark:text-white min-h-screen px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-normal mb-4">{menuItems[0]}</h1>
      </div>

      <section aria-labelledby="top-products">
        <h2 id="top-products" className="sr-only">Top Products</h2>
        <div className="bg-gray-100 dark:bg-black max-h-[450px] md:max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-4">
            {topSorted.map((product) => {
              const translatedName =
                product.translations?.[language]?.name || product.title;
              const hasMultipleOptions =
                (product.colors?.length || 0) > 1 ||
                (product.sizes?.length || 0) > 1;

              return (
                <article
                  key={product.id}
                  className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition duration-300"
                >
                  <div onClick={() => handleProductClick(product)} className="cursor-pointer">
                    <div className="w-full h-[200px] sm:h-[350px] overflow-hidden rounded-lg">
                      {/* прев’ю у списку — тільки зображення */}
                      <Image
                        src={normalizeMedia(product.image).src}
                        alt={`Preview of ${translatedName}`}
                        width={300}
                        height={350}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        priority
                      />
                    </div>
                    <h3 className="font-light text-base sm:text-lg mt-3">{translatedName}</h3>
                    <p className="text-sm text-black/70 dark:text-white/70">
                      {product.price} UAH
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      if (hasMultipleOptions) {
                        handleOpenQuickAdd(product);
                      } else {
                        handleAddToCart({
                          product,
                          selectedColor: product.color?.[0] || "",
                          selectedSize: product.sizes?.[0] || "",
                          quantity: 1,
                        });
                      }
                    }}
                    className="mt-4 w-full bg-black hover:bg-neutral-800 text-white text-sm py-2 rounded-md tracking-wide uppercase transition"
                  >
                    {pageTranslations.addToCart || "Add to cart"}
                  </button>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                    {pageTranslations.clickPhoto || "Click on the photo to view details"}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <article
        aria-live="polite"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8"
        ref={descriptionRef}
      >
        <div className="flex flex-col items-center">
          {/* умовний рендер відео/зображення */}
          <div className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg aspect-[3/4] overflow-hidden">
            {selectedMedia?.type === "video" ? (
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                muted
                loop
                poster={selectedMedia?.poster}
              >
                <source src={selectedMedia?.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={selectedMedia?.src || selectedProduct?.image}
                alt={`Full image of ${selectedProduct?.title}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            )}
          </div>

          <div className="w-full mt-4 sm:mt-8 overflow-hidden">
            <div className="flex gap-2 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
              <ThumbnailCarousel
                images={selectedProduct?.images}
                onImageSelect={(media) => setSelectedMedia(normalizeMedia(media))}
                visibleThumbnails={5}
              />
            </div>
          </div>
        </div>

        <InfoForm
          product={selectedProduct}
          colors={selectedProduct?.colors}
          sizes={selectedProduct?.sizes}
          descriptionRef={descriptionRef}
          onContactClick={(color, size, qty) =>
            onContactClick(color, size, qty, language)
          }
          onAddToCartClick={(args) =>
            handleAddToCart({ ...args, product: selectedProduct })
          }
        />
      </article>

      {quickAddProduct && (
        <QuickAddModal
          product={quickAddProduct}
          onClose={handleCloseQuickAdd}
          onAddToCart={handleAddToCart}
        />
      )}

      {showToast && lastProduct && (
        <Toast product={lastProduct} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}
