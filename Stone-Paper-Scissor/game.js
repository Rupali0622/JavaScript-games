let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".box");
const msg=document.querySelector("#msg");
const msgcontainer=document.querySelector(".msg-container");

//generate random computer choice
const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranidx = Math.floor(Math.random() * 3);
    return option[ranidx];
}
const drawgame = () => {
    console.log("Draw Game");
    msg.innerText="Game was Draw. Play Again.";
    msgcontainer.style.backgroundColor="rgb(13, 13, 44)";
}

const showWinner=(userwin)=>{
    if(userwin){
        console.log("You Win");
        msg.innerText="You Win";
        msgcontainer.style.backgroundColor="green";
    }else{
        console.log("You lose");
        msg.innerText="You lose";
        msgcontainer.style.backgroundColor="red";
    }
}

const playgame = (userchoice) => {
    //user choice
    console.log("user choice= ", userchoice);
    //computer choice
    const compchoice = gencompchoice();
    console.log("comp choice= ", compchoice);

    if (userchoice === compchoice) {
        //Draw game
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
}
//to choose individual div
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});