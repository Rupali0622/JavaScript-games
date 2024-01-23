let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let newgame=document.querySelector("#new-btn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("p");

let turn = true;

const winningPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [7, 6, 8]
];
const resertGame=()=>{
    turn=true;
    enableBoxes();
    msgcont.classList.add("hide");
};

btn.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn===true){
            turn=false;
            box.innerText="X"
        }else{
            turn=true;
            box.innerText="O"
        }
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of btn){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1val= btn[pattern[0]].innerText;
        let pos2val= btn[pattern[1]].innerText;
        let pos3val= btn[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val!=""){
            if(pos1val=== pos2val && pos2val===pos3val){
                console.log("Winner!",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newgame.addEventListener("click",resertGame);
reset.addEventListener("click",resertGame);