"use strict";

let hideNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const number = Number(document.querySelector(".number").value);
  console.log(number);

  if (!number) {
    displayMessage("⛔No number!");
  } else if (number == hideNumber) {
    displayMessage("🎉 Correct number!");
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".hideNumber").style.width = "7rem";
    document.querySelector(".hideNumber").textContent = hideNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (number !== hideNumber) {
    if (score > 1) {
      displayMessage(number > hideNumber ? "⬆️ Too high!" : "⬇️ Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  hideNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".hideNumber").textContent = "?";
  document.querySelector(".number").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".hideNumber").style.width = "80px";
});
