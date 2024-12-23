
export default function TopProductsInfo() {
  const products = [
    { id: 1, img: "/1.jpg", title: "I'm a product", price: "85,00₴" },
    { id: 2, img: "/2.jpg", title: "I'm a product", price: "20,00₴" },
    { id: 3, img: "/3.jpg", title: "I'm a product", price: "10,00₴" },
    { id: 4, img: "/4.jpg", title: "I'm a product", price: "25,00₴" },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Explore the Collection</h1>
        <p className="text-gray-400 mb-8">
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white text-black rounded shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}
