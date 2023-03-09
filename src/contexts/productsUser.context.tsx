import { AxiosError, AxiosResponse } from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import { IAuthProvider } from "../interfaces";
import { IUserProducts } from "../interfaces/productsUser";
import api from "../services/api";
import { useSessionContext } from "./sessionContext";

interface IUserProductsProvider {
  setUserId: (value: any) => void;
  userVehicles: Partial<IUserProducts>;
  userId: string;
}

export const UserProductsContext = createContext({} as IUserProductsProvider);

const UserProductsProvider = ({ children }: IAuthProvider) => {
  const { setIsLoading } = useSessionContext();
  const [userVehicles, setUserVehicles] = useState({});
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      api
        .get(`/users/${userId}`)
        .then((response: AxiosResponse) => {
          setUserVehicles(response.data);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userId]);

  return (
    <UserProductsContext.Provider value={{ userId, setUserId, userVehicles }}>
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
