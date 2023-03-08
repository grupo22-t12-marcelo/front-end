import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

interface IresponseData {
  message: string;
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
          toast.success("Login com sucesso!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // dataUserLogin();
          setTimeout(() => {
            setIsLogged(true);
            navigate("/");
          }, 2500);
        }
      })
      .catch((err: AxiosError) => {
        const data: any = err.response?.data;
        toast.error(`${data.message}`);
        console.log(err);
      });
  };

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get("/users").then((response: AxiosResponse) => {
        setUserData({
          ...response.data,
        });
      });
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);

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
          }, 1500);
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
