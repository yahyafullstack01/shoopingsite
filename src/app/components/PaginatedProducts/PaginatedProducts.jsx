import React, { useState, useRef } from "react";
import ProductCard from "../products/ProductCard";
import { useLanguage } from "../../Functions/useLanguage";
import QuickAddModal from "../QuickAddModal/QuickAddModal"; // імпортуй

const PaginatedProducts = ({ products, productsPerPage = 12, onProductClick, onAddToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [quickAddProduct, setQuickAddProduct] = useState(null); // Додано
const productsRef = useRef(null);

  const handleOpenQuickAdd = (product) => setQuickAddProduct(product);
  const handleCloseQuickAdd = () => setQuickAddProduct(null);

 const { translateList } = useLanguage();
  const menuItems = translateList("Filtersidebar", "PaginatedProducts");

  const totalPages = Math.ceil(products.length / productsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
  setTimeout(() => {
    productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 0);
};


return (
  <div className="w-full">
    {/* Список товарів */}
    <div ref={productsRef}  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {currentProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
          onAddToCart={() => handleOpenQuickAdd(product)}
        />
      ))}
    </div>

    {/* Пагінація */}
    <div className="flex justify-center mt-6">
      <ul className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded border font-normal transition ${
                currentPage === page
                  ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-[#1f2937] dark:text-[#475569] dark:border-[#334155]"
                  : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200 dark:bg-[#1f2937] dark:text-[#60a5fa] dark:border-[#334155] dark:hover:bg-[#2563eb]"
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* Prev / Next кнопки */}
    <div className="flex justify-between mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded border font-normal transition ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-[#1f2937] dark:text-[#475569] dark:border-[#334155]"
            : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200 dark:bg-[#1f2937] dark:text-[#60a5fa] dark:border-[#334155] dark:hover:bg-[#2563eb]"
        }`}
      >
        {menuItems[0]}
      </button>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded border font-normal transition ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-[#1f2937] dark:text-[#475569] dark:border-[#334155]"
            : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200 dark:bg-[#1f2937] dark:text-[#60a5fa] dark:border-[#334155] dark:hover:bg-[#2563eb]"
        }`}
      >
        {menuItems[1]}
      </button>
    </div>

    {/* 🔽 Окремо в кінці – модалка */}
    {quickAddProduct && (
      <QuickAddModal
        product={quickAddProduct}
        onClose={handleCloseQuickAdd}
        onAddToCart={onAddToCart}
      />
    )}
  </div>
);

};

export default PaginatedProducts;
