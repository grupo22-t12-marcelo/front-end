import { forwardRef } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { Container } from "./styles";

interface ITextAreaProps {
  placeholder: string;
  value?: string;
  register?: UseFormRegister<FieldValues>;
  error?: FieldError | undefined;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ value, placeholder, error, ...register }, ref) => {
    return (
      <Container>
        <label>Descrição</label>
        <textarea
          placeholder={placeholder}
          value={value}
          {...register}
          ref={ref}
        />
        <span>{error?.message}</span>
      </Container>
    );
  }
);

export { TextArea };
