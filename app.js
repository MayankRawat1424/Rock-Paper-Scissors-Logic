const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const GAME_DRAW = "IT'S A DRAW";
const GAME_WON = "PLAYER WON";
const GAME_LOST = "PLAYER LOST";

let gameStatusRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (
    selection !== "ROCK" &&
    selection !== "PAPER" &&
    selection !== "SCISSORS"
  ) {
    alert("Invalid Choice! We Chose Rock for You!");
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.64) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  //ARROW FUNCTION
  if (pChoice === cChoice) {
    return GAME_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return GAME_WON;
  } else {
    return GAME_LOST;
  }
};

startGameBtn.addEventListener("click", function () {
  //ANONYMOUS FUNCT
  if (gameStatusRunning) {
    return;
  }
  gameStatusRunning = true;
  console.log("Starting Game..........");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(computerSelection, playerSelection);
  let message = `PLAYER: ${playerSelection}\nCOMPUTER: ${computerSelection}\n\n${winner}`;
  console.log(message);
  alert(message);
});
