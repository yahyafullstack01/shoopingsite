import React from 'react';

const ContactUs = () => {
  return (
    <div className="font-sans">
      {/* Contact Section */}
      <section className="bg-black text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          This is your Contact section paragraph. Encourage your reader to reach out with any questions, comments, or to take a different action specific to your site.
        </p>
        <div className="flex flex-wrap justify-center items-start gap-8">
          {/* Contact Image */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img
              src="/sand-pattern.jpg"
              alt="Sand pattern"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Contact Details */}
          <div className="w-full md:w-1/2 lg:w-1/3 space-y-4">
            <address className="not-italic text-lg">
              500 Terry Francine Street, San Francisco, CA 94158
            </address>
            <a
              href="mailto:info@mysite.com"
              className="block text-blue-400 hover:underline"
            >
              info@mysite.com
            </a>
            <p className="text-lg">123-456-7890</p>
            {/* Contact Form */}
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="bg-lime-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-lime-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="bg-gray-800 text-white text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
        <ul className="space-y-2 text-lg">
          <li>Mon - Fri: 8:00 am – 8:00 pm</li>
          <li>Saturday: 9:00 am – 7:00 pm</li>
          <li>Sunday: 9:00 am – 9:00 pm</li>
        </ul>
      </section>

      {/* Map Section */}
      <section className="bg-black text-white py-8 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.840290168038!2d-122.41941568468274!3d37.77492977975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c77f5c1af%3A0xfb1d7df2d3e1bf4e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1648576186263!5m2!1sen!2sin"
          className="w-full h-72 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <footer className="text-center mt-8 space-y-2">
          <h3 className="text-2xl font-bold">Latore Atelier</h3>
          <p>123-456-7890</p>
          <a
            href="mailto:info@mysite.com"
            className="text-blue-400 hover:underline"
          >
            info@mysite.com
          </a>
          <address className="not-italic">
            500 Terry Francine Street, 6th Floor, San Francisco, CA 94158
          </address>
        </footer>
      </section>
    </div>
  );
};

export default ContactUs;
