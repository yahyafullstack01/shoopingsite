"use client";

import dynamic from "next/dynamic";
import Hero from "./components/Hero/Hero.jsx";

const CategoryCatalog = dynamic(
  () => import("./components/CategoryCatalog/CategoryCatalog.jsx"),
  { ssr: true }
);
const NewArrivals = dynamic(
  () => import("./components/NewArrivals/NewArrivals.jsx"),
  { ssr: true }
);
const TopProducts = dynamic(
  () => import("./components/TopProducts/TopProducts.jsx"),
  { ssr: true }
);
const SpecialOffers = dynamic(
  () => import("./components/SpecialOffers/SpecialOffers.jsx"),
  { ssr: true }
);
const About = dynamic(() => import("./components/About/About.jsx"), {
  ssr: true,
});
const FollowUs = dynamic(() => import("./components/Follow/Follow.jsx"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="transition-colors">
      <Hero />
      <CategoryCatalog />
      <NewArrivals />
      <TopProducts />
      <SpecialOffers />
      <About />
      <FollowUs />
    </div>
  );
}
