import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IAuthProvider } from "../interfaces";

interface IProductProvider {
  count: string;
  setCount: Dispatch<SetStateAction<string>>;
  isModalAnuncio: boolean;
  setIsModalAnuncio: (value: boolean) => void;
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  userLogged: string;
  tagsCar: string[];
  photos: string[];
  idPhoto: string;
  setIdPhoto: (value: string) => void;
  comments: object[];
  accountType: string;
  navigate: NavigateFunction;
  modal: boolean;
  setModal: (value: boolean) => void;
  toggle: (id: string) => void;
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const toggle = (id: string) => {
    setIdPhoto(id);
    setModal(!modal);
  };
  const [count, setCount] = useState("00:00:10");
  const [isModalAnuncio, setIsModalAnuncio] = useState(true);
  const [isLogged, setIsLogged] = useState(true);
  let [idPhoto, setIdPhoto] = useState("");
  let userLogged = "Samuel Leão";

  let accountType = "Anunciante";
  let tagsCar = ["2013", "0KM"];
  let photos = [
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
  ];

  let comments = [
    {
      nameUser: "Júlia Lima",
      dateComment: "há 3 dias",
      commentText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      nameUser: "Marcos Antônio",
      dateComment: "há 7 dias",
      commentText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      nameUser: "Camila Silva",
      dateComment: "há 1 mês",
      commentText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <ProductContext.Provider
      value={{
        count,
        setCount,
        isModalAnuncio,
        setIsModalAnuncio,
        userLogged,
        tagsCar,
        photos,
        comments,
        accountType,
        isLogged,
        setIsLogged,
        navigate,
        modal,
        setModal,
        toggle,
        idPhoto,
        setIdPhoto,
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
