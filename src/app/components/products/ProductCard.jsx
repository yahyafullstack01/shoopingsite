
import React from "react";
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

const ProductCard = ({ product, onClick, onAddToCart }) => {
  const { language, translateList } = useLanguage();
  const translatedName = product.translations?.[language]?.name || product.name;
  const translatedCategory = product.translations?.[language]?.category || product.category;

  const infoLabels = translateList("Infoform", "header");
  const categoryLabel = infoLabels[0] || "Category";
  const priceLabel = infoLabels[8] || "Price";

  return (
    <article
      className="bg-gray-100 dark:bg-[#0f172a] p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
    >
      
      <div
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        role="button"
        tabIndex={0}
        className="relative cursor-pointer group"
        aria-label={`View details for ${translatedName}`}
      >
        <figure className="w-full overflow-hidden rounded relative aspect-[3/4]">
          <Image
            src={product.image || `https://via.placeholder.com/300x400?text=${translatedName}`}
            alt={translatedName || "Product Image"}
            width={300}
            height={400}
            className="w-full h-full object-cover rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
       
          <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm sm:text-base font-medium rounded">
            Переглянути деталі
          </figcaption>
        </figure>
      </div>

    
      <section className="mt-3 sm:mt-4">
        <h3 className="text-sm sm:text-lg font-semibold text-center sm:text-left">
          {translatedName || "Unnamed Product"}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mt-1 text-center sm:text-left">
          <span className="font-semibold">{priceLabel}:</span> {product.price || "N/A"} <span className="text-xs">UAH</span>
        </p>
      </section>

      <div className="mt-3 flex flex-col items-center sm:items-start gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation(); // щоб не відкривався модал
            onAddToCart({ product, selectedColor: "", selectedSize: "", quantity: 1 });
          }}
          className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded transition"
        >
          Додати в корзину
        </button>

        <p className="text-[11px] text-gray-500 dark:text-gray-400">
          Натисніть на фото, щоб переглянути деталі
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
{/*}
'use client';
import React from "react";
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

const ProductCard = ({ product, onClick, onAddToCart, setLastProduct, setShowToast }) => {
  const { language, translateList } = useLanguage();
  const translatedName = product.translations?.[language]?.name || product.name;
  const translatedCategory = product.translations?.[language]?.category || product.category;

  const infoLabels = translateList("Infoform", "header");
  const priceLabel = infoLabels[8] || "Price";

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
          <Image
            src={product.image || `https://via.placeholder.com/300x400?text=${translatedName}`}
            alt={translatedName || "Product Image"}
            width={300}
            height={400}
            className="w-full h-full object-cover rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
         
          <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm sm:text-base font-medium rounded">
            Переглянути деталі
          </figcaption>
        </figure>
      </div>

    
      <section className="mt-3 sm:mt-4">
        <h3 className="text-sm sm:text-lg font-semibold text-center sm:text-left">
          {translatedName || "Unnamed Product"}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mt-1 text-center sm:text-left">
          <span className="font-semibold">{priceLabel}:</span> {product.price || "N/A"} <span className="text-xs">UAH</span>
        </p>
      </section>

      <div className="mt-3 flex flex-col items-center sm:items-start gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation(); // щоб не відкривався модал

            // Додати в корзину
            onAddToCart({ product, selectedColor: "", selectedSize: "", quantity: 1 });

            // Показати Toast з інформацією
            setLastProduct({
              name: translatedName,
              price: product.price,
              image: product.image,
              quantity: 1,
            });
            setShowToast(true);
          }}
          className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded transition"
        >
          Додати в корзину
        </button>

        <p className="text-[11px] text-gray-500 dark:text-gray-400">
          Натисніть на фото, щоб переглянути деталі
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
*/}