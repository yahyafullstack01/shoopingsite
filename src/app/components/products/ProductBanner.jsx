import React, { useState, useEffect } from "react";
import Image from "next/image";
import InfoForm from "../../Functions/InfoForm";

const ProductBanner = ({
  selectedProduct,
  descriptionRef,
  handleContactButtonClick,
}) => {
  const [currentImage, setCurrentImage] = useState(selectedProduct?.image || "/4.jpg");

  useEffect(() => {
    setCurrentImage(selectedProduct?.image || "/4.jpg");
  }, [selectedProduct]);

  const handleThumbnailClick = (image) => {
    // Змінюємо місцями мініатюру і основне зображення
    const updatedImages = selectedProduct.images.map((img) =>
      img === image ? currentImage : img
    );
    selectedProduct.images = updatedImages; // Оновлюємо мініатюри
    setCurrentImage(image); // Змінюємо основне зображення
  };

  return (
    <div
      ref={descriptionRef}
      className={`relative w-full bg-black overflow-hidden rounded-lg mb-8 transition-all duration-300 ease-in-out ${
        selectedProduct ? "p-4" : "h-72 sm:h-96"
      }`}
    >
      {!selectedProduct && (
        <Image
          src="/4.jpg"
          alt="Category Banner"
          layout="fill"
          objectFit="cover"
          className="object-cover shadow-lg transition-transform duration-300 ease-in-out"
        />
      )}
      {selectedProduct && (
        <div className="relative flex flex-col sm:flex-row items-start">
          <div className="w-full relative h-42 sm:h-74">
            <Image
              src={currentImage}
              alt={selectedProduct.name}
              layout="responsive"
              width={800}
              height={600}
              className="object-cover rounded-lg"
            />
            {selectedProduct.images && selectedProduct.images.length > 1 && (
              <div className="flex mt-4 gap-2 justify-center">
                {selectedProduct.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProduct.name} thumbnail ${index + 1}`}
                    className={`w-12 h-12 object-cover border rounded cursor-pointer hover:scale-105 transition-transform ${
                      image === currentImage ? "border-lime-500" : "border-gray-500"
                    }`}
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="w-full bg-black bg-opacity-75 p-6 text-white rounded-lg">
            <InfoForm
              product={{ ...selectedProduct, image: currentImage }}
              onContactClick={handleContactButtonClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductBanner;
