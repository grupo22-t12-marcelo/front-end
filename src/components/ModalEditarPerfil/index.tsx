import { Background, Body, Form } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { IMaskInput } from "react-imask";
import { Button } from "reactstrap";
import { useContext } from "react";
import {
  ProductContext,
  useProductContext,
} from "./../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";

const EditarPerfil = () => {
  const { setIsModalEditPerfil, setIsModalExcluirPerfil } = useContext(ProductContext);
  const { userData, setUserData } = useSessionContext();

  return (
    <Background>
      <Body>
        <div className="header">
          <h4>Editar perfil</h4>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalEditPerfil(false)}
          />
        </div>

        <div className="content">
          <h5>Informações pessoais</h5>
          <Form>
            <label>
              <span>Nome</span>
              <input type="text" placeholder={userData.name} />
            </label>

            <label>
              <span>Email</span>
              <input type="text" placeholder={userData.email} />
            </label>

            <label>
              <span>CPF</span>
              <IMaskInput
                mask="000.000.000-00"
                placeholderChar="0"
                autofix={true}
                lazy={false}
              />
            </label>

            <label>
              <span>Celular</span>
              <IMaskInput
                mask="(00) 00000-0000"
                placeholderChar="0"
                autofix={true}
                lazy={false}
              />
            </label>

            <label>
              <span>Data de nascimento</span>
              <IMaskInput
                mask="00/00/0000"
                placeholderChar="0"
                lazy={false}
                autofix={true}
              />
            </label>

            <label>
              <span>Descrição</span>
              <textarea
                name="descricao"
                placeholder={userData.description}
              ></textarea>
            </label>

            <div>
              <Button className="excluir" onClick={() => {
                setIsModalExcluirPerfil(true)
                setIsModalEditPerfil(false)
              }}>Excluir perfil</Button>
              <Button className="salvar">Salvar alterações</Button>
            </div>
          </Form>
        </div>
      </Body>
    </Background>
  );
};

export default EditarPerfil;
