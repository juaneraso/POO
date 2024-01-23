// Overloading

function countItems(x) {
  return x.toString().length;
}

console.log(countItems(1000));
console.log(countItems("hola"));

function sum(x = 0, y = 0, z = 0) {
  return x + y + z;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 10));
