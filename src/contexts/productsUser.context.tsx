import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState, useEffect } from "react";

import { IAuthProvider } from "../interfaces";
import { IUserProducts } from "../interfaces/productsUser";
import api from "../services/api";

interface IUserProductsProvider {
  setUserId: (value: any) => void;
  userVehicles: Partial<IUserProducts>;
}

export const UserProductsContext = createContext({} as IUserProductsProvider);

const UserProductsProvider = ({ children }: IAuthProvider) => {
  const [userVehicles, setUserVehicles] = useState({});
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (userId) {
      api
        .get(`/users/${userId}`)
        .then((response: AxiosResponse) => {
          setUserVehicles(response.data);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        });
    }
  }, [userId]);

  return (
    <UserProductsContext.Provider value={{ setUserId, userVehicles }}>
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
