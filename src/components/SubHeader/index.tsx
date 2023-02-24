import { useProductContext } from "../../contexts/productContext";
import { IProps } from "../../interfaces";
import { InfosUserPage } from "../InfosUserPage";
import { Container, SubHeaderDiv } from "./styles";


const SubHeader: React.FC<IProps> = () => {
   const { isLogged } = useProductContext();

  return (
    <>
      {isLogged=== true?

      (<Container>
        <div className="divBlue"></div>
        <div>
          <InfosUserPage
            abrevName="J"
            name="João"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
        </div>
      </Container>)
      :
      (<SubHeaderDiv>
          <div className="info-sem-logar">
                  <h1 className="sub-herder-title">Velocidade e experiência em um lugar feito para você</h1>
                  <p className="sub-header-subtitle">Um ambiente feito para você explorar o seu melhor</p>
                  <div className="div-buttons-sub-header">
                      <button className="button-sub-header">Carros</button>
                      <button className="button-sub-header">Motos</button>
                  </div>
              </div> 

      </SubHeaderDiv>)}
    </>
  );
};

export default SubHeader;
