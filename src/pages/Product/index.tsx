import { ProductPage } from "./style";
import Header from "../../components/Header";
import { ModaL } from "../../components/Modal";
import { SectionProduct } from "../../components/SectionProduct";
import { AsideProduct } from "../../components/AsideProduct";
import Footer from "../../components/Footer";
import { useProductContext } from "../../contexts/productContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const { setIdVehicle, idPhoto } = useProductContext();

  setIdVehicle(productId);

  return (
    <ProductPage>
      <Header />
      <ModaL
        titleModal={"Foto veículo"}
        bodyModal={<img width={400} height={300} src={idPhoto}></img>}
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
