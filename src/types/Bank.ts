import Branch from "./Branch";
import Customer from "./Customer";


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

  addCustomer(branch: Branch, customer: Customer) {
    if (this.checkBranch(branch)) {
      branch.addCustomer(customer);
    } else {
      return false;
    }
  }

  addCustomerTransaction(branch: Branch, id: string, amount:number): boolean {
  const customer = branch.findCustomer(id)
    if(customer) {
    customer.addTransactions(amount)
    return true
  }else{
    return false
  }
  }

  findBranchByName(name: string): Branch[] | null {
    const br_search = this.branch.filter((br) =>
      br.getName().toLowerCase().includes(name.toLowerCase())
    );
    if (br_search.length === 0) {
      return null;
    } else {
      return br_search;
    }
  }

  checkBranch(branch: Branch): boolean {
    if (this.branch.includes(branch)) {
      return true;
    } else {
      return false;
    }
  }

  listCustomers(branch: Branch, isTrue: boolean): boolean {
    if(!this.checkBranch(branch)) {
      return false
  }
  if (isTrue) {
      console.log(branch.getCustomers().map(customer => ({
          name: customer.getName(), 
          transactions: customer.getTransactions().map(transaction => 
              `Amount: ${transaction.amount}, Date: ${transaction.date.toDateString()}`)
          })
      ));
  } else {
      
      console.log(branch.getCustomers().map(customer => customer.getName()))
  }

  return true
  }
}
