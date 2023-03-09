import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { AsideProduct } from "../../components/AsideProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Loading } from "../../components/Loading";
import { ModaL } from "../../components/Modal";
import EditarAddress from "../../components/ModalEditarAddress";
import EditarComentario from "../../components/ModalEditarComentario";
import EditarPerfil from "../../components/ModalEditarPerfil";
import ExcluirComentario from "../../components/ModalExcluirComentario";
import ExcluirUser from "../../components/ModalExcluirUser";
import { ModalLoading } from "../../components/ModalLoading";
import { SectionProduct } from "../../components/SectionProduct";
import { CommentsContext } from "../../contexts/commentsContext";
import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { ProductPage } from "./style";

const Product = () => {
  const { productId } = useParams();
  const { setIdVehicle, idPhoto } = useProductContext();
  const { isModalExcluirComentario, openModalEditComments } =
    useContext(CommentsContext);
  const {
    isModalEditPerfil,
    isModalEditAddress,
    isModalExcluirPerfil,
    isLoading,
  } = useSessionContext();

  setIdVehicle(productId);

  return (
    <ProductPage>
      <HelmetProvider>
        <Helmet title="Product" />
      </HelmetProvider>

      {isLoading ? (
        <ModalLoading>
          <Loading />
        </ModalLoading>
      ) : null}

      {isModalExcluirComentario && <ExcluirComentario />}
      {openModalEditComments && <EditarComentario />}
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
