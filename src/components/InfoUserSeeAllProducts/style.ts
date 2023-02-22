import styled from "styled-components";

const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey10);
  padding: 28px;
  gap: 28px;
  h3 {
    font-family: var(--heading-font-family);
    font-weight: var(--heading-5-600);
    color: var(--heading-color);
    font-size: 20px;
    text-align: left;
  }
  p {
    font-family: var(--body-font-family);
    font-weight: var(--body-1-400);
    color: var(--grey2);
    font-size: 16px;
    text-align: center;
  }
  button {
    background-color: var(--grey0);
    border-radius: 4px;
    color: var(--white-fixed);
  }
`;

export { InfoUser };
