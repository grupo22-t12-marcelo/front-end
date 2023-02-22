import {
  BackgroundModal,
  Form,
  InformacoesVeiculo,
  Modal,
  TipoAnuncio,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";

const CriarAnuncio = () => {
  return (
    <BackgroundModal>
      <Modal>
        <div className="header-modal">
          <h3>Criar anúncio</h3>
          <AiOutlineClose />
        </div>

        <Form>
          <TipoAnuncio>
            <h3>Tipo de anúncio</h3>

            <div>
              <label id="1">
                <input
                  type="radio"
                  id="1"
                  value="Venda"
                  name="radio"
                  defaultChecked
                />
                <span>Venda</span>
              </label>

              <label id="2">
                <input type="radio" id="2" value="Leilão" name="radio" />
                <span>Leilão</span>
              </label>
            </div>
          </TipoAnuncio>

          <InformacoesVeiculo>
            <h3>Informações de veículo</h3>

            <div className="div-informacoes">
              <label>
                <span>Título</span>
                <input type="text" placeholder="Digitar título" />
              </label>

              <div className="div-dados-veiculo">
                <label>
                  <span>Ano</span>
                  <input type="text" placeholder="2018" />
                </label>
                <label>
                  <span>Quilometragem</span>
                  <input type="text" placeholder="0" />
                </label>
              </div>

              <label>
                <span>Preço</span>
                <input type="text" placeholder="Digitar título" />
              </label>

              <label>
                <span>Descrição</span>
                <textarea placeholder="Digitar descrição"></textarea>
              </label>
            </div>
          </InformacoesVeiculo>
        </Form>
      </Modal>
    </BackgroundModal>
  );
};

export default CriarAnuncio;
