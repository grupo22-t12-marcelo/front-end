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
import { useIMask } from "react-imask";
import { useState } from "react";
import { Button } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { IProductUpdate } from "../../interfaces";
import { schemaImagesUpdate } from "../../validators/schemas";
import { useSessionContext } from "../../contexts/sessionContext";

const EditarAnuncio = () => {
  const { setIsModalEditAnuncio, updateProduct } = useProductContext();
  const [tipo, setTipo] = useState("Venda");
  const [isMoreImages, setIsMoreImages] = useState(false);

  const { setIsModalExcluirAnuncio} = useSessionContext()

  const {
    register,
    handleSubmit,
    unregister,
    control,
    formState: { errors },
  } = useForm<IProductUpdate>({
    resolver: yupResolver(schemaImagesUpdate),
  });

  const yearCar = useIMask({
    mask: "0000",
  });

  const priceCar = useIMask({
    mask: "R$ 000.000,00",
  });

  return (
    <BackgroundModal>
      <Modal>
        <div className="header-modal">
          <h3>Editar anúncio</h3>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalEditAnuncio(false)}
          />
        </div>

        <Form onSubmit={handleSubmit(updateProduct)}>
          <TipoAnuncio>
            <h3>Tipo de anúncio</h3>

            <div>
              <label>
                <input
                  type="radio"
                  value="Venda"
                  name="radio"
                  onClick={(e) => {
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
                    unregister("type_announcement", {});
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
                    <Controller
                      render={(params) => (
                        <input
                          name={params.field.name}
                          onBlur={params.field.onBlur}
                          defaultValue={params.field.value}
                          ref={yearCar.ref}
                          onChange={() =>
                            params.field.onChange({
                              target: { value: yearCar.unmaskedValue },
                            })
                          }
                          placeholder=""
                        />
                      )}
                      name="year"
                      control={control}
                    />
                  </label>
                  <label>
                    <span>Quilometragem</span>
                    <input
                      type="text"
                      placeholder="0"
                      {...register("kilometers")}
                    />
                  </label>
                </div>
                <label>
                  <span>{tipo === "Venda" ? "Preço" : "Lance inicial"}</span>
                  <Controller
                    render={(params) => (
                      <input
                        name={params.field.name}
                        onBlur={params.field.onBlur}
                        defaultValue={params.field.value}
                        ref={priceCar.ref}
                        onChange={() =>
                          params.field.onChange({
                            target: { value: priceCar.unmaskedValue },
                          })
                        }
                        placeholder=""
                      />
                    )}
                    name="price"
                    control={control}
                  />
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
                    unregister("type_vehicle", {});
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
                    unregister("type_vehicle", {});
                    register("type_vehicle", { value: "Moto" });
                  }}
                />
                <span>Moto</span>
              </label>
            </div>
          </TipoVeiculo>

          <TipoVeiculo>
            <h3>Publicado</h3>

            <div>
              <label>
                <input
                  type="radio"
                  value="Sim"
                  name="publicado"
                  onClick={(e) => {
                    unregister("is_published", {});
                    register("is_published", { value: "true" });
                  }}
                />
                <span>Sim</span>
              </label>

              <label>
                <input
                  type="radio"
                  value="Não"
                  name="publicado"
                  onClick={(e) => {
                    unregister("is_published", {});
                    register("is_published", { value: "false" });
                  }}
                />
                <span>Não</span>
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
                {...register("imagesGallery.image1")}
              />
            </label>

            <label>
              <span>2° Imagem da galeria</span>
              <input
                type="text"
                placeholder="https://image.com"
                {...register("imagesGallery.image2")}
              />
            </label>

            {isMoreImages && (
              <>
                <label>
                  <span>3° Imagem da galeria</span>
                  <input
                    type="text"
                    placeholder="https://image.com"
                    {...register("imagesGallery.image3")}
                  />
                </label>

                <label>
                  <span>4° Imagem da galeria</span>
                  <input
                    type="text"
                    placeholder="https://image.com"
                    {...register("imagesGallery.image4")}
                  />
                </label>

                <label>
                  <span>5° Imagem da galeria</span>
                  <input
                    type="text"
                    placeholder="https://image.com"
                    {...register("imagesGallery.image5")}
                  />
                </label>

                <label>
                  <span>6° Imagem da galeria</span>
                  <input
                    type="text"
                    placeholder="https://image.com"
                    {...register("imagesGallery.image6")}
                  />
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
            <Button
              className="excluir"
              onClick={() =>{ 
                setIsModalExcluirAnuncio(true)
                setIsModalEditAnuncio(false)
              }}
            >
              Excluir anuncio
            </Button>
            <ButtonSave className="criar" type="submit">
              Salvar alterações
            </ButtonSave>
          </div>
        </Form>
      </Modal>
    </BackgroundModal>
  );
};

export default EditarAnuncio;
