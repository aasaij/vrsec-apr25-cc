const questions = [
  {
    question: "What is JavaScript?",
    options: ["Scripting Language", "Interpreter", "Compiler", "None"],
    answer: 0,
  },
  {
    question: "Which company developed JS?",
    options: ["IBM", "Microsoft", "Google", "Netscape"],
    answer: 3,
  },
  {
    question: "Who invented Java?",
    options: ["Ed Frank", "Patrick Naughton", "James Gosling", "All the Above"],
    answer: 3,
  },
  {
    question: "What is the lastest standard of JS?",
    options: ["ES6", "ES2023", "ES2019", "None"],
    answer: 1,
  },
  {
    question: "Who is the Trainer for CC batch?",
    options: ["Aasaithambi Jay", "Jakir", "Surya", "All the above"],
    answer: 3,
  },
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

let questionBox = document.getElementById("questionBox");
let optionBox = document.getElementById("optionsBox");
let nxtButton = document.getElementById("nextBtn");
let scoreBox = document.getElementById("scoreBox");
let timerBox = document.getElementById("timerBox");
let restartButton = document.getElementById("restartBtn");
let progressBar = document.getElementById("progressBar");
let progressContainer = document.getElementById("progressContainer");

nxtButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", resetQuiz);

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    clearInterval(timer);
    displayScore();
  }
}
function displayScore() {
  questionBox.classList.add("hide");
  optionBox.classList.add("hide");
  nxtButton.classList.add("hide");
  timerBox.classList.add("hide");
  scoreBox.classList.remove("hide");
  progressContainer.classList.add("hide");
  scoreBox.textContent = `You scored ${score} out of ${questions.length}`;
  restartButton.classList.remove("hide");
}

function displayQuestion() {
  const completed = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${completed}%`;
  timeLeft = 30;
  questionBox.textContent = "";
  let question = questions[currentQuestion].question;
  questionBox.textContent = question;
  let choices = questions[currentQuestion].options;
  optionBox.textContent = "";
  choices.forEach((choice, index) => {
    let optionButton = document.createElement("button");
    optionButton.classList.add("option-btn");
    optionButton.textContent = choice;
    optionButton.addEventListener("click", (event) => {
      clearInterval(timer);
      nxtButton.classList.remove("hide");
      checkAnswer(index);
    });
    optionBox.appendChild(optionButton);
  });
  timer = setInterval(displayTime, 1000);
  nxtButton.classList.add("hide");
}
function displayTime() {
  if (timeLeft == 0) {
    clearInterval(timer);
    nxtButton.classList.remove("hide");
    checkAnswer(-1);
  } else {
    timeLeft--;
    timerBox.textContent = `Time left ${timeLeft}s`;
  }
}

function checkAnswer(selected) {
  let correctAnswer = questions[currentQuestion].answer;
  if (selected == correctAnswer) {
    score++;
  }
  disableOptions(selected, correctAnswer);
}

function disableOptions(selected, answer) {
  let optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach((choice, index) => {
    if (index == selected && selected == answer)
      choice.style.backgroundColor = "green";
    else if (index == selected) choice.style.backgroundColor = "red";
    else {
      choice.style.backgroundColor = "grey";
      choice.disabled = true;
    }
  });
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  clearInterval(timer);
  scoreBox.classList.add("hide");
  restartButton.classList.add("hide");
  questionBox.classList.remove("hide");
  optionBox.classList.remove("hide");
  timerBox.classList.remove("hide");
  progressContainer.classList.remove("hide");
  progressBar.style.width = `0%`;
  displayQuestion();
}

displayQuestion();
