//JavaScript Object
let person1 = {
  firstName: "Saisathish",
  lastName: "Raavi",
  gender: "Male",
  salary: 500000,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

let person2 = {
  firstName: "Harika",
  lastName: "Chennupati",
  gender: "Female",
  salary: 500000,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

let person3 = {};
Object.assign(person3, person2);

// let person3 = person2;
person3.firstName = "Aasaithambi";
person3.lastName = "Jay";
person3.gender = "Male";

//array of objects
let employees = [person1, person2, person3];

//normal for loop
// for (let index = 0; index < employees.length; index++) {
//   displayDetails(employees[index]);
// }
//for in loop
// for (let index in employees) {
//   displayDetails(employees[index]);
// }
//for of loop
let count = 1;
for (let person of employees) {
  //   displayDetails(person);
  document.writeln(`<h1>Employee ${count++}</h1>`);
  printInDetail(person);
}

function displayDetails(person) {
  let title = person.gender === "Male" ? "Mr. " : "Ms. ";
  document.writeln(
    `<b>${title}${person.fullName()}</b> is earning ${person.salary}/pm <br>`
  );
}

function printInDetail(person) {
  for (let key in person) {
    if (typeof person[key] !== "function")
      document.writeln(`${key} : ${person[key]} <br>`);
  }
}
