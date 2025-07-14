'use client';

import { useState, useEffect } from 'react';
//import fetchGeoCities from '../../utils/fetchGeoCities'
import { validateForm } from '../../utils/validationContactForm';
import { getSessionId } from '../../utils/session';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FiUser, FiMail, FiPhone, FiTruck, FiCreditCard, FiMessageSquare } from "react-icons/fi";

import OrderSummary from "../OrderSummary/OrderSummary"
export default function Checkout() {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [cityQuery, setCityQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCityRef, setSelectedCityRef] = useState('');
  const [warehouses, setWarehouses] = useState([]);

  const [selectedWarehouse, setSelectedWarehouse] = useState('');
const [selectedWarehouseRef, setSelectedWarehouseRef] = useState('');

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

const handleWayforpayClick = async () => {
  console.log('🟡 Клік по кнопці WayForPay');

  const formValues = { firstName, lastName, email, phone };
  const validationErrors = validateForm(formValues);
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    console.warn('⚠️ Помилки у формі:', validationErrors);
    return;
  }

  const windowName = `wayforpay_${Date.now()}`;
  const newWindow = window.open('', windowName); // задати ім’я
  if (!newWindow) {
    alert('Браузер заблокував спливаюче вікно. Дозвольте їх у налаштуваннях.');
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
    warehouseRef: selectedWarehouseRef,
    comment,
    total: Number(String(total).replace(/[^\d.]/g, '')),
    prepay: paymentType === 'prepay',
    paymentMethod: 'wayforpay',
    paymentType,
    sessionId,
  };

  try {
    const res = await fetch(`${BACKEND_URL}/api/payments/wayforpay`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        order,
        serverUrl: `${BACKEND_URL}/api/payments/wayforpay/callback`,
      }),
    });

    if (!res.ok) throw new Error('WayForPay не відповідає');

    const { url, params } = await res.json();
    console.log('✅ Отримано дані для форми:', params);

    const form = document.createElement('form');
    form.action = url;
    form.method = 'POST';
    form.target = windowName; // використання правильного імені

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = v;
          form.appendChild(input);
        });
      } else {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }
    });

    document.body.appendChild(form);
    console.log('📨 Відправляємо форму на WayForPay...');
    form.submit();
    document.body.removeChild(form);
  } catch (error) {
    console.error('❌ Помилка під час ініціалізації оплати:', error);
    newWindow.close();
    alert('Не вдалося ініціювати оплату через WayForPay.');
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
 warehouseRef: selectedWarehouseRef,  // (за потреби)
      comment,
      total: Number(String(total).replace(/[^\d.]/g, '')),

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
          console.log('🧾 ORDER перед оплатою:', order);

          await handleWayforpayPayment(order);
           return;
        }
        
  
      } else {
        console.log("📦 Зберігаємо замовлення без онлайн-оплати...");
        await saveOrder(order);
        alert('Замовлення оформлено! Очікуйте дзвінка 📞');
      }
    } catch (error) {
      console.error('❌ Помилка при обробці замовлення:', error);
    
      if (error instanceof Response) {
        const errText = await error.text();
        alert(`Помилка з сервера: ${errText}`);
      } else {
        alert(`Не вдалося оформити замовлення. ${error.message || ''}`);
      }
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
      total: Number(String(total).replace(/[^\d.]/g, '')),
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
  

<div className="p-6 mt-8 max-w-5xl mx-auto bg-[#fdfcf7]  dark:bg-zinc-900 rounded-xl shadow-md space-y-6">
  <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Оформлення замовлення</h1>

  {/* ПІДСУМОК */}
  <div className="md:flex gap-6">
    <div className="md:w-2/3 space-y-6">

      {/* ІМʼЯ / ПРІЗВИЩЕ / ПО БАТЬКОВІ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Імʼя", value: firstName, setter: setFirstName, error: errors.firstName, icon: <FiUser /> },
          { label: "Прізвище", value: lastName, setter: setLastName, error: errors.lastName, icon: <FiUser /> },
          { label: "По батькові", value: patronymic, setter: setPatronymic, error: null, icon: <FiUser /> }
        ].map(({ label, value, setter, error, icon }, idx) => (
          <div key={idx} className="relative">
            <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
            <input
              value={value}
              onChange={(e) => setter(e.target.value)}
              placeholder={label}
              className="pl-10 p-3 border rounded-lg w-full bg-white dark:bg-zinc-800 text-gray-800 dark:text-white placeholder:text-gray-400 placeholder:opacity-70 border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
        ))}
      </div>

      {/* EMAIL */}
      <div className="relative">
        <span className="absolute left-3 top-3 text-gray-400"><FiMail /></span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="pl-10 w-full p-3 border rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-white placeholder:text-gray-400 placeholder:opacity-70 border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* ТЕЛЕФОН */}
      <label className="block font-semibold text-gray-700 dark:text-white mt-4">Телефон</label>
      <PhoneInput
        country={'ua'}
        value={phone}
        onChange={phone => setPhone(phone)}
        inputClass="!w-full  !border !rounded-lg !text-gray-800 dark:!text-white dark:!bg-zinc-800 !border-gray-300 dark:!border-zinc-600"
        containerClass="w-full"
        inputStyle={{ width: '100%' }}
        specialLabel=""
        enableSearch
        preferredCountries={['ua', 'pl', 'cz', 'de']}
      />
      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

      {/* СПОСІБ ДОСТАВКИ — КНОПКИ */}
      <div>
        <label className="block mb-1 font-semibold text-gray-700 dark:text-white flex items-center gap-2">
          <FiTruck /> Спосіб доставки
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            { value: 'nova-poshta', label: 'Нова Пошта' },
            { value: 'ukr-poshta', label: 'Укрпошта' },
            { value: 'courier', label: 'Курʼєром' }
          ].map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setDeliveryMethod(value)}
              className={`px-4 py-2 rounded-lg border transition ${
                deliveryMethod === value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* МІСТО + ВІДДІЛЕННЯ */}
      {deliveryMethod === 'nova-poshta' && (
        <>
          <div className="mt-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-white">Населений пункт</label>
            <input
              type="text"
              value={cityQuery}
              onChange={handleCityInput}
              placeholder="Почніть вводити назву"
              className="w-full p-3 border rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-white border-gray-300 dark:border-zinc-600"
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
            <div className="mt-4">
              <label className="block mb-1 font-medium text-gray-700 dark:text-white">Відділення</label>
              <select
                className="w-full p-3 border rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-white border-gray-300 dark:border-zinc-600"
                value={selectedWarehouseRef}
                onChange={(e) => {
                  const selectedWh = warehouses.find(wh => wh.Ref === e.target.value);
                  setSelectedWarehouseRef(e.target.value);
                  setSelectedWarehouse(selectedWh?.Description || '');
                }}
              >
                <option value="">Оберіть відділення</option>
                {warehouses.map((wh) => (
                  <option key={wh.Ref} value={wh.Ref}>{wh.Description}</option>
                ))}
              </select>
            </div>
          )}
        </>
      )}

      {(deliveryMethod === 'ukr-poshta' || deliveryMethod === 'courier') && (
        <div className="mt-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-white">Населений пункт</label>
          <input
            type="text"
            value={cityQuery}
            onChange={(e) => setCityQuery(e.target.value)}
            placeholder="Введіть населений пункт вручну"
            className="w-full p-3 border rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-white border-gray-300 dark:border-zinc-600"
          />
        </div>
      )}

      {/* КОМЕНТАР */}
      <div className="mt-4">
        <label className="block mb-1 font-medium text-gray-700 dark:text-white flex items-center gap-1">
          <FiMessageSquare /> 
        </label>
        <textarea
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Коментар до замовлення"
          className="w-full p-3 border rounded-lg bg-white dark:bg-zinc-800 text-gray-800 dark:text-white border-gray-300 dark:border-zinc-600"
        />
      </div>

      {/* ОПЛАТА */}
      <div className="space-y-3">
        <label className="block font-semibold text-gray-700 dark:text-white">Тип оплати</label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="payment" value="full" checked={paymentType === 'full'} onChange={() => { setPaymentType('full'); setOnlinePaymentMethod(''); }} />
          <span className="text-gray-800 dark:text-white">Оплата онлайн (повна сума: {total} грн)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="payment" value="half" checked={paymentType === 'half'} onChange={() => { setPaymentType('half'); setOnlinePaymentMethod(''); }} />
          <span className="text-gray-800 dark:text-white">Передоплата 50% ({Math.round(total / 2)} грн)</span>
        </label>
      </div>

      {/* ОНЛАЙН ОПЛАТА */}
      {(paymentType === 'full' || paymentType === 'half') && (
        <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg border border-gray-200 dark:border-zinc-600 mt-4">
          <label className="block font-semibold mb-2 text-gray-700 dark:text-white">Метод онлайн оплати</label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="online-method"
              value="wayforpay"
              checked={onlinePaymentMethod === 'wayforpay'}
              onChange={() => setOnlinePaymentMethod('wayforpay')}
            />
            <span className="text-gray-800 dark:text-white">WayForPay</span>
          </label>
        </div>
      )}

      {/* КНОПКИ */}
      <div className="flex flex-wrap gap-4 pt-4">
        <button
          type="button"
          onClick={handleWayforpayClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow flex items-center gap-2"
        >
          <FiCreditCard />
          Оплатити {paymentType === 'half' ? '50%' : 'повну суму'}
        </button>

        <button
          type="button"
          onClick={handleOrderWithoutPayment}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow flex items-center gap-2"
        >
          📞 Звʼязатись з менеджером
        </button>
      </div>
    </div>

    {/* ПІДСУМОК ЗАМОВЛЕННЯ */}
    <div className="md:w-1/3 mt-10 md:mt-0 md:sticky md:top-6 bg-white dark:bg-zinc-800 p-4 rounded-xl border border-gray-200 dark:border-zinc-700">
      <OrderSummary />
    </div>
  </div>
</div>


  );
} 