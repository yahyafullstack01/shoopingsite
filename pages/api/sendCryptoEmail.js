import nodemailer from "nodemailer";
import { escape } from "lodash-es";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    orderId,
    firstName,
    lastName,
    patronymic,
    email,
    phone,
    deliveryMethod,
    city,
    warehouse,
    warehouseRef,
    comment,
    total,
    sessionId,
  } = req.body;

  console.log("Crypto payment order received:", req.body);

  // Sanitize inputs
  const safeFirstName = escape(firstName || "");
  const safeLastName = escape(lastName || "");
  const safePatronymic = escape(patronymic || "");
  const safeEmail = escape(email || "невідомо");
  const safePhone = escape(phone || "Не вказано");
  const safeDeliveryMethod = escape(deliveryMethod || "Не вказано");
  const safeCity = escape(city || "Не вказано");
  const safeWarehouse = escape(warehouse || "Не вказано");
  const safeComment = escape(comment || "Немає коментарів");
  const safeTotal = escape(String(total || 0));
  const safeOrderId = escape(orderId || "N/A");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  try {
    // Email to admin - highlight crypto payment
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "latoreatelier01@gmail.com",
      subject: `🔐 CRYPTO PAYMENT ORDER #${safeOrderId}`,
      html: `
        <!DOCTYPE html>
        <html lang="uk">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              padding: 16px;
              color: #333;
              background-color: #f9f9f9;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .highlight {
              font-weight: bold;
              color: #9333ea;
              font-size: 18px;
              background-color: #faf5ff;
              padding: 12px;
              border-radius: 6px;
              border-left: 4px solid #9333ea;
              margin: 20px 0;
            }
            .crypto-badge {
              display: inline-block;
              background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%);
              color: white;
              padding: 8px 16px;
              border-radius: 20px;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .details-list {
              list-style: none;
              padding: 0;
            }
            .details-list li {
              margin-bottom: 10px;
              padding: 8px;
              background-color: #f5f5f5;
              border-radius: 4px;
            }
            .section-title {
              color: #9333ea;
              font-size: 16px;
              font-weight: bold;
              margin-top: 20px;
              margin-bottom: 10px;
              border-bottom: 2px solid #9333ea;
              padding-bottom: 5px;
            }
            strong {
              color: #555;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <span class="crypto-badge">💰 CRYPTOCURRENCY PAYMENT</span>
            
            <div class="highlight">
              ⚠️ КЛІЄНТ ХОЧЕ ОПЛАТИТИ КРИПТОВАЛЮТОЮ
            </div>
            
            <h2>Нове замовлення #${safeOrderId}</h2>
            
            <div class="section-title">📋 Інформація про клієнта</div>
            <ul class="details-list">
              <li><strong>Ім'я:</strong> ${safeFirstName} ${safeLastName} ${safePatronymic}</li>
              <li><strong>Email:</strong> ${safeEmail}</li>
              <li><strong>Телефон:</strong> ${safePhone}</li>
            </ul>
            
            <div class="section-title">🚚 Інформація про доставку</div>
            <ul class="details-list">
              <li><strong>Спосіб доставки:</strong> ${safeDeliveryMethod}</li>
              <li><strong>Місто:</strong> ${safeCity}</li>
              <li><strong>Відділення:</strong> ${safeWarehouse}</li>
            </ul>
            
            <div class="section-title">💵 Оплата</div>
            <ul class="details-list">
              <li><strong>Метод оплати:</strong> <span style="color: #9333ea; font-weight: bold;">КРИПТОВАЛЮТА (BTC/ETH/USDT)</span></li>
              <li><strong>Сума до оплати:</strong> ${safeTotal} грн</li>
            </ul>
            
            ${safeComment !== "Немає коментарів" ? `
            <div class="section-title">💬 Коментар</div>
            <p style="background-color: #f5f5f5; padding: 12px; border-radius: 4px;">${safeComment}</p>
            ` : ''}
            
            <div class="section-title">🔐 Наступні кроки</div>
            <ol style="padding-left: 20px;">
              <li>Зв'яжіться з клієнтом за телефоном: <strong>${safePhone}</strong></li>
              <li>Надайте реквізити криптовалютного гаманця</li>
              <li>Підтвердьте отримання платежу</li>
              <li>Відправте замовлення</li>
            </ol>
            
            <p style="margin-top: 20px; color: #666; font-size: 14px;">
              Session ID: ${sessionId || 'N/A'}
            </p>
          </div>
        </body>
        </html>
      `,
    });

    // Email to client - confirmation
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: safeEmail,
      subject: "Ваше замовлення прийнято! 💰 Crypto Payment | Latore Atelier",
      html: `
        <!DOCTYPE html>
        <html lang="uk">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              padding: 16px;
              color: #333;
              background-color: #f9f9f9;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              padding: 20px 0;
              border-bottom: 2px solid #9333ea;
              margin-bottom: 20px;
            }
            .crypto-icon {
              font-size: 48px;
              margin-bottom: 10px;
            }
            .highlight {
              background-color: #faf5ff;
              padding: 16px;
              border-radius: 8px;
              border-left: 4px solid #9333ea;
              margin: 20px 0;
            }
            .details-box {
              background-color: #f5f5f5;
              padding: 15px;
              border-radius: 6px;
              margin: 15px 0;
            }
            .total {
              font-size: 24px;
              font-weight: bold;
              color: #9333ea;
              text-align: center;
              padding: 15px;
              background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
              border-radius: 8px;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e5e5;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="crypto-icon">💰</div>
              <h2 style="color: #9333ea; margin: 0;">Замовлення прийнято!</h2>
              <p style="color: #666; margin: 10px 0 0 0;">Замовлення #${safeOrderId}</p>
            </div>
            
            <p>Доброго дня, <strong>${safeFirstName} ${safeLastName}</strong>!</p>
            
            <p>Дякуємо за ваше замовлення! Ми отримали ваш запит на оплату криптовалютою.</p>
            
            <div class="highlight">
              <strong>🔐 Оплата криптовалютою</strong>
              <p style="margin: 10px 0 0 0;">
                Наш менеджер зв'яжеться з вами <strong>найближчим часом</strong> (протягом 24 годин) 
                та надішле реквізити для оплати криптовалютою (Bitcoin, Ethereum або USDT).
              </p>
            </div>
            
            <div class="total">
              Сума до оплати: ${safeTotal} грн
            </div>
            
            <div class="details-box">
              <h3 style="margin-top: 0; color: #9333ea;">📦 Деталі замовлення:</h3>
              <p><strong>Доставка:</strong> ${safeDeliveryMethod}</p>
              <p><strong>Місто:</strong> ${safeCity}</p>
              <p><strong>Відділення:</strong> ${safeWarehouse}</p>
              ${safeComment !== "Немає коментарів" ? `<p><strong>Коментар:</strong> ${safeComment}</p>` : ''}
            </div>
            
            <div class="details-box">
              <h3 style="margin-top: 0; color: #9333ea;">📞 Ваші контактні дані:</h3>
              <p><strong>Телефон:</strong> ${safePhone}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
            </div>
            
            <div style="background-color: #fff7ed; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0;"><strong>⏳ Наступні кроки:</strong></p>
              <ol style="margin: 10px 0 0 0; padding-left: 20px;">
                <li>Очікуйте дзвінка від нашого менеджера</li>
                <li>Отримайте реквізити криптовалютного гаманця</li>
                <li>Здійсніть оплату</li>
                <li>Підтвердіть транзакцію мене��жеру</li>
                <li>Отримайте ваше замовлення!</li>
              </ol>
            </div>
            
            <p>Якщо у вас виникли питання, зв'яжіться з нами:</p>
            <p>📞 Телефон: +38 (097) 367 82 57<br>
            📧 Email: latoreatelier01@gmail.com</p>
            
            <div class="footer">
              <p><strong>З повагою,<br>Команда Latore Atelier</strong></p>
              <p style="font-size: 12px; color: #999; margin-top: 10px;">
                Український бренд жіночого одягу з власним виробництвом
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    res.status(200).json({ 
      success: true, 
      message: "Crypto payment emails sent successfully!",
      orderId: safeOrderId 
    });
    
  } catch (error) {
    console.error("Error sending crypto payment email:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error sending email",
      error: error.message 
    });
  }
}
