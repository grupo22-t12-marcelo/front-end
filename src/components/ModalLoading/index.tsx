import { Container } from "./styles";
import { IAuthProvider } from "../../interfaces";

const ModalLoading = ({ children }: IAuthProvider) => {
  return <Container>{children}</Container>;
};

export { ModalLoading };
