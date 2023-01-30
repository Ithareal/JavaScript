const slot1 = document.getElementById("slot1")
const slot2 = document.getElementById("slot2")
const slot3 = document.getElementById("slot3")
const slot4 = document.getElementById("slot4")
const slot5 = document.getElementById("slot5")
const slot6 = document.getElementById("slot6")
const slot7 = document.getElementById("slot7")
const slot8 = document.getElementById("slot8")
const slot9 = document.getElementById("slot9")
const defaultGameState = ["","","","","","","","",""]
const defaultWinConditions = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6],
    ]
let winConditions = [...defaultWinConditions]
let playerCount = 1
let currentPlayer = 1
let gameState = []
let currentSymbol = "X"

function prompting() {
    playerCount = confirm("Do you want to play alone?") ? 1 : 2
    currentPlayer = confirm("Do you want to start first?") ? true : false
}

function startGame(){
    prompting()
    gameState = [...defaultGameState]
    currentSymbol = currentPlayer ? "X" : "O"
}

function checkWin() {
    
    for(i=0; i <= 7; i++){
    let a = winConditions[0]
    let b = winConditions[1]
    let c = winConditions[2]
    console.log(a)
    console.log(b)
    console.log(c)
    if(a === b && b === c) {
        let playerName = currentPlayer ? "Player1" : "Player2"
        console.log(playerName)
        alert(playerName + " WON")
        break
    }
    
    }
}


startGame()