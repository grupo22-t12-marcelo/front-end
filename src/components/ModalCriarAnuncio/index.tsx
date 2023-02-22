import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Button } from "reactstrap";
import {
  BackgroundModal,
  DivImages,
  Form,
  InformacoesVeiculo,
  Modal,
  TipoAnuncio,
  TipoVeiculo,
} from "./styles";

const CriarAnuncio = () => {
  const [isMoreImages, setIsMoreImages] = useState(false);
  const [text, setText] = useState("Venda");

  const valueTipo = () => {
    console.log(text);
  };

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
              <label>
                <input
                  type="radio"
                  value="Venda"
                  name="radio"
                  defaultChecked
                  onChange={(e) => setText(e.target.value)}
                />
                <span>Venda</span>
              </label>

              <label>
                <input
                  type="radio"
                  value="Leilão"
                  name="radio"
                  onChange={(e) => setText(e.target.value)}
                />
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
                <div>
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
                  <span>{text === "Venda" ? "Preço" : "Lance inícial"}</span>
                  <input type="text" placeholder="Digitar preço" />
                </label>
              </div>

              <label>
                <span>Descrição</span>
                <textarea placeholder="Digitar descrição"></textarea>
              </label>
            </div>
          </InformacoesVeiculo>

          <TipoVeiculo>
            <h3>Tipo de veículo</h3>

            <div>
              <label>
                <input
                  type="radio"
                  value="Carro"
                  name="veiculo"
                  defaultChecked
                />
                <span>Carro</span>
              </label>

              <label>
                <input type="radio" value="Moto" name="veiculo" />
                <span>Moto</span>
              </label>
            </div>
          </TipoVeiculo>

          <DivImages>
            <label>
              <span>Imagem capa</span>
              <input type="text" placeholder="https://image.com" />
            </label>

            <label>
              <span>1° Imagem da galeria</span>
              <input type="text" placeholder="https://image.com" />
            </label>

            <label>
              <span>2° Imagem da galeria</span>
              <input type="text" placeholder="https://image.com" />
            </label>

            {isMoreImages && (
              <>
                <label>
                  <span>3° Imagem da galeria</span>
                  <input type="text" placeholder="https://image.com" />
                </label>

                <label>
                  <span>4° Imagem da galeria</span>
                  <input type="text" placeholder="https://image.com" />
                </label>
              </>
            )}
          </DivImages>

          <Button
            className="adicionar-input"
            onClick={(e) => {
              e.preventDefault();
              setIsMoreImages(true);
            }}
          >
            Adicionar campo para imagem da galeria
          </Button>

          <div className="buttons">
            <Button className="cancelar">Cancelar</Button>
            <Button className="criar">Criar anúncio</Button>
          </div>
        </Form>
      </Modal>
    </BackgroundModal>
  );
};

export default CriarAnuncio;
