import { Background, Body, Form } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "reactstrap";
import { useContext } from 'react';
import { ProductContext } from './../../contexts/productContext';

const EditarAddress = () => {

  const { setIsModalEditAddress  } = useContext(ProductContext)


  return (
    <Background>
      <Body>
        <div className="header">
          <h4>Editar endereço</h4>
          <AiOutlineClose onClick={() => setIsModalEditAddress(false)}/>
        </div>

        <div className="content">
          <h5>Informações de endereço</h5>
          <Form>
            <label>
              <span>CEP</span>
              <input type="number" />
            </label>

            <div className="div-content">
              <label>
                <span>Estado</span>
                <input type="text" />
              </label>

              <label>
                <span>Cidade</span>
                <input type="text" />
              </label>
            </div>

            <label>
              <span>Rua</span>
              <input type="text"/>
            </label>

            <div className="div-content">
              <label>
                <span>Numero</span>
                <input type="number" />
              </label>

              <label>
                <span>Complemento</span>
                <input type="text" />
              </label>
            </div>

            <div className="buttons">
              <Button className="cancelar">Cancelar</Button>
              <Button className="salvar">Salvar alterações</Button>
            </div>
          </Form>
        </div>
      </Body>
    </Background>
  );
};

export default EditarAddress;
