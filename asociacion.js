class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const juan = new Person("Juan", "Jimenez");

const guillo = new Person("Guillermo", "Fernandez");

// Establezco una relacion
juan.parent = guillo;

console.log(juan);
console.log(guillo);
