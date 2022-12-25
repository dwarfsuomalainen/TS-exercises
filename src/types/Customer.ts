import { Transactions } from "./transactions";

export class Customer {
  name: string;
  id: number;
  transactions: Transactions[];

  constructor(name: string, id: number, _transactions: Transactions) {
    this.name = name;
    this.id = id;
    this.transactions = [];
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  get getTransactions() {
    return;
  }
  getBalance() {}
  addTransaction() {}
}
