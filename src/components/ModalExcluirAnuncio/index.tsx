import { Background, Modal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "reactstrap";
import { useSessionContext } from "../../contexts/sessionContext";
import api from "./../../services/api";
import { toast } from "react-toastify";

const ExcluirAnuncio = () => {
  const {
    setIsModalExcluirAnuncio,
    deleteUser,
    IdExcluirAnuncio,
    setIdExcluirAnuncio,
  } = useSessionContext();

  const deleteAnuncio = async () => {
    try {
      await api.delete(`/products/${IdExcluirAnuncio}`);
      toast.success("Anuncio excluido!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    } catch (err) {
      toast.error("Error ao excluir o anuncio!");
    }
    setIsModalExcluirAnuncio(false);
  };

  return (
    <Background>
      <Modal>
        <div className="header">
          <h4>Excluir anuncio</h4>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIdExcluirAnuncio("");
              setIsModalExcluirAnuncio(false);
            }}
          />
        </div>
        <div className="content">
          <span>Tem certeza que deseja excluir seu anuncio?</span>
          <div>
            <Button
              className="nao"
              onClick={() => {
                setIdExcluirAnuncio("");
                setIsModalExcluirAnuncio(false);
              }}
            >
              Não
            </Button>
            <Button
              className="sim"
              onClick={(e) => {
                e.preventDefault();
                deleteAnuncio();
              }}
            >
              Sim
            </Button>
          </div>
        </div>
      </Modal>
    </Background>
  );
};

export default ExcluirAnuncio;
