import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { Circle } from "./style";

const CircleUser = () => {
  const { userData } = useSessionContext();

  let initials = "";

  if (userData.name!.length > 0) {
    initials =
      userData.name!.split(" ")[0].charAt(0) +
      userData
        .name!.split(" ")
        [Number(userData.name!.split(" ").length - 1)].charAt(0);
  }

  return (
    <Circle>
      <p>{initials}</p>
    </Circle>
  );
};

export { CircleUser };
