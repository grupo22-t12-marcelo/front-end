import styled from "styled-components";

export const Background = styled.section`
  width: 100vw;
  height: 110vh;

  top: 0;
  left: 0;
  overflow-y: scroll;

  position: fixed;
  display: flex;
  justify-content: center;
  padding-top: 150px;

  background: rgba(0, 0, 0, 0.5);
  z-index: 6;
`;

export const Modal = styled.div`
  background-color: var(--white-fixed);

  width: 90%;
  height: 180px;
  border-radius: 4px;


  @media screen and (min-width: 485px) {
    
    width: 436px;
    
  }

  form {
    width: 90%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    gap: 15px;

    textarea{
      background-color: var(--grey10);
      color: var(--grey1);
      width: 300px;
      margin-top: 10px;
    }
    .btns-modal-edit-comentario{
      
    }

  }


    div {

      display: flex;
      gap: 20px;

      button{ 
        border: solid 2px transparent;
        width: 80px;
      }

      .nao {
        font-weight: var(--heading-7-600);
        color: var(--grey2);
        background-color: var(--grey6);
      }

      .sim{
        background-color: var(--brand1);
        font-weight: var(--heading-7-600);

      }
      .excluir{
        background-color: var(--alert2);
      }
    }
`;
