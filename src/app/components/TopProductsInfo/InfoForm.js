"use client";

export default function InfoForm({ product, onContactClick }) {
  if (!product) {
    return <p className="text-gray-500">No product selected.</p>;
  }

  return (
    <div className="flex flex-col px-4 md:px-0">
      {/* Product Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2 text-center md:text-left">
        {product.title}
      </h1>
      <p className="text-gray-500 text-xs md:text-sm mb-4 text-center md:text-left">
        SKU: {product.sku}
      </p>
      <p className="text-xl md:text-2xl font-bold text-white mb-4 text-center md:text-left">
        {product.price}₴
      </p>

      {/* Size Selector */}
      <div className="mb-6 md:mb-8">
        <label
          htmlFor="size"
          className="block text-sm font-medium mb-2 text-center md:text-left"
        >
          Size
        </label>
        <select
          id="size"
          className="w-full md:w-1/2 p-2 border border-gray-700 rounded bg-gray-800 text-gray-300"
        >
          <option value="">Select</option>
          <option value="small">S</option>
          <option value="medium">M</option>
          <option value="large">L</option>
          <option value="xlarge">XL</option>
        </select>
      </div>

      {/* Quantity Selector */}
      <div className="mb-6 md:mb-8">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium mb-2 text-center md:text-left"
        >
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          defaultValue="1"
          min="1"
          className="w-full md:w-1/4 p-2 border border-gray-700 rounded bg-gray-800 text-gray-300"
        />
      </div>

      {/* Contact Button */}
      <button
        onClick={() => onContactClick(product)}
        className="w-full md:w-1/2 bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded transition duration-300"
      >
        Contact Us
      </button>

      {/* Product Info */}
      <div className="mt-10">
        <h2 className="text-lg md:text-xl font-semibold text-white mb-4 text-center md:text-left">
          PRODUCT INFO
        </h2>
        <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
          {product.description}
        </p>
      </div>
    </div>
  );
}
