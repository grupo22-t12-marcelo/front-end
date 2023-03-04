import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState, useEffect } from "react";

import { IAuthProvider, IUserVehicles } from "../interfaces";
import api from "../services/api";

interface IUserProductsProvider {
  setUserId: (value: any) => void;
}

export const UserProductsContext = createContext({} as IUserProductsProvider);

const UserProductsProvider = ({ children }: IAuthProvider) => {
  const [userVehicles, setUserVehicles] = useState<IUserVehicles[]>([]);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    api
      .get(`/users/${userId}`)
      .then((response: AxiosResponse) => {
        setUserVehicles(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, [userId]);

  console.log(userVehicles);

  return (
    <UserProductsContext.Provider value={{ setUserId }}>
      {children}
    </UserProductsContext.Provider>
  );
};

// AVISO

export function useUserProductsContext() {
  const context = useContext(UserProductsContext);

  return context;
}

export default UserProductsProvider;
