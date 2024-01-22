const persona = {
  name: "Juan",
  lastname: "ray",
  age: 30,
  showFullName: function () {
    return this.name;
  },
};

// Constructor
function Persona() {
  this.name = "";
  this.lastname = "";
  this.age = 0;
  this.showFullName = function () {
    return `${this.name} ${this.lastname}`;
  };
}

const persona2 = new Persona();

persona2.name = "Mario";
persona2.lastname = "Hernandez";
persona2.age = "89";

console.log(persona2.showFullName());
