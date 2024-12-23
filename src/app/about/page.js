import FollowUs from "../components/Follow/Follow";
import About from "../components/About/About";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <div className="transition-colors">
      <Layout>

        <About />
        {/* <FollowUs /> */}
      </Layout>

    </div>
  );
}
