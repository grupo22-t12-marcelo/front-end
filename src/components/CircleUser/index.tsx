import { useProductContext } from "../../contexts/productContext";
import { Circle } from "./style";

const CircleUser = () => {
  const { userLogged } = useProductContext();

  let initials = "";

  if (userLogged.length > 0) {
    initials =
      userLogged.split(" ")[0].charAt(0) + userLogged.split(" ")[1].charAt(0);
  }

  return (
    <Circle>
      <p>{initials}</p>
    </Circle>
  );
};

export { CircleUser };
