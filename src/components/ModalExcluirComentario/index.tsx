import { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from "reactstrap";
import { CommentsContext } from "../../contexts/commentsContext";
import { Background, Modal } from "./styles";

const ExcluirComentario = () => {

    const { setIsModalExcluirComentario, idComment, excludeComment  } = useContext(CommentsContext)

    

    return (
        <Background>
            <Modal>
                <div className="header">
                    <h4>Excluir comentario</h4>
                    <AiOutlineClose style={{cursor: 'pointer'}}/>
                </div>
                <div className="content">
                    <span>Tem certeza que deseja excluir seu comentário?</span>
                    <div>
                        <Button className="nao" onClick={() => setIsModalExcluirComentario(false)}>Não</Button>
                        <Button className="sim" onClick={()=>excludeComment(idComment)}>Sim</Button>
                    </div>
                </div>
            </Modal>
        </Background>
    )
}

export default ExcluirComentario

