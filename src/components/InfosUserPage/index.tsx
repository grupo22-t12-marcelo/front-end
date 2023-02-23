import { Container, DescriptionUser } from "./styles";

interface InfosUser {
  abrevName: string;
  name: string;
  description: string;
}

const InfosUserPage = ({ abrevName, name, description }: InfosUser) => {
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
    </Container>
  );
};

export { InfosUserPage };
