let boxes=document.querySelector(".box");
let reset=document.querySelector("#reset-button")

let turn=true;

const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [7,6,8]
];

boxes.forEach(element => {
    
});((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
    });
});