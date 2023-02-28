import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Input } from "../../components/input";
import { TextArea } from "../../components/TextArea";
import { IRegister } from "../../interfaces";
import { schemaRegisterUser } from "../../validators/schemas";
import { Container, DivRadio } from "./styles";

const Register = () => {
  const [tipo, setTipo] = useState("");

  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schemaRegisterUser),
  });

  const registro = (data: IRegister) => {
    delete data.confirmPassword;

    const address = {
      cep: data.cep,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      complement: data.complement,
    };

    data.address = address;

    console.log(data);
  };

  return (
    <>
      <Header />
      <Container>
        <section>
          <h3>Cadastro</h3>
          <form onSubmit={handleSubmit(registro)}>
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
              {...register("cep")}
              error={errors.cep}
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
              {...register("street")}
              error={errors.street}
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
                width={320}
                backgroundColor="var(--brand1)"
                nameButton="Finalizar cadastro"
                type="submit"
              />
            </div>
          </form>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export { Register };
