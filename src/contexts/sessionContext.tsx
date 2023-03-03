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
import { IAuthProvider, ILogin, IRegister, IUser } from "../interfaces";
import api from "../services/api";
import { dateHour } from "../utils/date";

interface ISessionProvider {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  login: (data: ILogin) => void;
  userData: Partial<IUser>;
  setUserData: Dispatch<SetStateAction<() => void>>;
}

export const SessionContext = createContext({} as ISessionProvider);

const SessionProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({});

  console.log(userData);

  let user = {};

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get("/users").then((response: AxiosResponse) => {
        console.log(response.data);
        setUserData({
          ...response.data,
        });
      });
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }

    // dataUserLogin();
  }, []);

  // useEffect(() => {
  //   console.log(userData);
  //   console.log(isLogged);
  //   if (isLogged) {
  //     dataUserLogin();
  //   }
  // }, [isLogged]);

  // const dataUserLogin = () => {
  //   const token = localStorage.getItem("@TOKEN");
  // };

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
