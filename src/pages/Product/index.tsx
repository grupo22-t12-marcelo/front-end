import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AsideProduct } from "../../components/AsideProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ModaL } from "../../components/Modal";
import EditarAddress from "../../components/ModalEditarAddress";
import EditarComentario from "../../components/ModalEditarComentario";
import EditarPerfil from "../../components/ModalEditarPerfil";
import ExcluirComentario from "../../components/ModalExcluirComentario";
import ExcluirUser from "../../components/ModalExcluirUser";
import { SectionProduct } from "../../components/SectionProduct";
import { CommentsContext } from "../../contexts/commentsContext";
import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { ProductPage } from "./style";

const Product = () => {
  const { productId } = useParams();
  const { setIdVehicle, oneVehicle, idPhoto } = useProductContext();
  const {isModalExcluirComentario, openModalEditComments} = useContext(CommentsContext)
  const { isModalEditPerfil, isModalEditAddress, isModalExcluirPerfil } =
    useSessionContext();

  setIdVehicle(productId);

  return (
    <ProductPage>
      {isModalExcluirComentario && <ExcluirComentario />}
      {openModalEditComments && <EditarComentario/>}
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

