import { Container } from "./styles";

interface ButtonProps {
  width: number;
  height: number;
  backgroundColor: string;
  color: string;
  type?: "button" | "reset" | "submit" | undefined;
  nameButton: string;
  borderColor: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const Button = ({
  width,
  height,
  nameButton,
  backgroundColor,
  color,
  type,
  borderColor,
  onClick,
}: ButtonProps) => {
  return (
    <Container
      onClick={onClick}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      type={type}
      borderColor={borderColor}
    >
      {nameButton}
    </Container>
  );
};

export { Button };
