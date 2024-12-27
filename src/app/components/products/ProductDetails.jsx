import React from "react";

const ProductDetails = ({ productData, formSubmitted }) => {
  if (formSubmitted || !productData.name) return null;

  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">
        Product: {productData.name}
      </h2>
      <p className="text-sm sm:text-base">Price: {productData.price}</p>
      <p className="text-sm sm:text-base">Color: {productData.color}</p>
      <p className="text-sm sm:text-base">Size: {productData.size}</p>
      <p className="text-sm sm:text-base">Quantity: {productData.quantity}</p>
      <p className="text-sm sm:text-base">SKU: {productData.sku}</p>
      <p className="text-sm sm:text-base">Description: {productData.description}</p>
    </div>
  );
};

export default ProductDetails;
