function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.displayName = function () {
    return `${this.name} ${this.lastname}`;
  };
}

const john = new Person("Jhon", "Gutierrez");
console.log(john.displayName());
const mario = new Person("Mario", "Fernandez");

Person.prototype.age = 100;

// console.log(mario);
// console.log(john);

mario.amigo = 500;

const s = new String("HELLO WORLD");

console.log(s);

String.prototype.concat = function () {
  return this + "test";
};

console.log(s.concat());
