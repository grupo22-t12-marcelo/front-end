import { ReactNode } from "react";
import { returnAbrevName } from "../../utils/abrevName";
import { Container, DescriptionUser } from "./styles";

interface InfosUser {
  abrevName: string;
  name: string;
  description: string;
  typeAccount: string;
  children?: ReactNode;
}

const InfosUserPage = ({
  abrevName,
  name,
  description,
  typeAccount,
  children,
}: InfosUser) => {
  return (
    <Container>
      <div className="abrevName">
        <p> {returnAbrevName(abrevName)} </p>
      </div>

      <div className="name">
        <h3> {name} </h3>
        <p>{typeAccount}</p>
      </div>
      <DescriptionUser> {description} </DescriptionUser>
      {children}
    </Container>
  );
};

export { InfosUserPage };
