'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaAward,
  FaChevronRight,
  FaHeart,
  FaLock,
  FaPen,
  FaRegHeart,
  FaShieldAlt,
  FaTrash,
  FaTruck,
  FaUndo,
} from 'react-icons/fa';
import { getSessionId } from '../../utils/session';
import { useLanguage } from '../../Functions/useLanguage';
import { getProductImageSrc } from '../../utils/productData';
import { getBackendBaseUrl } from '../../utils/backendUrl';
import products from '../../data/products';
import { isFavorite, toggleFavorite } from '../../utils/favorites';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [favTick, setFavTick] = useState(0);
  const router = useRouter();
  const { translateList, language } = useLanguage();
  const rawCart = translateList('home', 'cart');
  const cartTranslations =
    typeof rawCart === 'object' && rawCart !== null ? rawCart : {};

  useEffect(() => {
    const id = getSessionId();
    setSessionId(id);
  }, []);

  useEffect(() => {
    if (!sessionId) return;

    const fetchCart = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${getBackendBaseUrl()}/api/cart?sessionId=${sessionId}`,
          { credentials: 'include' }
        );
        const data = await res.json();
        setCartItems(data.cart || []);
      } catch {
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
      await fetch(`${getBackendBaseUrl()}/api/cart`, {
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
      await fetch(`${getBackendBaseUrl()}/api/cart`, {
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

  const linePrice = (item) =>
    item.discountPrice && item.discountPrice < item.price
      ? item.discountPrice
      : item.price;

  const total = cartItems.reduce(
    (sum, item) => sum + Number(linePrice(item)) * item.quantity,
    0
  );

  const cartProductIds = useMemo(
    () => new Set(cartItems.map((i) => Number(i.productId))),
    [cartItems]
  );

  const youMayAlsoLike = useMemo(() => {
    return products.filter((p) => !cartProductIds.has(p.id)).slice(0, 4);
  }, [cartProductIds]);

  const onToggleUpsellFav = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(productId);
    setFavTick((t) => t + 1);
    try {
      window.dispatchEvent(new Event('storage'));
    } catch {}
  };

  const upsellHref = (p) => {
    const cat = (p.category || 'all').toLowerCase();
    return `/All-products?category=${encodeURIComponent(cat)}&product=${p.id}`;
  };

  return (
    <div className="min-h-screen bg-neutral-100 pb-8 pt-4 text-black dark:bg-neutral-950 dark:text-white md:pb-12 md:pt-5">
      <div className="relative mx-auto w-full max-w-6xl px-4">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">
          {cartTranslations.heading || '🛒 Cart'}{' '}
          {cartItems.length > 0 ? `(${cartItems.length})` : ''}
        </h1>

        {message ? (
          <p className="mb-4 text-green-600 dark:text-green-400">{message}</p>
        ) : null}
        {loading && cartItems.length === 0 ? (
          <p className="text-neutral-500">
            {cartTranslations.loading || 'Loading...'}
          </p>
        ) : null}
        {!loading && cartItems.length === 0 ? (
          <p className="text-neutral-500 dark:text-neutral-400">
            {cartTranslations.empty || 'Cart is empty.'}
          </p>
        ) : null}

        {cartItems.length > 0 ? (
          <>
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_min(100%,360px)] lg:items-start">
              <div className="order-1 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 md:p-6 lg:order-1 lg:col-start-1 lg:row-start-1">
                {cartItems.map((item, index) => {
                  const productIdNum = Number(item.productId);
                  const lineFavorite = isFavorite(productIdNum);
                  return (
                    <div
                      key={item.id}
                      className={`flex flex-col gap-4 ${
                        index > 0
                          ? 'mt-6 border-t border-neutral-100 pt-6 dark:border-neutral-800'
                          : ''
                      }`}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <div className="flex min-w-0 flex-1 items-start gap-4">
                          <img
                            src={getProductImageSrc(item.image)}
                            alt={item.name}
                            className="h-24 w-20 shrink-0 rounded-xl object-cover sm:h-28 sm:w-24"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-lg font-semibold leading-snug md:truncate">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                              {item.discountPrice &&
                              item.discountPrice < item.price ? (
                                <>
                                  <span className="text-red-600">
                                    {item.discountPrice} UAH
                                  </span>{' '}
                                  <span className="font-normal text-neutral-400 line-through">
                                    {item.price} UAH
                                  </span>
                                </>
                              ) : (
                                <span>{item.price} UAH</span>
                              )}
                            </p>
                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                              {cartTranslations.color || 'Color:'}{' '}
                              <span className="text-neutral-800 dark:text-neutral-200">
                                {item.color}
                              </span>
                            </p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                              {cartTranslations.size || 'Size:'}{' '}
                              <span className="text-neutral-800 dark:text-neutral-200">
                                {item.size}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="flex w-full items-center justify-between gap-3 sm:hidden">
                          <div className="flex h-11 shrink-0 items-stretch overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              className="w-10 border-r border-neutral-200/90 text-base text-neutral-700 transition hover:bg-neutral-200/50 disabled:opacity-40 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700/50"
                            >
                              −
                            </button>
                            <span className="flex min-w-[2.75rem] items-center justify-center bg-transparent text-center text-sm font-medium dark:text-white">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-10 border-l border-neutral-200/90 text-base text-neutral-700 transition hover:bg-neutral-200/50 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700/50"
                            >
                              +
                            </button>
                          </div>
                          <div className="flex h-11 shrink-0 items-stretch overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800">
                            <button
                              type="button"
                              onClick={() => {
                                const category = (
                                  item.category || 'costumes'
                                ).toLowerCase();
                                router.push(
                                  `/All-products?category=${category}&product=${item.productId}`
                                );
                              }}
                              className="flex w-11 items-center justify-center text-neutral-900 transition hover:bg-neutral-200/40 dark:text-neutral-100 dark:hover:bg-neutral-700/40"
                              aria-label={cartTranslations.edit || 'Edit'}
                            >
                              <FaPen className="text-sm" aria-hidden />
                            </button>
                            <div
                              className="w-px shrink-0 bg-neutral-200 dark:bg-neutral-600"
                              aria-hidden
                            />
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="flex w-11 items-center justify-center text-red-600 transition hover:bg-neutral-200/40 dark:text-red-400 dark:hover:bg-neutral-700/40"
                              aria-label={
                                cartTranslations.delete || 'Delete'
                              }
                            >
                              <FaTrash className="text-sm" aria-hidden />
                            </button>
                          </div>
                        </div>

                        <div className="hidden flex-wrap items-center gap-4 sm:flex sm:shrink-0 sm:flex-nowrap">
                          <div className="flex items-center">
                            <div className="flex h-11 items-stretch overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                                className="w-10 border-r border-neutral-200/90 text-base text-neutral-700 transition hover:bg-neutral-200/50 disabled:opacity-40 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700/50"
                              >
                                −
                              </button>
                              <span className="flex min-w-[2.75rem] items-center justify-center bg-transparent text-center text-sm font-medium dark:text-white">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-10 border-l border-neutral-200/90 text-base text-neutral-700 transition hover:bg-neutral-200/50 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700/50"
                              >
                                +
                              </button>
                            </div>
                            <div
                              className="mx-3 h-9 w-px shrink-0 bg-neutral-200 dark:bg-neutral-600 sm:mx-4"
                              aria-hidden
                            />
                            <div className="flex flex-col items-start gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  const category = (
                                    item.category || 'costumes'
                                  ).toLowerCase();
                                  router.push(
                                    `/All-products?category=${category}&product=${item.productId}`
                                  );
                                }}
                                className="flex items-center gap-2 text-sm font-medium text-neutral-900 transition hover:text-black dark:text-neutral-100 dark:hover:text-white"
                              >
                                <FaPen
                                  className="text-xs text-neutral-900 dark:text-neutral-200"
                                  aria-hidden
                                />
                                {cartTranslations.edit || 'Edit'}
                              </button>
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                className="flex items-center gap-2 text-sm font-medium"
                              >
                                <FaTrash
                                  className="text-xs text-neutral-900 dark:text-neutral-200"
                                  aria-hidden
                                />
                                <span className="text-red-600 dark:text-red-400">
                                  {cartTranslations.delete || 'Delete'}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-neutral-100 pt-4 dark:border-neutral-800">
                        <button
                          type="button"
                          onClick={() => {
                            toggleFavorite(productIdNum);
                            setFavTick((t) => t + 1);
                            try {
                              window.dispatchEvent(new Event('storage'));
                            } catch {}
                          }}
                          className="flex w-full items-center justify-center gap-2 text-sm font-medium text-neutral-900 transition hover:text-black dark:text-neutral-100 dark:hover:text-white"
                        >
                          {lineFavorite ? (
                            <FaHeart
                              className="text-base text-red-500"
                              aria-hidden
                            />
                          ) : (
                            <FaRegHeart
                              className="text-base"
                              aria-hidden
                            />
                          )}
                          {cartTranslations.addToFavorites ||
                            'Add to favorites'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="order-2 border-t border-neutral-200 pt-4 dark:border-neutral-600 sm:pt-5 lg:order-3 lg:col-span-2 lg:row-start-2 lg:border-t-0 lg:pt-0">
                <div className="grid grid-cols-4 divide-x divide-neutral-200 dark:divide-neutral-600">
                  {[
                    {
                      Icon: FaTruck,
                      title: cartTranslations.trustFast || 'Fast delivery',
                      desc:
                        cartTranslations.trustFastDesc ||
                        'Delivery within 2-4 business days',
                    },
                    {
                      Icon: FaUndo,
                      title: cartTranslations.trustEasyReturn || 'Easy return',
                      desc:
                        cartTranslations.trustEasyReturnDesc ||
                        'Return within 14 days',
                    },
                    {
                      Icon: FaShieldAlt,
                      title:
                        cartTranslations.trustSecurePay || 'Secure payment',
                      desc:
                        cartTranslations.trustSecurePayDesc ||
                        '100% secure online payment',
                    },
                    {
                      Icon: FaAward,
                      title: cartTranslations.trustPremium || 'Premium quality',
                      desc:
                        cartTranslations.trustPremiumDesc ||
                        'Only original products',
                    },
                  ].map(({ Icon, title, desc }) => (
                    <div
                      key={title}
                      className="flex min-w-0 flex-col items-center px-1.5 py-4 text-center sm:px-5 sm:py-4 md:px-6"
                    >
                      <Icon
                        className="mb-1.5 text-2xl text-neutral-900 dark:text-white sm:mb-3 sm:text-3xl"
                        aria-hidden
                      />
                      <p className="line-clamp-2 text-[10px] font-bold leading-tight text-neutral-900 dark:text-white sm:line-clamp-none sm:text-sm">
                        {title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-[9px] leading-snug text-neutral-800 dark:text-neutral-300 sm:mt-1.5 sm:line-clamp-none sm:max-w-[200px] sm:text-[13px]">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="order-3 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-6 lg:order-2 lg:col-start-2 lg:row-start-1 lg:sticky lg:top-28">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {cartTranslations.orderSummary || 'Order Summary'}
                </h2>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex flex-nowrap items-center justify-between gap-3 text-neutral-600 dark:text-neutral-400">
                    <span className="shrink-0">
                      {cartTranslations.subtotal || 'Subtotal'}
                    </span>
                    <span className="shrink-0 whitespace-nowrap text-neutral-900 dark:text-white">
                      {Number(total).toFixed(2)} UAH
                    </span>
                  </div>
                  <div className="flex flex-nowrap items-center justify-between gap-3 text-neutral-600 dark:text-neutral-400">
                    <span className="shrink-0">
                      {cartTranslations.delivery || 'Delivery'}
                    </span>
                    <span className="shrink-0 text-right text-xs text-neutral-500 whitespace-nowrap sm:text-sm">
                      {cartTranslations.deliveryAtCheckout ||
                        'Calculated at checkout'}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex flex-nowrap items-center justify-between gap-3 border-t border-neutral-100 pt-4 text-lg font-bold dark:border-neutral-800 lg:text-xl">
                  <span className="shrink-0 text-neutral-900 dark:text-white">
                    {cartTranslations.total || 'Total:'}
                  </span>
                  <span className="shrink-0 whitespace-nowrap tabular-nums text-neutral-900 dark:text-white">
                    {Number(total).toFixed(2)} UAH
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const cleanTotal = Number(
                      String(total).replace(/[^\d.]/g, '')
                    ).toFixed(2);
                    localStorage.setItem('totalAmount', cleanTotal);
                    router.push('/Checkout');
                  }}
                  className="mt-6 w-full rounded-xl bg-neutral-900 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  {cartTranslations.checkout || 'Proceed to Checkout'}
                </button>
                <p className="mt-4 flex items-start gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <FaLock
                    className="mt-0.5 shrink-0 text-neutral-400"
                    aria-hidden
                  />
                  <span>
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      {cartTranslations.secureCheckout || 'Secure checkout'}
                    </span>
                    <span className="mx-1 text-neutral-300 dark:text-neutral-600">
                      /
                    </span>
                    {cartTranslations.secureCheckoutHint ||
                      'We protect your data'}
                  </span>
                </p>
              </aside>
            </div>

            {youMayAlsoLike.length > 0 ? (
              <section className="mt-12">
                <h2 className="mb-6 flex items-center gap-1 text-xl font-bold">
                  <span>
                    {cartTranslations.youMayAlsoLike || 'You may also like'}
                  </span>
                  <FaChevronRight
                    className="text-sm opacity-45"
                    aria-hidden
                  />
                </h2>
                <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-4 md:gap-6">
                  {youMayAlsoLike.map((p) => {
                    const name =
                      p.translations?.[language]?.name || p.name || 'Product';
                    const price = p.price;
                    const fav = isFavorite(p.id);
                    return (
                      <Link
                        key={p.id}
                        href={upsellHref(p)}
                        className="group w-[min(11.5rem,72vw)] shrink-0 snap-start overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:w-auto sm:snap-none"
                      >
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                          <Image
                            src={getProductImageSrc(p.image)}
                            alt={name}
                            fill
                            className="object-cover transition group-hover:scale-[1.02]"
                            sizes="(max-width:768px) 50vw, 25vw"
                            unoptimized={String(p.image || '').startsWith('/')}
                          />
                          <button
                            type="button"
                            onClick={(e) => onToggleUpsellFav(e, p.id)}
                            className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-md backdrop-blur-sm dark:bg-neutral-900/90 dark:text-white"
                            aria-label="Wishlist"
                          >
                            {fav ? (
                              <FaHeart className="text-red-500" />
                            ) : (
                              <FaRegHeart />
                            )}
                          </button>
                        </div>
                        <div className="p-3">
                          <p className="line-clamp-2 text-sm font-medium leading-snug">
                            {name}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">
                            {price} UAH
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
