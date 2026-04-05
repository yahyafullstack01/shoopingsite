'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getBackendBaseUrl } from '../../utils/backendUrl';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('⏳ Перевіряємо статус оплати...');

  useEffect(() => {
    const orderId = searchParams.get('order');
    if (!orderId) {
      setStatus('fail');
      setMessage('❌ Немає ідентифікатора замовлення');
      return;
    }

    const checkPayment = async () => {
      try {
        const res = await fetch(
          `${getBackendBaseUrl()}/api/orders/status?order=${orderId}`
        );
        if (!res.ok) throw new Error('Не вдалося перевірити оплату');

        const data = await res.json();

        if (data.isPaid) {
          setStatus('success');
          setMessage('✅ Оплата успішна! Дякуємо за ваше замовлення ❤️');
          localStorage.removeItem('cart');
          localStorage.removeItem('totalAmount');
          localStorage.removeItem('sessionId');
        } else {
          setStatus('fail');
          setMessage('❌ Оплата не підтверджена або була скасована.');
        }
      } catch (err) {
        console.error(err);
        setStatus('fail');
        setMessage('❌ Сталася помилка при перевірці статусу замовлення');
      }
    };

    checkPayment();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      {status === 'loading' && (
        <div className="animate-pulse text-lg">{message}</div>
      )}

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 max-w-md shadow-lg animate-fadeIn">
          <div className="text-green-600 text-5xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold mb-2">{message}</h1>
          <p className="text-gray-600">
            Ваше замовлення успішно оплачено. Ми вже готуємо його до відправки.
          </p>
          <button
            onClick={() => router.push('/')}
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Повернутись на головну
          </button>
        </div>
      )}

      {status === 'fail' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md shadow-lg animate-fadeIn">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold mb-2">{message}</h1>
          <p className="text-gray-600">Якщо виникли питання — звʼяжіться з нами.</p>
          <button
            onClick={() => router.push('/')}
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Повернутись на головну
          </button>
        </div>
      )}
    </div>
  );
}
