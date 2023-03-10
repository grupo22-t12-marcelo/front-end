import { Background, Modal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "reactstrap";
import { useSessionContext } from "../../contexts/sessionContext";

const ExcluirUser = () => {
  const { setIsModalExcluirPerfil, deleteUser } = useSessionContext();

  return (
    <Background>
      <Modal>
        <div className="header">
          <h4>Excluir perfil</h4>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalExcluirPerfil(false)}
          />
        </div>
        <div className="content">
          <span>Tem certeza que deseja excluir seu perfil?</span>
          <div>
            <Button
              className="nao"
              onClick={() => setIsModalExcluirPerfil(false)}
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

export default ExcluirUser;
