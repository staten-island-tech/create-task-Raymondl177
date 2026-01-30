import "./style.css";

let userScore = 0;
let computerScore = 0;

let userChoice = null;
const userChoices = document.querySelectorAll("#user-choice img");
const message = document.getElementById("message");

userChoices.forEach((img) => {
  img.addEventListener("click", () => {
    userChoices.forEach((i) => {
      i.classList.remove("border-blue-600");
      i.classList.remove("border-8");
    });
    img.classList.add("border-blue-600");
    img.classList.add("border-8");
    userChoice = img.id;
    message.textContent = "";
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  const computerChoiceElement = document.getElementById(
    `computer-${computerChoice}`,
  );
  const computerChoices = document.querySelectorAll("#computer-choice img");
  computerChoices.forEach((i) => {
    i.classList.remove("border-blue-600");
    i.classList.remove("border-8");
  });
  computerChoiceElement.classList.add("border-blue-600");
  computerChoiceElement.classList.add("border-8");
  return computerChoice;
}

function playGame() {
  const userChoices = document.querySelectorAll("#user-choice img");
  userChoices.forEach((userChoice) => {
    userChoice.addEventListener("click", () => {
      document.getElementById("resultsContainer").innerHTML = "";
      const userSelection = userChoice.id;
      const computerChoice = getComputerChoice();
      determineWinner(userSelection, computerChoice);
    });
  });
}
playGame();

function determineWinner(userChoice, computerChoice) {
  const resultContainer = document.getElementById("resultsContainer");
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `<h1 id="result" class="inline-block font-bold text-4xl m-5 border p-10">You chose rock. Computer chose scissors. You win!</h1>`,
      );
      userScore++;
      document.getElementById("user-score").textContent = userScore;
    } else if (computerChoice === "paper") {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `<h1 id="result" class="inline-block font-bold text-4xl m-5 border p-10">You chose rock. Computer chose paper. You lose!</h1>`,
      );
      computerScore++;
      document.getElementById("computer-score").textContent = computerScore;
    } else {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `<h1 id="result" class="inline-block font-bold text-4xl m-5 border p-10">You chose rock. Computer chose rock. It's a tie!</h1>`,
      );
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `<h1 id="result" class="inline-block font-bold text-4xl m-5 border p-10">You chose paper. Computer chose rock. You win!</h1>`,
      );
      userScore++;
      document.getElementById("user-score").textContent = userScore;
    } else if (computerChoice === "scissors") {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `<h1 id="result" class="inline-block font-bold text-4xl m-5 border p-10">You chose paper. Computer chose scissors. You lose!</h1>`,
      );
      computerScore++;
      document.getElementById("computer-score").textContent = computerScore;
    } else {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `<h1 id="result" class="inline-block font-bold text-4xl m-5 border p-10">You chose paper. Computer chose paper. It's a tie!</h1>`,
      );
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `<h1 id="result" class="inline-block font-bold text-4xl m-5 border p-10">You chose scissors. Computer chose paper. You win!</h1>`,
      );
      userScore++;
      document.getElementById("user-score").textContent = userScore;
    } else if (computerChoice === "rock") {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `<h1 id="result" class="inline-block font-bold text-4xl m-5 border p-10">You chose scissors. Computer chose rock. You lose!</h1>`,
      );
      computerScore++;
      document.getElementById("computer-score").textContent = computerScore;
    } else {
      resultContainer.insertAdjacentHTML(
        "beforeend",
        `<h1 id="result" class="inline-block font-bold text-4xl m-5 border p-10">You chose scissors. Computer chose scissors. It's a tie!</h1>`,
      );
    }
  }
}
