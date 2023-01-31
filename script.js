"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// Function to display message dynamically

const displayMessage = (message) => {
  document.querySelector(".showMessage").textContent = message;
};

// Taking user inputs & showing messages based on the inputs

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".userInput").value);
  const guessIn = document.querySelector(".userInput").value;

  // if there's no input given
  if (!guessIn) {
    displayMessage("No number given");
  }
  // if user enters number out of the mentioned range
  else if (guess > 20 || guess < 1) {
    displayMessage(guess > 20 ? "Enter number <= 20" : "Enter number >= 1");
  }
  // if both user & secret number matches
  else if (guess === secretNumber) {
    displayMessage("That's a correct number");
    document.querySelector(".showNumber").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".showNumber").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highestScore").textContent = highScore;
    }
  }
  // if both user & secret number doesn't matches
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "The guess is too high" : "The guess is too low"
      );
      score--;
      document.querySelector(".currentScore").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".currentScore").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// Resetting the values on click of again button

document.querySelector(".reset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".currentScore").textContent = 20;
  document.querySelector("body").style.backgroundColor = "rgb(196, 153, 188)";
  document.querySelector(".showNumber").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".showNumber").textContent = "?";
  document.querySelector(".userInput").value = "";
});
