import Modal from 'react-modal';
import { CloseButton, Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/Icons.svg'
import outcomeImg from '../../assets/saida.svg'
import incomeImg from '../../assets/entrada.svg'
import { FormEvent, useState } from 'react';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactionModalProps){
    
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposito');

    //Quando for Formulario sempre usar o Event: FormEvent
    //event.preventeDefault();
    function handleCreateNewTable(event: FormEvent){
        event.preventDefault();
    }    

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
        <Container onSubmit={handleCreateNewTable}>
            <h2>Cadastrar transação</h2>
            <input
                placeholder='Titulo'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
        //neste input de Valor, algo interessante o useState sempre 
        //retorna uma string então passamos um Number por fora para converter em number
            <input
            type="number"
                placeholder='Valor'
                value={value}
                onChange={event => setValue(Number(event.target.value))}
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