import { AsideProduct } from "../../components/AsideProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { SectionProduct } from "../../components/SectionProduct";
import { ProductPage } from "./style";
import { ModaL } from "../../components/Modal";
import { useProductContext } from "../../contexts/productContext";

const Product = () => {
  const { photos, idPhoto } = useProductContext();

  return (
    <ProductPage>
      <Header />
      <ModaL titleModal={"Foto veículo"} bodyModal={photos[Number(idPhoto)]} />
      <main>
        <SectionProduct />
        <AsideProduct />
      </main>
      <Footer />
    </ProductPage>
  );
};

export { Product };
