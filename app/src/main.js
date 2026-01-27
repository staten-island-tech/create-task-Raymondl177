import './style.css'

function buttonClass() {
  const buttons = document.querySelectorAll("img");
  const defaultBorder = 'border-6';
  const activeClass = 'border-8';
  const defaultColor = 'border-black';
  const activeColor = 'border-blue-600';
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.replace(defaultBorder, activeClass);
      button.classList.replace(defaultColor, activeColor);
    });
  });
}
buttonClass();

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}
getComputerChoice();

function playGame() {
  const userChoice = document.querySelector(".border-8");
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  displayResult(result);
}
playGame();

function determineWinner(userChoice, computerChoice) {
  if (!userChoice) {
    return "Please make a selection.";
  }

  const userSelection = userChoice.getAttribute("data-choice");
  if (userSelection === computerChoice) {
    return "It's a tie!";
  }

  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return winningConditions[userSelection] === computerChoice
    ? "You win!"
    : "You lose!";
}

