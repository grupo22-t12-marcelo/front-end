import { AxiosError, AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";

import { IAuthProvider, IRegister } from "../interfaces";
import api from "../services/api";

interface IRegisterProvider {
  modalSucess: boolean;
  setModalSucess: (value: boolean) => void;
  sucessToggle: () => void;
  registro: (data: IRegister) => void;
}

export const RegisterContext = createContext({} as IRegisterProvider);

const RegisterProvider = ({ children }: IAuthProvider) => {
  const [modalSucess, setModalSucess] = useState(false);

  const sucessToggle = () => {
    setModalSucess(!modalSucess);
  };

  const registro = (data: IRegister) => {
    delete data.confirmPassword;

    const address = {
      zipCode: data.zipCode,
      state: data.state,
      city: data.city,
      road: data.road,
      number: data.number,
      complement: data.complement,
    };

    data.address = address;

    let birthdateCustom = data.birthdate.split("-");

    data.birthdate = `${birthdateCustom[0]}-${birthdateCustom[1]}-${birthdateCustom[2]}`;

    const { zipCode, state, city, road, number, complement, ...newObj } = data;

    api
      .post("/users", newObj)
      .then((response: AxiosResponse) => {
        setModalSucess(true);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <RegisterContext.Provider
      value={{ modalSucess, setModalSucess, sucessToggle, registro }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export function useRegisterContext() {
  const context = useContext(RegisterContext);

  return context;
}

export default RegisterProvider;
