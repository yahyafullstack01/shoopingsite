import Image from "next/image";

export default function About() {
  return (
    <section className=" bg-[#F5E7DA] py-16 px-8">
             <h2 className="text-4xl font-bold mb-10 text-left md:text-left">About</h2>
      <div className="container mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
       
        <div className="">
          <div className="relative mb-8">
            <Image
              src="/2.jpg"// Замініть на шлях до великого зображення
              alt="Main Image"
              width={300}
              height={400}
              className="rounded-lg object-cover shadow-2xl"
            />
          </div>

          <div className="relative mt-4 flex flex-col items-center ">
            <Image
              src="/8.jpg" // Замініть на шлях до маленького зображення
              alt="Secondary Image"
              width={150}
              height={200}
              className="rounded-lg object-cover shadow-2xl"
            />
          </div>
        </div>
        <div className=" text-center md:text-left mt-[-150px]">
   
          <p className="text-lg mb-6">
            <strong>Our Story</strong> <br />
            Latore Atelier is your go-to online destination for premium fashion.
            We offer a curated selection of high-quality clothing and
            accessories, designed to elevate your wardrobe. Our mission is to
            provide customers with sophisticated and stylish pieces that
            reflect their unique personality and taste.
          </p>
          <button className="bg-[#4A3222] text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
  Learn More
</button>
        </div>
      </div>
    </section>
  );
}
