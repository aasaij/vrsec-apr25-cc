// function sum(x, y) {
//   return x + y;
// }

// function add(x, y) {
//   return x + y;
// }
// function sum(...values) {
//   // Rest operator
//   //method 2
//   // return values.reduce(add);
//   //method 3
//   values = values ?? [0];
//   return values.reduce((x, y) => x + y);
//   //method 1
//   let total = 0;
//   for (let data of values) total += data;
//   return total;
// }

// function sum(x, y, ...values) {
//   if (x === null || x === undefined || y === null || y === undefined) return 0;
//   values = values ?? [];
//   values.push(x);
//   values.push(y);
//   return values.reduce((a, b) => a + b);
// }

// console.log(sum(10, 20, 30, 40, 50, 60));
// console.log(sum(10, 20));
// console.log(sum(10));
// console.log(sum());
// console.log(sum(10, 20, 40, 30));

let arr1 = [10, 123, 4, 5, 7, 8, 865, 3];
let arr2 = arr1;

console.log(Math.max(arr));
