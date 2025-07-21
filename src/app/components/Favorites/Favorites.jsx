'use client';

import { useEffect, useState } from 'react';
import { getFavorites } from '../../utils/favorites';
import { useLanguage } from '../../Functions/useLanguage';
import ProductCard from '../products/ProductCard';
import productsData from '../../data/products';

import ProductBanner from '../products/ProductBanner';
import QuickAddModal from '../QuickAddModal/QuickAddModal';
import Toast from '../ToastCart/Toast'; // ✅ імпорт кастомного toast

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { language } = useLanguage();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quickAddProduct, setQuickAddProduct] = useState(null);

  const [showToast, setShowToast] = useState(false);
  const [toastProduct, setToastProduct] = useState(null); // для відображення в toast

  useEffect(() => {
    const favoriteIds = getFavorites();
    const matchedProducts = productsData.filter((p) => favoriteIds.includes(p.id));
    setFavoriteProducts(matchedProducts);
  }, []);

  const handleAddToCart = async ({ product, selectedColor, selectedSize, quantity }) => {
    const sessionId = localStorage.getItem('sessionId') || 'guest-session';

    const dataToSend = {
      sessionId,
      productId: product.id,
      name: product.name,
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: product.price,
      discountPrice: product.discountPrice || null,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Помилка при додаванні');

      setToastProduct(product);      // показуємо товар в toast
      setShowToast(true);           // показати кастомний toast
      setQuickAddProduct(null);     // закрити модалку
    } catch (error) {
      console.error('❌ handleAddToCart error:', error.message);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto py-12 text-black dark:text-white">
      <h1 className="text-3xl font-semibold mb-6">❤️ Улюблені товари</h1>

      {favoriteProducts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">У вас ще немає улюблених товарів.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
              onAddToCart={(data) => setQuickAddProduct(data)}
            />
          ))}
        </div>
      )}

      {/* Банер */}
      {selectedProduct && (
        <ProductBanner
          selectedProduct={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Модалка */}
      {quickAddProduct && (
        <QuickAddModal
          product={quickAddProduct.product}
          selectedColor={quickAddProduct.selectedColor}
          selectedSize={quickAddProduct.selectedSize}
          quantity={quickAddProduct.quantity}
          onClose={() => setQuickAddProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* ✅ Кастомний Toast */}
      {showToast && toastProduct && (
        <div className="fixed bottom-5 right-5 z-50">
          <Toast
            product={toastProduct}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Favorites;
