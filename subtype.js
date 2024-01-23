class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class Programmer extends Person {
  constructor(name, lastname, language) {
    super(name, lastname);
    this.language = language;
  }
}

const person = new Person("Jhon", "Reynolds");
const programmer = new Programmer("Pepe", "Simpson", "Java");

console.log(person);
console.log(programmer);

function writeFullName(p) {
  console.log(p.name, p.lastname);
}

writeFullName(person);
writeFullName(programmer);
