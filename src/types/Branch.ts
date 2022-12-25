import { Customer } from "./Customer";

export class Branch {
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
  addCustomerTransaction() {
    return;
  }

  findCustomer() {
    return;
  }
}
