class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.age = 101;
  }
}

class Programmer extends Person {
  constructor(name, lastname, language) {
    super(name, lastname);
    this.language = language;
  }
}

const programmer1 = new Programmer("Juan", "Eraso", "Python");
console.log(programmer1);
