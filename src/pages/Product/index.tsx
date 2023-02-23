import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AsideProduct } from "../../components/AsideProduct";
import { SectionProduct } from "../../components/SectionProduct";
import { ProductPage } from "./style";

const Product = () => {
  return (
    <ProductPage>
      <Header />
      <main>
        <SectionProduct />
        <AsideProduct />
      </main>
      <Footer />
    </ProductPage>
  );
};

export { Product };
