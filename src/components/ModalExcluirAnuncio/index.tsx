import { useContext } from "react";
import { Button } from "reactstrap";
import { ProductContext } from "../../contexts/productContext";
import { ModaL } from "../Modal";
import { BackgroundModalExcluir, DivContentExcluir, Buttons } from "./styles";


const ExcluirAnuncio = () => {
  const { toggle } = useContext(ProductContext);

  return (
    <BackgroundModalExcluir>
      <div className="modal">
        <ModaL
          titleModal="Excluir Anúncio"
          bodyModal={
            <DivContentExcluir>
              <span>Tem certeza que deseja remover este anúncio?</span>
              <p>
                Essa ação não pode ser desfeita. Isso excluirá permanentemente
                sua conta e removerá seus dados de nossos servidores.
              </p>
            </DivContentExcluir>
          }
          footerModal={
            <Buttons>
              <Button className="cancelar" onClick={() => toggle()}>
                Cancelar
              </Button>
              <Button className="excluir-anuncio">Sim, excluir anúncio</Button>
            </Buttons>
          }
        />
      </div>
    </BackgroundModalExcluir>
  );
};

export default ExcluirAnuncio;
