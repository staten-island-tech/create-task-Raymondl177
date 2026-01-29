import './style.css'

let userChoice = null
const userImages = document.querySelectorAll('#user-choice img')
const message = document.getElementById('message')

userImages.forEach(img => {
  img.addEventListener('click', () => {
    userImages.forEach(i => {
      i.classList.remove('border-blue-600')
      i.classList.remove('border-8')
    })
    img.classList.add('border-blue-600')
    img.classList.add('border-8')
    userChoice = img.id
    message.textContent = ''
  })
})

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  const computerChoiceElement = document.getElementById(`computer-${computerChoice}`);
  computerChoiceElement.classList.remove("border-blue-600");
  computerChoiceElement.classList.add("border-blue-600");
}

function playGame() {
  const userChoices = document.getElementById("user-choice").querySelectorAll("img");
  const playButton = document.getElementById("playButton");
  playButton.addEventListener('click', () => {
    userChoices.forEach(userChoice => {
      userChoice.addEventListener('click', () => {
        const userSelection = userChoice.id;
        getComputerChoice();
        const computerChoice = getComputerChoice();
        determineWinner(userSelection, computerChoice);
      });
    });
  });
};
playGame();

function determineWinner(userChoice, computerChoice) {
  const resultContainer = document.getElementById("result");
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      resultContainer.insertAdjacentHTML("beforeend", `<h1 class="inline-block font-bold text-4xl m-5 border p-10">You win!</h1>`);
    } else if (computerChoice === "paper") {
      resultContainer.insertAdjacentHTML("beforeend", `<h1 class="inline-block font-bold text-4xl m-5 border p-10">You lose!</h1>`);
    } else {
      resultContainer.insertAdjacentHTML("beforeend", `<h1 class="inline-block font-bold text-4xl m-5 border p-10">It's a tie!</h1>`);
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      resultContainer.insertAdjacentHTML("beforeend", `<h1 class="inline-block font-bold text-4xl m-5 border p-10">You win!</h1>`);
    } else if (computerChoice === "scissors") {
      resultContainer.insertAdjacentHTML("beforeend", `<h1 class="inline-block font-bold text-4xl m-5 border p-10">You lose!</h1>`);
    } else {
      resultContainer.insertAdjacentHTML("beforeend", `<h1 class="inline-block font-bold text-4xl m-5 border p-10">It's a tie!</h1>`);
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      resultContainer.insertAdjacentHTML("beforeend", `<h1 class="inline-block font-bold text-4xl m-5 border p-10">You win!</h1>`);
    } else if (computerChoice === "rock") {
      resultContainer.insertAdjacentHTML("beforeend", `<h1 class="inline-block font-bold text-4xl m-5 border p-10">You lose!</h1>`);
    } else {
      resultContainer.insertAdjacentHTML("beforeend", `<h1 class="inline-block font-bold text-4xl m-5 border p-10">It's a tie!</h1>`);
    }
  }
}