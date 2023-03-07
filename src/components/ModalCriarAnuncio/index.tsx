import { AiOutlineClose } from "react-icons/ai";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { useForm } from "react-hook-form";
import { IAnuncio } from "../../interfaces";
import { ProductContext } from "../../contexts/productContext";
import { schemaAnuncio } from "../../validators/schemas";

const CriarAnuncio = () => {
  const [isMoreImages, setIsMoreImages] = useState(false);
  const [tipo, setTipo] = useState("");

  const { setIsModalAnuncio, isModalAnuncio, createProduct } =
    useContext(ProductContext);

  const { register, handleSubmit, unregister } = useForm<IAnuncio>({
    resolver: yupResolver(schemaAnuncio),
  });

  const cadastro = (data: IAnuncio) => {
    createProduct(data);
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
                        unregister("type_announcement", {});
                        register("type_announcement", { value: "Venda" });
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
                        unregister("type_announcement");
                        register("type_announcement", { value: "Leilão" });
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
                      {...register("title")}
                    />
                  </label>

                  <div className="div-dados-veiculo">
                    <div>
                      <label>
                        <span>Ano</span>
                        <input {...register("year")} type="number" />
                      </label>
                      <label>
                        <span>Quilometragem</span>
                        <input
                          type="number"
                          placeholder="0"
                          {...register("kilometers")}
                        />
                      </label>
                    </div>
                    <label>
                      <span>
                        {tipo === "Venda" ? "Preço" : "Lance inícial"}
                      </span>
                      <input {...register("price")} type="number" />
                    </label>
                  </div>

                  <label>
                    <span>Descrição</span>
                    <textarea
                      placeholder="Digitar descrição"
                      {...register("description")}
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
                        unregister("type_vehicle");
                        register("type_vehicle", { value: "Carro" });
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
                        unregister("type_vehicle");
                        register("type_vehicle", { value: "Moto" });
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
                    {...register("image")}
                  />
                </label>

                <label>
                  <span>1° Imagem da galeria</span>
                  <input
                    type="text"
                    placeholder="https://image.com"
                    {...register("image1")}
                  />
                </label>

                <label>
                  <span>2° Imagem da galeria</span>
                  <input
                    type="text"
                    placeholder="https://image.com"
                    {...register("image2")}
                  />
                </label>

                {isMoreImages && (
                  <>
                    <label>
                      <span>3° Imagem da galeria</span>
                      <input
                        type="text"
                        placeholder="https://image.com"
                        {...register("image3")}
                      />
                    </label>

                    <label>
                      <span>4° Imagem da galeria</span>
                      <input
                        type="text"
                        placeholder="https://image.com"
                        {...register("image4")}
                      />
                    </label>

                    <label>
                      <span>5° Imagem da galeria</span>
                      <input
                        type="text"
                        placeholder="https://image.com"
                        {...register("image5")}
                      />
                    </label>

                    <label>
                      <span>6° Imagem da galeria</span>
                      <input
                        type="text"
                        placeholder="https://image.com"
                        {...register("image6")}
                      />
                    </label>
                  </>
                )}
              </DivImages>

              <Button
                className="adicionar-input"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMoreImages(!isMoreImages);
                }}
              >
                {isMoreImages
                  ? "Remover campos"
                  : "Adicionar campo para imagem da galeria"}
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
