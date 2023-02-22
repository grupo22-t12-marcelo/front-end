import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.section`
  width: 90%;
  height: max-content;
  padding-bottom: 20px;
  border-radius: 8px;

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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
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

    input {
      display: none;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
    }

    span {
      width: 152.5px;
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
        padding-left: 15px;
        color: black;
        resize: none;
      }
    }
  }

  .div-dados-veiculo {
    display: flex;
    width: 90%;

    label {
      input {
        width: 140px;
      }
    }
  }
`;
