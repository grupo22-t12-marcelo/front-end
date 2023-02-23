import { ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import styled from "styled-components";

export const Header = styled(ModalHeader)`
  h5 {
    font-weight: var(--heading-7-600);
    color: var(--grey1);
  }

  border-bottom: none;
`;

export const Body = styled(ModalBody)`
  .content-modal-excluir {
    display: flex;
    flex-direction: column;
    gap: 20px;

    span {
      font-weight: var(--heading-7-600);
      color: black;
    }

    p {
      font-weight: 400;
    }
  }
`;

export const Footer = styled(ModalFooter)`
  border-top: none;

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      padding: 10px 22px;
      border: none;
      border-radius: 4px;
      font-weight: var(--heading-7-600);
    }

    .cancelar {
      background-color: var(--grey6);
      color: var(--grey2);
    }

    .excluir-anuncio {
      background-color: var(--alert2);
      color: var(--alert1);
    }
  }
`;
