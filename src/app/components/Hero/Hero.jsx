import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Latore Atelier</h1>
        <p className="text-lg mt-4">Discover your style with us. Explore the latest trends in fashion.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 px-8">
        <Image src="/hero1.jpg" alt="Fashion 1" width={400} height={400} className="rounded" />
        <Image src="/hero2.jpg" alt="Fashion 2" width={400} height={400} className="rounded" />
      </div>
    </section>
  );
}
