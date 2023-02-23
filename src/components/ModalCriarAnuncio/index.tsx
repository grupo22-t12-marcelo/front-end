import { AiOutlineClose } from "react-icons/ai";
import { useState, useContext, SetStateAction } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "reactstrap";
import { IMaskInput } from "react-imask";
import {
  BackgroundModal,
  DivImages,
  Form,
  InformacoesVeiculo,
  Modal,
  TipoAnuncio,
  TipoVeiculo,
} from "./styles";
import { useForm } from "react-hook-form";
import { IAnuncio } from "../../interfaces";
import { ProductContext } from "../../contexts/productContext";
import { schemaAnuncio } from "../../validators/schemas";


const CriarAnuncio = () => {
  const [isMoreImages, setIsMoreImages] = useState(false);
  const [tipo, setTipo] = useState("Venda");
  const [ano, setAno] = useState('')
  const [preco, setPreco] = useState<String>('')

  const { setIsModalAnuncio, isModalAnuncio } = useContext(ProductContext);

  const { register, handleSubmit, unregister } = useForm<IAnuncio>({
    resolver: yupResolver(schemaAnuncio),
  });

  const cadastro = (data: IAnuncio) => {
    const newObj = {
      ...data,
      ano,
      preco
    }
    console.log(newObj);
  };

  return (
    <>
      {isModalAnuncio && (
        <BackgroundModal>
          <Modal>
            <div className="header-modal">
              <h3>Criar anúncio</h3>
              <AiOutlineClose
                onClick={() => setIsModalAnuncio(false)}
                style={{ cursor: "pointer" }}
              />
            </div>

            <Form onSubmit={handleSubmit(cadastro)}>
              <TipoAnuncio>
                <h3>Tipo de anúncio</h3>

                <div>
                  <label>
                    <input
                      type="radio"
                      value="Venda"
                      name="radio"
                      onClick={(e) => {
                        setTipo("Venda");
                        unregister("tipo", {});
                        register("tipo", { value: "Venda" });
                      }}
                    />
                    <span>Venda</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="Leilão"
                      name="radio"
                      onClick={(e) => {
                        setTipo("Leilão");
                        unregister("tipo");
                        register("tipo", { value: "Leilão" });
                      }}
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
                    <input
                      type="text"
                      placeholder="Digitar título"
                      {...register("titulo")}
                    />
                  </label>

                  <div className="div-dados-veiculo">
                    <div>
                      <label>
                        <span>Ano</span>
                        <IMaskInput
                          mask="0000"
                          onAccept={(value: any) => {
                            setAno(value)
                          }}
                        />
                      </label>
                      <label>
                        <span>Quilometragem</span>
                        <input
                          type="text"
                          placeholder="0"
                          {...register("quilometragem")}
                        />
                      </label>
                    </div>
                    <label>
                      <span>
                        {tipo === "Venda" ? "Preço" : "Lance inícial"}
                      </span>
                      <IMaskInput
                          mask="R$ 0000000"
                          onAccept={(value: any) => {
                            setPreco(value)
                          }}
                        />
                    </label>
                  </div>

                  <label>
                    <span>Descrição</span>
                    <textarea
                      placeholder="Digitar descrição"
                      {...register("descricao")}
                    ></textarea>
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
                      onClick={(e) => {
                        unregister("tipoDoVeiculo");
                        register("tipoDoVeiculo", { value: "Carro" });
                      }}
                    />
                    <span>Carro</span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="Moto"
                      name="veiculo"
                      onClick={(e) => {
                        unregister("tipoDoVeiculo");
                        register("tipoDoVeiculo", { value: "Moto" });
                      }}
                    />
                    <span>Moto</span>
                  </label>
                </div>
              </TipoVeiculo>

              <DivImages>
                <label>
                  <span>Imagem capa</span>
                  <input
                    type="text"
                    placeholder="https://image.com"
                    {...register("imagemCapa")}
                  />
                </label>

                <label>
                  <span>1° Imagem da galeria</span>
                  <input
                    type="text"
                    placeholder="https://image.com"
                    {...register("imagem1")}
                  />
                </label>

                <label>
                  <span>2° Imagem da galeria</span>
                  <input
                    type="text"
                    placeholder="https://image.com"
                    {...register("imagem2")}
                  />
                </label>

                {isMoreImages && (
                  <>
                    <label>
                      <span>3° Imagem da galeria</span>
                      <input
                        type="text"
                        placeholder="https://image.com"
                        {...register("imagem3")}
                      />
                    </label>

                    <label>
                      <span>4° Imagem da galeria</span>
                      <input
                        type="text"
                        placeholder="https://image.com"
                        {...register("imagem4")}
                      />
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
                <Button
                  className="cancelar"
                  onClick={() => setIsModalAnuncio(false)}
                >
                  Cancelar
                </Button>
                <Button className="criar" type="submit">
                  Criar anúncio
                </Button>
              </div>
            </Form>
          </Modal>
        </BackgroundModal>
      )}
    </>
  );
};

export default CriarAnuncio;
