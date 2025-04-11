// function Employee(firstName, lastName, gender, salary) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.gender = gender;
//   this.salary = salary;
// }
function Employee(firstName, lastName, gender, salary) {
  return { firstName, lastName, gender, salary };
}

let person1 = new Employee("Saisathish", "Raavi", "Male", 500000);
person1.designation = "Software Engineer";
let person2 = new Employee("Harika", "Chennupati", "Female", 400000);
let person3 = new Employee("Aasaithambi", "Jay", "Male", 600000);

let employees = [person1, person2, person3]; //array of objects

let count = 1;
for (let person of employees) {
  //   displayDetails(person);
  document.writeln(`<h1>Employee ${count++}</h1>`);
  printInDetail(person);
}

function printInDetail(person) {
  for (let key in person) {
    if (typeof person[key] !== "function")
      document.writeln(`${key} : ${person[key]} <br>`);
  }
}
