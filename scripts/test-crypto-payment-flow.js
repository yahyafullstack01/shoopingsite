/**
 * Test script: Crypto payment flow from checkout to email delivery.
 * Run with dev server up: npm run dev (then in another terminal: node scripts/test-crypto-payment-flow.js)
 * Or: BASE_URL=http://localhost:3001 node scripts/test-crypto-payment-flow.js
 * (Use the port your dev server prints; API routes are served on that port.)
 *
 * 1. Optionally creates order via backend (if NEXT_PUBLIC_BASE_URL is set and backend is up).
 * 2. Calls /api/sendCryptoEmail with the same payload the frontend sends.
 * 3. Asserts email API returns 200 and success.
 */

const BASE_URL = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL || process.env.BACKEND_URL || '';

const testOrder = {
  firstName: 'Crypto',
  lastName: 'Test',
  patronymic: '',
  email: 'crypto-test@example.com',
  phone: '+380501234567',
  deliveryMethod: 'nova-poshta',
  city: 'Київ',
  warehouse: 'Відділення №1',
  warehouseRef: '',
  comment: 'E2E crypto flow test',
  total: 1500,
  prepay: false,
  paymentMethod: 'crypto',
  sessionId: 'test-session-' + Date.now(),
};

async function createOrderIfBackendAvailable() {
  if (!BACKEND_URL) {
    console.log('⏭ No BACKEND_URL set, using mock orderId for email test.');
    return { orderId: 'test-order-' + Date.now(), order: testOrder };
  }
  try {
    const res = await fetch(`${BACKEND_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testOrder),
    });
    if (!res.ok) {
      console.warn('⚠ Backend order creation failed:', res.status, await res.text());
      return { orderId: 'test-order-' + Date.now(), order: testOrder };
    }
    const saved = await res.json();
    const orderId = saved._id || saved.id;
    console.log('✅ Order created on backend:', orderId);
    return { orderId, order: testOrder };
  } catch (e) {
    console.warn('⚠ Backend unreachable:', e.message);
    return { orderId: 'test-order-' + Date.now(), order: testOrder };
  }
}

async function sendCryptoEmail(orderId, order) {
  const payload = { ...order, orderId };
  const res = await fetch(`${BASE_URL}/api/sendCryptoEmail`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

async function main() {
  console.log('🧪 Crypto payment flow test');
  console.log('   BASE_URL:', BASE_URL);
  console.log('   BACKEND_URL:', BACKEND_URL || '(none)');

  const { orderId, order } = await createOrderIfBackendAvailable();

  console.log('📧 Calling /api/sendCryptoEmail...');
  const { ok, status, data } = await sendCryptoEmail(orderId, order);

  if (!ok) {
    console.error('❌ sendCryptoEmail failed:', status, data);
    process.exit(1);
  }
  if (data.success !== true) {
    console.error('❌ sendCryptoEmail returned success !== true:', data);
    process.exit(1);
  }

  console.log('✅ Crypto payment flow test passed: order saved (or mocked), emails sent.');
  console.log('   orderId:', data.orderId || orderId);
  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
