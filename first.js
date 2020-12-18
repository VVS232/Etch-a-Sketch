const container=document.querySelector("#container") //getting the container of all squares
let rangeval=10;

let range=document.getElementById("range");
range.addEventListener("change",()=>{
    rangeval=range.value;
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
})



