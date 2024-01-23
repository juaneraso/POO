const company = {
  name: "fazt tech",
  employees: [],
};

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const juan = new Person("Juan", "Jimenez");

const guillo = new Person("Guillermo", "Fernandez");

console.log(juan);
console.log(guillo);

company.employees.push(juan, guillo);
// company.employees.push(guillo);

console.log(company);
