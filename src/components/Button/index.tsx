import { Container } from "./styles";

interface ButtonProps {
  width: number;
  height: number;
  backgroundColor: string;
  color: string;
  type?: "button" | "reset" | "submit" | undefined;
  nameButton: string;
}
const Button = ({
  width,
  height,
  nameButton,
  backgroundColor,
  color,
  type,
}: ButtonProps) => {
  return (
    <Container
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      type={type}
    >
      {nameButton}
    </Container>
  );
};

export { Button };
