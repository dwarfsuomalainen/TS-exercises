import { Transactions } from "./transactions"

export class Customer {
    name: string 
    id: number
    transactions: Transactions

    constructor (name:string, id: number, transactions: Transactions){
        this.name = name;
        this.id = id;
        this.transactions = transactions;
    }

    get getName() {return}
    get getId() {return}
    get getTransactions() {return}
    getBalance(){
    }
    addTransaction() {}
}