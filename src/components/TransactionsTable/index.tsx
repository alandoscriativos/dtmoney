import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export function TransactionsTable (){

    //Trocamos o fetch por API
    useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposito">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/12/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="retirada">- R$1.100</td>
                        <td>Casa</td>
                        <td>20/12/2023</td>
                    </tr>
                    <tr>
                        <td>Wesley</td>
                        <td className="retirada">- R$100</td>
                        <td>Rolezinho</td>
                        <td>20/12/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}