import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useProductContext } from "../../contexts/productContext";

import { ReactNode, useContext } from "react";

import { Footer, Header, Body } from "./styles";

interface IModal {
  titleModal: string;
  bodyModal?: ReactNode;
  footerModal?: ReactNode;
}

const ModaL = ({ titleModal, bodyModal, footerModal }: IModal) => {
  const { modal, setModal, toggle } = useProductContext();

  return (
    <>
      <Modal isOpen={modal} toggle={() => toggle("")}>
        <ModalHeader toggle={() => toggle("")}> {titleModal} </ModalHeader>
        <ModalBody>{bodyModal}</ModalBody>
        <ModalFooter>{footerModal}</ModalFooter>
      </Modal>
    </>
  );
};

export { ModaL };
