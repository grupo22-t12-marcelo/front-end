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
  isModalAnuncio: boolean;
  modal: boolean;
  setCount: Dispatch<SetStateAction<string>>;
  setIsModalAnuncio: (value: boolean) => void;
  toggle: () => void;
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const [count, setCount] = useState("00:00:10");
  const [isModalAnuncio, setIsModalAnuncio] = useState(true);
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <ProductContext.Provider
      value={{
        count,
        setCount,
        isModalAnuncio,
        setIsModalAnuncio,
        toggle,
        modal,
      }}
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
