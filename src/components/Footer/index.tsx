import { useState } from "react";
import mShopBranco from "../../assets/Motors shopBranco.png";
import { DivFooter } from "./styles";

const Footer = () => {
const [ pageYPosition, setPageYPosition ] = useState(0);

function getPageYAfterScroll(){
    setPageYPosition(window.scrollY);
}

window.addEventListener('scroll', getPageYAfterScroll);
    return (
        <DivFooter>
            <img src={mShopBranco}/>
            <p>© 2022 -  Todos os direitos reservados.</p>
            <a className="btn-footer" href="#container" >^</a>
        </DivFooter>
        
    );
}

export default Footer