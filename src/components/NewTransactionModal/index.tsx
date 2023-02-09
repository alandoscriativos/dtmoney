import Modal from 'react-modal';
import { CloseButton, Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/Icons.svg'
import outcomeImg from '../../assets/saida.svg'
import incomeImg from '../../assets/entrada.svg'
import { useState } from 'react';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps){
    
    const [type, setType] = useState('deposito');

    
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

            <TransactionTypeContainer>
                <RadioBox
                type='button'
                onClick={()=>{setType('deposito')}}
                isActive={type === 'deposito'}
                activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>
                
                <RadioBox
                type='button'
                onClick={()=>{setType('retirada')}}
                isActive={type === 'retirada'}
                activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

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