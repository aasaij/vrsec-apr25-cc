// alert("Welcome to My Calculator");
let calculated = false;
function append(num) {
  if (calculated && !"+-*/%".includes(num))
    window.document.getElementById("result").value = 0;
  //Retrieving value from display text box
  let element = document.getElementById("result").value;
  if (element == 0) element = num;
  //concatenating new button value with old value
  else element += num;
  //changing the display value
  document.getElementById("result").value = element;
  calculated = false;
}

function calculate() {
  let element = document.getElementById("result").value;
  try {
    let result = eval(element);
    document.getElementById("result").value = result;
  } catch (err) {
    document.getElementById("result").value = "Error";
  }
  calculated = true;
}

function backSpace() {
  let result = document.getElementById("result").value;
  if (result.length == 1) result = 0;
  else result = result.slice(0, -1);
  document.getElementById("result").value = result;
}

function memorySave() {
  let result = document.getElementById("result").value;
  if (+result !== 0) {
    localStorage.setItem("data", result);
    activateMemoryRestore();
  }
}

function memoryRestore() {
  let data = localStorage.getItem("data");
  data = data ?? 0;
  document.getElementById("result").value = data;
}

function memoryAdd() {
  let calcData = document.getElementById("result").value;
  if (+calcData !== 0) {
    let memoryData = localStorage.getItem("data");
    memoryData = memoryData ?? 0;
    localStorage.setItem("data", +calcData + +memoryData);
    activateMemoryRestore();
  }
}
function memoryMinus() {
  let calcData = document.getElementById("result").value;
  if (+calcData !== 0) {
    let memoryData = localStorage.getItem("data");
    memoryData = memoryData ?? 0;
    let result = memoryData - calcData;
    if (result === 0) {
      localStorage.removeItem("data");
      activateMemoryRestore();
    } else localStorage.setItem("data", memoryData - calcData);
  }
}

function memoryCancel() {
  localStorage.removeItem("data");
  activateMemoryRestore();
}

function clearAll() {
  document.getElementById("result").value = 0;
  calculated = false;
  localStorage.removeItem("data");
  activateMemoryRestore();
}

function activateMemoryRestore() {
  let button1 = document.getElementById("mc");
  let button2 = document.getElementById("mr");
  button1.disabled = !button1.disabled;
  button2.disabled = !button2.disabled;
}

window.addEventListener("load", activateMemoryRestore);
window.addEventListener("unload", clearAll);
