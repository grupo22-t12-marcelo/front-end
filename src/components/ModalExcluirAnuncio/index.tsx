import { Background, Modal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "reactstrap";
import { useSessionContext } from "../../contexts/sessionContext";

const ExcluirAnuncio = () => {
  const { setIsModalExcluirAnuncio, deleteUser } = useSessionContext();

  return (
    <Background>
      <Modal>
        <div className="header">
          <h4>Excluir anuncio</h4>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalExcluirAnuncio(false)}
          />
        </div>
        <div className="content">
          <span>Tem certeza que deseja excluir seu anuncio?</span>
          <div>
            <Button
              className="nao"
              onClick={() => setIsModalExcluirAnuncio(false)}
            >
              Não
            </Button>
            <Button className="sim" onClick={deleteUser}>
              Sim
            </Button>
          </div>
        </div>
      </Modal>
    </Background>
  );
};

export default ExcluirAnuncio;
