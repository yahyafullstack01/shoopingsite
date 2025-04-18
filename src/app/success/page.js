'use client';

import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [message, setMessage] = useState('Обробляємо замовлення...');

  useEffect(() => {
    const savedOrder = localStorage.getItem('pendingOrder');

    if (!savedOrder) {
      setMessage('Замовлення вже оброблено або не знайдено.');
      return;
    }

    const order = JSON.parse(savedOrder);

    const sendOrder = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(order),
        });

        if (!res.ok) throw new Error('Помилка при збереженні замовлення');

        // ⬇️ Очищаємо все, що зберігалось під час покупки
        localStorage.removeItem('pendingOrder');
        localStorage.removeItem('cart');
        localStorage.removeItem('totalAmount');
        localStorage.removeItem('sessionId');

        setMessage('✅ Замовлення успішно оформлено! Очікуйте дзвінка 📞');
      } catch (err) {
        console.error('❌ Помилка:', err);
        setMessage('Сталася помилка при оформленні замовлення. Звʼяжіться з нами!');
      }
    };

    sendOrder();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div className="text-xl font-semibold">{message}</div>
    </div>
  );
}