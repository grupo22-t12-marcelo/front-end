import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { IAuthProvider } from "../interfaces";

interface IProductProvider {
  count: string;
  setCount: Dispatch<SetStateAction<string>>;
  isModalAnuncio: boolean;
  setIsModalAnuncio: (value: boolean) => void;
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const [count, setCount] = useState("00:00:10");
  const [isModalAnuncio, setIsModalAnuncio] = useState(true);

  return (
    <ProductContext.Provider value={{ count, setCount, isModalAnuncio, setIsModalAnuncio}}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
  const context = useContext(ProductContext);

  return context;
}

export default ProductProvider;
