import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Container } from "./styles";

interface IInput {
  label?: string;
  placeholder?: string;
  error?: FieldError | undefined;
  type?: string;
  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ onClick, label, placeholder, error, type, value, ...register }, ref) => {
    return (
      <Container>
        <label>{label}</label>
        <input
          onClick={() => onClick}
          placeholder={placeholder}
          type={type}
          value={value}
          {...register}
          ref={ref}
        />
        <span>{error?.message}</span>
      </Container>
    );
  }
);

export { Input };
