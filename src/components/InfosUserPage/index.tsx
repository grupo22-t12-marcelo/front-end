import { ReactNode } from "react";
import { useSessionContext } from "../../contexts/sessionContext";
import { Container, DescriptionUser } from "./styles";

interface InfosUser {
  children?: ReactNode;
}

const InfosUserPage = ({ children }: InfosUser) => {
  const { userData } = useSessionContext();

  let name = "Samuel Leão";

  let description =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur animi id minima suscipit quas assumenda itaque commodi quia dolor magnam distinctio magni harum, enim aliquam, laboriosam beatae voluptatem architecto Aut";

  let abrevName = "";

  if (name!.length > 0) {
    abrevName =
      name!.split(" ")[0].charAt(0) +
      name!.split(" ")[Number(name!.split(" ").length - 1)].charAt(0);
  }

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
