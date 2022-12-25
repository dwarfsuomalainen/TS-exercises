import { Branch } from "./branches";

export default class Bank {
  private name: string;
  private branch: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branch = [];
  }
  addBranch(branch: Branch): boolean {
    if (this.checkBranch(branch)) return false;
    this.branch.push(branch);
    return true;
  }

  addCustomer() {}

  addCustomerTransaction() {}

  findBranchByName() {}

  checkBranch(branch: Branch): boolean {
    if (!this.branch.includes(branch)) {
      return false;
    } else {
      return true;
    }
  }

  listCustomers() {}
}
