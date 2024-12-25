"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FilterSidebar from "../FilterSidebar";
import SortMenu from "../SortMenu";
import { filterProducts } from "../../utils/filterProducts";
import InfoForm from "../TopProductsInfo/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";

export default function AllProducts() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "about");
  const router = useRouter();

  const [maxPrice, setMaxPrice] = useState(130);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOrder, setSortOrder] = useState("recommended");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const descriptionRef = useRef(null);

  const products = [
    { id: 1, name: "Product 1", price: 85, color: "red", size: "M", image: "/2.jpg", title: "I'm a product 1" },
    { id: 2, name: "Product 2", price: 20, color: "blue", size: "L", image: "/7.jpg", title: "I'm a product 2" },
    { id: 3, name: "Product 3", price: 10, color: "green", size: "S", image: "/1.jpg", title: "I'm a product 3" },
    { id: 4, name: "Product 4", price: 25, color: "red", size: "M", image: "/10.jpg", title: "I'm a product 4" },
    { id: 5, name: 'Product 5', price: 50, color: 'blue', size: 'XL', image: '/9.jpg', title: "I'm a product 5" },
    { id: 6, name: 'Product 1', price: 85, color: 'red', size: 'M', image: '/8.jpg', title: "I'm a product 6" },
    { id: 7, name: 'Product 2', price: 20, color: 'blue', size: 'L', image: '/6.jpg', title: "I'm a product 7" },
    { id: 8, name: 'Product 3', price: 10, color: 'green', size: 'S', image: '/5.jpg', title: "I'm a product 8" },
    { id: 9, name: 'Product 4', price: 25, color: 'red', size: 'M', image: '/4.jpg', title: "I'm a product 9" },
    { id: 10, name: 'Product 5', price: 50, color: 'blue', size: 'XL', image: '/3.jpg', title: "I'm a product 10" },
    { id: 11, name: 'Product 4', price: 25, color: 'red', size: 'M', image: '/8.jpg', title: "I'm a product 11" },
    { id: 12, name: 'Product 5', price: 50, color: 'blue', size: 'XL', image: '/9.jpg', title: "I'm a product 12" },
 
    // Додайте інші продукти...
  ];

  const filteredProducts = filterProducts(products, {
    maxPrice,
    selectedSize,
    selectedColor,
  }).sort((a, b) => {
    if (sortOrder === "priceAsc") return a.price - b.price;
    if (sortOrder === "priceDesc") return b.price - a.price;
    return 0;
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Зберігаємо вибраний продукт у стані
    scrollToDescription();
  };

  const handleContactButtonClick = (product) => {
    router.push(
      `/contact?productName=${product.title}&productPrice=${product.price}&productDescription=${product.name}&productImage=${product.image}&productColor=${product.color}&productSize=${product.size}`
    );
  };

  const scrollToDescription = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <FilterSidebar
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          >
            <SortMenu
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              isSortMenuOpen={isSortMenuOpen}
              toggleSortMenu={() => setIsSortMenuOpen(!isSortMenuOpen)}
            />
          </FilterSidebar>

          <div className="w-full md:w-3/4 flex flex-col">
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

            <h1 className="text-3xl sm:text-4xl font-bold mb-6">All Products</h1>
            <p className="text-gray-400 mb-4">Explore our diverse range of products tailored to your needs.</p>
            <p className="text-gray-400 mt-4 pb-4">{filteredProducts.length} products</p>

            <main className="w-full max-h-[800px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-800 p-3 sm:p-4 rounded group cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded relative">
                      <img
                        src={product.image || `https://via.placeholder.com/150?text=${product.name}`}
                        alt={product.name}
                        className="object-cover w-full h-full rounded transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded"></div>
                    </div>
                    <div className="mt-2 sm:mt-4">
                      <h3 className="text-sm sm:text-lg font-medium">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">Price: {product.price}₴</p>
                      <p className="text-xs sm:text-sm text-gray-400">Size: {product.size}</p>
                      {/*<p className="text-xs sm:text-sm text-gray-400">Color: {product.color}</p>*/}
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
