import products from '../../data/products.js';
import fetch from 'node-fetch';

// Заміни локальний URL на URL Render:
const API_URL = 'https://shoopingsite-backend-1.onrender.com/api/seed-products';
const BATCH_SIZE = 50;

const delay = ms => new Promise(res => setTimeout(res, ms));

async function sendProducts(batch, index) {
  console.log(`➡️ Надсилаємо порцію ${index + 1}`);
  console.log(`📦 Надсилаємо продукти:`, batch.map(p => p.id));

  const cleanedBatch = batch.map(p => ({
    ...p,
    images: Array.isArray(p.images)
      ? p.images.filter(item => typeof item === 'string')
      : [],
  }));

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cleanedBatch),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`❌ Помилка в порції ${index + 1}:\n🔍 Код: ${response.status}, Відповідь:`, errorText);
    throw new Error('Завантаження перервано через помилку сервера');
  }

  const result = await response.json();
  console.log(`✅ Успішно: ${result.message}`);
}

async function run() {
  const chunks = [];

  for (let i = 0; i < products.length; i += BATCH_SIZE) {
    chunks.push(products.slice(i, i + BATCH_SIZE));
  }

  for (let i = 0; i < chunks.length; i++) {
    try {
      await sendProducts(chunks[i], i);
      await delay(500); // невелика пауза між порціями
    } catch (err) {
      console.error('🛑 Відправку зупинено:', err.message);
      break;
    }
  }
}

run();
 