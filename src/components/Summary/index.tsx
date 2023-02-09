import saidaImg from '../../assets/saida.svg'
import entradaImg from '../../assets/entrada.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary () {
    return (
        <Container>
            <div>
                <header className='header-flex'>
                    <p>Entradas</p>
                    <img src={entradaImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidaImg} alt="Saídas" />
                </header>
                <strong>- R$5000,00</strong>
            </div>
            <div className='background-color-total'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}