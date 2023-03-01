import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthProvider, ILogin } from "../interfaces";
import api from "../services/api";

interface ISessionProvider {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  login: (data: ILogin) => void;
}

export const SessionContext = createContext({} as ISessionProvider);

const SessionProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    token ? setIsLogged(true) : setIsLogged(false);
  }, []);

  const login = (data: ILogin) => {
    api
      .post("/login", {
        username: data.user,
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
