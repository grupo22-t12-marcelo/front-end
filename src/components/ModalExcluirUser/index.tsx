import { Background, Modal } from "./styles"
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from "reactstrap";
import { useContext } from 'react';
import { ProductContext } from './../../contexts/productContext';

const ExcluirUser = () => {

    const { setIsModalExcluirPerfil } = useContext(ProductContext)

    return (
        <Background>
            <Modal>
                <div className="header">
                    <h4>Excluir perfil</h4>
                    <AiOutlineClose style={{cursor: 'pointer'}}/>
                </div>
                <div className="content">
                    <span>Tem certeza que deseja excluir seu perfil?</span>
                    <div>
                        <Button className="nao" onClick={() => setIsModalExcluirPerfil(false)}>Não</Button>
                        <Button className="sim">Sim</Button>
                    </div>
                </div>
            </Modal>
        </Background>
    )
}

export default ExcluirUser

