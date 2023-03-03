import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { IProps } from "../../interfaces";
import { Button } from "../Button";
import { InfosUserPage } from "../InfosUserPage";
import { Container, SubHeaderDiv } from "./styles";

const SubHeader: React.FC<IProps> = () => {
  const { setIsModalAnuncio } = useProductContext();
  const { isLogged } = useSessionContext();

  return (
    <>
      {isLogged === true ? (
        <Container>
          <div className="divBlue"></div>
          <div>
            <InfosUserPage
              children={
                <Button
                  onClick={() => setIsModalAnuncio(true)}
                  color="var(--brand1)"
                  nameButton="Criar anúncio"
                  backgroundColor="var(--grey10)"
                  width={160}
                  height={48}
                  borderColor="var(--brand1)"
                  type="button"
                />
              }
            />
          </div>
        </Container>
      ) : (
        <SubHeaderDiv>
          <div className="info-sem-logar">
            <h1 className="sub-herder-title">
              Velocidade e experiência em um lugar feito para você
            </h1>
            <p className="sub-header-subtitle">
              Um ambiente feito para você explorar o seu melhor
            </p>
            <div className="div-buttons-sub-header">
              <button className="button-sub-header">Carros</button>
              <button className="button-sub-header">Motos</button>
            </div>
          </div>
        </SubHeaderDiv>
      )}
    </>
  );
};

export default SubHeader;
