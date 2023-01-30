const slot1 = document.getElementById("0")
const slot2 = document.getElementById("1")
const slot3 = document.getElementById("2")
const slot4 = document.getElementById("3")
const slot5 = document.getElementById("4")
const slot6 = document.getElementById("5")
const slot7 = document.getElementById("6")
const slot8 = document.getElementById("7")
const slot9 = document.getElementById("8")
const restartBtn = document.getElementById("restart-btn")

slots = [ slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9]

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
    winConditions = [...defaultWinConditions[i]]
    let a = gameState[winConditions[0]]
    let b = gameState[winConditions[1]]
    let c = gameState[winConditions[2]]
    console.log(a)
    console.log(b)
    console.log(c)
    if(a === b && b === c && c !== "") {
        let playerName = currentPlayer ? "Player1" : "Player2"
        console.log(playerName)
        alert(playerName + " WON")
        restartBtn.textContent = "YOU WON"
        break
    }
    
    }
}

function renderGame(slot) {
    gameState[slot] = currentSymbol
    slots[slot].textContent = gameState[slot]
    checkWin()
}

startGame()