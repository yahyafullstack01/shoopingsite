import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Products from "../components/products/Products.jsx";
import FollowUs from "../components/Follow/Follow.jsx";
import About from "../components/About/About.jsx";
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Hero />
      {/* <Products />
      <About />
      <FollowUs />
      <Footer /> */}
   
    </div>
  );
}