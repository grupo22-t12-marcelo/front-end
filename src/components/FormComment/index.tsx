import { CircleUser } from "../CircleUser";
import { Badges, Form } from "./style";
import { Input, FormGroup, Button, Badge } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaComments } from "../../validators/schemas";
import { ICommentRequest } from "../../interfaces";
import { useCommentContext } from "../../contexts/commentsContext";

const FormComment = () => {
  const { isLogged, userData } = useSessionContext();
  const { postComment } = useCommentContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommentRequest>({
    resolver: yupResolver(schemaComments),
  });

  const { ref, ...registerComment } = register("comment");

  return (
    <Form onSubmit={handleSubmit(postComment)}>
      {isLogged ? (
        <>
          <div>
            <CircleUser />
            <h5>{userData?.name!}</h5>
          </div>
          <FormGroup>
            <Input
              id="exampleText"
              type="textarea"
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              bsSize="lg"
              size={128}
              innerRef={ref}
              {...registerComment}
            />
            {errors.comment?.message}
          </FormGroup>
          <Button color={"secondary"} type="submit">
            Comentar
          </Button>

          <Badges>
            <Badge pill>Gostei Muito!</Badge>
            <Badge pill>Incrível</Badge>
            <Badge pill>Recomendarei para meus amigos!</Badge>
          </Badges>
        </>
      ) : (
        <>
          <FormGroup>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              bsSize="lg"
              size={128}
              disabled
            />
          </FormGroup>

          <Button disabled>Comentar</Button>

          <Badges>
            <Badge pill>Gostei Muito!</Badge>
            <Badge pill>Incrível</Badge>
            <Badge pill>Recomendarei para meus amigos!</Badge>
          </Badges>
        </>
      )}
    </Form>
  );
};

export { FormComment };
