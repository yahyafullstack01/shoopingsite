import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";
import TopProducts from "../components/TopProducts/TopProducts.jsx";
//import Products from "../components/products/Products.jsx";
import FollowUs from "../components/Follow/Follow.jsx";
import About from "../components/About/About.jsx";
import SpecialOffers from "../components/SpecialOffers/SpecialOffers.jsx";

export default function Home() {
  return (
    <div
      className="transition-colors"
    >
      <Hero />
      <TopProducts/>
       {/* <Products /> */}
<SpecialOffers/>
      <About />
      <FollowUs />
      <Footer />
    </div>
  );
}
