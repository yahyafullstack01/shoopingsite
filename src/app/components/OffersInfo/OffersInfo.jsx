"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import { handleContactButtonClick } from "../../utils/products";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import Image from "next/image";
import ProductBanner from "../../components/products/ProductBanner"; // Імпортуємо банер
import products from "../../data/products";
const normalizeMedia = (m) =>
  typeof m === "string" ? { type: "image", src: m } : m;
export default function OffersInfo() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("SpecialOffers", "header");
  const router = useRouter();

  const specialOffers = products.filter((product) => product.isSpecialOffer === true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const onContactClick = (selectedColor, selectedSize, quantity) => {
    if (selectedProduct) {
      handleContactButtonClick(router, selectedProduct, selectedColor, selectedSize, quantity, language);
    }
  };

  const handleCloseBanner = () => {
    setSelectedProduct(null);
  };

  return (
    <main className="dark:bg-gray-800 bg-[#fcf8f3] text-black dark:text-white min-h-screen px-4 py-8">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{menuItems[0]}</h1>
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
              const translatedName = product.translations?.[language]?.name || product.title;

              return (
                <article
                  key={product.id}
                  className="text-black bg-gray-100 dark:bg-white dark:text-black rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => handleProductClick(product)}
                  aria-labelledby={`product-title-${product.id}`}
                  role="listitem"
                >
                  <div className="w-full h-[300px] sm:h-[350px] overflow-hidden rounded-t">
                    <Image
                      src={normalizeMedia(product.image || product.images?.[0]).src}
                     
                      alt={`Preview of ${translatedName}`}
                      width={300}
                      height={350}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="p-2 sm:p-4 dark:bg-gray-200">
                    <h3 id={`product-title-${product.id}`} className="font-semibold text-sm sm:text-lg">
                      {translatedName}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-red-600 font-bold text-sm sm:text-base">
                        Ціна: {product.discountPrice || product.price} UAH
                      </p>
                      {product.discountPrice && (
                        <div className="flex gap-2 items-center">
                          <p className="line-through text-gray-500 text-xs sm:text-sm">
                            Ціна{product.price}UAH
                          </p>
                          <p className="text-green-600 text-xs sm:text-sm hidden">
                            -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
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
