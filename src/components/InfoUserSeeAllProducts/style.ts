import styled from "styled-components";

const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey10);
  padding: 28px;
  gap: 28px;
  border-radius: 4px;
  height: 426px;

  @media (min-width: 1024px) {
    padding: 20px;
    height: 300px;
    gap: 15px;
  }

  @media (max-height: 756px) {
    height: 230px;
    gap: 8px;
    justify-content: initial;
  }

  h3 {
    font-family: var(--heading-font-family);
    font-weight: var(--heading-5-600);
    color: var(--heading-color);
    font-size: 20px;
    text-align: left;

    @media only screen and (max-height: 756px) {
      font-size: 15px;
    }
  }

  #text-user {
    font-family: var(--body-font-family);
    font-weight: var(--body-1-400);
    color: var(--grey2);
    font-size: 16px;
    text-align: center;

    @media only screen and (max-height: 756px) {
      font-size: 14px;
    }
  }

  button {
    background-color: var(--grey0);
    border-radius: 4px;
    color: var(--white-fixed);

    @media only screen and (max-height: 756px) {
      font-size: 14px;
    }
  }

  .abrevName {
    width: 55px;
    height: 55px;
    border-radius: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    background-color: red;

    & > p {
      font-weight: 500;
      font-size: 14px;
      color: var(--white-fixed);
    }
  }
`;

export { InfoUser };
