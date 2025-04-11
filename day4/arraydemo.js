// let arr = []; // Empty  array
// let arr = Array.of(1, 2, 3, 4, 5); // create array with list of elements
// let arr = Array.from("JavaScript"); // create array from string
// let arr = [
//   "Jakir",
//   22,
//   "Rakesh",
//   9.9,
//   true,
//   null,
//   {
//     firstName: "Saisathish",
//     lastName: "Raavi",
//   },
// ];
// arr.push("Surya");
// document.writeln(arr.pop() + "<br>");
// arr.unshift("Umesh");
// document.writeln(arr.shift() + "<br>");
// arr.splice(2, 0, ["Srija", "Harika"]);
// alert(arr.includes("Jay"));

// console.log(arr);
// document.writeln("<h1>Array Elements : <br></h1>");
// for (let index in arr) {
//   if (typeof arr[index] !== "object") document.writeln(arr[index] + "<br>");
//   else {
//     if (arr[index] !== null) {
//       document.writeln("{<br>");
//       for (let key in arr[index])
//         document.writeln(key + " : " + arr[index][key] + "<br>");
//       document.writeln("}<br>");
//     }
//   }
// }
// for (let element of arr) {
//   if (typeof element !== "object") document.writeln(element + "<br>");
//   else {
//     if (!Array.isArray(element))
//       for (let key in element)
//         document.writeln(key + " : " + element[key] + "<br>");
//     else for (let key of element) document.writeln(key + "<br>");
//   }
// }
// arr.forEach(displayDetails); // callback

// arr.forEach((element, index) => {
//   if (typeof element !== "object") {
//     document.writeln(`${element}<br>`);
//   } else if (Array.isArray(element)) {
//     for (let data of element) document.writeln(`${data}<br>`);
//   } else if (element !== null) {
//     for (let key in element) document.writeln(`${key} : ${element[key]}<br>`);
//   }
// });

// function displayDetails(element, index) {
//   if (typeof element !== "object") document.writeln(element + "<br>");
//   else {
//     if (!Array.isArray(element))
//       for (let key in element)
//         document.writeln(key + " : " + element[key] + "<br>");
//     else for (let key of element) document.writeln(key + "<br>");
//   }
// }

let arr = [1, 2, 3, 4, 5, 6];

// arr
//   .filter((element) => element % 2 == 1)
//   .forEach((element) => document.writeln(element + "<br>"));

arr
  .filter((element) => element % 2 == 0)
  .map((element) => element ** 2)
  .forEach((element) => document.writeln(element + "<br>"));

// for (let element of arr) {
//   if (element % 2 == 0) document.writeln(element + "<br>");
// }
