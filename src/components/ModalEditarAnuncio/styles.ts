import { Button } from "reactstrap";
import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 100vw;
  height: 110vh;

  top: 0;
  left: 0;
  overflow-y: scroll;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
  z-index: 6;
  padding: 150px 0;
`;

export const ButtonSave = styled(Button)`
  width: 50%;
`;

export const Modal = styled.section`
  width: 90%;
  height: max-content;
  padding-bottom: 20px;
  border-radius: 8px;
  margin: 100px 0;
  margin: auto 0;

  background-color: var(--white-fixed);

  .header-modal {
    width: 90%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 30px;

    h3 {
      font-weight: var(--heading-1-700);
      font-size: 16px;
      color: black;
    }
  }

  @media screen and (min-width: 578px) {
    width: 520px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .adicionar-input {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0 auto;
    font-weight: var(--heading-7-600);
    font-size: 13.5px;

    width: 90%;
    height: 38px;

    background-color: var(--brand4);
    color: var(--brand1);
  }

  .buttons {
    width: 90%;

    display: flex;
    margin: 0 auto;
    justify-content: space-between;

    button {
      width: 45%;
      height: 58px;
      border: none;

      @media screen and (min-width: 432px) {
        height: 48px;
      }
    }

    .cancelar {
      color: var(--grey2);
      background-color: var(--grey6);
      font-weight: var(--heading-2-600);
    }
    .criar {
      background-color: var(--brand3);
      color: var(--brand4);
      font-weight: var(--heading-2-600);
    }
  }
`;

export const TipoAnuncio = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    width: max-content;
    margin: 0 0 0 16px;
    font-size: 14px;
    font-weight: var(--heading-2-600);
    color: black;
  }

  div {
    display: flex;
    width: max-content;
    margin: 0 auto;
    gap: 7px;
    width: 90%;

    input {
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 48px;

      color: var(--grey0);
      font-weight: var(--heading-2-600);
      border-radius: 4px;
      border: 2px solid var(--grey4);
      cursor: pointer;
    }

    input:checked + span {
      color: var(--white-fixed);
      border: 2px solid transparent;
      background-color: var(--brand1);
    }
  }
`;

export const InformacoesVeiculo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    width: max-content;
    margin: 0 0 0 16px;
    font-size: 14px;
    font-weight: var(--heading-2-600);
    color: black;
    margin-bottom: 10px;
  }

  .div-informacoes {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    label {
      display: flex;
      flex-direction: column;
      gap: 3px;
      width: 90%;

      span {
        max-width: max-content;
        font-weight: var(--heading-2-600);
        font-size: 14px;
        color: black;
      }

      input {
        background-color: transparent;
        height: 48px;
        border-radius: 4px;
        border: 2px solid var(--grey7);
        padding-left: 15px;
        color: black;
      }

      textarea {
        height: 80px;
        background-color: transparent;
        border-radius: 4px;
        border: 2px solid var(--grey7);
        padding: 10px;
        color: black;
        resize: none;
      }
    }
  }

  .div-dados-veiculo {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;

    div {
      width: 100%;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;

      label {
        display: flex;
        width: 47%;
        input {
          width: 100%;
        }
      }
    }

    label {
      width: 100%;
    }

    @media screen and (min-width: 578px) {
      justify-content: center;
      flex-direction: row;
      gap: 17px;

      label {
        width: 30%;
        input {
          width: 140px;
        }
      }
    }
  }
`;

export const TipoVeiculo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    width: max-content;
    margin: 0 0 0 16px;
    font-size: 14px;
    font-weight: var(--heading-2-600);
    color: black;
  }

  div {
    display: flex;
    width: max-content;
    margin: 0 auto;
    gap: 7px;
    width: 90%;

    input {
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 48px;

      color: var(--grey0);
      font-weight: var(--heading-2-600);
      border-radius: 4px;
      border: 2px solid var(--grey4);
      cursor: pointer;
    }

    input:checked + span {
      color: var(--white-fixed);
      border: 2px solid transparent;
      background-color: var(--brand1);
    }
  }
`;

export const DivImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  label {
    width: 90%;
    gap: 3px;
    display: flex;
    flex-direction: column;

    input {
      background-color: transparent;
      height: 48px;
      border-radius: 4px;
      border: 2px solid var(--grey7);
      padding-left: 15px;
      color: black;
    }

    span {
      max-width: max-content;
      font-weight: var(--heading-2-600);
      font-size: 14px;
      color: black;
    }
  }
`;
