import { Background, Body, Form } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "reactstrap";
import { useSessionContext } from "../../contexts/sessionContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUserUpdate } from "../../interfaces";
import { schemaUserAddressUpdate } from "../../validators/schemas";

const EditarAddress = () => {
  const { userData, setIsModalEditAddress, userUpdate } = useSessionContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>({
    resolver: yupResolver(schemaUserAddressUpdate),
  });

  return (
    <Background>
      <Body>
        <div className="header">
          <h4>Editar endereço</h4>
          <AiOutlineClose onClick={() => setIsModalEditAddress(false)} />
        </div>

        <div className="content">
          <h5>Informações de endereço</h5>
          <Form onSubmit={handleSubmit(userUpdate)}>
            <label>
              <span>CEP</span>
              <input
                type="number"
                placeholder={userData.address && userData.address.zipCode}
                {...register("address.zipCode")}
              />
            </label>

            <div className="div-content">
              <label>
                <span>Estado</span>
                <input
                  type="text"
                  placeholder={userData.address && userData.address.state}
                  {...register("address.state")}
                />
              </label>

              <label>
                <span>Cidade</span>
                <input
                  type="text"
                  placeholder={userData.address && userData.address.city}
                  {...register("address.city")}
                />
              </label>
            </div>

            <label>
              <span>Rua</span>
              <input
                type="text"
                placeholder={userData.address && userData.address.road}
                {...register("address.road")}
              />
            </label>

            <div className="div-content">
              <label>
                <span>Numero</span>
                <input
                  type="number"
                  placeholder={userData.address && userData.address.number}
                  {...register("address.number")}
                />
              </label>

              <label>
                <span>Complemento</span>
                <input
                  type="text"
                  placeholder={userData.address && userData.address.complement}
                  {...register("address.complement")}
                />
              </label>
            </div>

            <div className="buttons">
              <Button className="cancelar">Cancelar</Button>
              <Button className="salvar" type="submit">
                Salvar alterações
              </Button>
            </div>
          </Form>
        </div>
      </Body>
    </Background>
  );
};

export default EditarAddress;
