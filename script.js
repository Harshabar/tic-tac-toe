let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = "O";
let turnO = true; //playerX, playerO 
function changeturn(){
    if(turn === "O"){
        turn = "x";
        document.querySelector(".bg").style.left = "85px";
    }else{
        turn = "O";
        document.querySelector(".bg").style.left = "0";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO === true) {
            box.innerText = "O";
            turnO = false; 
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        changeturn();
        checkDraw();
    });
});
function checkWinner (){
    let winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for(let i = 0; i<winPatterns.length; i++){
        let v0 = boxes[winPatterns[i][0]].innerHTML;
        let v1 = boxes[winPatterns[i][1]].innerHTML;
        let v2 = boxes[winPatterns[i][2]].innerHTML
        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#result").innerHTML = turn + " win";
            document.querySelector("#resetbtn").style.display = "inline";
            disableBoxes();
            for(j = 0; j<3; j++){
                boxes[winPatterns[i][j]].style.backgroundColor = "white"
                boxes[winPatterns[i][j]].style.color = "#165d60";
            }
        }
    }
}
function checkDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = flase;
        })
        if(isDraw){
            isGameOver = true;
            document.querySelector("#result").innerHTML = "Draw";
            document.querySelector("#resetbtn").style.display = "inline";
        }
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""; 
    }
}

resetGame.addEventListener("click", ()=>{
    isGameOver = false;
    turnO = true;
    turn = "O";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#resetbtn").style.display = "none";
    enableBoxes(); 
    boxes.forEach((box) =>{
        box.style.removeProperty("background-color");
        box.style.color = "black";
    })
});
