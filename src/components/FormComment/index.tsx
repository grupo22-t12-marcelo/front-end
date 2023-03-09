import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Badge, Button, FormGroup, Input } from "reactstrap";
import { useCommentContext } from "../../contexts/commentsContext";
import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { ICommentRequest } from "../../interfaces";
import { schemaComments } from "../../validators/schemas";
import { CircleUser } from "../CircleUser";
import { Badges, Form } from "./style";

const FormComment = () => {
  const { isLogged, userData } = useSessionContext();
  const { postComment } = useCommentContext();
  const { oneVehicle } = useProductContext();

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
      {oneVehicle.type_announcement === "Leilão" && isLogged ? (
        <>
          <div>
            <CircleUser />
            <h5>{userData?.name!}</h5>
          </div>
          <h5>Leilão</h5>

          <FormGroup>
            <Input
              className="lance"
              type="text"
              placeholder="Inserir valor de lance"
              bsSize="lg"
              size={128}
              innerRef={ref}
              {...registerComment}
            />
            {errors.comment?.message}
            <Button color={"secondary"} type="submit" className="inserir">
              Inserir
            </Button>
          </FormGroup>
        </>
      ) : isLogged ? (
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

