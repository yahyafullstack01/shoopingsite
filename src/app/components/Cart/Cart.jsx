'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSessionId } from '../../utils/session';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const router = useRouter();

  useEffect(() => {
    const id = getSessionId();
    setSessionId(id);
  }, []);

  useEffect(() => {
    if (!sessionId) return;

    const fetchCart = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart?sessionId=${sessionId}`, {
          credentials: 'include',
        });
        const data = await res.json();
        setCartItems(data.cart);
      } catch (error) {
        setMessage('Помилка при завантаженні корзини');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [sessionId]);

  const updateQuantity = async (cartId, quantity) => {
    if (quantity < 1) return;
    setLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartId, quantity, sessionId }),
      });

      setCartItems((prev) =>
        prev.map((item) => (item.id === cartId ? { ...item, quantity } : item))
      );
    } catch {
      setMessage('Помилка при оновленні товару');
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (cartId) => {
    setLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartId, sessionId }),
      });
      setCartItems((prev) => prev.filter((item) => item.id !== cartId));
    } catch {
      setMessage('Помилка при видаленні товару');
    } finally {
      setLoading(false);
    }
  };
  const total = cartItems.reduce((sum, item) => {
  const price = item.discountPrice && item.discountPrice < item.price
    ? item.discountPrice
    : item.price;
  return sum + Number(price) * item.quantity;
}, 0);



  return (
    <div className="p-6 max-w-3xl mx-auto section-container py-12 text-black dark:text-white">
      <h1 className="text-3xl font-semibold mb-6">🛒 Корзина</h1>

      {message && <p className="mb-4 text-green-600">{message}</p>}
      {loading && <p>Завантаження...</p>}
      {!loading && cartItems.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">Корзина порожня.</p>
      )}

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.discountPrice && item.discountPrice < item.price ? (
  <>
    <span className="text-red-600 font-semibold">{item.discountPrice} UAH</span>{' '}
    <span className="line-through text-gray-400">{item.price} UAH</span>
  </>
) : (
  <span>{item.price} UAH</span>
)}

</p>

                <p className="text-sm text-gray-500">Колір: {item.color}</p>
                <p className="text-sm text-gray-500">Розмір: {item.size}</p>
              </div>
            </div>

            <div className="flex flex-col items-end space-y-2 mt-4 sm:mt-0 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => {
                  const category = item.category || 'costumes';
                  router.push(`/All-products?category=${category}&product=${item.productId}`);
                }}
                className="flex items-center text-sm text-blue-600 hover:underline transition"
              >
                ✏️ <span className="ml-1">Редагувати</span>
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="flex items-center text-sm text-red-600 hover:underline transition"
              >
                🗑 <span className="ml-1">Видалити</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-10 text-right border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Всього: {Number(total).toFixed(2)} UAH
          </h2>
          <button
            onClick={() => {
              const cleanTotal = Number(String(total).replace(/[^\d.]/g, '')).toFixed(2);
              localStorage.setItem('totalAmount', cleanTotal);
              router.push('/Checkout');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Оформити замовлення
          </button>
        </div>
      )}
    </div>
  );
}

