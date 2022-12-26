import Transactions from "./transactions";

export default class Customer {
  name: string;
  id: string;
  transactions: Transactions[];

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Math.random() * 100).toString();
    this.transactions = [];
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getTransactions() {
   return this.transactions;
  }
  getBalance() {
    return this.getTransactions().reduce((x, y) => x + y.amount, 0)
  }
  addTransactions(amount: number): boolean {
    if (this.getBalance() + amount < 0) {
        return false

    } else {

        let newTransaction: Transactions = {
            amount: amount,
            date: new Date(),
        }
        this.transactions.push(newTransaction)
        
        return true;
    }
  }
}
