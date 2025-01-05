import React, { useState, useEffect } from "react";
import Image from "next/image";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import ThumbnailCarousel from "../../components/ThumbnailCarousel/ThumbnailCarousel";

const ProductBanner = ({
  selectedProduct,
  descriptionRef,
  handleContactButtonClick,
}) => {
  const { language } = useLanguage();

  const [currentImage, setCurrentImage] = useState(
    selectedProduct?.image || "/4.jpg"
  );

  // Translate the product name and description based on the current language.
  const translatedName =
    selectedProduct?.translations?.[language]?.name || selectedProduct?.name;
  const translatedDescription =
    selectedProduct?.translations?.[language]?.description ||
    selectedProduct?.description;

  useEffect(() => {
    setCurrentImage(selectedProduct?.image || "/4.jpg");
  }, [selectedProduct]);

  return (
    <div
      ref={descriptionRef}
      className="relative w-full bg-[#fcf8f3] dark:bg-black overflow-hidden rounded-lg mb-8 transition-all duration-300 ease-in-out p-4"
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
              alt={translatedName}
              layout="responsive"
              width={800}
              height={600}
              className="object-cover rounded-lg"
            />

            <ThumbnailCarousel
              images={selectedProduct.images}
              onImageSelect={(image) => setCurrentImage(image)}
              visibleThumbnails={5}
            />
          </div>

          <div className="w-full dark:bg-black bg-opacity-75 p-6 text-bg-black dark:text-white rounded-lg">
            <InfoForm
              product={{
                ...selectedProduct,
                name: translatedName,
                description: translatedDescription,
                image: currentImage,
              }}
              colors={selectedProduct.colors}
              sizes={selectedProduct.sizes}
              descriptionRef={descriptionRef}
              onContactClick={handleContactButtonClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductBanner;
