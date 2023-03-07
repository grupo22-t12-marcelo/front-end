import styled from "styled-components";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--grey10);
  padding: 28px;
  gap: 24px;

  h3 {
    font-family: var(--heading-font-family);
    font-weight: var(--heading-5-600);
    color: var(--heading-color);
    font-size: 20px;
    text-align: left;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      background-color: var(--brand4) !important;
      font-family: var(--body-font-family);
      font-weight: var(--body-2-500);
      color: var(--brand1);
      font-size: 14px;
    }
  }

  span {
    font-family: var(--heading-font-family);
    font-weight: var(--body-2-500);
    color: var(--grey1);
    font-size: 16px;
  }

  button {
    background-color: var(--brand1);
    border-radius: 4px;
    color: var(--white-fixed);
  }

  .infoDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .infoDiv p {
    background-color: var(--brand4);
    border-radius: 4px;
    padding: 0 8px;
    height: 28px;

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--brand1);
  }
`;

export { Info };
