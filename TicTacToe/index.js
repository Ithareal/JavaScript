const slot1 = document.getElementById("slot1")
const slot2 = document.getElementById("slot2")
const slot3 = document.getElementById("slot3")
const slot4 = document.getElementById("slot4")
const slot5 = document.getElementById("slot5")
const slot6 = document.getElementById("slot6")
const slot7 = document.getElementById("slot7")
const slot8 = document.getElementById("slot8")
const slot9 = document.getElementById("slot9")

// symbol = player ? 'X' : 'O'

const btnReset = document.getElementById("btn1")
const slots = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9]

const player1Slots = {
    slot : [],
}
const player2Slots = {
    slot: [],
}
let gameActive = true
let btnPickedByComputer = ""
let player = true
let symbol = ""
let currentPlayer = ""
let playerCount = 2
const remainingSlotsDefault = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7", "slot8", "slot9"]
let remainingSlots = remainingSlotsDefault
function resetGame() {
    for (i = 0; i < 9 ; i++) {
        slots[i].innerHTML = "-"
        slots[i].classList.remove("clicked")
    }
    if( confirm("Do you want to play alone?")) {
        playerCount = 1
    }
    if(confirm("Do you want to go first?")) {
        player = true   
    } else {
        player = false
    }
    remainingSlots = remainingSlotsDefault
    gameActive = true
}

function renderGame(slot) {
    if(gameActive == true) {
        if (player == true){
            symbol = "X"
        } else {
            symbol = "O"
        }
        console.log(slot)
        if (slot.classList != "clicked") {
            fillSlot(slot)
            if (player == true) {
                currentPlayer = player1Slots
            } else {
                currentPlayer = player2Slots
            }
            console.log(currentPlayer)
            currentPlayer.slot.push(slot.id)
            let myIndex = remainingSlots.indexOf(slot.id)
            remainingSlots.splice(myIndex, 1)
            // console.log(slot)
            // console.log(remainingSlots)
            // console.log(remainingSlots.splice(slot.id, slot.id))
            // let spliceRemainingSlots = remainingSlots.splice(slot.id, slot.id) 
            // console.log(remainingSlots)
            player =! player
            checkWin()
            currentPlayer = ""
        }
        if (playerCount == 1 && player == false) {
            //computerPlays()
            test()
            console.log(player)
            player =! player
            console.log(player)
        }
    }
}

function checkWin() {
    if (
    //horizontal check
    currentPlayer.slot.includes("slot1") &&
    currentPlayer.slot.includes("slot2") &&
    currentPlayer.slot.includes("slot3") ||

    currentPlayer.slot.includes("slot4") &&
    currentPlayer.slot.includes("slot5") &&
    currentPlayer.slot.includes("slot6") ||

    currentPlayer.slot.includes("slot7") &&
    currentPlayer.slot.includes("slot8") &&
    currentPlayer.slot.includes("slot9") ||

    //vertical check
    currentPlayer.slot.includes("slot1") &&
    currentPlayer.slot.includes("slot4") &&
    currentPlayer.slot.includes("slot7") ||

    currentPlayer.slot.includes("slot2") &&
    currentPlayer.slot.includes("slot5") &&
    currentPlayer.slot.includes("slot8") ||

    currentPlayer.slot.includes("slot3") &&
    currentPlayer.slot.includes("slot6") &&
    currentPlayer.slot.includes("slot9") ||

    //diagonal check
    currentPlayer.slot.includes("slot1") &&
    currentPlayer.slot.includes("slot5") &&
    currentPlayer.slot.includes("slot9") ||

    currentPlayer.slot.includes("slot3") &&
    currentPlayer.slot.includes("slot5") &&
    currentPlayer.slot.includes("slot7")
    ) 
    {
        console.log(player1Slots.slot)
        if (currentPlayer == player1Slots) {
            btnReset.textContent = "YOU WIN"
        } else {
            btnReset.textContent = "YOU LOSE"
        }
        gameActive = false
        /*if (confirm("NEW GAME?")) {
    
        }*/
    }
}

function fillSlot(fillSlot) {
    fillSlot.innerText = symbol
    fillSlot.classList.toggle("clicked")
}

function computerPlays() {
    console.log("test")
    let randomSlot = Math.floor(Math.random() * remainingSlots.length)
    let computerPickedSlot = remainingSlots.splice(randomSlot, randomSlot)
    console.log(computerPickedSlot)
}

function test() {
    console.log("test")
    let randomSlot = Math.floor(Math.random() * remainingSlots.length)
    let computerPickedSlot = remainingSlots.splice(randomSlot, 1)
    console.log(computerPickedSlot)
    console.log(remainingSlots.length)
    btnPickedByComputer = document.getElementById(computerPickedSlot)
    console.log(btnPickedByComputer)
    renderGame(btnPickedByComputer)
    player =! player
}


// let myIndex = remainingSlots.indexOf(slot.id)
// remainingSlots.splice(myIndex, 1)
//https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe