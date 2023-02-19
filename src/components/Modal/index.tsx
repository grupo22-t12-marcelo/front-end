import { ReactNode, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ModalDiv } from "./styles";

interface IModal {
  titleModal: string;
  bodyModal?: ReactNode;
  footerModal?: ReactNode;
}

const ModaL = ({ titleModal, bodyModal, footerModal }: IModal) => {
  //Colocar o useState e o toggle no context para depois conseguir reaproveitar em qualquer outro lugar do código
  //Deixei comentado o button para conseguirem usar desse mesmo modo em outras partes do código
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <ModalDiv>
      {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> {titleModal} </ModalHeader>
        <ModalBody> {bodyModal} </ModalBody>
        <ModalFooter>{footerModal}</ModalFooter>
      </Modal>
    </ModalDiv>
  );
};

export { ModaL };
