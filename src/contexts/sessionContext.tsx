import { AxiosError, AxiosResponse } from "axios";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IAuthProvider, ILogin } from "../interfaces";
import { IUserLogged } from "../interfaces/sessions";
import api from "../services/api";
import { dateHour } from "../utils/date";

interface ISessionProvider {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  login: (data: ILogin) => void;
  userData: Partial<IUserLogged>;
  setUserData: (value: IUserLogged) => void;
  token: string | null;
}

interface IresponseData {
  message: string;
}

export const SessionContext = createContext({} as ISessionProvider);

const SessionProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({});

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

  return (
    <SessionContext.Provider
      value={{
        isLogged,
        setIsLogged,
        login,
        userData,
        setUserData,
        token,
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
