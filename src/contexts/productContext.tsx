import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IAnuncio, IAuthProvider, IProduct, IVehicle } from "../interfaces";
import api from "../services/api";
import { dateHour } from "../utils/date";

interface IProductProvider {
  count: string;
  setCount: (value: string) => void;
  isModalAnuncio: boolean;
  setIsModalAnuncio: (value: boolean) => void;
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
  closeSucess: () => void;
  setIsModalSucess: (value: boolean) => void;
  isModalSucess: boolean;
  setIsModalEditAnuncio: (value: boolean) => void;
  isModalEditAnuncio: boolean;
  isModalEditPerfil: boolean;
  setIsModalEditPerfil: (value: boolean) => void;
  auctionVehicles: IVehicle[];
  carsVehicle: IVehicle[];
  motorbikeVehicle: IVehicle[];
  isModalEditAddress: boolean;
  setIsModalEditAddress: (value: boolean) => void;
  createProduct: (data: IAnuncio) => void;
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [isModalAnuncio, setIsModalAnuncio] = useState(true);
  const [isModalSucess, setIsModalSucess] = useState(false);
  const [isModalEditAnuncio, setIsModalEditAnuncio] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const [isModalEditAddress, setIsModalEditAddress] = useState(false);
  const [isModalEditPerfil, setIsModalEditPerfil] = useState(false);
  const [count, setCount] = useState("");
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);

  const closeSucess = () => {
    setIsModalSucess(!isModalSucess);
  };

  const toggle = (id: string) => {
    setIdPhoto(id);
    setModal(!modal);
  };

  const [idPhoto, setIdPhoto] = useState("");
  const userLogged = "Samuel Leão";
  const accountType = "Anunciante";
  const tagsCar = ["2013", "0KM"];
  const photos = [
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
    "/src/assets/Carro-CapaProduct.png",
  ];

  const comments = [
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

  const auctionVehicles = vehicles.filter(
    (vehicle) => vehicle.type_announcement === "Leilão"
  );

  const carsVehicle = vehicles.filter(
    (vehicle) =>
      vehicle.type_announcement === "Venda" && vehicle.type_vehicle === "Carro"
  );

  const motorbikeVehicle = vehicles.filter(
    (vehicle) =>
      vehicle.type_announcement === "Venda" && vehicle.type_vehicle === "Moto"
  );

  const getVehicles = () => {
    api
      .get("/products")
      .then((response: AxiosResponse) => {
        setVehicles(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  const createProduct = async (data: IAnuncio) => {
    const token = localStorage.getItem("@TOKEN");
    const { image1, image2, image3, image4, image5, image6 } = data;
    const imagesGallery = { image1, image2, image3, image4, image5, image6 };

    delete data.image1;
    delete data.image2;
    const newData = { imagesGallery: { ...imagesGallery }, ...data };
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await api.post("/products", newData).then(({ data }) => {
        vehicles.push(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVehicles();
  }, []);

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
        navigate,
        modal,
        setModal,
        toggle,
        idPhoto,
        setIdPhoto,
        closeSucess,
        setIsModalSucess,
        isModalSucess,
        isModalEditAnuncio,
        setIsModalEditAnuncio,
        isModalEditPerfil,
        setIsModalEditPerfil,
        auctionVehicles,
        carsVehicle,
        motorbikeVehicle,
        isModalEditAddress,
        setIsModalEditAddress,
        createProduct,
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
