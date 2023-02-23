import { AsideProduct } from "../../components/AsideProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
