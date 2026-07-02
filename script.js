let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.style.color="blue";
        }else{
            box.innerText="X";
            turnO=true;
            box.style.color="red";
        }
        box.disabled=true;

        checkWinner();
    });
});

const gameDraw = () => {
    msg.innerText = "Game was a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const reset  = () =>{
    turnO=true;
    msgContainer.classList.add("hide");
    enableBoxes();
    
}

const disableBoxes=()=>{
    boxes.forEach((box) => {
        box.disabled=true;
    });
}
const enableBoxes=()=>{
    boxes.forEach((box) => {
        box.disabled=false;
        box.innerText="";
        box.style.color="";
    });
}

const checkWinner =()=>{
    for(let pattern of winPatterns){
        let first= boxes[pattern[0]].innerText;
        let second= boxes[pattern[1]].innerText;
        let third= boxes[pattern[2]].innerText;

        if(first !== "" && first === second && second === third){
            console.log("Winner is ",first);
            showWinner(first);
        }
    }
};

const showWinner=(winner)=>{
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame=()=>{
    turnO=true;
    msgContainer.classList.add("hide");
    boxes.forEach((box) => {
        box.innerText="";
        box.disabled=false;
    });
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

