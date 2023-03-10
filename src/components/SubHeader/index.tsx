import { useProductContext } from "../../contexts/productContext";
import { useSessionContext } from "../../contexts/sessionContext";
import { IProps } from "../../interfaces";
import { returnAbrevName } from "../../utils/abrevName";
import { Button } from "../Button";
import { InfosUserPage } from "../InfosUserPage";
import { Container, SubHeaderDiv } from "./styles";

const SubHeader: React.FC<IProps> = () => {
  const { setIsModalAnuncio } = useProductContext();
  const { isLogged, userData } = useSessionContext();

  return (
    <>
      {isLogged === true ? (
        <Container>
          <div className="divBlue"></div>
          <div>
            <InfosUserPage
              abrevName={returnAbrevName(userData?.name!)}
              description={userData?.description!}
              name={userData?.name!}
              typeAccount={userData?.type_account!}
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
              <a href="#Carro">
                <button className="button-sub-header">Carros</button>
              </a>
              <a href="#Moto">
                <button className="button-sub-header">Motos</button>
              </a>
            </div>
          </div>
        </SubHeaderDiv>
      )}
    </>
  );
};

export default SubHeader;
