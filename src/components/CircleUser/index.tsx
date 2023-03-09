import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { returnAbrevName } from "../../utils/abrevName";
import { Circle } from "./style";

const CircleUser = () => {
  const { userData } = useSessionContext();

  return (
    <Circle>
      <p>{returnAbrevName(userData?.name!)}</p>
    </Circle>
  );
};

export { CircleUser };
