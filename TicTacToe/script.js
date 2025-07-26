 console.log("Welcome to Tic Tac Toe");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameover = false;

const changeTurn = () =>{
    return turn === "X"?"0": "X";
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext'); 
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135 ],
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
         document.querySelector('.info').innerText = boxtext[e[0]].innerText +  " Won";
         isGameover = true;
         gameover.play(); 
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
          document.querySelector(".line").style.width = "20vw";
         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxText = element.querySelector('.boxtext');
  element.addEventListener('click',()=>{
    if(boxText.innerText == '' && !isGameover){
        boxText.innerText = turn;
        turn = changeTurn();
       new Audio("ting.mp3").play();
        checkWin();
        if (!isGameover) {
            let boxtextArray = Array.from(document.getElementsByClassName('boxtext'));
             let isDraw = boxtextArray.every(box => box.innerText !== '');
                if (isDraw) {
                    document.getElementsByClassName("info")[0].innerText = "It's a Draw!";
                    isGameover = true;
                    gameover.play();
                } else {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
            }
    }
  })
})

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isGameover = false;
    document.querySelector(".line").style.width = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

