import { ProductPage } from "./style";
import Header from "../../components/Header";
import { ModaL } from "../../components/Modal";
import { SectionProduct } from "../../components/SectionProduct";
import { AsideProduct } from "../../components/AsideProduct";
import Footer from "../../components/Footer";
import { useProductContext } from "../../contexts/productContext";

const Product = () => {
  const { photos, idPhoto } = useProductContext();

  return (
    <ProductPage>
      <Header />
      <ModaL
        titleModal={"Foto veículo"}
        bodyModal={<img src={photos[Number(idPhoto)]}></img>}
      />
      <main>
        <SectionProduct />
        <AsideProduct />
      </main>
      <Footer />
    </ProductPage>
  );
};

export { Product };
