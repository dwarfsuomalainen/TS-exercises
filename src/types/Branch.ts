import Customer from "./Customer";

export default class Branch {
  private _name: string;
  private _customer: Customer[];

  constructor(name: string) {
    this._name = name;
    this._customer = [];
  }
  public get getName() {
    return this._name;
  }
  public get getCustomers() {
    return this._customer;
  }
  addCustomer(customer: Customer): boolean {
    if (!this._customer.includes(customer)) {
      this._customer.push(customer);
      return true;
    } else {
      return false;
    }
  }
  addCustomerTransaction(id: string, amount: number): boolean {
    const customer = this.findCustomer(id);
    if (customer) {
      customer.addTransactions(amount);
      return true;
    } else {
      return false;
    }
  }

  findCustomer(id: string): Customer | null {
    const customer_search = this._customer.find((cust) => cust.getId === id);
    if (customer_search === undefined) {
      return null;
    } else {
      return customer_search;
    }
  }
}
