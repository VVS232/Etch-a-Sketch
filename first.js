const container=document.querySelector("#container") //getting the container of all squares
let square;
let rangeval=10;
const clear=document.getElementById("clear");
clear.onclick=clearGrid;
let range=document.getElementById("range");
range.addEventListener("change", createGrid)
let sqNumber=document.getElementById("sqNumber");
document.getElementById("black").onclick=black;


window.onload=createGrid; // create initial grid of 10*10


function createGrid(){ 
    rangeval=range.value;
    sqNumber.textContent=rangeval;
    container.innerHTML="";
    container.setAttribute("style", `grid-template-rows: repeat(${rangeval}, 1fr) ;grid-template-columns: repeat(${rangeval}, 1fr) ;`);

    for (let i =0; i<(rangeval*rangeval);i++){
         square= document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `margin:0; box-sizing:border-box; border: 2px solid black; width:${600/rangeval}px; height:${600/rangeval}px; background-color:white;`);
        black();
        container.appendChild(square);
    }
}
function clearGrid(){
    container.innerHTML="";
    for (let i =0; i<(rangeval*rangeval);i++){
        let square= document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `margin:0; box-sizing:border-box; border: 2px solid black; width:${600/rangeval}px; height:${600/rangeval}px; background-color:white;`);
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor="black";
        });
        container.appendChild(square);
    }
}

function graduallyDarken(){

}
function black(){
    let squares= document.getElementsByClassName("square");
squares.array.forEach(element => {
    
});
}


