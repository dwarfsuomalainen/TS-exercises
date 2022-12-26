import Transactions from "./transactions";

export default class Customer {
  private _name: string;
  private _id: string;
  transactions: Transactions[];

  constructor(name: string) {
    this._name = name;
    this._id = Math.floor(Math.random() * 100).toString();
    this.transactions = [];
  }

  public get getName() {
    return this._name;
  }
  public get getId() {
    return this._id;
  }
  getTransactions() {
    return this.transactions;
  }
  getBalance() {
    return this.getTransactions().reduce((x, y) => x + y.amount, 0);
  }
  addTransactions(amount: number): boolean {
    if (this.getBalance() + amount < 0) {
      return false;
    } else {
      let newTransaction: Transactions = {
        amount: amount,
        date: new Date(),
      };
      this.transactions.push(newTransaction);

      return true;
    }
  }
}
