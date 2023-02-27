import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--grey10);
  padding: 28px;
  gap: 5px;

  h3 {
    font-family: var(--heading-font-family);
    font-weight: var(--heading-3-500);
    font-size: 24px;
    color: #000000;
    margin-bottom: 20px;
  }

  .mb-3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      font-family: var(--body-font-family);
      font-weight: var(--body-2-500);
      font-size: 14px;
      color: var(--grey1);
    }

    input {
      border: 1.5px solid var(--grey7);
      border-radius: 4px;
    }

    input::placeholder {
      font-family: var(--body-font-family);
      font-weight: var(--body-2-400);
      font-size: 16px;
      color: var(--grey3);
    }
  }

  span:first-of-type {
    font-family: var(--body-font-family);
    font-weight: var(--body-2-500);
    font-size: 14px;
    color: var(--grey2);
    align-self: flex-end;
  }

  button:first-of-type {
    background-color: var(--brand1);
    border: 1.5px solid var(--brand1);
    border-radius: 4px;
    width: 100%;
    margin: 20px 0;
    color: var(--white-fixed);
  }

  span {
    font-family: var(--body-font-family);
    font-weight: var(--body-2-400);
    font-size: 14px;
    color: var(--grey2);
    align-self: center;
  }

  button {
    background-color: var(--white-fixed);
    border: 1.5px solid var(--grey4);
    border-radius: 4px;
    width: 100%;
    margin: 20px 0;
    font-family: var(--button-font-family);
    font-weight: var(--body-1-600);
    font-size: var(--button-big-text);
    color: var(--grey0);
  }
`;

export { Form };
