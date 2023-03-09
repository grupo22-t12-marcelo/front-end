export interface IProduct {
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
  updatedAt: string;
  year: number;
}

export interface IUserProducts {
  id: string;
  name: string;
  description: string;
  type_account: string;
  createdAt: Date;
  products: IProduct[];
  birthdate: Date;
  cpf: string;
  email: string;
  phone: string;
  updatedAt: Date;
}
