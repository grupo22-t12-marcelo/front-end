import styled from "styled-components";

export const Background = styled.section`
  width: 100vw;
  height: 110vh;

  top: 0;
  left: 0;

  position: fixed;
  display: flex;
  justify-content: center;
  padding-top: 50px;

  background: rgba(0, 0, 0, 0.5);
  z-index: 6;
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
  }

  .div-content {
    display: flex;
    justify-content: space-between;

    label {
      width: 47%;
      margin: 0;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      height: 48px;
      font-size: 16px;
      font-weight: var(--heading-7-600);
    }

    .cancelar {
      background-color: var(--grey6);
      color: var(--grey2);
      border: 1.5px solid var(--grey6);
    }

    .salvar {
      color: var(--white-fixed);
      background-color: var(--brand1);
      border: 1.5px solid var(--brand1);
    }
  }
`;
