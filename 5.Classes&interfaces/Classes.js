"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        var _this = this;
        this.id = id;
        this.name = name;
        this.employees = [];
        this.printEmployees = function () {
            console.log("Employee: " + _this.employees.length);
            console.log("Employee: " + _this.employees);
        };
        this.id = id;
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: ".concat(this.name, ", id: ").concat(this.id));
    };
    Department.prototype.addEmployee = function (employee) {
        //   validation etc...
        this.employees.push(employee);
    };
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    };
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.printName = function () {
        console.log("Department name: ".concat(this.name, ", id: ").concat(this.id));
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee("This Dude");
console.log(employee1);
console.log(employee1, Department.fiscalYear);
var ItDep = new ITDepartment("ID2", ["Max", "Manu"]);
var accountingDep = AccountingDepartment.getInstance();
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
