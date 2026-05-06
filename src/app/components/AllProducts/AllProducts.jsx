'use client';

import React, { useState, useRef, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import FilterSidebar from "../../Functions/FilterSidebar";
import SortMenu from "../../Functions/SortMenu";
import PaginatedProducts from "../../components/PaginatedProducts/PaginatedProducts";

const ProductBanner = dynamic(() => import("../../components/products/ProductBanner"));
import {
  handleSizeSelect as applySizeSelect,
  filterAndSortProducts,
  handleContactButtonClick
} from "../../utils/products";
import { useLanguage } from "../../Functions/useLanguage";
import { translateCategory } from "../../utils/categoryTranslation";
import { getSessionId } from '../../utils/session';
import { getBackendBaseUrl } from '../../utils/backendUrl';
import { getProductImageSrc } from "../../utils/productData";
import Toast from "../../components/ToastCart/Toast";

export default function AllProducts({ catalogPool = [], prefetchedProduct = null }) {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("Catalogues", "header");

  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const categoryFromURL = (searchParams.get("category") || "").toLowerCase();

  const pageParamRaw = parseInt(searchParams.get("page") || "1", 10);
  const pageFromUrl =
    Number.isFinite(pageParamRaw) && pageParamRaw > 0 ? pageParamRaw : 1;
  const productsPerPage = 12;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryFromURL]);

  // --------------------------------------------
  // 1) Пул товарів для поточної категорії (з сервера)
  // --------------------------------------------
  const visiblePool = useMemo(() => catalogPool, [catalogPool]);

  // --------------------------------------------
  // 2) Динамічна “стеля” ціни для слайдера
  // --------------------------------------------
  const priceLimit = useMemo(() => {
    const max = Math.max(100, ...visiblePool.map((p) => p.price));
    return Number.isFinite(max) ? max : 100;
  }, [visiblePool]);

  const [maxPrice, setMaxPrice] = useState(priceLimit);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOrder, setSortOrder] = useState("recommended");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);

  // якщо змінюється категорія/пул товарів — оновлюємо стелю і поточне значення
  useEffect(() => {
    setMaxPrice(priceLimit);
  }, [priceLimit]);

  const descriptionRef = useRef(null);

  const handleAddToCart = async (arg) => {
    const sessionId = getSessionId();
    if (!sessionId) {
      alert("Не вдалося створити сесію. Спробуйте оновити сторінку.");
      return;
    }

    const product = arg?.product || arg;
    const chosenColor = arg?.selectedColor || "";
    const chosenSize = arg?.selectedSize || "";
    const quantity = arg?.quantity || 1;
    const name = product?.name || product?.title || "Unnamed Product";
    const price = Number(product?.price || 0).toFixed(2);
    const discountPrice = product?.oldPrice
      ? Number(product?.price).toFixed(2)
      : null;

    try {
      const res = await fetch(`${getBackendBaseUrl()}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          productId: product?.id || "unknown",
          name,
          price,
          discountPrice,
          color: chosenColor,
          size: chosenSize,
          quantity,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || data.error || res.statusText || "Cart error");
      }
      setLastProduct({
        name,
        price: discountPrice || price,
        image: getProductImageSrc(product?.image),
        quantity,
      });
      setShowToast(true);
    } catch (err) {
      console.error("❌ Помилка додавання в корзину:", err);
      alert("Помилка при додаванні в корзину");
    }
  };

  // Анонс товару з URL ?product= (повний об'єкт з сервера для ProductBanner)
  useEffect(() => {
    if (productId) {
      if (prefetchedProduct && String(prefetchedProduct.id) === productId) {
        setSelectedProduct(prefetchedProduct);
      } else {
        setSelectedProduct(null);
      }
    } else {
      setSelectedProduct(null);
    }
  }, [productId, prefetchedProduct]);

  const selectedCategoryForFilter =
    !categoryFromURL || categoryFromURL === "all" ? "" : categoryFromURL;

  const filteredProducts = filterAndSortProducts(
    visiblePool,
    {
      maxPrice,
      selectedSize,
      selectedColor,
      selectedCategory: selectedCategoryForFilter,
    },
    sortOrder
  );

  const filteredTotalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );
  const safePage = Math.min(pageFromUrl, filteredTotalPages);
  const paginatedSlice = filteredProducts.slice(
    (safePage - 1) * productsPerPage,
    safePage * productsPerPage
  );

  useEffect(() => {
    if (pageFromUrl === safePage) return;
    const p = new URLSearchParams(searchParams.toString());
    p.set("page", String(safePage));
    router.replace(`/All-products?${p.toString()}`, { scroll: false });
  }, [pageFromUrl, safePage, router, searchParams]);

  const skipFilterPageResetRef = useRef(true);
  useEffect(() => {
    if (skipFilterPageResetRef.current) {
      skipFilterPageResetRef.current = false;
      return;
    }
    const p = new URLSearchParams(searchParams.toString());
    if (!p.get("page") || p.get("page") === "1") return;
    p.set("page", "1");
    router.replace(`/All-products?${p.toString()}`, { scroll: false });
  }, [maxPrice, selectedSize, selectedColor, sortOrder, router, searchParams]);

  const onProductClick = (product) => {
    const p = new URLSearchParams(searchParams.toString());
    p.set("category", categoryFromURL || "all");
    p.set("product", String(product.id));
    router.push(`/All-products?${p.toString()}`, { scroll: false });
  };

  const onContactClick = (color, size, quantity) => {
    handleContactButtonClick(
      router,
      selectedProduct,
      color,
      size,
      quantity,
      language
    );
  };

  const handleCloseBanner = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("product");
    router.push(`/All-products?${newParams.toString()}`, { scroll: false });
    setSelectedProduct(null);
  };

  return (
    <section className="bg-gray-100 text-black dark:text-white min-h-screen dark:bg-black">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex flex-col space-y-6">

          {/* Фільтри */}
          <div className="w-full flex flex-wrap gap-4 items-center">
            <FilterSidebar
              priceLimit={priceLimit}              
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              selectedSize={selectedSize}
              handleSizeSelect={(size) => applySizeSelect(size, setSelectedSize)}
              selectedCategory={categoryFromURL || ""}
              handleCategorySelect={(category) => {
            
                const slug = (category || "").toLowerCase();
                router.push(`/All-products?category=${slug || "all"}&page=1`, { scroll: true });
              }}
              isHorizontal={true}
            >
              <SortMenu
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                isSortMenuOpen={isSortMenuOpen}
                toggleSortMenu={() => setIsSortMenuOpen(!isSortMenuOpen)}
              />
            </FilterSidebar>
          </div>

          {/* Основний вміст */}
          <main className="w-full flex flex-col">
            {selectedProduct && (
              <ProductBanner
                selectedProduct={selectedProduct}
                descriptionRef={descriptionRef}
                handleContactButtonClick={onContactClick}
                onClose={handleCloseBanner}
                handleAddToCart={handleAddToCart}
              />
            )}

            <section aria-labelledby="product-header" className="w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
              <h1 id="product-header" className="text-3xl sm:text-4xl font-normal mb-2">
                {menuItems[0]}
              </h1>
              <p className="text-gray-700 dark:text-gray-400 mb-4">{menuItems[1]}</p>

              {categoryFromURL && categoryFromURL !== "all" && (
                <h2 className="text-2xl font-normal text-gray-800 dark:text-gray-200 mb-2">
                  {translateCategory(categoryFromURL, translateList)}
                </h2>
              )}

              <p className="text-gray-700 dark:text-gray-400 mt-4 pb-4">
                {filteredProducts.length} {menuItems[2]}
              </p>
            </section>

            <section aria-labelledby="product-list" aria-live="polite" className="w-full">
              <h2 id="product-list" className="sr-only">{menuItems[3]}</h2>

              <PaginatedProducts
                products={paginatedSlice}
                productsPerPage={12}
                controlledPage={safePage}
                controlledTotalPages={filteredTotalPages}
                onPageChange={(next) => {
                  const p = new URLSearchParams(searchParams.toString());
                  p.set("page", String(next));
                  router.push(`/All-products?${p.toString()}`, { scroll: false });
                }}
                onProductClick={onProductClick}
                onAddToCart={handleAddToCart}
              />

              {showToast && lastProduct && (
                <Toast
                  product={lastProduct}
                  onClose={() => setShowToast(false)}
                />
              )}
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}
