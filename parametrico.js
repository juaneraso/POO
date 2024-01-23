class Stack {
  constructor() {
    this.items = [];

    // this.push = function (item) {
    //   this.items.push(item);
    // };
  }
  push(items) {
    return (this.items.push = items);
  }
}

const stack = new Stack();

stack.push("HOLAAAA");

const stack2 = new Stack();
stack2.push(5000);

console.log(stack);
console.log(stack2);
