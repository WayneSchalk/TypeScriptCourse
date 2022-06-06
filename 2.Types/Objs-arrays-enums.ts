const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Max",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  //Tuple
  role: [2, "author"],
};

person.role.push("admin");

// person.role[1] = 10; !!! ERROR !!!

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// ENUMS
enum Role {
  ADMIN = 1,
  READ_ONLY = 2,
  AUTHOR = 3,
}

const person2 = {
  name: "Max",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: 2,
};

if (person2.role === Role.ADMIN) {
  console.log("is admin");
}
