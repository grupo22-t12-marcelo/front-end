export interface IAddress {
  id: string;
  city: string;
  complement: string;
  number: string;
  road: string;
  state: string;
  zipCode: string;
}

export interface IProducts {
  createdAt: string;
  description: string;
  id: string;
  image: string;
  is_published: boolean;
  kilometers: number;
  price: number;
  title: string;
  type_announcement: string;
  type_vehicle: string;
  updatedAt: Date;
  year: number;
}

export interface IUserLogged {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  description: string;
  email: string;
  type_account: string;
  createdAt: Date;
  updatedAt: Date;
  birthdate: Date;
  address: IAddress;
  products: IProducts[];
}
