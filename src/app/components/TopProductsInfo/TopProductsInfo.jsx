"use client";
import products from '../../data/products'
import { useState } from "react";
import { useLanguage } from "../../Functions/useLanguage";
export default function TopProductsInfo() {
  const {  translateList } = useLanguage(); 
  
  const menuItems = translateList("home", "about");
  const [selectedProduct, setSelectedProduct] = useState(products[0]); 

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Explore the Collection</h1>
        <p className="text-gray-400 mb-8">
          I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
        </p>
      </div>
      <div className="max-h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8">
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded shadow-lg hover:scale-105 transition-transform cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
        <div className="flex flex-col items-center">
          <img
            src={selectedProduct.img}
            alt={selectedProduct.title}
            className="w-full max-w-md object-cover rounded-lg shadow-lg"
          />
          <div className="flex mt-8 gap-2">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedProduct.title} thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover border ${
                  image === selectedProduct.img ? "border-lime-500" : "border-gray-500"
                } rounded cursor-pointer`}
                onClick={() => setSelectedProduct({ ...selectedProduct, img: image })}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-white mb-2">{selectedProduct.title}</h1>
          <p className="text-gray-500 text-sm mb-4">SKU: {selectedProduct.sku}</p>
          <p className="text-2xl font-bold text-white mb-4">{selectedProduct.price}</p>

          {/* Size Selector */}
          <div className="mb-8">
            <label htmlFor="size" className="block text-sm font-medium mb-2">
              Size
            </label>
            <select
              id="size"
              className="w-1/2 p-2 border border-gray-700 rounded bg-gray-800 text-gray-300"
            >
              <option value="">Select</option>
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="large">XL</option>
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              defaultValue="1"
              min="1"
              className="w-1/6 p-2 border border-gray-700 rounded bg-gray-800 text-gray-300"
            />
          </div>

          {/* Add to Cart Button */}
          <button className="w-1/2  bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded transition duration-300">
            Add to Cart
          </button>

          {/* Product Info */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-white mb-4">PRODUCT INFO</h2>
            <p className="text-gray-400 text-sm">{selectedProduct.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
