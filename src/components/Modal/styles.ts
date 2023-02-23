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

`;

export const Footer = styled(ModalFooter)`
  border-top: none;
`;
