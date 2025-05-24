'use client';

import { useState, useEffect } from 'react';
//import fetchGeoCities from '../../utils/fetchGeoCities'
import { validateForm } from '../../utils/validationContactForm';
import { getSessionId } from '../../utils/session';


export default function Checkout() {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [cityQuery, setCityQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCityRef, setSelectedCityRef] = useState('');
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [total, setTotal] = useState(0);
  const [onlinePaymentMethod, setOnlinePaymentMethod] = useState('');

  const [errors, setErrors] = useState({});

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const [sessionId, setSessionId] = useState('');
  useEffect(() => {
    const id = getSessionId();
    setSessionId(id);
  }, []);
 
  useEffect(() => {
    const amount = localStorage.getItem('totalAmount');
    if (amount) setTotal(Number(amount));
  }, []);

  const prepayAmount = (total * 0.1).toFixed(2);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchNovaPoshtaCities = async (query) => {
    const apiKey = process.env.NEXT_PUBLIC_NP_API_KEY;
    try {
      const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey,
          modelName: 'Address',
          calledMethod: 'searchSettlements',
          methodProperties: { CityName: query, Limit: 10 }
        })
      });
      const data = await response.json();
      return data.data?.[0]?.Addresses || [];
    } catch (error) {
      console.error('Помилка при запиті до Нової Пошти:', error);
      return [];
    }
  };

  const fetchWarehouses = async (cityRef) => {
    const apiKey = process.env.NEXT_PUBLIC_NP_API_KEY;
    try {
      const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey,
          modelName: 'AddressGeneral',
          calledMethod: 'getWarehouses',
          methodProperties: { CityRef: cityRef, Limit: 50 }
        })
      });
      const data = await response.json();
      setWarehouses(data.data || []);
    } catch (error) {
      console.error('Помилка при отриманні відділень:', error);
    }
  };

  const handleCityInput = async (e) => {
    const value = e.target.value;
    setCityQuery(value);
    setSelectedCityRef('');
    setWarehouses([]);

    if (value.length < 2) {
      setFilteredCities([]);
      return;
    }

    let results = [];
    if (deliveryMethod === 'nova-poshta') {
      results = await fetchNovaPoshtaCities(value);
    } else if (deliveryMethod === 'ukr-poshta' || deliveryMethod === 'courier') {
        setFilteredCities([]);
   
    }
    setFilteredCities(results);
  };

  const handleCitySelect = (city) => {
    if (deliveryMethod === 'nova-poshta') {
      setCityQuery(city.Present);
      setFilteredCities([]);
      setSelectedCityRef(city.DeliveryCity);
      fetchWarehouses(city.DeliveryCity);
    } else {
      setCityQuery(city.display_name || city.name);
      setFilteredCities([]);
    }
  };
{/*}
  const handleStripePayment = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/payments/stripe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/checkout`,
        }),
      });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error('Stripe помилка:', err);
      alert('Не вдалося перейти до Stripe оплати');
    }
  };
*/}
const showLoader = (message = 'Переходимо на оплату...') => {
  const loaderOverlay = document.createElement('div');
  loaderOverlay.style.position = 'fixed';
  loaderOverlay.style.top = 0;
  loaderOverlay.style.left = 0;
  loaderOverlay.style.width = '100%';
  loaderOverlay.style.height = '100%';
  loaderOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  loaderOverlay.style.display = 'flex';
  loaderOverlay.style.flexDirection = 'column';
  loaderOverlay.style.alignItems = 'center';
  loaderOverlay.style.justifyContent = 'center';
  loaderOverlay.style.zIndex = 9999;

  loaderOverlay.innerHTML = `
    <div style="color: white; font-size: 20px; margin-bottom: 20px;">${message}</div>
    <div style="border: 5px solid #f3f3f3; border-top: 5px solid #3498db; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite;"></div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;

  document.body.appendChild(loaderOverlay);
};
// ✅ Оновлена версія `handleFondyPayment`
// Додаємо збереження замовлення в БД перед редіректом на Fondy
{/*}
const handleFondyPayment = async (order) => {
  try {
    // 1. Зберігаємо замовлення в БД
    const savedOrderResponse = await fetch(`${BACKEND_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });

    if (!savedOrderResponse.ok) throw new Error('❌ Не вдалося зберегти замовлення');

    const savedOrder = await savedOrderResponse.json();
    console.log('✅ Order збережено перед Fondy:', savedOrder);

    // 2. Надсилаємо запит до /api/payments/fondy
    const response = await fetch(`${BACKEND_URL}/api/payments/fondy`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: order.total,
        resultUrl: `${window.location.origin}/success`,
        serverUrl: `https://shoopingsite-backend-1.onrender.com/api/payments/fondy-callback`,

        order
      }),
    });

    const html = await response.text();
    console.log('📨 Отримано HTML від Fondy:\n', html); // 🧠 ВАЖЛИВО для дебагу

    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);

    setTimeout(() => {
      const form = container.querySelector('form');
      if (form) {
        showLoader('Переходимо на Fondy...');
        form.submit();
      } else {
        console.warn('❌ В HTML не знайдено форму!');
        alert('Не вдалося знайти форму для Fondy:\n' + html);
      }
    }, 0);
  } catch (err) {
    console.error('❌ Fondy помилка:', err);
    alert('Не вдалося ініціювати оплату Fondy. Спробуйте ще раз.');
  }
};*/}
const handleWayforpayPayment = async (order) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/payments/wayforpay`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: order.total, // ✅ сума замовлення
        resultUrl: `${window.location.origin}/success`, // ✅ URL для повернення
        serverUrl: `${BACKEND_URL}/api/payments/wayforpay/callback`, // ✅ для backend callback
        order, // ✅ зберігаєш все замовлення
      }),
    });

    const html = await response.text();

    // ✅ Відкриває форму WayForPay у новому вікні
    const popup = window.open('', '_blank');
    if (!popup) {
      alert('Будь ласка, дозвольте відкриття спливаючих вікон');
      return;
    }

    popup.document.open();
    popup.document.write(html);
    popup.document.close();
  } catch (error) {
    console.error('❌ WayForPay помилка:', error);
    alert('Не вдалося ініціювати оплату WayForPay');
  }
};

{/*}
const handleWayforpayPayment = async (order) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/payments/wayforpay`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: order.total,
        resultUrl: `${window.location.origin}/success`,
        serverUrl: `${BACKEND_URL}/api/payments/wayforpay/callback`,
        order,
      }),
    });

    const html = await response.text();
    const popup = window.open('', '_blank');
    if (!popup) {
      alert('Будь ласка, дозвольте відкриття спливаючих вікон');
      return;
    }

    popup.document.open();
    popup.document.write(html);
    popup.document.close();
  } catch (error) {
    console.error('❌ WayForPay помилка:', error);
    alert('Не вдалося ініціювати оплату WayForPay');
  }
};
*/}
  const handleLiqPayPayment = async (order) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/payments/liqpay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: order.total,
          resultUrl: `${window.location.origin}/success`,
          serverUrl: `${BACKEND_URL}/api/payments/payment-callback`,
          order
        })
      });
      const html = await response.text();
      const container = document.createElement('div');
      container.innerHTML = html;
      document.body.appendChild(container);
      container.querySelector('form').submit();
    } catch (err) {
      console.error('LiqPay помилка:', err);
      alert('Не вдалося ініціювати LiqPay оплату');
    }
  };

  const saveOrder = async (order) => {
    const res = await fetch(`${BACKEND_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    });

    if (!res.ok) throw new Error('Не вдалося зберегти замовлення');
    const saved = await res.json();
    console.log('✅ Замовлення збережено:', saved);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formValues = { firstName, lastName, email, phone };
    const validationErrors = validateForm(formValues);
  
    console.log("🔍 Перевірка форми:", formValues);
    console.log("❌ Помилки валідації:", validationErrors);
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    setErrors({});
  
    const order = {
      firstName,
      lastName,
      patronymic,
      email,
      phone,
      deliveryMethod,
      city: cityQuery,
      warehouse: selectedWarehouse,
      comment,
      total,
      prepay: paymentType === 'prepay',
      paymentMethod: onlinePaymentMethod || 'cod',
      sessionId,
    };
  
    console.log("🧾 Готове замовлення:", order);
    console.log("💳 Метод оплати:", paymentType, onlinePaymentMethod);
  
    try {
      if (paymentType === 'full') {
        if (!onlinePaymentMethod) {
          alert('Будь ласка, оберіть метод онлайн-оплати');
          return;
        }
  
        localStorage.setItem('pendingOrder', JSON.stringify(order));
  
        if (onlinePaymentMethod === 'stripe') {
          console.log("➡️ Переходимо до Stripe...");
          await handleStripePayment();
        } else if (onlinePaymentMethod === 'liqpay') {
          console.log("➡️ Переходимо до LiqPay...");
          await handleLiqPayPayment(order);
        } else if (onlinePaymentMethod === 'fondy') {
          console.log("➡️ Переходимо до Fondy...");
          await handleFondyPayment(order);
        }
        else if (onlinePaymentMethod === 'wayforpay') {
          console.log("➡️ Переходимо до WayForPay...");
          await handleWayforpayPayment(order);
        }
        
  
      } else {
        console.log("📦 Зберігаємо замовлення без онлайн-оплати...");
        await saveOrder(order);
        alert('Замовлення оформлено! Очікуйте дзвінка 📞');
      }
    } catch (error) {
      console.error('❌ Помилка при обробці замовлення:', error);
      alert('Не вдалося обробити замовлення. Спробуйте ще раз.');
    }
  };
  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setPatronymic('');
    setEmail('');
    setPhone('');
    setComment('');
    setDeliveryMethod('');
    setCityQuery('');
    setFilteredCities([]);
    setSelectedCityRef('');
    setWarehouses([]);
    setSelectedWarehouse('');
    setPaymentType('');
    setOnlinePaymentMethod('');
    setErrors({});
  };
  
  const handleOrderWithoutPayment = async () => {
    const formValues = { firstName, lastName, email, phone };
    const validationErrors = validateForm(formValues);
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    const order = {
      firstName,
      lastName,
      patronymic,
      email,
      phone,
      deliveryMethod,
      city: cityQuery,
      warehouse: selectedWarehouse,
      comment,
      total,
      prepay: false,
      paymentMethod: 'no-payment',
      sessionId,
    };
  
    try {
      // Надсилаємо на бекенд (наприклад, у базу і на email)
      const res = await fetch(`${BACKEND_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
  
      if (!res.ok) throw new Error('Не вдалося надіслати замовлення без оплати');
  
      alert('✅ Ваше замовлення прийнято! Очікуйте дзвінка 📞');
      resetForm(); // 🧹 Очищення форми
    } catch (error) {
      console.error('❌ Помилка при замовленні без оплати:', error);
      alert('Помилка при оформленні. Спробуйте пізніше.');
    }
  };
  
 
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Оформлення замовлення</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
  
        {/* Імʼя, Прізвище, По батькові */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Імʼя"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
  
          <div>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="Прізвище"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
  
          <div>
            <input
              value={patronymic}
              onChange={(e) => setPatronymic(e.target.value)}
              className="p-2 border rounded w-full"
              placeholder="По батькові"
            />
          </div>
        </div>
  
        {/* Email */}
        <div className="mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border rounded bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
  
        {/* Телефон */}
        <div className="mt-4">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
            className="w-full p-2 border rounded bg-white dark:bg-black text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
  
        {/* Спосіб доставки */}
        <div>
          <label className="block mb-1 font-medium">
            Спосіб доставки
          </label>
          <select
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
            className="w-full p-2 border rounded bg-white dark:bg-black text-black dark:text-white"
            required
          >
            <option value="">Оберіть спосіб</option>
            <option value="nova-poshta">Нова Пошта</option>
            <option value="ukr-poshta">Укрпошта</option>
            <option value="courier">Курʼєром</option>
          </select>
        </div>
  
        {/* Місто + Відділення */}
        {deliveryMethod === 'nova-poshta' && (
          <>
            <div>
              <label className="block mb-1 font-medium">Населений пункт</label>
              <input
                type="text"
                value={cityQuery}
                onChange={handleCityInput}
                placeholder="Почніть вводити назву"
                className="w-full p-2 border rounded"
              />
              {filteredCities.length > 0 && (
                <ul className="mt-2 border rounded shadow bg-white max-h-40 overflow-auto z-10 relative">
                  {filteredCities.map((city, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleCitySelect(city)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {city.Present}
                    </li>
                  ))}
                </ul>
              )}
            </div>
  
            {warehouses.length > 0 && (
              <div>
                <label className="block mb-1 font-medium">Відділення</label>
                <select
                  className="w-full p-2 border rounded"
                  value={selectedWarehouse}
                  onChange={(e) => setSelectedWarehouse(e.target.value)}
                >
                  <option value="">Оберіть відділення</option>
                  {warehouses.map((wh) => (
                    <option key={wh.Ref} value={wh.Ref}>
                      {wh.Description}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}
  
        {(deliveryMethod === 'ukr-poshta' || deliveryMethod === 'courier') && (
          <div>
            <label className="block mb-1 font-medium">Населений пункт</label>
            <input
  type="text"
  value={cityQuery}
  onChange={(e) => setCityQuery(e.target.value)}
  placeholder="Введіть населений пункт вручну"
  className="w-full p-2 border rounded"
/>

      
          </div>
        )}
  
        {/* Коментар */}
        <textarea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Коментар до замовлення"
          className="w-full p-2 border rounded"
        />
  
        {/* Оплата8*/}
        <div>
          <label className="block mb-1 font-medium">Оплата</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="full"
                checked={paymentType === 'full'}
                onChange={() => {
                  setPaymentType('full');
                  setOnlinePaymentMethod('');
                }}
              />
              <span>Оплата онлайн (повна сума: {total} грн)</span>
            </label>
          </div>
        </div>
   
        {paymentType === 'full' && (
          <div className="bg-gray-50 p-4 rounded border">
            <label className="block mb-2 font-medium">Спосіб онлайн-оплати</label>
            <div className="space-y-2">
             {/*} <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="online-method"
                  value="liqpay"
                  checked={onlinePaymentMethod === 'liqpay'}
                  onChange={() => setOnlinePaymentMethod('liqpay')}
                />
                <span>LiqPay (🇺🇦 грн)</span>
              </label>
              <label className="flex items-center space-x-2">
  <input
    type="radio"
    name="online-method"
    value="fondy"
    checked={onlinePaymentMethod === 'fondy'}
    onChange={() => setOnlinePaymentMethod('fondy')}
  />
  <span>Fondy (тест UAH)</span>
</label>
 <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="online-method"
                  value="stripe"
                  checked={onlinePaymentMethod === 'stripe'}
                  onChange={() => setOnlinePaymentMethod('stripe')}
                />
                <span>Stripe (🌍 USD / EUR)</span>
              </label> */}
              <label className="flex items-center space-x-2">
  <input
    type="radio"
    name="online-method"
    value="wayforpay"
    checked={onlinePaymentMethod === 'wayforpay'}
    onChange={() => setOnlinePaymentMethod('wayforpay')}
  />
  <span>WayForPay (UAH)</span>
</label>
            </div> 
          </div>
        )}

 

      
        {/* Кнопка */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!paymentType}
        >
          Оплатити замовлення
        </button> 
        {/* Кнопка замовити без оплати */}
<button
  type="button"
  onClick={handleOrderWithoutPayment}
  className="mt-2 ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
>
  Замовити без оплати
</button>
      </form>
    </div>
  );
}  