import TopProductsInfo from "../src/app/components/TopProductsInfo/TopProductsInfo";
import Layout from "@/app/components/Layout";
export default function ProductsTop() {
  return (
    <div className="transition-colors">
      <Layout>
        <TopProductsInfo/>
        </Layout>
     </div>
  );
}
