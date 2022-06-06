// type addFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  outputName?: string | undefined;
  age = 30;

  constructor(n: string, outputName?: string) {
    this.name = n;
    this.outputName = outputName;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name, this.outputName);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1 = {
  name: "Max",
  outputName: "outMax",

  greet(phrase: string) {
    console.log(phrase + " " + this.name + " " + this.outputName);
  },
};

user1.greet("Hi there - I am");
