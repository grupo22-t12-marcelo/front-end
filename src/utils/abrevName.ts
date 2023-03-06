const returnAbrevName = (fullName: string) => {
  let initial = "";

  if (fullName?.length > 0) {
    if (fullName?.split(" ").length === 1) {
      return (initial = fullName[0]);
    } else {
      return (initial =
        fullName.split(" ")[0].charAt(0) +
        fullName.split(" ")[Number(fullName.split(" ").length - 1)].charAt(0));
    }
  } else {
    return "";
  }
};

export { returnAbrevName };
