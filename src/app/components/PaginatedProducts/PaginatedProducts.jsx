import React, { useState, useRef, useEffect } from "react";
import ProductCard from "../products/ProductCard";
import { useLanguage } from "../../Functions/useLanguage";
import QuickAddModal from "../QuickAddModal/QuickAddModal";

const PaginatedProducts = ({ products, productsPerPage = 12, onProductClick, onAddToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [quickAddProduct, setQuickAddProduct] = useState(null);
  const productsRef = useRef(null);
  const paginationScrollRef = useRef(null);

  const handleOpenQuickAdd = (product) => setQuickAddProduct(product);
  const handleCloseQuickAdd = () => setQuickAddProduct(null);

  const { translateList } = useLanguage();
  const menuItems = translateList("Filtersidebar", "PaginatedProducts");

  const totalPages = Math.max(1, Math.ceil(products.length / productsPerPage));

  // Скинути на 1 при зміні списку (наприклад категорія)
  useEffect(() => {
    setCurrentPage((p) => (p > totalPages ? 1 : p));
  }, [products.length, totalPages]);

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (pageNumber) => {
    const page = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(page);
    setTimeout(() => {
      productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  // Лише горизонтальна прокрутка смуги номерів (без scrollIntoView — інакше весь вікно їде вниз до пагінації)
  useEffect(() => {
    if (!paginationScrollRef.current || totalPages <= 1) return;
    const container = paginationScrollRef.current;
    const activeBtn = container.querySelector(`[data-page="${currentPage}"]`);
    if (!activeBtn) return;
    const left =
      activeBtn.offsetLeft - container.clientWidth / 2 + activeBtn.offsetWidth / 2;
    container.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [currentPage, totalPages]);

  if (totalPages <= 0) {
    return (
      <div className="w-full">
        <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
              onAddToCart={() => handleOpenQuickAdd(product)}
            />
          ))}
        </div>
        {quickAddProduct && (
          <QuickAddModal
            product={quickAddProduct}
            onClose={handleCloseQuickAdd}
            onAddToCart={onAddToCart}
          />
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick(product)}
            onAddToCart={() => handleOpenQuickAdd(product)}
          />
        ))}
      </div>

      {/* Пагінація: спочатку Prev/Next, потім номери сторінок з горизонтальною прокруткою */}
      <div className="mt-6 space-y-4">
        {/* Кнопки Назад / Вперед — завжди видимі */}
        <div className="flex justify-between items-center gap-3">
          <button
            type="button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex-1 sm:flex-none min-w-0 px-4 py-2.5 rounded border font-normal transition touch-manipulation ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-[#1f2937] dark:text-[#475569] dark:border-[#334155]"
                : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200 active:bg-gray-300 dark:bg-[#1f2937] dark:text-[#60a5fa] dark:border-[#334155] dark:hover:bg-[#2563eb]"
            }`}
          >
            {menuItems[0] ?? "Попередня"}
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-400 shrink-0">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex-1 sm:flex-none min-w-0 px-4 py-2.5 rounded border font-normal transition touch-manipulation ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-[#1f2937] dark:text-[#475569] dark:border-[#334155]"
                : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200 active:bg-gray-300 dark:bg-[#1f2937] dark:text-[#60a5fa] dark:border-[#334155] dark:hover:bg-[#2563eb]"
            }`}
          >
            {menuItems[1] ?? "Наступна"}
          </button>
        </div>

        {/* Номери сторінок — горизонтальна прокрутка пальцем */}
        <div
          ref={paginationScrollRef}
          className="overflow-x-auto overflow-y-hidden overscroll-x-contain scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
          style={{ WebkitOverflowScrolling: "touch" }}
          aria-label="Номери сторінок"
        >
          <ul className="flex justify-center gap-2 py-2 min-w-min px-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className="flex-shrink-0">
                <button
                  type="button"
                  data-page={page}
                  onClick={() => handlePageChange(page)}
                  className={`min-w-[2.5rem] px-3 py-2 rounded border font-normal transition touch-manipulation ${
                    currentPage === page
                      ? "bg-gray-300 text-gray-500 border-gray-300 cursor-default dark:bg-[#1f2937] dark:text-[#475569] dark:border-[#334155]"
                      : "bg-gray-100 text-black border-gray-300 hover:bg-gray-200 active:bg-gray-300 dark:bg-[#1f2937] dark:text-[#60a5fa] dark:border-[#334155] dark:hover:bg-[#2563eb]"
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

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
