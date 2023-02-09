import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./components/services/api";

interface Transaction{
    id: number;
    title: string;
    value: number;
    type: string;
    category: string;
    createdAt: string;
}


//Esta propriedade no React ser para informar que
//isto é uma tag que se fecha e pode receber outros
//componentes dentro dela sendo pai de todos
interface TransactionsProviderProps{
    children: ReactNode;
}


export const TransactionsContext = createContext<Transaction[]>([]);


export function TransactionsProvider({children}:TransactionsProviderProps){
    //Definindo <Transaction>[] dentro do useState para poder usar o typeScript
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    //Trocamos o fetch por API
    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );

}