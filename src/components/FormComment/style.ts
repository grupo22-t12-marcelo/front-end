import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--grey10);
  padding: 28px;
  gap: 24px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 0 !important;

    div {
      width: 32px;
      height: 32px;
      color: var(--white-fixed);
    }

    h5 {
      font-family: var(--body-font-family);
      font-weight: var(--body-2-500);
      color: var(--grey1);
      font-size: 14px;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  .lance {
    height: 15px;
    width: 300px;
    border: 1.5px solid var(--grey7);
    border-radius: 4px;
  }

  .lance::placeholder {
    font-family: var(--body-font-family);
    font-weight: var(--body-2-400);
    color: var(--grey3);
    font-size: 16px;
  }

  #exampleText {
    border: 1.5px solid var(--grey7);
    border-radius: 4px;
    width: 250px;
    height: 128px;

    @media (min-width: 768px) {
      width: 500px;
    }

    @media (min-width: 1440px) {
      width: 500px;
    }
  }

  #exampleText::placeholder {
    font-family: var(--body-font-family);
    font-weight: var(--body-2-400);
    color: var(--grey3);
    font-size: 16px;
  }

  button {
    background-color: var(--brand1);
    border-radius: 4px;
    color: var(--white-fixed);
  }
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;

  span {
    background-color: var(--grey7) !important;
    border-radius: 24px;
    font-family: var(--body-font-family);
    font-weight: var(--body-2-500);
    font-size: 12px;
    color: var(--grey3);
    padding: 5px 12px;
  }
`;
export { Form, Badges };

