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
import { IAuthProvider, ILogin, IRegister } from "../interfaces";
import api from "../services/api";

interface ISessionProvider {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  login: (data: ILogin) => void;
  userData: Partial<IRegister>;
  setUserData: Dispatch<SetStateAction<() => void>>;
}

export const SessionContext = createContext({} as ISessionProvider);

const SessionProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    token ? setIsLogged(true) : setIsLogged(false);
  }, []);

  useEffect(() => {
    if (isLogged) {
      dataUserLogin();
      console.log(userData);
    }
  }, [isLogged]);

  const dataUserLogin = () => {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    api.get("/users").then((response: AxiosResponse) => {
      setUserData({
        ...response.data,
      });
    });
  };

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
          navigate("/");
        }
      })
      .catch((err: AxiosError) => {
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
