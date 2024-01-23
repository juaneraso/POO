class Company {
  constructor(name) {
    let employees = [];
    this.name = name;

    this.getEmployees = function () {
      return employees;
    };

    this.addEmployees = function (employee) {
      employees.push(employee);
    };
  }
}

const company1 = new Company("Pepsi");
const company2 = new Company("COCA-COLA");
company1.addEmployees("Juan");
company2.addEmployees("Joe");

console.log(company1.getEmployees());
console.log(company2.getEmployees());
