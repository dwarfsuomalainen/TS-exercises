import Customer from "./Customer";

export default class Branch {
  private name: string;
  private customer: Customer[];

  constructor(name: string) {
    this.name = name;
    this.customer = [];
  }
  getName() {
    return this.name;
  }
  getCustomers() {
    return this.customer;
  }
  addCustomer(customer: Customer): boolean {
    if (!this.customer.includes(customer)) {
      this.customer.push(customer);
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
    const customer_search = this.customer.find((cust) => cust.getId() === id);
    if (customer_search === undefined) {
      return null;
    } else {
      return customer_search;
    }
  }
}
