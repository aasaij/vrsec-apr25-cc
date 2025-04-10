//arrow function definition
// let greet = () => document.write(`<h1>Good Morning</h1`);
// let greet = (user) => document.write(`<h1>Good Morning ${user}`);
// let greet = (user) => {
//   user = user ?? "Harika";
//   document.write(`<h1>Good Morning ${user}`);
// };
// let greet = (user, gender) => {
//   user = user ?? "Harika";
//   gender = gender ?? "F";
//   let title = gender === "M" ? "Mr. " : "Ms. ";
//   document.write(`<h1>Good Morning ${title}${user}!`);
// };

//function calling
// greet();
// greet("Jakir", "M");
// greet("Umesh", "M");

// function greet(user, gender) {
//   user = user ?? "Harika";
//   gender = gender ?? "F";
//   let title = gender === "M" ? "Mr. " : "Ms. ";
//   document.write(`<h1>Good Morning ${title}${user}!`);
// }

// function add(x, y) {
//   return x + y;
// }

// let add = (x, y) => x + y;
let add = (x, y) => {
  if (typeof x === Number && typeof y === Number) return x + y;
  return null;
};

document.write(`${add("abcd", "abcd")}`);
