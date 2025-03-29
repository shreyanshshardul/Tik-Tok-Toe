let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msg=document.querySelector(".msg");
let win =document.querySelector("#win");
let turn0 = true;

const resetGame =()=>{
turn0=true;
enableBoxes();
msg.classList.add("hide");
}

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if(turn0==true) {
            box.innerText ="O";
            turn0=false;
        } else{
            box.innerText ="X";
            turn0=true;
        }
        box.disabled = true;
       

        checkWinner();
    });
});

const disabledBoxes =() => {
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableBoxes =() => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}



function showWinner(winner){
   win.innerText =`Congratulations Winner is ${winner}`;
   msg.classList.remove("hide");
   disabledBoxes();
}

const checkWinner = () =>{
    for( let pattern of winPattern){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
let pos3 = boxes[pattern[2]].innerText;

if(pos1 !="" && pos2 !="" && pos3 !=""){
    if(pos1 ==pos2 && pos2==pos3){
        console.log("winnner" , pos1);
        showWinner(pos1);
    }
}
    }
}

newGame.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);