//

function showFullName(name) {
  return name;
}

const persona = {
  name: "Juan",
  lastname: "ray",
  age: 30,
  showFullName: function () {
    return this.name;
  },
};

const account = {
  number: "123456789",
  amount: 100,
  deposit: function (quantity) {
    console.log(this.amount);
    this.amount = this.amount + quantity;
    console.log(this.amount);
  },
  withdraw: function (quantity) {
    this.amount = this.amount - quantity;
    console.log(this.amount);
  },
};

// console.log(persona.showFullName());
account.deposit(40);
account.withdraw(80);
