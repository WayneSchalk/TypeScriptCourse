"use strict";
// type addFn = (a: number, b: number) => number;
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n, outputName) {
        this.age = 30;
        this.name = n;
        this.outputName = outputName;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name, this.outputName);
    };
    return Person;
}());
var user1;
user1 = new Person("Max");
user1 = {
    name: "Max",
    outputName: "outMax",
    greet: function (phrase) {
        console.log(phrase + " " + this.name + " " + this.outputName);
    },
};
user1.greet("Hi there - I am");
