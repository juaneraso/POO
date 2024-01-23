// const Person = class {
class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  fullName() {
    return this.name + this.lastname;
  }
}

const mario = new Person("mario", "Hernandez");

console.log(mario.fullName());
