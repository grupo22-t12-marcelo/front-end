import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--grey10);
  padding: 40px;
  gap: 5px;
  width: 412px;

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
    width: 100%;

    label {
      font-family: var(--body-font-family);
      font-weight: var(--body-2-500);
      font-size: 14px;
      color: var(--grey1);
    }

    input {
      border-radius: 4px;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      -webkit-appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0.375rem;
    }

    input::placeholder {
      font-family: var(--body-font-family);
      font-weight: var(--body-2-400);
      font-size: 16px;
      color: var(--grey3);
    }

    input:focus {
      border: 1.5px solid var(--brand2) !important;
      border-radius: 4px;
      outline: none;
    }
  }

  span:first-of-type {
    font-family: var(--body-font-family);
    font-weight: var(--body-2-500);
    font-size: 14px;
    color: var(--grey2);
    align-self: flex-start;
    cursor: pointer;
  }

  span:first-of-type:hover {
    color: var(--brand1);
  }

  button:first-of-type {
    background-color: var(--brand1);
    border: 1.5px solid var(--brand1);
    border-radius: 4px;
    width: 100%;
    margin: 20px 0;
    color: var(--white-fixed);
  }

  button:first-of-type:hover {
    color: var(--white-fixed);
    background-color: var(--brand2);
    border-color: var(--brand2);
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

  button:hover {
    color: var(--white-fixed);
    background-color: var(--grey1);
    border-color: var(--grey1);
  }
`;

export { Form };
