let timer;

function start() {
  timer = setInterval(displayAlert, 5000);
}

function displayAlert() {
  alert("Thank you for being very interactive!");
}

function stop() {
  clearInterval(timer);
}
