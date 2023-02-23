import { useContext } from "react";
import { Button } from "reactstrap";
import { ProductContext } from "../../contexts/productContext";
import { ModaL } from "../Modal";
import { BackgroundModalExcluir } from "./styles";

const styledModal = {
  "margin-top": "1000px",
};

const ExcluirAnuncio = () => {
  const { toggle } = useContext(ProductContext);

  return (
    <BackgroundModalExcluir>
      <div className="modal">
        <ModaL
          styleModal={styledModal}
          titleModal="Excluir Anúncio"
          bodyModal={
            <div className="content-modal-excluir">
              <span>Tem certeza que deseja remover este anúncio?</span>
              <p>
                Essa ação não pode ser desfeita. Isso excluirá permanentemente
                sua conta e removerá seus dados de nossos servidores.
              </p>
            </div>
          }
          footerModal={
            <div className="buttons">
              <Button className="cancelar" onClick={() => toggle()}>
                Cancelar
              </Button>
              <Button className="excluir-anuncio">Sim, excluir anúncio</Button>
            </div>
          }
        />
      </div>
    </BackgroundModalExcluir>
  );
};

export default ExcluirAnuncio;
