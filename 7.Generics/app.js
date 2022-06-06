"use strict";
//
// const names: Array<any> = [];
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });
function mergeObjects(a, b) {
    return Object.assign(a, b);
}
const thisObj = mergeObjects({ name: "Max" }, { age: 30 });
console.log(thisObj.name);
const countAndDescribe = (element) => {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
};
