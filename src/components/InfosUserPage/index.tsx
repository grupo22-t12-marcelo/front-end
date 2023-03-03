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

  if (userData.name && userData.name.length > 0) {
    abrevName =
      userData.name!.split(" ")[0].charAt(0) +
      userData
        .name!.split(" ")
        [Number(userData.name!.split(" ").length - 1)].charAt(0);
  }

  return (
    <Container>
      <div className="abrevName">
        <p> {abrevName} </p>
      </div>

      <div className="name">
        <h3> {userData.name ? userData.name : name} </h3>
        <p>Anunciante</p>
      </div>
      <DescriptionUser>
        {" "}
        {userData.description ? userData.description : description}{" "}
      </DescriptionUser>
      {children}
    </Container>
  );
};

export { InfosUserPage };
