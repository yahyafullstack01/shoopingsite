import TopProductsInfo from "../components/TopProductsInfo/TopProductsInfo";
import Layout from "../components/Layout";

export default function TopProductspage() {
    return (
        <div className="transition-colors">
            <Layout>
                <TopProductsInfo />
            </Layout>
        </div>
    );
}
