import { Circle } from "./style";

const CircleUser = ({ nameUser }: any) => {
  let initials = "";

  if (nameUser.length > 0) {
    initials =
      nameUser.split(" ")[0].charAt(0) + nameUser.split(" ")[1].charAt(0);
  }

  return (
    <Circle>
      <p>{initials}</p>
    </Circle>
  );
};

export { CircleUser };
