import {
  BackgroundModal,
  DivImages,
  Form,
  InformacoesVeiculo,
  Modal,
  TipoAnuncio,
  TipoVeiculo,
  ButtonSave,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { IMaskInput } from "react-imask";
import { useContext, useState } from "react";
import { Button } from "reactstrap";
import { ProductContext } from "../../contexts/productContext";

const EditarAnuncio = () => {
  const [tipo, setTipo] = useState("Venda");
  const [isMoreImages, setIsMoreImages] = useState(false);

  const { isModalEditAnuncio } = useContext(ProductContext);

  return (
    <>
      {isModalEditAnuncio && (
        <BackgroundModal>
          <Modal>
            <div className="header-modal">
              <h3>Editar anúncio</h3>
              <AiOutlineClose style={{ cursor: "pointer" }} />
            </div>

            <Form>
              <TipoAnuncio>
                <h3>Tipo de anúncio</h3>

                <div>
                  <label>
                    <input type="radio" value="Venda" name="radio" />
                    <span>Venda</span>
                  </label>

                  <label>
                    <input type="radio" value="Leilão" name="radio" />
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
                        <IMaskInput mask="0000" />
                      </label>
                      <label>
                        <span>Quilometragem</span>
                        <input type="text" placeholder="0" />
                      </label>
                    </div>
                    <label>
                      <span>
                        {tipo === "Venda" ? "Preço" : "Lance inícial"}
                      </span>
                      <IMaskInput mask="R$ 0000000" />
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
                    <input type="radio" value="Carro" name="veiculo" />
                    <span>Carro</span>
                  </label>

                  <label>
                    <input type="radio" value="Moto" name="veiculo" />
                    <span>Moto</span>
                  </label>
                </div>
              </TipoVeiculo>

              <TipoVeiculo>
                <h3>Publicado</h3>

                <div>
                  <label>
                    <input type="radio" value="Sim" name="publicado" />
                    <span>Sim</span>
                  </label>

                  <label>
                    <input type="radio" value="Não" name="publicado" />
                    <span>Não</span>
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

                    <label>
                      <span>5° Imagem da galeria</span>
                      <input type="text" placeholder="https://image.com" />
                    </label>

                    <label>
                      <span>6° Imagem da galeria</span>
                      <input type="text" placeholder="https://image.com" />
                    </label>
                  </>
                )}
              </DivImages>

              <Button
                className="adicionar-input"
                onClick={() => {
                  setIsMoreImages(!isMoreImages);
                }}
              >
                {isMoreImages
                  ? "Remover campos"
                  : "Adicionar campo para imagem da galeria"}
              </Button>

              <div className="buttons">
                <Button className="cancelar">Cancelar</Button>
                <ButtonSave className="criar" type="submit">
                  Salvar alterações
                </ButtonSave>
              </div>
            </Form>
          </Modal>
        </BackgroundModal>
      )}
    </>
  );
};

export default EditarAnuncio;
