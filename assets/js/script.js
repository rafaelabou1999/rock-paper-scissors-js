const itens = document.querySelectorAll(".item");
let you = parseInt(document.querySelector(".you").textContent);
let pc = parseInt(document.querySelector(".pc").textContent);
let h2You = document.querySelector(".h2You");
let h2Pc = document.querySelector(".h2Pc");

let options = ["rock", "papers", "scissors"];

let item = document.querySelectorAll(".item");
let itemValue = document.querySelector(".item p").textContent;

let randomOption = null;
let yourChoice = null;

let rockItem = document.querySelector(".rock");
let paperItem = document.querySelector(".paper");
let scissorsItem = document.querySelector(".scissors");

let yourScore = 0;
let pcScore = 0;

let resultado = document.querySelector(".resultado");
function choicePc() {
  randomOption = Math.floor(Math.random() * options.length);

  switch (randomOption) {
    case 0:
      randomOption = "rock";
      break;
    case 1:
      randomOption = "paper";
      break;
    case 2:
      randomOption = "scissors";
      break;
  }

  return randomOption;
}

function pcWins() {
  pc += 1;
  h2Pc.innerHTML = `PC: ${pc}`;
}

function youWin() {
  you += 1;
  h2You.innerHTML = `You: ${you}`;
}

function reset1() {
  you = 0;
  pc = 0;
  resultado.innerHTML = "";
  h2You.innerHTML = `You: 0`;
  h2Pc.innerHTML = `PC: 0`;
}
let i = 0;
itens.forEach((item) => {
  item.addEventListener("click", function (idx) {
    choicePc();

    yourChoice = item.textContent;
    console.log("You = " + yourChoice);
    console.log("PC = " + randomOption);
    if (
      (rockItem && randomOption === "scissors") ||
      (paperItem && randomOption === "paper") ||
      (scissorsItem && randomOption === "paper")
    ) {
      youWin();
      resultado.innerHTML = "Você ganhou!";
    } else {
      resultado.innerHTML = "PC ganhou";
      pcWins();
    }
    if (you === 5) {
      h2Pc.innerHTML = "";
      resultado.innerHTML = "";
      h2You.innerHTML = "Você VENCEU 🥲";
    } else if (pc === 5) {
      resultado.innerHTML = "";
      h2Pc.innerHTML = "";
      h2You.innerHTML = "Você PERDEU  😰";
    }
    if (pc > 5 || you > 5) {
      reset1();
    }
  });
});

const reset = document.querySelector("button");
reset.addEventListener("click", function () {
  reset1();
});
