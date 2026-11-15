"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";
import products from "../../data/products";
import ProductCard from "../products/ProductCard";
import ProductBanner from "../products/ProductBanner";
import QuickAddModal from "../QuickAddModal/QuickAddModal";
import Toast from "../ToastCart/Toast";
import { getSessionId } from "../../utils/session";
import { getBackendBaseUrl } from "../../utils/backendUrl";
import { isBlackFridayProduct } from "../../utils/blackFriday";

const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

export default function BlackFridayInfo() {
  const { language, translateList } = useLanguage();
  const t = translateList("home", "blackFridayPage") || {};
  const searchParams = useSearchParams();
  const productId = searchParams.get("product");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [lastProduct, setLastProduct] = useState(null);

  const offerProducts = useMemo(
    () => products.filter(isBlackFridayProduct),
    []
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
        t.sessionError ||
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
        alert(data?.message || t.addToCartError || "Error adding to cart");
      }
    } catch (err) {
      console.error(err);
      alert(t.addToCartError || "Error adding to cart");
    }
  };

  useEffect(() => {
    if (!productId) return;
    const found = offerProducts.find(
      (p) => String(getId(p)) === String(productId)
    );
    if (found) {
      setSelectedProduct(found);
      setShowBanner(true);
    }
  }, [productId, offerProducts]);

  return (
    <section className="bg-[#0a0a0a] px-5 py-14 text-[#f4f0ea] transition-colors duration-300">
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#c4a574]">
          LATORE
        </p>
        <h1 className="text-3xl font-semibold uppercase tracking-wide sm:text-4xl md:text-5xl">
          {t.heading || "Black Friday %"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/65 sm:text-base">
          {t.subtitle ||
            "Discounts up to -25% on selected wool, leather, and knitwear pieces."}
        </p>
      </div>

      {offerProducts.length === 0 ? (
        <p className="py-16 text-center text-white/50">
          {t.empty || "Offers coming soon."}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {offerProducts.map((product, index) => (
            <ProductCard
              key={getId(product)}
              product={product}
              priority={index < 4}
              onClick={() => openBanner(product)}
              onAddToCart={() => openModal(product)}
            />
          ))}
        </div>
      )}

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
