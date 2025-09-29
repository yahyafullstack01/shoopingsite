'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toggleFavorite, isFavorite } from "../../utils/favorites";

const ProductCard = ({ product, onClick, onAddToCart }) => {
  const { language, translateList } = useLanguage();
  const translatedName =
    product.translations?.[language]?.name || product.name || "Product";
  const translatedCategory =
    product.translations?.[language]?.category || product.category;

  const infoLabels = translateList("Infoform", "header");
  const priceLabel = infoLabels[8] || "Price";

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(product.id));
  }, [product.id]);

  const handleToggle = () => {
    const updated = toggleFavorite(product.id);
    setFavorite(updated.includes(product.id));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const finalPrice = product.discountPrice ?? product.price;
    const oldPrice = product.discountPrice ? product.price : null;
    onAddToCart({
      product: { ...product, price: finalPrice, oldPrice, name: translatedName, image: product.image },
      selectedColor: "",
      selectedSize: "",
      quantity: 1,
    });
  };

  const src = product.image || "/placeholder/300x400.jpg";
  const isLocal = typeof src === "string" && src.startsWith("/");

  return (
    <article className="bg-gray-100 dark:bg-[#0f172a] p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <div
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        role="button"
        tabIndex={0}
        className="relative cursor-pointer group"
        aria-label={`View details for ${translatedName}`}
      >
        <figure className="w-full overflow-hidden rounded relative aspect-[3/4]">
          <button
            onClick={(e) => { e.stopPropagation(); handleToggle(); }}
            className={`absolute top-2 right-2 text-xl z-10 transition duration-300 ${
              favorite ? 'text-red-600' : 'text-gray-400'
            }`}
          >
            {favorite ? <FaHeart /> : <FaRegHeart />}
          </button>

          <Image
            src={src}
            alt={translatedName}
            width={300}
            height={400}
            className="w-full h-full object-cover rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            unoptimized={isLocal}                       // ← важливо для /public
            loader={isLocal ? ({ src }) => src : undefined} // ← віддаємо напряму
          />

          <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm sm:text-base font-normal rounded">
            Переглянути деталі
          </figcaption>
        </figure>
      </div>

      <section className="mt-3 sm:mt-4">
        <h3 className="text-sm sm:text-lg font-normal text-center sm:text-left">
          {translatedName}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mt-1 text-center sm:text-left">
          <span className="font-normal">{priceLabel}:</span>{" "}
          {product.discountPrice ? (
            <>
              <span className="text-red-600">{product.discountPrice} UAH</span>{" "}
              <span className="line-through text-gray-400">{product.price} UAH</span>
            </>
          ) : (
            <>{product.price} UAH</>
          )}
        </p>
      </section>

      <div className="mt-3 flex flex-col items-center sm:items-start gap-2">
        <button onClick={handleAddToCart} className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded transition">
          ДОДАТИ В КОШИК
        </button>
        <p className="text-[11px] text-gray-500 dark:text-gray-400">
          Натисніть на фото, щоб переглянути деталі
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
