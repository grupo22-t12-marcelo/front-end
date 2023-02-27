import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Toast, ToastHeader } from "reactstrap";
import { Background, Body, ContainerToast, Header } from "./styles";
import { ProductContext } from "../../contexts/productContext";
const ToastSucessoAnuncio = () => {
  const { isModalSucess, closeSucess } = useContext(ProductContext);

  return (
    <>
      {isModalSucess && (
        <Background>
          <ContainerToast isOpen={isModalSucess}>
            <Header>
              <div className="content-header">
                <h5>Sucesso!</h5>
                <AiOutlineClose onClick={() => closeSucess()} />
              </div>
            </Header>
            <Body>
              <div className="content-body">
                <h2>Seu anúncio foi criado com sucesso!</h2>
                <span>
                  Agora você poderá ver seus negócios crescendo em grande escala
                </span>
              </div>
            </Body>
          </ContainerToast>
        </Background>
      )}
    </>
  );
};

export default ToastSucessoAnuncio;
