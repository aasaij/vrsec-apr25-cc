function generateRandomValue(x) {
  return parseInt(Math.random() * x + 1);
}

function changeColor() {
  let body = document.getElementsByTagName("body")[0];
  let red = generateRandomValue(255);
  let green = generateRandomValue(255);
  let blue = generateRandomValue(255);
  body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

let nameList = [
  "Surya",
  "Rakesh",
  "Umesh",
  "Saisathish",
  "Harika",
  "Poojitha",
  "Srija",
  "Bhavya",
  "Jakir",
  "Kishan",
  "Raquee",
  "Siddartha",
  "Saichandu",
  "Jhansi",
  "Yasaswini",
  "Srinu",
  "Prasad",
  "Rohit",
  "Jasmith",
  "Thambi",
];

function getName() {
  let rnd = generateRandomValue(nameList.length - 1);
  return nameList[rnd];
}

let buttonList = [];
function addElement() {
  let container = document.getElementById("container");
  //creating button element
  let button = document.createElement("button");
  //adding text to button element
  let newName = "";
  //Generating unique name
  while (true) {
    newName = getName();
    if (!buttonList.includes(newName)) {
      buttonList.push(newName);
      break;
    }
  }
  button.innerHTML = newName;
  //adding styles to button element
  let red = generateRandomValue(255);
  let green = generateRandomValue(255);
  let blue = generateRandomValue(255);
  button.setAttribute("class", "btn m-1 rounded-5");
  //   button.setAttribute("class", "m-3");
  button.style.backgroundColor = `rgb(${red},${green},${blue})`;
  button.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Good Afternoon " + event.target.innerHTML);
  });
  //   button.setAttribute("class", "btn btn-success");
  //adding button element into container
  container.appendChild(button);
}

// document.addEventListener("click", changeColor);
document.addEventListener("click", addElement);
