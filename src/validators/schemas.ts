import * as yup from "yup";

export const schemaAnuncio = yup.object().shape({
  tipo: yup.string().required(),
  titulo: yup.string().required(),
  // ano: yup.number().required(),
  quilometragem: yup.string().required(),
  // preco: yup.string().required(),
  descricao: yup.string().required(),
  tipoDoVeiculo: yup.string().required(),
  imagemCapa: yup.string().required(),
  imagem1: yup.string(),
  imagem2: yup.string(),
  imagem3: yup.string(),
  imagem4: yup.string(),
});

export const schemaRegisterUser = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email invalido").required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  birthdate: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  cep: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
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
  user: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});
