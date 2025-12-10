// Quiz manuskript

const quizData = [
{
  question: "Hvad er den mest afhængighedsskabende ingrediens i cigaretter?",
  options: ["Nikotin", "Tar", "Kulilte", "Formaldehyd"],
  answer: "Nikotin"
},
{
  question: "Hvad er den mest afhængighedsskabende ingrediens i cigaretter?",
  options: ["Nikotin", "Tar", "Kulilte", "Formaldehyd"],
  answer: "Nikotin"
}
// tilføj flere spørgsmål
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML ="";
  question.options.forEach(option => { 
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function SelectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if(selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if(currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  } 
}

function showResult() {
  quizData.innerHTML = `
  <h1>Quiz Færdig!</h1>
  <p>Du scorede ${score} ud af /${quizData.length}</p>
  `;
}