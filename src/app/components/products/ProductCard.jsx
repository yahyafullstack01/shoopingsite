import React from "react";
import Image from "next/image";
import { useLanguage } from '../../Functions/useLanguage'; // Adjust the import path if necessary

const ProductCard = ({ product, onClick }) => {
  const { language } = useLanguage(); // Retrieve the current language using a custom hook.

  // Translate the product name based on the current language.
  const translatedName = product.translations?.[language]?.name || product.name;

  return (
    <article
      className="bg-[#fcfaf3c6] dark:bg-[#0f172a] p-3 sm:p-4 rounded group cursor-pointer"
      onClick={onClick} // Handle the click event for the card.
      role="button"
      tabIndex={0} // Make it focusable for accessibility.
      aria-label={`View details for ${translatedName}`}
    >
      {/* Container for the product image */}
      <figure className="w-full h-[220px] overflow-hidden rounded relative">
        <Image
          src={product.image || `https://via.placeholder.com/150?text=${translatedName}`}
          alt={translatedName} // Use the translated product name for the alt attribute.
          width={300}
          height={220}
          className="object-cover w-full h-full rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
         
        />
        {/* Overlay effect that appears on hover */}
        <figcaption className="absolute inset-0 bg-black dark:bg-[#0f172a] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded" aria-hidden="true"></figcaption>
      </figure>

      {/* Container for product details */}
      <section className="mt-2 sm:mt-4">
        <h3 className="text-sm sm:text-lg font-medium" aria-labelledby="product-name">
          {translatedName}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400" id="product-price">
          <span className="font-semibold">Price:</span> {product.price}₴
        </p>
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400" id="product-size">
          <span className="font-semibold">Size:</span> {product.size}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-400" id="product-category">
          <span className="font-semibold">Category:</span> {product.category}
        </p>
      </section>
    </article>
  );
};

export default ProductCard;
