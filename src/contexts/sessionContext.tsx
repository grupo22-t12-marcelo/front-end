import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthProvider, ILogin, IUserUpdate } from "../interfaces";
import { IUserLogged } from "../interfaces/sessions";
import api from "../services/api";
import { convertDate } from "../utils/date";
import { useProductContext } from "./productContext";

interface ISessionProvider {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  login: (data: ILogin) => void;
  userData: Partial<IUserLogged>;
  setUserData: (value: IUserLogged) => void;
  token: string | null;
  userUpdate: (data: IUserUpdate) => void;
  deleteUser: () => void;
  isModalEditPerfil: boolean;
  setIsModalEditPerfil: (value: boolean) => void;
  isModalEditAddress: boolean;
  setIsModalEditAddress: (value: boolean) => void;
  isModalExcluirPerfil: boolean;
  setIsModalExcluirPerfil: (value: boolean) => void;
}

export const SessionContext = createContext({} as ISessionProvider);

const SessionProvider = ({ children }: IAuthProvider) => {
  const { getVehicles } = useProductContext();
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({});
  const [isModalEditPerfil, setIsModalEditPerfil] = useState(false);
  const [isModalEditAddress, setIsModalEditAddress] = useState(false);
  const [isModalExcluirPerfil, setIsModalExcluirPerfil] = useState(false);

  const token = localStorage.getItem("@TOKEN");

  const login = (data: ILogin) => {
    api
      .post("/login", {
        email: data.email,
        password: data.password,
      })
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          const { token } = response.data;

          localStorage.setItem("@TOKEN", token);
          setIsLogged(true);
          // dataUserLogin();

          navigate("/");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  const userUpdate = (data: IUserUpdate) => {
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const date = convertDate(data?.birthdate!);

      data.birthdate = date;

      api
        .patch("/users", data)
        .then((response: AxiosResponse) => {
          console.log(response.data);
          setIsModalEditPerfil(false);
          setIsModalEditAddress(false);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        });
    }
  };

  const deleteUser = () => {
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api
        .delete("/users")
        .then((response: AxiosResponse) => {
          console.log(response.data);
          setIsModalExcluirPerfil(false);
          localStorage.removeItem("@TOKEN");
          getVehicles;

          setTimeout(() => {
            navigate("/", { replace: true });
            navigate(0);
          }, 3000);
        })
        .then((err) => {
          console.log(err);
        });
    }
  };

  return (
    <SessionContext.Provider
      value={{
        isLogged,
        setIsLogged,
        login,
        userData,
        setUserData,
        token,
        userUpdate,
        deleteUser,
        isModalEditPerfil,
        setIsModalEditPerfil,
        isModalEditAddress,
        setIsModalEditAddress,
        isModalExcluirPerfil,
        setIsModalExcluirPerfil,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export function useSessionContext() {
  const context = useContext(SessionContext);

  return context;
}

export default SessionProvider;
