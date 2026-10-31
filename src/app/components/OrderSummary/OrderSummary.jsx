'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getSessionId } from '../../utils/session';
import { getBackendBaseUrl } from '../../utils/backendUrl';
import { useRouter } from 'next/navigation';
import { FiEdit3 } from 'react-icons/fi';
import { useLanguage } from '../../Functions/useLanguage';
import { getCartItemDisplay, getProductImageSrc } from '../../utils/productData';

const toNumber = (v) =>
  Number(String(v).replace(/[^\d.,-]/g, '').replace(',', '.')) || 0;

const fmtMoney = (n, locale) =>
  new Intl.NumberFormat(locale === 'UA' ? 'uk-UA' : 'en-US', {
    maximumFractionDigits: 2,
  }).format(Number(n));

export default function OrderSummary() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const { language, translateList } = useLanguage();
  const raw = translateList('home', 'checkoutPage');
  const t = raw && typeof raw === 'object' ? raw : {};

  useEffect(() => {
    const fetchCart = async () => {
      const sessionId = getSessionId();
      if (!sessionId) return;

      try {
        const res = await fetch(
          `${getBackendBaseUrl()}/api/cart?sessionId=${sessionId}`
        );
        const data = await res.json();

        if (res.ok && Array.isArray(data.cart)) {
          const normalized = data.cart.map((item) => ({
            ...item,
            price: toNumber(item.price),
            discountPrice:
              item.discountPrice != null ? toNumber(item.discountPrice) : null,
            quantity: toNumber(item.quantity),
          }));

          setCartItems(normalized);

          const totalSum = normalized.reduce(
            (sum, item) =>
              sum + (item.discountPrice ?? item.price) * item.quantity,
            0
          );
          setTotal(totalSum);
        } else {
          console.error('❌ Cart API error:', data);
        }
      } catch (err) {
        console.error('❌ Cart fetch error:', err);
      }
    };

    fetchCart();
  }, []);

  const uah = t.uah || (language === 'UA' ? 'грн' : 'UAH');

  return (
    <div className="border rounded-2xl shadow-lg p-6 bg-white dark:bg-zinc-800 text-black dark:text-white w-full">
      <h2 className="text-2xl font-normal mb-6 text-center border-b pb-4">
        {t.orderTitle || 'Your order'}
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          {t.cartEmpty || 'Cart is empty'}
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => {
            const { name: displayName, color: displayColor } =
              getCartItemDisplay(item, language);
            return (
              <div
                key={item.id || index}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4 last:border-none"
              >
                <div className="relative w-28 h-28">
                  <Image
                    src={getProductImageSrc(item.image) || '/Darklogo.avif'}
                    alt={displayName}
                    fill
                    className="object-cover rounded-lg shadow border dark:border-zinc-600"
                  />
                </div>

                <div className="text-sm flex-1 text-center sm:text-left">
                  <p className="font-normal text-base break-words">
                    {displayName}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    {t.price || 'Price:'}{' '}
                    {item.discountPrice != null ? (
                      <>
                        <span className="text-red-600 font-semibold">
                          {fmtMoney(item.discountPrice, language)}
                        </span>{' '}
                        <span className="text-gray-600">{uah}</span>{' '}
                        <span className="line-through text-gray-400">
                          {fmtMoney(item.price, language)}{' '}
                          <span className="text-gray-400">{uah}</span>
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-semibold">
                          {fmtMoney(item.price, language)}
                        </span>{' '}
                        <span>{uah}</span>
                      </>
                    )}
                  </p>

                  {item.size ? (
                    <p className="text-gray-600 dark:text-gray-300">
                      {t.size || 'Size:'} {item.size}
                    </p>
                  ) : null}
                  {displayColor ? (
                    <p className="text-gray-600 dark:text-gray-300">
                      {t.color || 'Color:'} {displayColor}
                    </p>
                  ) : null}
                  <p className="text-gray-600 dark:text-gray-300">
                    {t.quantity || 'Quantity:'} {item.quantity}
                  </p>

                  <button
                    onClick={() => router.push('/Cart')}
                    className="mt-3 inline-flex items-center gap-1 px-3 py-1 border text-blue-600 border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full text-xs transition"
                  >
                    <FiEdit3 className="text-sm" />
                    {t.edit || 'Edit'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 pt-4 border-t text-center">
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {t.total || 'Total:'}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {fmtMoney(total, language)} <span>{uah}</span>
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
