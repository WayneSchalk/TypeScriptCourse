function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const Result = n1 + n2;

  if (showResult) {
    console.log(phrase, Result);
  }
  return n1 + n2;
}

const number1 = 22;
const number2 = 44;

const printResult = true;

const phrase = "Result is: ";

add(number1, number2, printResult, phrase);
