"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const ContactUs = () => {
  const searchParams = useSearchParams();

  // Отримуємо параметри продукту з URL
  const initialProductData = {
    name: searchParams.get("productName"),
    price: searchParams.get("productPrice"),
    description: searchParams.get("productDescription"),
    image: searchParams.get("productImage") || "/4.jpg", // Стандартне зображення
    color: searchParams.get("productColor"),
    size: searchParams.get("productSize"),
    quantity: searchParams.get("productQuantity"),
    sku: searchParams.get("productSKU"),
  };

  const [productData, setProductData] = useState(initialProductData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Встановлюємо стан відправки
    setFormSubmitted(true);
    setSuccessMessageVisible(true);

    // Скидаємо дані продукту та форму до стандартного вигляду
    setProductData({
      name: null,
      price: null,
      description: null,
      image: "/4.jpg", // Повертаємо стандартне зображення
      color: null,
      size: null,
      quantity: null,
      sku: null,
    });

    setFormValues({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });

    // Ховаємо повідомлення через 8 секунди
    setTimeout(() => {
      setFormSubmitted(false);
      setSuccessMessageVisible(false);
    }, 8000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    
    <div className="font-sans relative">
      {/* Повідомлення про успішне відправлення */}
      {successMessageVisible && (
        <div className="absolute top-0 left-0 w-full bg-green-500 text-white py-4 text-center font-bold z-50">
          Thank you! Your form has been successfully submitted!
        </div>
      )}
<section className="bg-black text-white text-center py-8 sm:py-10 md:py-16">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8">
    Contact Us
  </h1>
  <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
    This is your Contact section paragraph. Encourage your reader to reach out with any questions, comments, or to take a different action specific to your site.
  </p>
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 md:gap-16 lg:gap-28 bg-gray-800 p-4 sm:p-6 md:p-8">
    <div className="w-full sm:w-1/2 lg:w-[56%] h-[400px] sm:h-[600px] lg:h-[700px]">
      <Image
        src={productData.image}
        alt={productData.name || "Default Image"}
        width={400}
        height={600}
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>

    <div className="w-full sm:w-1/2 lg:w-1/3 space-y-4 sm:space-y-6">
      <address className="text-base sm:text-lg md:text-xl not-italic">
        500 Terry Francine Street, San Francisco, CA 94158
      </address>
      <div className="flex flex-col sm:flex-row xl:justify-center items-center gap-2 sm:gap-4">
        <a
          href="mailto:info@mysite.com"
          className="text-blue-400 hover:underline"
        >
          info@mysite.com
        </a>
        <span className="hidden sm:block text-white">|</span>
        <p className="text-sm sm:text-base">123-456-7890</p>
      </div>
      {!formSubmitted && productData.name && (
        <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Product: {productData.name}
          </h2>
          <p className="text-sm sm:text-base">Price: {productData.price}</p>
          <p className="text-sm sm:text-base">Color: {productData.color}</p>
          <p className="text-sm sm:text-base">Size: {productData.size}</p>
          <p className="text-sm sm:text-base">Quantity: {productData.quantity}</p>
          <p className="text-sm sm:text-base">SKU: {productData.sku}</p>
          <p className="text-sm sm:text-base">Description: {productData.description}</p>
        </div>
      )}
      <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formValues.firstName}
            onChange={handleInputChange}
            className="w-full sm:w-1/2 p-3 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-lime-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formValues.lastName}
            onChange={handleInputChange}
            className="w-full sm:w-1/2 p-3 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-lime-500"
            required
          />
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formValues.phone}
          onChange={handleInputChange}
          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-lime-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formValues.email}
          onChange={handleInputChange}
          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-lime-500"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formValues.message}
          onChange={handleInputChange}
          className="w-full p-3 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-lime-500"
        ></textarea>
         {/* Кнопка */}
    <div className="flex items-center gap-4">
  {/* Ліва частина: кнопка */}
  <button
    type="submit"
    className="bg-lime-500 text-black font-semibold py-2 px-8 rounded-lg hover:bg-lime-600"
  >
    Send
  </button>

  {/* Права частина: текст */}
  <p className="text-gray-400 text-sm ml-16 sm:ml-36">Thanks for submitting!</p>
  
 
</div>
{/* Соцмережі під кнопкою */}
<div className="grid grid-cols-2 gap-4 pt-8 sm:flex sm:gap-4 sm:pt-8 mb:gap-12 xl:gap-12">
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-600 focus:text-blue-600 underline"
  >
    Facebook
  </a>
  <a
    href="https://www.twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-600 focus:text-blue-600 underline"
  >
    Twitter
  </a>
  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-600 focus:text-blue-600 underline"
  >
    Instagram
  </a>
  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-600 focus:text-blue-600 underline"
  >
    LinkedIn
  </a>
</div>
{/* Повідомлення про успішне відправлення */}
{successMessageVisible && (
                <p className="mt-4 text-green-500 font-bold">
                  Your form has been successfully submitted!
                </p>
              )}
      </form>
</div>
     
</div>
</section>
<section className="bg-black text-white py-12 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:pb-12 pb-8 sm:ml-0 ml-4 md:mb-0 text-center md:text-left">
      Opening Hours
    </h2>

    {/* Hours List */}
    <div className="flex flex-col space-y-6 sm:space-y-4 md:space-y-2 text-lg text-left sm:text-right sm:pl-0 pl-4 md:pr-32">
      {/* Monday to Friday */}
      <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
        <p className="font-semibold text-lg sm:text-xl">Mon - Fri</p>
        <p className="text-gray-400 sm:pl-32">8:00 am – 8:00 pm</p>
      </div>

      {/* Saturday */}
      <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
        <p className="font-semibold text-lg sm:text-xl">Saturday</p>
        <p className="text-gray-400 sm:pl-4">9:00 am – 7:00 pm</p>
      </div>

      {/* Sunday */}
      <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
        <p className="font-semibold text-lg sm:text-xl">Sunday</p>
        <p className="text-gray-400 sm:pl-4">9:00 am – 9:00 pm</p>
      </div>
    </div>
  </div>
</section>

{/* Map Section */}
<section className="bg-black text-white py-8 px-4">
  <iframe
    src="https://www.google.com/maps/embed"
    className="w-full h-64 sm:h-72 border-0"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</section>

  </div>
  );
};

export default ContactUs;
