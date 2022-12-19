import { Branch } from "./branches";

export class Bank {
  private name: string;
  private branch: Branch;
  constructor(name: string, branch: Branch) {
    this.name = name;
    this.branch = branch;
  }
  addBranch() {}

  addCustomer() {}

  addCustomerTransaction() {}

  findBranchByName() {}

  checkBranch() {}

  listCustomers() {}
}
