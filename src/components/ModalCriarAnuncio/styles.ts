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
  height: 50%;

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
    }
  }
`;

export const Form = styled.form`
  .tipo-anuncio {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      width: max-content;
      margin: 0 0 0 20px;
      font-size: 14px;
      font-weight: var(--heading-2-600);
    }

    div {
      display: flex;
      width: max-content;
      margin: 0 auto;
      gap: 10px;

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
  }
`;
