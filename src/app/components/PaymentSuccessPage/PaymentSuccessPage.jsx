'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getBackendBaseUrl } from '../../utils/backendUrl';
import { getSessionId } from '../../utils/session';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('⏳ Перевіряємо статус оплати...');
  const [contactState, setContactState] = useState('idle'); // idle | sending | sent | error

  const handleContactManager = async () => {
    setContactState('sending');
    let draft = {};
    try {
      draft = JSON.parse(localStorage.getItem('checkoutDraft') || '{}');
    } catch (e) {
      draft = {};
    }

    const order = {
      firstName: draft.firstName || '',
      lastName: draft.lastName || '',
      patronymic: draft.patronymic || '',
      email: draft.email || '',
      phone: draft.phone || '',
      deliveryMethod: draft.deliveryMethod || '',
      city: draft.cityQuery || '',
      warehouse: draft.selectedWarehouse || '',
      comment: 'Не вдалося завершити оплату замовлення — звʼязатися з клієнтом.',
      total: Number(String(localStorage.getItem('totalAmount') || 0).replace(/[^\d.]/g, '')),
      prepay: false,
      paymentMethod: 'no-payment',
      sessionId: getSessionId(),
    };

    try {
      const res = await fetch(`${getBackendBaseUrl()}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
      if (!res.ok) throw new Error('Не вдалося надіслати запит');
      setContactState('sent');
      localStorage.removeItem('checkoutDraft');
    } catch (err) {
      console.error('❌ Помилка звʼязку з менеджером:', err);
      setContactState('error');
    }
  };

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
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => router.push('/Checkout')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Спробувати оплатити ще раз
            </button>
            {contactState === 'sent' ? (
              <p className="px-6 py-3 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                ✅ Прийнято! Менеджер звʼяжеться з вами найближчим часом.
              </p>
            ) : (
              <button
                onClick={handleContactManager}
                disabled={contactState === 'sending'}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-60"
              >
                📞 {contactState === 'sending' ? 'Надсилаємо...' : "Зв'язатися з менеджером"}
              </button>
            )}
            {contactState === 'error' && (
              <p className="text-red-600 text-sm">
                Не вдалося надіслати запит. Зателефонуйте нам: <a href="tel:+380973678257" className="underline">+380 97 367 82 57</a>
              </p>
            )}
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Повернутись на головну
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
