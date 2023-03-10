import { AxiosError, AxiosResponse } from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  IAnuncio,
  IAuthProvider,
  IProduct,
  IProductUpdate,
  IVehicle,
} from "../interfaces";
import api from "../services/api";
import { useSessionContext } from "./sessionContext";
import { toast } from "react-toastify";
import { IUserProducts } from "../interfaces/productsUser";

interface IProductProvider {
  count: string;
  setCount: (value: string) => void;
  isModalAnuncio: boolean;
  setIsModalAnuncio: (value: boolean) => void;
  idPhoto: string;
  setIdPhoto: (value: string) => void;
  navigate: NavigateFunction;
  modal: boolean;
  setModal: (value: boolean) => void;
  toggle: (id: string) => void;
  closeSucess: () => void;
  setIsModalSucess: (value: boolean) => void;
  isModalSucess: boolean;
  setIsModalEditAnuncio: (value: boolean) => void;
  isModalEditAnuncio: boolean;
  isModalExcluirAnuncio: boolean;
  setIsModalExcluirAnuncio: (value: boolean) => void;
  getVehicles: () => void;
  auctionVehicles: IVehicle[];
  carsVehicle: IVehicle[];
  vehicles: IVehicle[];
  motorbikeVehicle: IVehicle[];
  createProduct: (data: IAnuncio) => void;
  oneVehicle: Partial<IVehicle>;
  setIdVehicle: (value: any) => void;
  idVehicle: string;
  idVehicleEdit: string;
  setIdVehicleEdit: (value: string) => void;
  updateProduct: (data: IProductUpdate) => void;
  deleteAnuncio: () => void;
  buyProduct: (idUserProduct: string) => void;
  phoneOwnerProduct: string;
  setphoneOwnerProduct: (value: string) => void;
}

export const ProductContext = createContext({} as IProductProvider);

const ProductProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [isModalSucess, setIsModalSucess] = useState(false);
  const [isModalAnuncio, setIsModalAnuncio] = useState(false);
  const [isModalEditAnuncio, setIsModalEditAnuncio] = useState(false);
  const [isModalExcluirAnuncio, setIsModalExcluirAnuncio] = useState(false);
  const [count, setCount] = useState("");
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [oneVehicle, setOneVehicle] = useState({});
  const [idVehicle, setIdVehicle] = useState("");
  const [idVehicleEdit, setIdVehicleEdit] = useState<string>("");

  const [phoneOwnerProduct, setphoneOwnerProduct] = useState("");

  const [vehicleUpdate, setVehicleUpdate] = useState("");

  const { token, setUserData, setIsLogged, setIsLoading } = useSessionContext();

  const closeSucess = () => {
    setIsModalSucess(!isModalSucess);
  };

  const toggle = (id: string) => {
    setIdPhoto(id);
    setModal(!modal);
  };

  const [idPhoto, setIdPhoto] = useState("");

  const auctionVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.type_announcement === "Leil??o" && vehicle.is_published === true
  );

  const carsVehicle = vehicles.filter(
    (vehicle) =>
      vehicle.type_announcement === "Venda" &&
      vehicle.type_vehicle === "Carro" &&
      vehicle.is_published === true
  );

  const motorbikeVehicle = vehicles.filter(
    (vehicle) =>
      vehicle.type_announcement === "Venda" &&
      vehicle.type_vehicle === "Moto" &&
      vehicle.is_published === true
  );

  const getVehicles = () => {
    setIsLoading(true);
    api
      .get("/products")
      .then((response: AxiosResponse) => {
        setVehicles(response.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getVehicles();
  }, []);

  useEffect(() => {
    if (idVehicle) {
      setIsLoading(true);
      api
        .get(`/products/${idVehicle}`)
        .then((response: AxiosResponse) => {
          setOneVehicle(response.data);
          buyProduct(response.data.user.id);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [idVehicle]);

  useEffect(() => {
    if (token) {
      setIsLoading(true);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api
        .get("/users")
        .then((response: AxiosResponse) => {
          setUserData({
            ...response.data,
          });
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
      setIsLogged(true);
      setIsLoading(true);
    } else {
      setIsLogged(false);
    }
  }, [token, vehicleUpdate]);

  const createProduct = async (data: IAnuncio) => {
    const token = localStorage.getItem("@TOKEN");
    const { image1, image2, image3, image4, image5, image6 } = data;
    const imagesGallery = { image1, image2, image3, image4, image5, image6 };

    delete data.image1;
    delete data.image2;
    const newData = { imagesGallery: { ...imagesGallery }, ...data };
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await api.post("/products", newData).then((response: AxiosResponse) => {
        setIsModalAnuncio(false);
        setVehicleUpdate(response.data);
      });
      toast.success("Anuncio criado!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = (data: IProductUpdate) => {
    if (token && idVehicleEdit) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api
        .patch(`/products/${idVehicleEdit}`, data)
        .then((response: AxiosResponse) => {
          toast.success("Anuncio Atualizado!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsModalEditAnuncio(false);
          setVehicleUpdate(response.data);
        })
        .catch((err: AxiosError) => {
          console.log(err);
        });
    }
  };

  const deleteAnuncio = async () => {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api
        .delete(`/products/${idVehicleEdit}`)
        .then((response: AxiosResponse) => {
          setVehicleUpdate(response.data);
        });
      toast.success("Anuncio excluido!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast.error("Error ao excluir o anuncio!");
    }
    setIsModalExcluirAnuncio(false);
  };

  const buyProduct = (idUserProduct: string) => {
    api
      .get(`/users/${idUserProduct}`)
      .then((response: AxiosResponse) => {
        setphoneOwnerProduct(response.data.phone);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };

  return (
    <ProductContext.Provider
      value={{
        count,
        setCount,
        isModalAnuncio,
        setIsModalAnuncio,
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
        getVehicles,
        auctionVehicles,
        carsVehicle,
        motorbikeVehicle,
        createProduct,
        setIdVehicle,
        vehicles,
        idVehicle,
        oneVehicle,
        idVehicleEdit,
        setIdVehicleEdit,
        updateProduct,
        isModalExcluirAnuncio,
        setIsModalExcluirAnuncio,
        deleteAnuncio,
        buyProduct,
        phoneOwnerProduct,
        setphoneOwnerProduct,
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
