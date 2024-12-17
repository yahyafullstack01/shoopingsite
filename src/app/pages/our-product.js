"use client";
import { useParams } from "next/navigation";

export default function OurProductDetails() {
  const { id } = useParams();

  const products = [
    { id: "1", name: "Our Product 1", description: "Description for Our Product 1" },
    { id: "2", name: "Our Product 2", description: "Description for Our Product 2" },
    { id: "3", name: "Our Product 3", description: "Description for Our Product 3" },
    { id: "4", name: "Our Product 4", description: "Description for Our Product 4" },
  ];

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg">{product.description}</p>
    </div>
  );
}
