"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import products from "../../data/products";
import { PRIORITY_NEW, prioritizeByIds } from "../../utils/priorities";
import { useLanguage } from "../../Functions/useLanguage";
import ProductCard from "../products/ProductCard";
import ProductBanner from "../products/ProductBanner";
import QuickAddModal from "../QuickAddModal/QuickAddModal";
import Toast from "../ToastCart/Toast";
import { getSessionId } from "../../utils/session";
import { getBackendBaseUrl } from "../../utils/backendUrl";

const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

const NewArrivals = () => {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(10);
  const { language, translateList } = useLanguage();
  const newArrivalsData = translateList("home", "newArrivals") || {};
  const pageTranslations = translateList("home", "newArrivalsPage") || {};

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setVisibleCount(width < 768 ? 4 : width < 1024 ? 6 : 10);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onlyNew = useMemo(
    () => products.filter((p) => p.isNew === true),
    []
  );

  const newProducts = useMemo(
    () => prioritizeByIds(onlyNew, PRIORITY_NEW),
    [onlyNew]
  );

  const openBanner = (product) => {
    setSelectedProduct(product);
    setShowBanner(true);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAddToCart = async ({
    product,
    selectedColor,
    selectedSize,
    quantity,
  }) => {
    const sessionId = getSessionId();
    if (!sessionId) {
      alert(
        pageTranslations.sessionNotFound ||
          "Session not found. Try refreshing the page."
      );
      return;
    }

    const id = getId(product);
    const name =
      product.translations?.[language]?.name ||
      product.name ||
      product.title ||
      pageTranslations.productFallback ||
      "Product";

    const basePriceNum =
      Number(String(product.price).replace(/[^\d.]/g, "")) || 0;
    const discountNum = product?.discountPrice
      ? Number(String(product.discountPrice).replace(/[^\d.]/g, "")) ||
        basePriceNum
      : null;

    const price = basePriceNum.toFixed(2);
    const discountPrice =
      discountNum !== null ? discountNum.toFixed(2) : null;

    try {
      const res = await fetch(`${getBackendBaseUrl()}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          productId: id,
          name,
          price,
          discountPrice,
          color: selectedColor,
          size: selectedSize,
          quantity,
        }),
      });

      const data = await res.json();
      if (data?.success || data?.message?.includes("додано") || res.ok) {
        setLastProduct({
          name,
          image: product.image,
          quantity,
        });
        setShowToast(true);
        setShowModal(false);
      } else {
        alert(data?.message || pageTranslations.addToCartError || "Error");
      }
    } catch (err) {
      console.error(err);
      alert(pageTranslations.addToCartError || "Error adding to cart");
    }
  };

  if (newProducts.length === 0) return null;

  const rendered = newProducts.slice(0, visibleCount);

  return (
    <section
      className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300 font-sans"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta
        itemProp="name"
        content={newArrivalsData.heading || "Our New Arrivals"}
      />
      <meta itemProp="numberOfItems" content={String(rendered.length)} />
      <meta
        itemProp="itemListOrder"
        content="https://schema.org/ItemListOrderAscending"
      />

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-normal text-black dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {newArrivalsData.heading || "Our New Arrivals"}
        </h2>
        <button
          type="button"
          onClick={() => router.push("/new-products")}
          className="text-sm font-medium text-black hover:underline dark:text-white sm:text-base"
        >
          {newArrivalsData.viewAll || "View All →"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {rendered.map((product, index) => (
          <ProductCard
            key={getId(product)}
            product={{ ...product, isNew: product.isNew !== false }}
            priority={index < 4}
            onClick={() => openBanner(product)}
            onAddToCart={() => openModal(product)}
          />
        ))}
      </div>

      {showBanner && selectedProduct ? (
        <ProductBanner
          selectedProduct={selectedProduct}
          onClose={() => {
            setShowBanner(false);
            setSelectedProduct(null);
          }}
          handleAddToCart={handleAddToCart}
          descriptionRef={null}
          handleContactButtonClick={() => {}}
        />
      ) : null}

      {showModal && selectedProduct ? (
        <QuickAddModal
          product={selectedProduct}
          onClose={() => {
            setShowModal(false);
            setSelectedProduct(null);
          }}
          onAddToCart={handleAddToCart}
        />
      ) : null}

      {showToast && lastProduct ? (
        <Toast product={lastProduct} onClose={() => setShowToast(false)} />
      ) : null}
    </section>
  );
};

export default NewArrivals;
