import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useRegisterContext } from "../../contexts/registerContext";
import { Button } from "../Button";

const ModalSucessRegister = () => {
  const { modalSucess, sucessToggle } = useRegisterContext();

  const navigate = useNavigate();

  return (
    <>
      <Modal isOpen={modalSucess} toggle={() => sucessToggle()}>
        <ModalHeader toggle={() => sucessToggle()}>
          <h5 className="h5">Sucesso!</h5>
        </ModalHeader>
        <ModalBody style={{ padding: "20px" }}>
          <div>
            <h6 className="h6" style={{ marginBottom: "15px" }}>
              Sua conta foi criada com sucesso!
            </h6>
            <p>
              Agora você poderá ver seus negócios crescendo em grande escala
            </p>
          </div>
        </ModalBody>
        <ModalFooter style={{ justifyContent: "flex-start" }}>
          <Button
            width={150}
            height={40}
            nameButton="Ir para o login"
            backgroundColor="var(--brand1)"
            onClick={() => navigate("/login")}
          />
        </ModalFooter>
      </Modal>
    </>
  );
};

export { ModalSucessRegister };
