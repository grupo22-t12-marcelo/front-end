import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IRegister } from "../../interfaces";
import { schemaRegisterUser } from "../../validators/schemas";
import { Button } from "../Button";
import { Input } from "../input";
import { Container, DivRadio } from "./styles";
import { TextArea } from "../TextArea";
import { ModalSucessRegister } from "../ModalSucessRegister";
import { useRegisterContext } from "../../contexts/registerContext";

const FormRegister = () => {
  const { registro } = useRegisterContext();
  const [tipo, setTipo] = useState("");

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schemaRegisterUser),
  });

  return (
    <Container onSubmit={handleSubmit(registro)}>
      <ModalSucessRegister />
      <h5>Informações pessoais</h5>
      <Input
        label="Nome"
        placeholder="Ex: Samuel Leão"
        {...register("name")}
        error={errors.name}
      />
      <Input
        label="Email"
        placeholder="Ex: samuel@kenzie.com.br"
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="CPF"
        placeholder="000.000.000-00"
        {...register("cpf")}
        error={errors.cpf}
      />
      <Input
        label="Celular"
        placeholder="(DDD) 90000-0000"
        {...register("phone")}
        error={errors.phone}
      />
      <Input
        label="Data de nascimento"
        placeholder="00/00/00"
        type="date"
        {...register("birthdate")}
        error={errors.birthdate}
      />
      <TextArea
        placeholder="Digitar descrição"
        {...register("description")}
        error={errors.description}
      />
      <h5>Informações de endereço</h5>
      <Input
        label="CEP"
        placeholder="00000.000"
        {...register("zipCode")}
        error={errors.zipCode}
      />
      <div className="divInput">
        <Input
          label="Estado"
          placeholder="Digitar Estado"
          {...register("state")}
          error={errors.state}
        />
        <Input
          label="Cidade"
          placeholder="Digitar cidade"
          {...register("city")}
          error={errors.city}
        />
      </div>
      <Input
        label="Rua"
        placeholder="Nome da rua"
        {...register("road")}
        error={errors.road}
      />
      <div className="divInput">
        <Input
          label="Número"
          placeholder="Digitar número"
          {...register("number")}
          error={errors.number}
        />
        <Input
          label="Complemento"
          placeholder="Ex: apart 307"
          {...register("complement")}
          error={errors.complement}
        />
      </div>
      <h5>Tipo de conta</h5>
      <DivRadio>
        <div className="divInput">
          <label>
            <input
              type="radio"
              value="Comprador"
              name="radio"
              onClick={(e) => {
                setTipo("Comprador");
                unregister("type_account", {});
                register("type_account", { value: "Comprador" });
              }}
            />
            <span>Comprador</span>
          </label>
          <label>
            <input
              type="radio"
              value="Anunciante"
              name="radio"
              onClick={(e) => {
                setTipo("Anunciante");
                unregister("type_account", {});
                register("type_account", { value: "Anunciante" });
              }}
            />
            <span>Anunciante</span>
          </label>
        </div>
        <p>{errors.type_account?.message}</p>
      </DivRadio>
      <Input
        label="Senha"
        placeholder="Digitar senha"
        type="password"
        {...register("password")}
        error={errors.password}
      />
      <Input
        label="Confirmar senha"
        placeholder="Digitar senha"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <div className="divButton">
        <Button
          height={50}
          width={340}
          backgroundColor="var(--brand1)"
          nameButton="Finalizar cadastro"
          type="submit"
        />
      </div>
    </Container>
  );
};

export { FormRegister };
