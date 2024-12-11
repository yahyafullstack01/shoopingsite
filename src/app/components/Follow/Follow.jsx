import Image from "next/image";

export default function FollowUs() {
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"];

  return (
    <section id="follow-us" className="bg-black text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Follow Us</h2>
      <div className="flex justify-center space-x-4">
        {images.map((img, index) => (
          <Image key={index} src={img} alt={`Image ${index}`} width={100} height={100} className="rounded" />
        ))}
      </div>
    </section>
  );
}
