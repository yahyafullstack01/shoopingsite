
import React from "react";
import Image from "next/image";
import InfoForm from "../../Functions/InfoForm";

const ProductBanner = ({
  selectedProduct,
  descriptionRef,
  handleContactButtonClick,
}) => (
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
            src={selectedProduct.image}
            alt={selectedProduct.name}
            layout="responsive"
            width={800}
            height={600}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full bg-black bg-opacity-75 p-6 text-white rounded-lg">
          <InfoForm
            product={selectedProduct}
            onContactClick={handleContactButtonClick}
          />
        </div>
      </div>
    )}
  </div>
);

export default ProductBanner;
