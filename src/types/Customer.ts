import { Transactions } from "./transactions";

export class Customer {
  name: string;
  id: number;
  transactions: Transactions[];

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Math.random() * 100);
    this.transactions = [];
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getTransactions() {
    return;
  }
  getBalance() {}
  addTransaction() {}
}
