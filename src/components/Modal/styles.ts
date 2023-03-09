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
  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const Footer = styled(ModalFooter)`
  border-top: none;
`;
