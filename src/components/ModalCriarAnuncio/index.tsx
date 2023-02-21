import { BackgroundModal, Form, Modal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";

const CriarAnuncio = () => {
  return (
    <BackgroundModal>
      <Modal>
        <div className="header-modal">
          <h3>Criar anúncio</h3>
          <AiOutlineClose />
        </div>

        <Form>
          <div className="tipo-anuncio">
            <h3>Tipo de anúncio</h3>

            <div>
              <label id="1">
                <input type="radio" id="1" value="Venda" name="radio" defaultChecked/>
                <span>Venda</span>
              </label>

              <label id="2">
                <input type="radio" id="2" value="Leilão" name="radio" />
                <span>Leilão</span>
              </label>
            </div>
          </div>
        </Form>
      </Modal>
    </BackgroundModal>
  );
};

export default CriarAnuncio;
