import { Background, Body, Form } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { IMaskInput } from "react-imask";
import { Button } from "reactstrap";
import { useContext } from 'react';
import { ProductContext } from './../../contexts/productContext';

const EditarPerfil = () => {

  const { setIsModalEditPerfil } = useContext(ProductContext)


  return (
    <Background>
      <Body>
        <div className="header">
          <h4>Editar perfil</h4>
          <AiOutlineClose style={{cursor: 'pointer'}} onClick={() => setIsModalEditPerfil(false)}/>
        </div>

        <div className="content">
          <h5>Informações pessoais</h5>
          <Form>
            <label>
              <span>Nome</span>
              <input type="text"/>
            </label>

            <label>
              <span>Email</span>
              <input type="text" />
            </label>

            <label>
              <span>CPF</span>
              <IMaskInput mask="000.000.000-00" />
            </label>

            <label>
              <span>Celular</span>
              <IMaskInput mask="(00) 00000-0000" />

            </label>

            <label>
              <span>Data de nascimento</span>
              <IMaskInput mask="00/00/0000" />
            </label>

            <label>
              <span>Descrição</span>
              <textarea name="descricao"></textarea>
            </label>

            <div>
              <Button className="cancelar">Cancelar</Button>
              <Button className="salvar">Salvar alterações</Button>
            </div>
          </Form>
        </div>
      </Body>
    </Background>
  );
};

export default EditarPerfil;
