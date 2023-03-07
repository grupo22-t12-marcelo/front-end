import * as yup from "yup";

export const schemaAnuncio = yup.object().shape({
  type_announcement: yup.string().required(),
  title: yup.string().required(),
  year: yup.number().required(),
  kilometers: yup.string().required(),
  price: yup.string().required(),
  description: yup.string().required(),
  type_vehicle: yup.string().required(),
  image: yup.string().required(),
  image1: yup.string().required(),
  image2: yup.string().default(""),
  image3: yup.string().default(""),
  image4: yup.string().default(""),
  image5: yup.string().default(""),
  image6: yup.string().default(""),
});

export const schemaRegisterUser = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email invalido").required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  birthdate: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  zipCode: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  road: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
  type_account: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Senhas não são iguais"),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().email().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const schemaForgotPassword = yup.object().shape({
  email: yup.string().email().required("CAmpo Obrigatório"),
});
