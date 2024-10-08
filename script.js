"use strict";
// SET playerWins to 0
let playerWins = 0;
// SET computerWins to 0
let computerWins = 0;
let playerChoice = "";
let computerChoice = "";
// Play five rounds
for (let i = 0; i < 5; i++) {
  // - SET playerChoice to getPlayerChoice
  playerChoice = getPlayerChoice();
  // - SET computerChoice to getComputerChoice
  computerChoice = getComputerChoice();
  // - CALL playRound with playerChoice and computerChoice
  playRound(playerChoice, computerChoice);
}
// PRINT winner
if (playerWins > computerWins) {
  console.log("Player wins!");
} else if (playerWins < computerWins) {
  console.log("Computer wins!");
} else {
  console.log("Nobody wins!");
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      console.log("Error");
  }
  return randomNumber;
}
function getPlayerChoice() {
  let keepGoing = true;
  do {
    const playerChoice = prompt("Enter rock, paper or scissors").toLowerCase();
    if (
      playerChoice == "rock" ||
      playerChoice == "paper" ||
      playerChoice == "scissors"
    ) {
      keepGoing = false;
      return playerChoice;
    }
  } while (keepGoing);
}
function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice == "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    computerWins++;
  } else if (playerChoice === computerChoice) {
    console.log("DRAW!");
  } else {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    playerWins++;
  }
}
