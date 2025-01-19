import React, { useState } from "react";
import { validateForm } from "../../utils/validationContactForm"; // Import the validation function

const ContactForm = ({
  formValues,
  onInputChange,
  onFormSubmit,
  formSubmitted,
  successMessageVisible,
}) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formValues); // Call the external validation function
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onFormSubmit(e); // Call the original submit handler if valid
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full sm:w-1/2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={onInputChange}
              className="w-full p-3 bg-transparent border-b border-black dark:border-white text-black dark:text-white placeholder-gray-550 dark:placeholder-gray-400 focus:outline-none focus:border-lime-500"
              required
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="w-full sm:w-1/2">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={onInputChange}
              className="w-full p-3 bg-transparent border-b border-black dark:border-white text-black dark:text-white placeholder-gray-550 dark:placeholder-gray-400 focus:outline-none focus:border-lime-500"
              required
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formValues.phone}
            onChange={onInputChange}
            className="w-full p-3 bg-transparent border-b border-black dark:border-white text-black dark:text-white placeholder-gray-550 dark:placeholder-gray-400 focus:outline-none focus:border-lime-500"
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formValues.email}
            onChange={onInputChange}
            className="w-full p-3 bg-transparent border-b border-black dark:border-white text-black dark:text-white placeholder-gray-550 dark:placeholder-gray-400 focus:outline-none focus:border-lime-500"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formValues.message}
            onChange={onInputChange}
            className="w-full p-3 bg-transparent border-b border-black dark:border-white text-black dark:text-white placeholder-gray-550 dark:placeholder-gray-400 focus:outline-none focus:border-lime-500"
          ></textarea>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="dark:bg-lime-500 text-white  bg-[#3a2719] hover:bg-[#3a271970] font-semibold py-2 px-8 rounded-lg dark:hover:bg-lime-600"
          >
            Send
          </button>
          {!formSubmitted && (
            <p className="placeholder-gray-550 dark:text-gray-400 text-sm ml-16 sm:ml-36">
              Thanks for submitting!
            </p>
          )}
        </div>
      </form>

      {/* Success Message */}
      {successMessageVisible && (
        <p className="mt-4 text-green-500 font-bold">
          Your form has been successfully submitted!
        </p>
      )}
    </div>
  );
};

export default ContactForm;
