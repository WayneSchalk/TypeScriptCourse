abstract class Department {
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(protected readonly id: string, protected name: string) {
    this.id = id;
    this.name = name;
  }

  printName(this: Department) {
    console.log(`Department name: ${this.name}, id: ${this.id}`);
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    //   validation etc...
    this.employees.push(employee);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  printEmployees = () => {
    console.log("Employee: " + this.employees.length);
    console.log("Employee: " + this.employees);
  };
}

class ITDepartment extends Department {
  describe() {
    console.log("IT Department - ID: " + this.id);
  }

  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  describe() {
    console.log("IT Department - ID: " + this.id);
  }

  private static instance: AccountingDepartment;

  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  printReports() {
    console.log(this.reports);
  }
  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  printName() {
    console.log(`Department name: ${this.name}, id: ${this.id}`);
  }
}

const employee1 = Department.createEmployee("This Dude");

console.log(employee1);
console.log(employee1, Department.fiscalYear);

const ItDep = new ITDepartment("ID2", ["Max", "Manu"]);

const accountingDep = AccountingDepartment.getInstance();

accountingDep.mostRecentReport = "sdf";

accountingDep.addReport("Something");

accountingDep.printReports();

accountingDep.addEmployee("Max");
accountingDep.addEmployee("Wayne");

ItDep.printName();
ItDep.addEmployee("new Employee");
ItDep.addEmployee("new Employee 2");
ItDep.printEmployees();

console.log(ItDep);
console.log(accountingDep);

accountingDep.printName();
