type combineFnType = number | string;

type conversionDescriptor = "as-number" | "as-text";

function combine(
  n1: combineFnType,
  n2: combineFnType,
  resultConversion: conversionDescriptor
) {
  if (resultConversion === "as-number") {
    return +n1 + +n2;
  } else {
    return n1.toString() + n2.toString();
  }
}

const combinedAges = combine(30, 20, "as-number");

const combineNames = combine("Max", "Anna", "as-text");

console.log(combinedAges, combineNames);

// function combine(
//   n1: number | string,
//   n2: number | string,
//   // UNION TYPE
//   resultConversion: "as-number" | "as-text"
// ) {
//   if (resultConversion === "as-number") {
//     return +n1 + +n2;
//   } else {
//     return n1.toString() + n2.toString();
//   }
// }

// const combinedAges = combine(30, 20, "as-number");

// const combineNames = combine("Max", "Anna", "as-text");

// console.log(combinedAges, combineNames);
