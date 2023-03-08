import { Background, Body, Form } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { useIMask } from "react-imask";
import { Button } from "reactstrap";

import { useSessionContext } from "../../contexts/sessionContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { IUserUpdate } from "../../interfaces";
import { schemaUserUpdate } from "../../validators/schemas";

const EditarPerfil = () => {
  const {
    userData,
    userUpdate,
    setIsModalEditPerfil,
    setIsModalExcluirPerfil,
  } = useSessionContext();

  const phoneMask = useIMask({
    mask: "(00) 00000-0000",
  });

  const cpfMask = useIMask({
    mask: "000.000.000-00",
  });

  const birthDate = useIMask({
    mask: "00/00/0000",
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserUpdate>({
    resolver: yupResolver(schemaUserUpdate),
  });

  return (
    <Background>
      <Body>
        <div className="header">
          <h4>Editar perfil</h4>
          <AiOutlineClose
            style={{ cursor: "pointer" }}
            onClick={() => setIsModalEditPerfil(false)}
          />
        </div>

        <div className="content">
          <h5>Informações pessoais</h5>
          <Form onSubmit={handleSubmit(userUpdate)}>
            <label>
              <span>Nome</span>
              <input
                type="text"
                placeholder={userData.name}
                {...register("name")}
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="text"
                placeholder={userData.email}
                {...register("email")}
              />
            </label>

            <label>
              <span>CPF</span>
              <Controller
                render={(params) => (
                  <input
                    name={params.field.name}
                    onBlur={params.field.onBlur}
                    defaultValue={params.field.value}
                    ref={cpfMask.ref}
                    onChange={() =>
                      params.field.onChange({
                        target: { value: cpfMask.unmaskedValue },
                      })
                    }
                    placeholder={userData.cpf}
                  />
                )}
                name="cpf"
                control={control}
              />
            </label>

            <label>
              <span>Celular</span>
              <Controller
                render={(params) => (
                  <input
                    name={params.field.name}
                    onBlur={params.field.onBlur}
                    defaultValue={params.field.value}
                    ref={phoneMask.ref}
                    onChange={() =>
                      params.field.onChange({
                        target: { value: phoneMask.unmaskedValue },
                      })
                    }
                    placeholder={userData.phone}
                  />
                )}
                name="phone"
                control={control}
              />
            </label>

            <label>
              <span>Data de nascimento</span>
              <Controller
                render={(params) => (
                  <input
                    name={params.field.name}
                    onBlur={params.field.onBlur}
                    defaultValue={params.field.value}
                    ref={birthDate.ref}
                    onChange={() =>
                      params.field.onChange({
                        target: { value: birthDate.unmaskedValue },
                      })
                    }
                    placeholder="00/00/0000"
                  />
                )}
                name="birthdate"
                control={control}
              />
            </label>

            <label>
              <span>Descrição</span>
              <textarea
                style={{ color: "black" }}
                placeholder={userData.description}
                {...register("description")}
              ></textarea>
            </label>

            <div>
              <Button
                className="excluir"
                onClick={() => {
                  setIsModalExcluirPerfil(true);
                  setIsModalEditPerfil(false);
                }}
              >
                Excluir perfil
              </Button>
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

export default EditarPerfil;
