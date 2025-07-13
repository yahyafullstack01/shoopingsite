import Hero from "./components/Hero/Hero.jsx";
import TopProducts from "./components/TopProducts/TopProducts.jsx";
import FollowUs from "./components/Follow/Follow.jsx";
import About from "./components/About/About.jsx";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers.jsx";
import CategoryCatalog from "./components/CategoryCatalog/CategoryCatalog.jsx"
import NewArrivals from "./components/NewArrivals/NewArrivals.jsx"
export default function Home() {
  return (
    <div className="transition-colors">
      <Hero />
      <CategoryCatalog  />
<NewArrivals  />
      <TopProducts />
      <SpecialOffers />
     
      <About />
      <FollowUs />

     </div>
  );
}
