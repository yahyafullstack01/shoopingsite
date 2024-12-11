//Основний компонент для списку товарів.
import ProductCard from "./ProductCard";

export default function Products() {
  const products = [
    { id: 1, name: "Product 1", price: "$85.00", image: "/product1.jpg" },
    { id: 2, name: "Product 2", price: "$20.00", image: "/product2.jpg" },
    { id: 3, name: "Best Seller", price: "$10.00", image: "/product3.jpg" },
  ];

  return (
    <section id="products" className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Top Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
