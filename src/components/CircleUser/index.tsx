import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { Circle } from "./style";

const CircleUser = () => {
  const { userData } = useSessionContext();

  let name = "Undefined Undefined";

  if (userData.name) {
    name = userData.name;
  }

  let initials = "";

  if (name!.length > 0) {
    initials =
      name!.split(" ")[0].charAt(0) +
      name!.split(" ")[Number(name!.split(" ").length - 1)].charAt(0);
  }

  return (
    <Circle>
      <p>{initials}</p>
    </Circle>
  );
};

export { CircleUser };
