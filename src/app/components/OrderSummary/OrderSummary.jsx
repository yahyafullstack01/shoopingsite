'use client';

import { useEffect, useState } from 'react';
import { getSessionId } from '../../utils/session';
import { useRouter } from 'next/navigation';
import { FiEdit3 } from 'react-icons/fi';

export default function OrderSummary() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchCart = async () => {
      const sessionId = getSessionId();
      if (!sessionId) return;

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart?sessionId=${sessionId}`);
        const data = await res.json();

        if (res.ok && Array.isArray(data.cart)) {
          setCartItems(data.cart);
          const totalSum = data.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
          setTotal(totalSum);
        } else {
          console.error('❌ Помилка у відповіді API корзини:', data);
        }
      } catch (err) {
        console.error('❌ Помилка при запиті корзини з бекенду:', err);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="border rounded-2xl shadow-lg p-6 bg-white dark:bg-zinc-800 text-black dark:text-white w-full">
      <h2 className="text-2xl font-normal mb-6 text-center border-b pb-4">Ваше замовлення</h2>

      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Кошик порожній</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4 last:border-none"
            >
              <img
                src={item.image || '/placeholder.jpg'}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg shadow border dark:border-zinc-600"
              />

              <div className="text-sm flex-1 text-center sm:text-left">
                <p className="font-normal text-base truncate">{item.name}</p>
                <p className="text-gray-600 dark:text-gray-300">Ціна: {item.price} грн</p>
                {item.size && <p className="text-gray-600 dark:text-gray-300">Розмір: {item.size}</p>}
                {item.color && <p className="text-gray-600 dark:text-gray-300">Колір: {item.color}</p>}
                <p className="text-gray-600 dark:text-gray-300">Кількість: {item.quantity}</p>

                <button
                  onClick={() => router.push('/Cart')}
                  className="mt-3 inline-flex items-center gap-1 px-3 py-1 border text-blue-600 border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full text-xs transition"
                >
                  <FiEdit3 className="text-sm" />
                  Редагувати
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 pt-4 border-t text-center">
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            Всього: <span className="text-blue-600 dark:text-blue-400">{total} грн</span>
          </p>
        </div>
      )}
    </div>
  );
}
