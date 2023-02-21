import mShopBranco from "../../assets/Motors shopBranco.png";
import { DivFooter } from "./styles";

const Footer = () => {
    return (
        <DivFooter>
            <img src={mShopBranco}/>
            <p>© 2022 -  Todos os direitos reservados.</p>
            <button className="btn-footer">^</button>
        </DivFooter>
        
    );
}

export default Footer