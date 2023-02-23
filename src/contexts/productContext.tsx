import { useContext, createContext, useState } from "react";
import { IAuthProvider } from "../interfaces";

interface IProductProvider {
  count: string;
  setCount: (value: string) => void;
  isModalAnuncio: boolean;
  setIsModalAnuncio: (value: boolean) => void;
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const [count, setCount] = useState("02:00:00");
  const [isModalAnuncio, setIsModalAnuncio] = useState(true);

  return (
    <ProductContext.Provider
      value={{ count, setCount, isModalAnuncio, setIsModalAnuncio }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
  const context = useContext(ProductContext);

  return context;
}

export default ProductProvider;
