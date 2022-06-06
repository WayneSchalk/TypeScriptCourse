const userName = "wayne"; // cannot be changed

// let scope = "global"
let age = 29; // can be changed

age = 30; // can be changed

function add(a: number, b: number) {
  // let scope = "local"
  // var scope = "global"
  let result;
  result = a + b;
  return result;
}
console.log(add(1, 2));

// Arrow functions

const add2 = (a: number, b: number) => {
  return a + b;
};
console.log(add2(1, 2));

// default arguments
const greet = (name = "Max") => {
  console.log("Hello " + name);
};
console.log(greet("Wayne"));

// Spread operator
const numbers = [1, 2, 3];
console.log(Math.max(...numbers));

// Destructuring
const [a, b, c] = numbers;
console.log(a, c);

// Rest parameters

const add3 = (...numbers: number[]) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

const addNumbers = add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(addNumbers);
