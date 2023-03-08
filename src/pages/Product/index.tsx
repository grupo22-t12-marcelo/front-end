import { ProductPage } from "./style";
import Header from "../../components/Header";
import { ModaL } from "../../components/Modal";
import { SectionProduct } from "../../components/SectionProduct";
import { AsideProduct } from "../../components/AsideProduct";
import Footer from "../../components/Footer";
import { useProductContext } from "../../contexts/productContext";
import { useParams } from "react-router-dom";
import { useSessionContext } from "../../contexts/sessionContext";
import EditarPerfil from "../../components/ModalEditarPerfil";
import EditarAddress from "../../components/ModalEditarAddress";
import ExcluirUser from "../../components/ModalExcluirUser";

const Product = () => {
  const { productId } = useParams();
  const { setIdVehicle, idPhoto } = useProductContext();
  const { isModalEditPerfil, isModalEditAddress, isModalExcluirPerfil } =
    useSessionContext();

  setIdVehicle(productId);

  return (
    <ProductPage>
      {isModalEditPerfil && <EditarPerfil />}
      {isModalEditAddress && <EditarAddress />}
      {isModalExcluirPerfil && <ExcluirUser />}
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
