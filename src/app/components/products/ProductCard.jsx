// Компонент для відображення однієї картки товару.
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded shadow p-4 text-center">
      <Image src={product.image} alt={product.name} width={200} height={200} className="rounded" />
      <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-700">{product.price}</p>
    </div>
  );
}
