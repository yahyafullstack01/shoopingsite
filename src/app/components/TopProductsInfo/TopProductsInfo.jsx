'use client';

import products from "../../data/products";
import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import InfoForm from "../../Functions/InfoForm";
import { useLanguage } from "../../Functions/useLanguage";
import { handleContactButtonClick } from "../../utils/products";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import Image from "next/image";
import { getSessionId } from "../../utils/session";
import Toast from "../ToastCart/Toast";
import QuickAddModal from "../QuickAddModal/QuickAddModal";

export default function TopProductsInfo() {
  const { translateList, language } = useLanguage();
  const menuItems = translateList("home", "top_products");
  const router = useRouter();
  const searchParams = useSearchParams();
  const descriptionRef = useRef(null);

  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);
  const [quickAddProduct, setQuickAddProduct] = useState(null);

  const handleOpenQuickAdd = (product) => setQuickAddProduct(product);
  const handleCloseQuickAdd = () => setQuickAddProduct(null);

  const topProducts = products.filter((product) => product.isTop === true);
  const selectedProductId = searchParams.get("product");
  const initialProduct = selectedProductId
    ? topProducts.find((p) => p.id === Number(selectedProductId))
    : topProducts[0];

  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  useEffect(() => {
    if (selectedProductId) {
      const foundProduct = topProducts.find((p) => p.id === Number(selectedProductId));
      if (foundProduct) {
        setSelectedProduct(foundProduct);
        setTimeout(() => {
          descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [selectedProductId]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    router.push(`?product=${product.id}`, undefined, { shallow: true });
    scrollToDescription();
  };

  const handleAddToCart = async ({ product, selectedColor, selectedSize, quantity }) => {
    const sessionId = getSessionId();
    if (!sessionId) {
      alert("Не вдалося створити сесію. Спробуйте оновити сторінку.");
      return;
    }

    if (!selectedColor || !selectedSize) {
      alert("Вкажіть всі поля");
      return;
    }

    const payload = {
      sessionId,
      productId: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Помилка при додаванні в корзину");
        return;
      }

      setLastProduct({
        name: product.translations?.[language]?.name || product.title,
        price: product.price,
        image: product.image,
        quantity,
      });
      setShowToast(true);
    } catch (err) {
      console.error("❌ Додавання в корзину не вдалося:", err);
      alert("Помилка при додаванні в корзину");
    }
  };

  const onContactClick = (selectedColor, selectedSize, quantity, currentLanguage) => {
    handleContactButtonClick(router, selectedProduct, selectedColor, selectedSize, quantity, currentLanguage);
  };

  const scrollToDescription = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-black bg-gray-100 text-black dark:text-white min-h-screen px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-normal mb-4">{menuItems[0]}</h1>
      </div>

      <section aria-labelledby="top-products">
        <h2 id="top-products" className="sr-only">Top Products</h2>
        <div className="bg-gray-100 dark:bg-black max-h-[450px] md:max-h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-4">
            {topProducts.map((product) => {
              const translatedName = product.translations?.[language]?.name || product.title;
              const hasMultipleOptions = (product.colors?.length || 0) > 1 || (product.sizes?.length || 0) > 1;

              return (
                <article
  key={product.id}
  className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition duration-300"
>
  <div
    onClick={() => handleProductClick(product)}
    className="cursor-pointer"
  >
    <div className="w-full h-[200px] sm:h-[350px] overflow-hidden rounded-lg">
      <Image
        src={product.image}
        alt={`Preview of ${translatedName}`}
        width={300}
        height={350}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        priority
      />
    </div>
    <h3 className="font-light text-base sm:text-lg mt-3">{translatedName}</h3>
    <p className="text-sm text-black/70 dark:text-white/70">
      {product.price} UAH
    </p>
  </div>

  <button
    onClick={() => {
      if (hasMultipleOptions) {
        handleOpenQuickAdd(product);
      } else {
        handleAddToCart({
          product,
          selectedColor: product.color?.[0] || "",
          selectedSize: product.sizes?.[0] || "",
          quantity: 1,
        });
      }
    }}
    className="mt-4 w-full bg-black hover:bg-neutral-800 text-white text-sm py-2 rounded-md tracking-wide uppercase transition"
  >
    Додати в кошик
  </button>

  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
    Натисніть на фото, щоб переглянути деталі
  </p>
</article>

              );
            })}
          </div>
        </div>
      </section>

      <article
        aria-live="polite"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8"
        ref={descriptionRef}
      >
        <div className="flex flex-col items-center">
          <Image
            src={selectedProduct.image}
            alt={`Full image of ${selectedProduct.title}`}
            width={400}
            height={400}
            className="w-full max-w-xs md:max-w-md object-cover rounded-lg shadow-lg aspect-[3/4]"
            priority
          />
          <div className="flex mt-4 sm:mt-8 gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
            <ThumbnailCarousel
              images={selectedProduct.images}
              onImageSelect={(image) => setSelectedProduct({ ...selectedProduct, image })}
              visibleThumbnails={5}
            />
          </div>
        </div>

        <InfoForm
          product={selectedProduct}
          colors={selectedProduct.colors}
          sizes={selectedProduct.sizes}
          descriptionRef={descriptionRef}
          onContactClick={onContactClick}
          onAddToCartClick={handleAddToCart}
        />
      </article>

      {quickAddProduct && (
        <QuickAddModal
          product={quickAddProduct}
          onClose={handleCloseQuickAdd}
          onAddToCart={handleAddToCart}
        />
      )}

      {showToast && lastProduct && (
        <Toast product={lastProduct} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}
