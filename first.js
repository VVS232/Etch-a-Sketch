const container = document.querySelector("#container"); //getting the container of all squares
let rangeval = 16; //default  size
const clear = document.getElementById("clear"); //clear button
clear.onclick = clearGrid;
let range = document.getElementById("range");
range.addEventListener("change", createGrid); //creating grin onchange
let sqNumber = document.getElementById("sqNumber"); //display number of squares
document.getElementById("black").onclick = black;
document.getElementById("gradDark").onclick = graduallyDarker;
document.getElementById("random").onclick = randomColors;

window.onload = createGrid; // create initial grid of 10*10

function createGrid() {
  rangeval = range.value;
  sqNumber.textContent = rangeval;
  container.innerHTML = "";
  container.setAttribute(
    "style",
    `grid-template-rows: repeat(${rangeval}, 1fr) ;grid-template-columns: repeat(${rangeval}, 1fr) ;`
  );

  for (let i = 0; i < rangeval * rangeval; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute(
      "style",
      `margin:0; box-sizing:border-box; border: 2px solid black; width:${
        600 / rangeval
      }px; height:${600 / rangeval}px; background-color:white;`
    );
    container.appendChild(square);
  }
  black();
}

function clearGrid() {
  let nodelist = document.getElementsByClassName("square");
  let squares = [...nodelist];
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

function graduallyDarker() {
  let nodelist = document.getElementsByClassName("square");
  let squares = [...nodelist];
  squares.forEach((square) => {
    let initial = 100;
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `hsl(0,0%,${(initial -= 10)}%)`;
    });
  });
}






function black() {
  let nodelist = document.getElementsByClassName("square");
  let squares = [...nodelist];
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  });
}

function randomColors() {
    let nodelist = document.getElementsByClassName("square");
    let squares = [...nodelist];
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    });
    });
  }



