let userscore = 0;
let compscore = 0;
let drawgamescore=0;

const choices = document.querySelectorAll(".box");
const msg=document.querySelector("#msg");
const msgcontainer=document.querySelector(".msg-container");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const drawgamepara=document.querySelector("#game-draw");

//generate random computer choice
const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranidx = Math.floor(Math.random() * 3);
    return option[ranidx];
}
const drawgame = () => {
    drawgamescore++;
    drawgamepara.innerText=drawgamescore;
    msg.innerText="Game was Draw. Play Again.";
    msgcontainer.style.backgroundColor="rgb(13, 13, 44)";
}

const showWinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win! `;
        msgcontainer.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lost! `;
        msgcontainer.style.backgroundColor="red";
    }
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

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