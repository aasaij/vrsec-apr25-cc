// (function greet() {
//   //   console.log("Good Morning Engineers!");
//   document.write("<h1>Good Morning Engineers!</h1>");
// })();
// let greet = function (user, gender) {
//   gender = gender ?? "M";
//   let title = gender === "M" ? "Mr. " : "Ms. ";
//   user = user ?? "Surya";
//   document.write(`<h1>Good Morning ${title} ${user}!</h1>`);
// };
//Arrow Function
let greet = () => {
  document.write(`<h1>Good Morning!</h1>`);
};

let greetings = greet;
// greet();
// greet("Saisathish");
// greet("Rakesh", "M");
// greet("Harika", "F");
greetings();
// greetings("Saisathish");
// greetings("Rakesh", "M");
// greetings("Harika", "F");

// console.log(greet);
// console.log(typeof greet);
// function greet(user) {
//   //   console.log("Good Morning Engineers!");
//   user = user ?? "Surya";
//   document.write(`<h1>Good Morning ${user}!</h1>`);
// }

// function greet(user, gender) {
//   //   console.log("Good Morning Engineers!");
//   gender = gender ?? "M";
//   let title = gender === "M" ? "Mr. " : "Ms. ";
//   user = user ?? "Surya";
//   document.write(`<h1>Good Morning ${title} ${user}!</h1>`);
// }
