// Quiz script

const quizData = [
  {
    question: "Hvad er den mest afhængighedsskabende ingrediens i cigaretter?",
    options: ["Nikotin", "Tar", "Kulilte", "Formaldehyd"],
    answer: "Nikotin"
  },
  {
    question: "Hvor lang tid tager det for nikotin at forlade kroppen efter rygning?",
    options: ["1 time", "24 timer", "1 uge", "1 måned"],
    answer: "24 timer"
  },
  {
    question: "Hvad er en almindelig bivirkning af nikotin?",
    options: ["Øget appetit", "Højt blodtryk", "Bedre søvn", "Mindre stress"],
    answer: "Højt blodtryk"
  }
  // Add more questions here
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = quizData[currentQuestionIndex];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestionIndex].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.innerHTML = `
    <h1>Quiz Færdig!</h1>
    <p>Du scorede ${score} ud af ${quizData.length}</p>
  `;
  optionsElement.innerHTML = "";
  submitButton.style.display = "none";
}

// Start the quiz
loadQuestion();
