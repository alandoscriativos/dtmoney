import Modal from 'react-modal';
import { CloseButton, Container } from './styles';
import closeImg from '../../assets/Icons.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps){
    return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >   
        <CloseButton>
            <img onClick={onRequestClose}
             src={closeImg} alt="fechar" 
             title='Fechar'/>
        </CloseButton>
        <Container>
            <h2>Cadastrar transação</h2>
            <input
                placeholder='Titulo'
            />

            <input
            type="number"
                placeholder='Valor'
            />

            <input
                placeholder='Categoria'
            />

            <button title='Cadastrar' type="submit">
                Cadastrar
            </button>

        </Container>
    </Modal>
    );
}