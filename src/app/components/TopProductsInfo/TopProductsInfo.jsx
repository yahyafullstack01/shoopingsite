"use client";

import products from "../../data/products";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";
import ProductCard from "../products/ProductCard";
import ProductBanner from "../products/ProductBanner";
import QuickAddModal from "../QuickAddModal/QuickAddModal";
import Toast from "../ToastCart/Toast";
import { getSessionId } from "../../utils/session";
import { getBackendBaseUrl } from "../../utils/backendUrl";
import { PRIORITY_TOP, prioritizeByIds } from "../../utils/priorities";

const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

export default function TopProductsInfo() {
  const { language, translateList } = useLanguage();
  const menuItems = translateList("home", "top_products");
  const pageTranslations = translateList("home", "topProductsPage") || {};
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);

  const topSorted = useMemo(() => {
    const onlyTop = products.filter((p) => p.isTop === true);
    return prioritizeByIds(onlyTop, PRIORITY_TOP);
  }, []);

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
        pageTranslations.sessionError ||
          "Could not create session. Try refreshing the page."
      );
      return;
    }

    const id = getId(product);
    const name =
      product.translations?.[language]?.name ||
      product.name ||
      product.title ||
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
          price: discountPrice || price,
        });
        setShowToast(true);
        setShowModal(false);
      } else {
        alert(
          data?.message ||
            pageTranslations.addToCartError ||
            "Error adding to cart"
        );
      }
    } catch (err) {
      console.error(err);
      alert(pageTranslations.addToCartError || "Error adding to cart");
    }
  };

  useEffect(() => {
    if (!productId) return;
    const found = topSorted.find(
      (p) => String(getId(p)) === String(productId)
    );
    if (found) {
      setSelectedProduct(found);
      setShowBanner(true);
    }
  }, [productId, topSorted]);

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300">
      <h2 className="mb-8 text-center text-3xl font-semibold uppercase text-black dark:text-white">
        {menuItems?.[0] || "Top Products"}
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {topSorted.map((product, index) => (
          <ProductCard
            key={getId(product)}
            product={{
              ...product,
              isTop: true,
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
}
