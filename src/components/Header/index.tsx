import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'


interface HeaderPros {
    onOpenNewTransactionModal: () => void;
}

export function Header ({onOpenNewTransactionModal}: HeaderPros) {

    return (
        <Container>
            <Content>
                    <img src={logoImg} alt="dt money" />
                    <button type="button" onClick={onOpenNewTransactionModal}>
                        Nova Transação
                    </button>
            </Content>
        </Container>
    )
}