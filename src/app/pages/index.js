import Header from "../components/Header/Header"; // Import the Header component
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Products from "../components/products/Products";
import FollowUs from "../components/Follow/Follow";
import About from "../components/About/About";

export default function Home() {
  return (
    <div
      className="transition-colors"
    >
      <Hero />
      {/* <Products /> */}
      <About />
      <FollowUs />
      <Footer />
    </div>
  );
}
