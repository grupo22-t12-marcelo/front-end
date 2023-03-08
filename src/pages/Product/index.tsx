import { ProductPage } from "./style";
import Header from "../../components/Header";
import { ModaL } from "../../components/Modal";
import { SectionProduct } from "../../components/SectionProduct";
import { AsideProduct } from "../../components/AsideProduct";
import Footer from "../../components/Footer";
import { useProductContext } from "../../contexts/productContext";
import { useParams } from "react-router-dom";
import { CommentsContext } from "../../contexts/commentsContext";
import ExcluirComentario from "../../components/ModalExcluirComentario";
import { useContext } from "react";

const Product = () => {
  const { productId } = useParams();
  const { setIdVehicle, oneVehicle } = useProductContext();
  const {isModalExcluirComentario} = useContext(CommentsContext)

  setIdVehicle(productId);

  return (
    <ProductPage>
      {isModalExcluirComentario && <ExcluirComentario />}
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
