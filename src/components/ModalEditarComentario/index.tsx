import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "reactstrap";
import { CommentsContext } from "../../contexts/commentsContext";
import { ICommentRequest } from '../../interfaces';
import { schemaComments } from '../../validators/schemas';
import { Form } from '../ModalEditarAnuncio/styles';
import { Background, Modal } from "./styles";

const EditarComentario = () => {

    const { editComment ,setOpenModalEditComments, idComment } = useContext(CommentsContext)
    const { setIsModalExcluirComentario, placeholderComment } = useContext(CommentsContext)

    const { register, handleSubmit } = useForm<ICommentRequest>({
        resolver: yupResolver(schemaComments),
    });

    const editarComment = (data: ICommentRequest) =>{
        console.log(data)
        const newObj = {
            ...data,
            id:idComment
        }
        editComment(newObj)
    }

    const excludeCommentModal = () =>{
        setIsModalExcluirComentario(true)
        setOpenModalEditComments(false)
    }


    return (
        <Background>
            <Modal>
                <Form onSubmit={handleSubmit(editarComment)}>
                <label>
                    <p>Novo comentário</p>
                    <textarea
                      placeholder={placeholderComment}
                      {...register("comment")}
                    ></textarea>
                  </label>
                  <div className='btns-modal-edit-comentario'>
                    <Button type='submit' className="sim">Editar</Button>
                    <Button className="nao" onClick={() => setOpenModalEditComments(false)}>Sair</Button>
                    <Button className="excluir" onClick={() => excludeCommentModal()}>Excluir</Button>
                  </div>
                </Form>

            </Modal>
        </Background>
    )
}

export default EditarComentario

