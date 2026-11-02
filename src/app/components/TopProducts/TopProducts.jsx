"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";
import products from "../../data/products";
import { PRIORITY_TOP, prioritizeByIds } from "../../utils/priorities";
import ProductCard from "../products/ProductCard";
import ProductBanner from "../products/ProductBanner";
import QuickAddModal from "../QuickAddModal/QuickAddModal";
import Toast from "../ToastCart/Toast";
import { getSessionId } from "../../utils/session";
import { getBackendBaseUrl } from "../../utils/backendUrl";

const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

const dedupeById = (list) => {
  const seen = new Set();
  return list.filter((p) => {
    const id = getId(p);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
};

export default function TopProducts() {
  const router = useRouter();
  const { language, translateList } = useLanguage();
  const menuItems = translateList("home", "top_products") || [];
  const pageTranslations = translateList("home", "topProductsPage") || {};

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);

  // Homepage: one row only (5). Full list lives on /Top-products.
  const HOME_TOP_LIMIT = 5;

  const topRaw = useMemo(() => {
    const onlyTop = products.filter((p) => p.isTop);
    return dedupeById(onlyTop);
  }, []);

  const topProducts = useMemo(
    () => prioritizeByIds(topRaw, PRIORITY_TOP),
    [topRaw]
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

  if (topProducts.length === 0) return null;

  const rendered = topProducts.slice(0, HOME_TOP_LIMIT);

  return (
    <section
      id="top-products"
      className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300 font-sans"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={menuItems[0] || "Top Products"} />
      <meta itemProp="numberOfItems" content={String(rendered.length)} />
      <meta
        itemProp="itemListOrder"
        content="https://schema.org/ItemListOrderAscending"
      />

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-normal text-black dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {menuItems[0]}
        </h2>
        <button
          type="button"
          onClick={() => router.push("/Top-products")}
          className="text-sm font-medium text-black hover:underline dark:text-white sm:text-base"
        >
          {menuItems[1] || "View All →"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
        {rendered.map((product, index) => (
          <ProductCard
            key={getId(product)}
            product={{ ...product, isTop: true }}
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
}
