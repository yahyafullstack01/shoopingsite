"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";
import Toast from "../ToastCart/Toast";
import QuickAddModal from "../QuickAddModal/QuickAddModal";
import ProductBanner from "../products/ProductBanner";
import ProductCard from "../products/ProductCard";
import { getSessionId } from "../../utils/session";
import { getBackendBaseUrl } from "../../utils/backendUrl";

const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

const NewArrivalsInfo = ({ products, prefetchedProduct = null }) => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);

  const { language, translateList } = useLanguage();
  const pageTranslations = translateList("home", "newArrivalsPage") || {};

  const orderedNew = useMemo(
    () => (Array.isArray(products) ? products : []),
    [products]
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
      if (data?.success || data?.message?.includes("додано")) {
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

  useEffect(() => {
    if (!productId) return;
    if (prefetchedProduct && String(getId(prefetchedProduct)) === String(productId)) {
      setSelectedProduct(prefetchedProduct);
      setShowBanner(true);
      return;
    }
    const found = orderedNew.find((p) => String(getId(p)) === String(productId));
    if (found) {
      setSelectedProduct(found);
      setShowBanner(true);
    }
  }, [productId, prefetchedProduct, orderedNew]);

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300">
      <h2 className="mb-8 text-center text-3xl font-semibold uppercase text-black dark:text-white">
        {pageTranslations.heading || "All New Arrivals"}
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {orderedNew.map((product, index) => (
          <ProductCard
            key={getId(product)}
            product={{
              ...product,
              isNew: product.isNew !== false,
            }}
            priority={index < 4}
            onClick={() => openBanner(product)}
            onAddToCart={() => openModal(product)}
          />
        ))}
      </div>

      {showBanner && selectedProduct && (
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
      )}

      {showModal && selectedProduct && (
        <QuickAddModal
          product={selectedProduct}
          onClose={() => {
            setShowModal(false);
            setSelectedProduct(null);
          }}
          onAddToCart={handleAddToCart}
        />
      )}

      {showToast && lastProduct && (
        <Toast product={lastProduct} onClose={() => setShowToast(false)} />
      )}
    </section>
  );
};

export default NewArrivalsInfo;
