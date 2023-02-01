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


const slots = [ slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9]
const defaultRemainingSlots = [0, 1, 2, 3, 4, 5, 6, 7, 8]
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
let remainingSlots = [...slots]
let currentSymbol = "X"
let isAlive = true

function prompting() {
    playerCount = confirm("Do you want to play alone?") ? 1 : 2
    currentPlayer = confirm("Do you want to start first?") ? true : false
}

function startGame(){
    prompting()
    gameState = [...defaultGameState]
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
    if (!isAlive) return;
    if(slots[slot].classList.contains("clicked")) return;
    console.log(isAlive)
    currentSymbol = currentPlayer ? "X" : "O"
    gameState[slot] = currentSymbol
    slots[slot].textContent = gameState[slot]
    slots[slot].classList.add("clicked")
    remainingSlots.splice(slot, 1)
    checkWin()
    currentPlayer = !currentPlayer
    playerCount = 1 ? computerPlays() : "hello"
}

function computerPlays() {
    let randomNumber = 0
    currentSymbol = currentPlayer ? "X" : "O"
    randomNumber = Math.floor(Math.random()*remainingSlots.length-1)
    console.log(randomNumber + "hello")
    gameState[randomNumber] = "" ? gameState[randomNumber] = currentSymbol : ""// : continue
    console.log(randomNumber)
    remainingSlots.splice(randomNumber, 1)
    let randomClassName = JSON.stringify(randomNumber)
    console.log(randomClassName)
    let slot = document.getElementById(randomClassName)
    let gameStateSlot = randomNumber
    gameState[gameStateSlot] = currentSymbol
    console.log(slot)
    slot.textContent = gameState[gameStateSlot]

    //fix this here
}

function restartGame() {
    for (i = 0; i <= 8; i++){
        slots[i].textContent = "-"
    }
    restartBtn.textContent = "RESTART GAME"
    startGame()
}

startGame()