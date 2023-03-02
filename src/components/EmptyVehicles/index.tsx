import { Container } from "./styles";

interface IEmptyMessage {
  message: string;
}

const EmptyVehicles = ({ message }: IEmptyMessage) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export { EmptyVehicles };
