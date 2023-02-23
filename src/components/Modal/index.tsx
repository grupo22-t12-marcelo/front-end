import { ReactNode, useContext, useState } from "react";
import { Button, Modal } from "reactstrap";
import { Footer, Header, Body } from "./styles";
import { ProductContext } from "../../contexts/productContext";

interface IModal {
  titleModal: string;
  bodyModal?: ReactNode;
  footerModal?: ReactNode;
  styleModal?: Object;
}

const ModaL = ({ titleModal, bodyModal, footerModal }: IModal) => {
  //Colocar o useState e o toggle no context para depois conseguir reaproveitar em qualquer outro lugar do código
  //Deixei comentado o button para conseguirem usar desse mesmo modo em outras partes do código

  const { modal, toggle } = useContext(ProductContext);

  return (
    <>
      {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
      <Modal isOpen={modal} toggle={toggle}>
        <Header toggle={toggle}> {titleModal} </Header>
        <Body> {bodyModal} </Body>
        <Footer>{footerModal}</Footer>
      </Modal>
    </>
  );
};

export { ModaL };
