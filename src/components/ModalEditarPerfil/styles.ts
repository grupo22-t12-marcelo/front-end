import styled from "styled-components";
import { Label } from "reactstrap";

export const DivModal = styled.div`
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;
  overflow-y: scroll;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
  z-index: 6;
  padding: 50px 0;
`;

export const Background = styled.section`
  /* width: 90%; */
  height: max-content;
  padding-bottom: 20px;
  border-radius: 8px;
  margin: auto;

  background-color: var(--white-fixed);

  @media screen and (max-width: 650px) {
    width: 90%;
  }
`;

export const Body = styled.div`
  width: 90%;
  height: max-content;
  background-color: var(--white-fixed);
  border-radius: 4px;

  margin-top: 50px;

  @media screen and (min-width: 641px) {
    width: 520px;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }

  .header {
    width: 90%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    margin: auto auto;
    align-items: center;

    h4 {
      font-size: 18px;
      font-weight: var(--heading-7-500);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .content {
    width: 90%;
    margin: 30px auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    h5 {
      font-size: 16px;
      font-weight: var(--heading-7-500);
    }
  }
`;

export const Form = styled.form`
  width: 90%;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;

  Label {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 0 auto;

    justify-content: flex-start;

    span {
      width: max-content;
    }

    input {
      border: var(--grey7) solid 1.5px;
      height: 48px;
      border-radius: 4px;
      padding-left: 10px;
      background-color: transparent;
      color: black;
    }

    textarea {
      border: var(--grey7) solid 1.5px;
      height: 80px;
      border-radius: 4px;
      padding: 10px;
      background-color: transparent;
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      height: 48px;
      font-size: 16px;
      font-weight: var(--heading-7-600);
    }

    .excluir {
      background-color: var(--alert2);
      color: var(--alert1);
      border: 1.5px solid transparent;
    }

    .salvar {
      color: var(--white-fixed);
      background-color: var(--brand1);
      border: 1.5px solid var(--brand1);
    }
  }
`;
