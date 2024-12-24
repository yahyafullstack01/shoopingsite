"use client";
import products from "../../data/products";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import InfoForm from "./InfoForm";

export default function TopProductsInfo() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const router = useRouter();
  const descriptionRef = useRef(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    scrollToDescription();
  };

  const handleContactButtonClick = () => {
    router.push("/contact"); // Redirect to the "Contact" page
  };

  const scrollToDescription = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("descriptionRef is null");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Explore the Collection
        </h1>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          I`m a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <div className="max-h-[300px] md:max-h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-36 sm:h-48 object-cover rounded-t"
              />
              <div className="p-2 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-lg">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-base">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8">
        <div className="flex flex-col items-center">
          <img
            src={selectedProduct.img}
            alt={selectedProduct.title}
            className="w-full max-w-xs md:max-w-md object-cover rounded-lg shadow-lg"
          />
          <div className="flex mt-4 sm:mt-8 gap-2">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedProduct.title} thumbnail ${index + 1}`}
                className={`w-12 h-12 sm:w-16 sm:h-16 object-cover border ${
                  image === selectedProduct.img
                    ? "border-lime-500"
                    : "border-gray-500"
                } rounded cursor-pointer`}
                onClick={() =>
                  setSelectedProduct({ ...selectedProduct, img: image })
                }
              />
            ))}
          </div>
        </div>

        <InfoForm
          product={selectedProduct}
          descriptionRef={descriptionRef}
          onContactClick={handleContactButtonClick}
        />
      </div>
    </div>
  );
}
