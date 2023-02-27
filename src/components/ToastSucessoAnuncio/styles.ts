import { ToastBody, ToastHeader, Toast } from "reactstrap";
import styled, { keyframes } from "styled-components";

const animationModal = keyframes`
0%{transform:translateY(-500px);animation-timing-function:ease-in;opacity:0}38%{transform:translateY(0);animation-timing-function:ease-out;opacity:1}55%{transform:translateY(-65px);animation-timing-function:ease-in}72%{transform:translateY(0);animation-timing-function:ease-out}81%{transform:translateY(-28px);animation-timing-function:ease-in}90%{transform:translateY(0);animation-timing-function:ease-out}95%{transform:translateY(-8px);animation-timing-function:ease-in}100%{transform:translateY(0);animation-timing-function:ease-out}

`;

export const Body = styled(ToastBody)`
  background-color: var(--white-fixed);
  border-radius: 0 0 4px 4px;
`;

export const Header = styled(ToastHeader)`
  background-color: var(--white-fixed);
  border-bottom: none;
`;

export const ContainerToast = styled(Toast)`
  width: 90%;

  animation: ${animationModal} 1s;
  @media screen and (min-width: 580px) {
    width: 520px;
  }
`;

export const Background = styled.div`
  width: 100vw;
  height: 110vh;

  padding-top: 50px;
  top: 0;
  left: 0;
  overflow-y: scroll;

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: rgba(0, 0, 0, 0.5);
  z-index: 5;

  strong {
    width: 100%;

    .content-header {
      background-color: var(--white-fixed);

      display: flex;
      align-items: center;
      justify-content: space-between;

      h5 {
        color: var(--grey1);
        font-weight: var(--heading-7-500);
        font-size: 16px;
      }

      svg {
        cursor: pointer;
        width: 1.5em;
        height: 1.5em;
      }
    }
  }

  .content-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 0;

    h2 {
      color: var(--grey1);
      font-weight: var(--heading-7-600);
      font-size: 16px;
      text-align: start;
    }

    span {
      display: flex;
      color: var(--grey2);
      font-size: 16px;
      font-weight: var(--heading-7-400);
      text-align: start;
    }
  }
`;
