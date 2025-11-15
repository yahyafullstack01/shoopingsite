"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";
import { handleContactButtonClick } from "../../utils/products";
import Image from "next/image";
import ProductBanner from "../../components/products/ProductBanner";
import products from "../../data/products";

// допоміжна функція для вибору картинки
const getProductSrc = (product) => {
  const raw =
    product.image ||
    (Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : null) ||
    "/placeholder/300x400.jpg";

  if (typeof raw === "string") return raw;

  if (raw && typeof raw === "object" && typeof raw.src === "string") {
    return raw.src;
  }

  return "/placeholder/300x400.jpg";
};

export default function OffersInfo() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("SpecialOffers", "header");
  const router = useRouter();
  const searchParams = useSearchParams();

  const specialOffers = products.filter(
    (product) => product.isSpecialOffer === true
  );

  const [selectedProduct, setSelectedProduct] = useState(null);

  // 🔹 беремо id з URL: /special-offers?product=219
  const productId = searchParams.get("product");

  // 🔹 коли змінюється ?product=... — оновлюємо selectedProduct
  useEffect(() => {
    if (productId) {
      const found = products.find((p) => String(p.id) === productId);
      setSelectedProduct(found || null);
    } else {
      setSelectedProduct(null);
    }
  }, [productId]);

  // клік по картці: оновлюємо URL і відкриваємо банер
  const handleProductClick = (product) => {
    router.push(`/special-offers?product=${product.id}`, { scroll: false });
    setSelectedProduct(product);
  };

  const onContactClick = (selectedColor, selectedSize, quantity) => {
    if (selectedProduct) {
      handleContactButtonClick(
        router,
        selectedProduct,
        selectedColor,
        selectedSize,
        quantity,
        language
      );
    }
  };

  // закриття банера: прибираємо ?product= з URL
  const handleCloseBanner = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("product");
    const query = params.toString();
    router.push(
      query ? `/special-offers?${query}` : "/special-offers",
      { scroll: false }
    );
    setSelectedProduct(null);
  };

  return (
    <main className="dark:bg-gray-800 bg-[#fcf8f3] text-black dark:text-white min-h-screen px-4 py-8">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {menuItems[0]}
        </h1>
        <p className="dark:text-gray-400 text:bg-black text-sm md:text-base mb-8">
          {menuItems[1]}
        </p>
      </header>

      {/* Якщо вибрано продукт, показуємо ProductBanner */}
      {selectedProduct && (
        <ProductBanner
          selectedProduct={selectedProduct}
          handleContactButtonClick={onContactClick}
          onClose={handleCloseBanner}
        />
      )}

      <section aria-labelledby="special-offers">
        <h2 id="special-offers" className="sr-only">
          {menuItems[2]}
        </h2>
        <div
          className="bg-gray-100 dark:bg-gray-800 ml-8 max-h-[450px] md:max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8"
          aria-label="Special offers list"
          role="list"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-4">
            {specialOffers.map((product) => {
              const translatedName =
                product.translations?.[language]?.name || product.title;

              const src = getProductSrc(product);
              const isLocal =
                typeof src === "string" && src.startsWith("/");

              return (
                <article
                  key={product.id}
                  className="text-black bg-gray-100 dark:bg-white dark:text-black rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => handleProductClick(product)}
                  aria-labelledby={`product-title-${product.id}`}
                  role="listitem"
                >
                  <div className="w-full h-[300px] sm:h-[350px] overflow-hidden rounded-t relative">
                    <Image
                      src={src}
                      alt={`Preview of ${translatedName}`}
                      width={300}
                      height={350}
                      className="w-full h-full object-cover"
                      priority
                      unoptimized={isLocal}
                      loader={isLocal ? ({ src }) => src : undefined}
                    />
                  </div>

                  <div className="p-2 sm:p-4 dark:bg-gray-200">
                    <h3
                      id={`product-title-${product.id}`}
                      className="font-semibold text-sm sm:text-lg"
                    >
                      {translatedName}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-red-600 font-bold text-sm sm:text-base">
                        Ціна: {product.discountPrice || product.price} UAH
                      </p>
                      {product.discountPrice && (
                        <div className="flex gap-2 items-center">
                          <p className="line-through text-gray-500 text-xs sm:text-sm">
                            Ціна {product.price} UAH
                          </p>
                          <p className="text-green-600 text-xs sm:text-sm hidden">
                            -
                            {Math.round(
                              ((product.price - product.discountPrice) /
                                product.price) *
                                100
                            )}
                            %
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
