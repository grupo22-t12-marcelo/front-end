import { ReactNode } from "react";
import { Container, DescriptionUser } from "./styles";

interface InfosUser {
  abrevName: string;
  name: string;
  description: string;
  children?: ReactNode;
}

const InfosUserPage = ({
  abrevName,
  name,
  description,
  children,
}: InfosUser) => {
  return (
    <Container>
      <div className="abrevName">
        <p> {abrevName} </p>
      </div>

      <div className="name">
        <h3> {name} </h3>
        <p>Anunciante</p>
      </div>
      <DescriptionUser> {description} </DescriptionUser>
      {children}
    </Container>
  );
};

export { InfosUserPage };
