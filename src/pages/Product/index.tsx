import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AsideProduct } from "../../components/AsideProduct";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ModaL } from "../../components/Modal";
import EditarComentario from "../../components/ModalEditarComentario";
import ExcluirComentario from "../../components/ModalExcluirComentario";
import { SectionProduct } from "../../components/SectionProduct";
import { CommentsContext } from "../../contexts/commentsContext";
import { useProductContext } from "../../contexts/productContext";
import { ProductPage } from "./style";

const Product = () => {
  const { productId } = useParams();
  const { setIdVehicle, oneVehicle } = useProductContext();
  const {isModalExcluirComentario, openModalEditComments} = useContext(CommentsContext)

  setIdVehicle(productId);

  return (
    <ProductPage>
      {isModalExcluirComentario && <ExcluirComentario />}
      {openModalEditComments && <EditarComentario/>}
      
      <Header />
      <ModaL
        titleModal={"Foto veículo"}
        bodyModal={<img width={400} height={300} src={oneVehicle.image}></img>}
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

