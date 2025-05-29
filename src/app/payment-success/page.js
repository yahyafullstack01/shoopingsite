'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function PaymentSuccessInner() {
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/status?order=${orderId}`);
        if (!res.ok) throw new Error('Не вдалося перевірити оплату');

        const data = await res.json();

        if (data.isPaid) {
          setStatus('success');
          setMessage('✅ Оплата успішна! Дякуємо за замовлення ❤️');
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
      <h1 className={`text-2xl font-bold mb-4 ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
        {message}
      </h1>

      {status === 'success' && (
        <button
          onClick={() => router.push('/')}
          className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Повернутись на головну
        </button>
      )}
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Завантаження...</div>}>
      <PaymentSuccessInner />
    </Suspense>
  );
}
