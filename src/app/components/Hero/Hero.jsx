// components/Hero.js
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative  px-8 py-16">
      <div className="grid grid-cols-3 gap-4 items-center">
        {/* Top Left Image */}
        <div className="relative col-span-1">
          <Image
            src="/hero-top-left.jpg" // Replace with your image path
            alt="Top Left"
            layout="responsive"
            width={300}
            height={300}
            className="rounded-md object-cover"
          />
        </div>

        {/* Title in Center */}
        <div className="col-span-1 text-center">
          <h1 className="text-5xl font-bold tracking-wide">LATORE ATELIER</h1>
        </div>

        {/* Top Right Image */}
        <div className="relative col-span-1">
          <Image
            src="/hero-top-right.jpg" // Replace with your image path
            alt="Top Right"
            layout="responsive"
            width={300}
            height={300}
            className="rounded-md object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {/* Bottom Left Image */}
        <div className="relative">
          <Image
            src="/hero-bottom-left.jpg" // Replace with your image path
            alt="Bottom Left"
            layout="responsive"
            width={400}
            height={400}
            className="rounded-md object-cover"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col justify-center text-center space-y-4">
          <p className="text-lg text-gray-700">Discover your style with us.</p>
          <p className="text-lg text-gray-700">
            Explore the latest trends in fashion.
          </p>
        </div>
      </div>
    </section>
  );
}