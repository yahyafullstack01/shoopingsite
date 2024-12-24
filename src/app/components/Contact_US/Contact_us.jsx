import React from 'react';
import Image from 'next/image';
const ContactUs = () => {
  return (
    <div className="font-sans">
      {/* Contact Section */}
      <section className="bg-black text-white text-center py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Contact Us</h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  max-w-2xl mx-auto mb-16">
          This is your Contact section paragraph. Encourage your reader to reach out with any questions, comments, or to take a different action specific to your site.
        </p>
        <div className="flex flex-wrap items-start gap-28 bg-gray-800">
          {/* Contact Image */}
          <div className="pr-8 w-[56%] h-[300px] sm:h-[500px] md:h-[700px] ">

            <Image
              src="/4.jpg"
              alt="Description"
              width={400} 
              height={600}
              className="w-full h-auto aspect-square object-cover relative rounded-lg shadow-gray-800 dark:shadow-gray-600 shadow-xl"
            />
          </div>
          {/* Contact Details */}
          <div className="w-full md:w-1/2 lg:w-1/3 space-y-6 mt-16">
            <address className="not-italic text-lg sm:text-sm md:text-base lg:text-lg ">
              500 Terry Francine Street, San Francisco, CA 94158
            </address>
            <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:info@mysite.com"
              className="block text-blue-400 hover:underline"
            >
              info@mysite.com
            </a>
            <span className="text-white">|</span>
            <p className="text-lg">123-456-7890</p>
            </div>
            {/* Contact Form */}
            <form className="space-y-4">
  <div className="flex gap-4">
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      className="w-1/2 p-4 pl-0 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-lime-500"
      required
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      className="w-1/2 p-4 pl-0 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-lime-500"
      required
    />
  </div>
  <input
    type="email"
    name="email"
    placeholder="Email *"
    className="w-full p-6 pl-0 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-lime-500"
    required
  />
  <textarea
    name="message"
    placeholder="Message"
    rows="4"
    className="w-full p-6 pl-0 bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-lime-500 resize-none"
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
  <p className="text-gray-400 text-sm sm:text-base ml-36">Thanks for submitting!</p>
</div>

{/* Соцмережі під кнопкою */}
<div className="flex gap-12 pt-8">
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

</form>

<div className="flex items-center justify-between"></div>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      
      <section className="bg-black text-white py-12 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
    {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-bold mb-8 pb-24 ml-24 md:mb-0 text-center md:text-left">
      Opening Hours
    </h2>

    {/* Hours List */}
    <div className="flex flex-col space-y-4 md:space-y-2 text-lg text-right md:text-right  md:pr-32">
      {/* Monday to Friday */}
      <div className="flex justify-between">
        <p className="font-semibold text-xl">Mon - Fri</p>
        <p className="text-gray-400 pl-32">8:00 am – 8:00 pm</p>
      </div>

      {/* Saturday */}
      <div className="flex justify-between">
        <p className="font-semibold text-xl">Saturday</p>
        <p className="text-gray-400 pl-4">9:00 am – 7:00 pm</p>
      </div>

      {/* Sunday */}
      <div className="flex justify-between">
        <p className="font-semibold text-xl">Sunday</p>
        <p className="text-gray-400 pl-4">9:00 am – 9:00 pm</p>
      </div>
    </div>
  </div>
</section>

      {/* Map Section */}
      <section className="bg-black text-white py-8 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.840290168038!2d-122.41941568468274!3d37.77492977975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c77f5c1af%3A0xfb1d7df2d3e1bf4e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1648576186263!5m2!1sen!2sin"
          className="w-full h-72 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
