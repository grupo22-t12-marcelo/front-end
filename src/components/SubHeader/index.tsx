import { IProps } from "../../interfaces";
import { SubHeaderDiv } from "./styles";


const SubHeader: React.FC<IProps> = ({children}:IProps) => {
  return (
    <SubHeaderDiv>
      {children?
      (<>
        {children}
      </>)
      :
      ( <div className="info-sem-logar">
                <h1 className="sub-herder-title">Velocidade e experiência em um lugar feito para você</h1>
                <p className="sub-header-subtitle">Um ambiente feito para você explorar o seu melhor</p>
                <div className="div-buttons-sub-header">
                    <button className="button-sub-header">Carros</button>
                    <button className="button-sub-header">Motos</button>
                </div>
            </div> )}
    </SubHeaderDiv>
  );
};

export default SubHeader;
