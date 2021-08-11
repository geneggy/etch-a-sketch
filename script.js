const bodyEl = document.querySelector("body");
const gridEl = document.querySelector(".grid");
const resetBtn = document.querySelector(".resetBtn");

function colorSquare() {
  console.log(this);
  this.style.backgroundColor = "black";
}

//why doesn't this work? what is this keyword referring to?
// const colorSquare = () => {
//   console.log(this);
//   this.style.backgroundColor = "black";
// };

const createGrid = (gridNum) => {
  for (let i = 0; i < gridNum ** 2; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.addEventListener("mouseover", colorSquare, { once: true });
    gridEl.appendChild(div);
    gridEl.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    gridEl.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  }
};

const resetGame = function () {
  let userPrompt = prompt(
    "How many squares per side would you like? Please input a number from 1 to 100"
  );
  if (isNaN(userPrompt) || userPrompt > 100 || userPrompt < 1) {
    resetGame();
  } else {
    gridEl.innerHTML = "";
    createGrid(userPrompt);
  }
};

resetBtn.addEventListener("click", resetGame);

createGrid(16);
