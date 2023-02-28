import { Button } from "../Button";
import { ModaL } from "../Modal";

const ModalSucessRegister = () => {
  return (
    <div>
      <ModaL
        titleModal="Sucesso!"
        bodyModal={
          <div>
            <h4>Sua conta foi criada com sucesso!</h4>
            <p>
              Agora você poderá ver seus negócios crescendo em grande escala
            </p>
          </div>
        }
        footerModal={
          <Button height={50} nameButton="Ir para o login" width={150} />
        }
      />
    </div>
  );
};

export { ModalSucessRegister };
