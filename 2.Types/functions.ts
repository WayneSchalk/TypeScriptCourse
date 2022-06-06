function addNum(n1: number, n2: number) {
  return n1 + n2;
}

function printRes(num: number): void {
  console.log("Result: " + num);
}
printRes(addNum(5, 5));

let someValue: undefined;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// Function type
let combineValues: (a: number, b: number) => number;

combineValues = addNum;

console.log(combineValues(1, 2));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
