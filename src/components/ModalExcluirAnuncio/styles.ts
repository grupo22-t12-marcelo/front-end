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
  height: 200px;
  border-radius: 4px;

  @media screen and (min-width: 485px) {
    width: 436px;
  }

  .header {
    width: 90%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;

    h4 {
      font-size: 16px;
      font-weight: var(--heading-7-500);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .content {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 20px;
    margin-top: 20px;

    span {
      width: 90%;
      flex-wrap: wrap;
      font-weight: var(--heading-7-500);
    }

    div {
      display: flex;
      gap: 20px;

      button {
        border: solid 2px transparent;
        width: 120px;
      }

      .nao {
        font-weight: var(--heading-7-600);
        color: var(--grey2);
        background-color: var(--grey6);
      }

      .sim {
        background-color: var(--brand1);
        font-weight: var(--heading-7-600);
      }
    }
  }
`;
