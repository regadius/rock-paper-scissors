"use strict";
// SET playerWins to 0
let playerWins = 0;
// SET computerWins to 0
let computerWins = 0;
// - SET playerChoice to getPlayerChoice
let playerChoice = getPlayerChoice();
// - SET computerChoice to getComputerChoice
// let computerChoice = getComputerChoice();
// - CALL playRound with playerChoice and computerChoice
// - PRINT winnerMessage

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
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