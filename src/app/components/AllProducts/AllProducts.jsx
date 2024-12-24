"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import FilterSidebar from '../FilterSidebar';
import SortMenu from '../SortMenu';
import { filterProducts } from '../../utils/filterProducts';

export default function AllProducts() {
  const [maxPrice, setMaxPrice] = useState(130);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [sortOrder, setSortOrder] = useState('recommended');
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Стан для вибраного продукту

  const products = [
    { id: 1, name: 'Product 1', price: 85, color: 'red', size: 'M', image: '/2.jpg' },
    { id: 2, name: 'Product 2', price: 20, color: 'blue', size: 'L', image: '/7.jpg' },
    { id: 3, name: 'Product 3', price: 10, color: 'green', size: 'S', image: '/1.jpg' },
    { id: 4, name: 'Product 4', price: 25, color: 'red', size: 'M', image: '/10.jpg' },
    { id: 5, name: 'Product 5', price: 50, color: 'blue', size: 'XL', image: '/9.jpg' },
    { id: 6, name: 'Product 1', price: 85, color: 'red', size: 'M', image: '/8.jpg' },
    { id: 7, name: 'Product 2', price: 20, color: 'blue', size: 'L', image: '/6.jpg' },
    { id: 8, name: 'Product 3', price: 10, color: 'green', size: 'S', image: '/5.jpg' },
    { id: 9, name: 'Product 4', price: 25, color: 'red', size: 'M', image: '/4.jpg' },
    { id: 10, name: 'Product 5', price: 50, color: 'blue', size: 'XL', image: '/3.jpg' },
    { id: 11, name: 'Product 4', price: 25, color: 'red', size: 'M', image: '/8.jpg' },
    { id: 12, name: 'Product 5', price: 50, color: 'blue', size: 'XL', image: '/9.jpg' },
 
  ];

  const filteredProducts = filterProducts(products, {
    maxPrice,
    selectedSize,
    selectedColor,
  }).sort((a, b) => {
    if (sortOrder === 'priceAsc') return a.price - b.price;
    if (sortOrder === 'priceDesc') return b.price - a.price;
    return 0;
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Зберігаємо вибраний продукт у стані
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="w-full mx-auto px-8 py-4">
        <div className="flex flex-col md:flex-row md:space-x-8">

          <FilterSidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />

          <div className="w-full md:w-3/4 flex flex-col">
            {/* Банер */}
            <div className="relative w-full h-96 bg-black overflow-hidden rounded-lg mb-8">
              <Image
                src={selectedProduct?.image || '/4.jpg'} // Відображення зображення вибраного продукту або стандартного банера
                alt={selectedProduct ? selectedProduct.name : 'Category Banner'}
                layout="fill"
                objectFit="cover"
                className="object-cover shadow-[0_0_30px_10px_rgba(255,255,255,0.5)] dark:shadow-[0_0_30px_10px_rgba(255,255,255,0.8)] transition-transform duration-300 ease-in-out"
              />
              {/* Опис вибраного продукту */}
              {selectedProduct && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                  <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                  <p className="text-lg">Price: {selectedProduct.price}₴</p>
                  <p className="text-sm">Color: {selectedProduct.color}</p>
                  <p className="text-sm">Size: {selectedProduct.size}</p>
                </div>
              )}
            </div>

            <h1 className="text-4xl font-bold mb-8">All Products</h1>
            <p className="text-gray-400 mb-4">
              This is your category description. It`s a great place to tell
              customers what this category is about, connect with your audience, and draw attention to your products.
            </p>

            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-400">{filteredProducts.length} products</p>
              <SortMenu
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                isSortMenuOpen={isSortMenuOpen}
                toggleSortMenu={() => setIsSortMenuOpen(!isSortMenuOpen)}
              />
            </div>

            <main className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-800 p-4 rounded group cursor-pointer"
                    onClick={() => handleProductClick(product)} // Обробка кліку на продукт
                  >
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded relative">
                      <img
                        src={product.image || `https://via.placeholder.com/150?text=${product.name}`}
                        alt={product.name}
                        className="object-cover w-full h-full rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded"></div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-400">Price: {product.price}₴</p>
                      <p className="text-sm text-gray-400">Size: {product.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
