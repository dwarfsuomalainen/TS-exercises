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

  addCustomer(branchName: string, name:string) {}

  addCustomerTransaction() {}

  findBranchByName(name:string) {}

  checkBranch(branch: Branch): boolean {
    if (this.branch.includes(branch)) {
      return true;
    } else {
      return false;
    }
  }

  listCustomers() {}
}
