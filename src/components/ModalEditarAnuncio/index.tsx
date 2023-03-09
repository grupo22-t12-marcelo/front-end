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
import { IProductUpdate, IVehicle } from "../../interfaces";
import { schemaImagesUpdate } from "../../validators/schemas";
import { useUserProductsContext } from "../../contexts/productsUser.context";
import { useSessionContext } from "../../contexts/sessionContext";

const EditarAnuncio = () => {
  const {
    setIsModalEditAnuncio,
    updateProduct,
    setIsModalExcluirAnuncio,
    idVehicleEdit,
  } = useProductContext();
  const { userData } = useSessionContext();
  const [tipo, setTipo] = useState("Venda");
  const [isMoreImages, setIsMoreImages] = useState(false);

  console.log(userData);

  const vehicle = userData.products?.find(
    (vehicle) => vehicle.id === idVehicleEdit
  );

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
    mask: "R$ 000000",
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
                  defaultChecked={vehicle?.type_announcement === "Venda"}
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
                  defaultChecked={vehicle?.type_announcement === "Leilão"}
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
                  placeholder={vehicle?.title}
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
                          placeholder={String(vehicle?.year)}
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
                      placeholder={String(vehicle?.kilometers)}
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
                        placeholder={String(vehicle?.price)}
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
                  placeholder={vehicle?.description}
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
                  defaultChecked={vehicle?.type_vehicle === "Carro"}
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
                  defaultChecked={vehicle?.type_vehicle === "Moto"}
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
                  defaultChecked={vehicle?.is_published}
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
                  defaultChecked={!vehicle?.is_published}
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
                placeholder={vehicle?.image}
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
              onClick={() => {
                setIsModalExcluirAnuncio(true);
                setIsModalEditAnuncio(false);
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
