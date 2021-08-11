const bodyEl = document.querySelector("body");
const gridEl = document.querySelector(".grid");
const resetBtn = document.querySelector(".resetBtn");

function colorSquare() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  this.style.backgroundColor = "#" + randomColor;
  if (!this.style.opacity) {
    this.style.opacity = 1;
  } else {
    this.style.opacity = this.style.opacity -= 0.1;
  }
}

//why doesn't this work? what is this keyword referring to?
// const colorSquare = () => {
//   this.style.backgroundColor = "black";
// };

const createGrid = (gridNum) => {
  for (let i = 0; i < gridNum ** 2; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.addEventListener("mouseover", colorSquare);
    gridEl.appendChild(div);
    gridEl.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    gridEl.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  }
};

const resetGame = function () {
  let userPrompt = prompt(
    "How many squares per side would you like? Please input a number from 1 to 100"
  );

  if (userPrompt === null) return;
  if (isNaN(userPrompt) || userPrompt > 100 || userPrompt < 1) {
    alert("Invalid Input");
    resetGame();
  } else {
    gridEl.innerHTML = "";
    createGrid(userPrompt);
  }
};

resetBtn.addEventListener("click", resetGame);

createGrid(16);

//(Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
//Math.random rgb
//need to add 10% black every time. Or perhaps reduce opacity by .1?
